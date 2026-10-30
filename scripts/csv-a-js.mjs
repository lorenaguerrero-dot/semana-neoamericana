#!/usr/bin/env node
/* ============================================================
   Convierte el CSV de inscripciones en datos/emprendimientos.js

   Uso (desde la carpeta del proyecto):
     node scripts/csv-a-js.mjs inscripciones.csv

   - Acepta el CSV descargado de Google Sheets / Forms.
   - Reconoce columnas por palabras clave (no importan tildes ni
     mayúsculas): "emprendimiento", "categoria", "descripcion",
     "estudiante", "programa", "whatsapp", "instagram", "facebook",
     "tiktok", "web", "fotos".
   - Fotos: si la columna "fotos" trae rutas o enlaces (separados por
     | o coma) los usa. Si viene vacía, busca imágenes en
     fotos/<id-del-emprendimiento>/ automáticamente.
   ============================================================ */
import fs from "node:fs";
import path from "node:path";

const archivo = process.argv[2];
const salida = process.argv[3] || "datos/emprendimientos.js";
if (!archivo) { console.error("Uso: node scripts/csv-a-js.mjs inscripciones.csv"); process.exit(1); }

const norm = s => String(s ?? "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
const slug = s => norm(s).replace(/&/g, "y").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 50);

// --- Parser CSV (comillas, comas y saltos de línea dentro de celdas) ---
function parseCSV(txt) {
  txt = txt.replace(/^﻿/, "");
  const sep = (txt.split("\n")[0].match(/;/g) || []).length > (txt.split("\n")[0].match(/,/g) || []).length ? ";" : ",";
  const rows = []; let row = [], cell = "", q = false;
  for (let i = 0; i < txt.length; i++) {
    const c = txt[i];
    if (q) {
      if (c === '"' && txt[i + 1] === '"') { cell += '"'; i++; }
      else if (c === '"') q = false;
      else cell += c;
    } else if (c === '"') q = true;
    else if (c === sep) { row.push(cell); cell = ""; }
    else if (c === "\n") { row.push(cell); rows.push(row); row = []; cell = ""; }
    else if (c !== "\r") cell += c;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  return rows.filter(r => r.some(v => v.trim()));
}

// --- Detección de columnas (el orden importa) ---
const REGLAS = [
  ["nombre", h => h.includes("emprendimiento") && (h.includes("nombre") || h === "emprendimiento")],
  ["categoria", h => h.includes("categoria") || h.includes("tipo")],
  ["descripcion", h => h.includes("descrip") || h.includes("que vendes") || h.includes("que ofreces")],
  ["estudiante", h => h.includes("estudiante") || h.includes("nombre completo") || h.includes("tu nombre")],
  ["programa", h => h.includes("programa") || h.includes("carrera")],
  ["whatsapp", h => h.includes("whatsapp") || h.includes("celular") || h.includes("telefono")],
  ["instagram", h => h.includes("instagram")],
  ["facebook", h => h.includes("facebook")],
  ["tiktok", h => h.includes("tiktok")],
  ["web", h => h.includes("web") || h.includes("pagina") || h.includes("tienda")],
  ["fotos", h => h.includes("foto") || h.includes("imagen")],
];

const filas = parseCSV(fs.readFileSync(archivo, "utf8"));
const cab = filas.shift().map(norm);
const idx = {};
for (const [campo, regla] of REGLAS) {
  const i = cab.findIndex((h, j) => regla(h) && !Object.values(idx).includes(j));
  if (i >= 0) idx[campo] = i;
}
if (idx.nombre === undefined) {
  console.error("No encontré la columna del nombre del emprendimiento. Encabezados leídos:\n - " + cab.join("\n - "));
  process.exit(1);
}
console.log("Columnas detectadas:", Object.fromEntries(Object.entries(idx).map(([k, v]) => [k, cab[v]])));

const EXT = /\.(jpe?g|png|webp|avif)$/i;
const usados = new Set();
const lista = filas.map(r => {
  const g = k => (idx[k] !== undefined ? String(r[idx[k]] ?? "").trim() : "");
  let id = slug(g("nombre")) || "emprendimiento";
  while (usados.has(id)) id += "-2";
  usados.add(id);
  let fotos = g("fotos").split(/[|,\n]/).map(s => s.trim()).filter(Boolean);
  // Los enlaces de Google Drive no se pueden mostrar directo: se ignoran y se usan los de la carpeta.
  fotos = fotos.filter(f => !/drive\.google\.com/.test(f));
  const carpeta = path.join("fotos", id);
  if (!fotos.length && fs.existsSync(carpeta)) {
    fotos = fs.readdirSync(carpeta).filter(f => EXT.test(f)).sort().slice(0, 3).map(f => `fotos/${id}/${f}`);
  }
  return {
    id, nombre: g("nombre"), categoria: g("categoria"), descripcion: g("descripcion"),
    estudiante: g("estudiante"), programa: g("programa"), whatsapp: g("whatsapp").replace(/\D/g, ""),
    instagram: g("instagram"), facebook: g("facebook"), tiktok: g("tiktok"), web: g("web"), fotos,
  };
}).filter(e => e.nombre);

const js = `/* Generado con scripts/csv-a-js.mjs el ${new Date().toLocaleString("es-CO")} – ${lista.length} emprendimientos */\nwindow.EMPRENDIMIENTOS = ${JSON.stringify(lista, null, 2)};\n`;
fs.writeFileSync(salida, js);

console.log(`\n✔ ${lista.length} emprendimientos escritos en ${salida}\n`);
console.log("Carpetas de fotos esperadas (fotos/<id>/1.jpg, 2.jpg, 3.jpg):");
lista.forEach(e => console.log(`  ${e.fotos.length ? "✔" : "·"} fotos/${e.id}/  ${e.fotos.length ? `(${e.fotos.length})` : "← sin fotos todavía"}`));
const sinWa = lista.filter(e => !e.whatsapp).map(e => e.nombre);
if (sinWa.length) console.log("\n⚠ Sin WhatsApp:", sinWa.join(", "));
