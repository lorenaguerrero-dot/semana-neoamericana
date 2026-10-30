# 21ª Semana Neoamericana · Vitrina de emprendimientos

Sitio estático (HTML + CSS + JS, sin instalación ni compilación) para la
XXI Semana Neoamericana & VI Internacional (9–13 de noviembre de 2026).
Incluye la vitrina filtrable de la Feria Empresarial Virtual, la agenda,
la premiación y el llamado a inscribirse.

```
semana-neoamericana/
├── index.html                 ← la página (diseño mobile first)
├── img/                       ← logo de Nueva América (azul y blanco)
├── datos/
│   ├── config.js              ← categorías, enlace al formulario, modo maqueta
│   └── emprendimientos.js     ← los emprendimientos (hoy: 23 de ejemplo)
├── fotos/                     ← una carpeta por emprendimiento: fotos/<id>/1.jpg
├── scripts/csv-a-js.mjs       ← convierte el CSV de inscripciones en emprendimientos.js
└── plantilla_inscripcion.csv  ← columnas que debe tener el formulario
```

---

## 1. Ver la página en tu computador

Abre `index.html` con doble clic. Funciona sin internet (salvo las fuentes).

---

## 2. Subirla a GitHub (sin usar comandos)

1. Entra a <https://github.com> e inicia sesión (o crea la cuenta).
2. Arriba a la derecha: **+ → New repository**.
   - Repository name: `semana-neoamericana`
   - Público o privado (Vercel funciona con ambos).
   - **No** marques "Add a README".
   - Clic en **Create repository**.
3. En la página del repositorio vacío, clic en **uploading an existing file**.
4. Descomprime el ZIP en tu computador, abre la carpeta `semana-neoamericana`
   y **arrastra todo su contenido** (index.html, datos, img, fotos, scripts, README.md,
   plantilla_inscripcion.csv) a la ventana de GitHub.
   > Arrastra el *contenido* de la carpeta, no la carpeta misma, para que
   > `index.html` quede en la raíz del repositorio.
5. Abajo, en "Commit changes", escribe `Primera versión de la maqueta` y clic en
   **Commit changes**.

### Alternativa con Git (si lo tienes instalado)

```bash
cd semana-neoamericana
git init
git add .
git commit -m "Primera versión de la maqueta"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/semana-neoamericana.git
git push -u origin main
```

---

## 3. Publicarla en Vercel

1. Entra a <https://vercel.com> → **Sign Up / Log in → Continue with GitHub**.
2. **Add New… → Project**.
3. En la lista de repositorios, junto a `semana-neoamericana`, clic en **Import**.
   (Si no aparece: **Adjust GitHub App Permissions** y dale acceso a ese repositorio.)
4. Configuración:
   - **Framework Preset:** `Other`
   - **Root Directory:** `./`
   - Build Command y Output Directory: déjalos vacíos.
5. Clic en **Deploy**. En unos 30 segundos queda en una dirección como
   `semana-neoamericana.vercel.app`.
6. (Opcional) Cambiar el nombre de la dirección: proyecto → **Settings → Domains**
   → editar, por ejemplo `feria-neoamericana.vercel.app`.
   Si la institución tiene dominio propio (ej. `feria.lanuevaamerica.edu.co`),
   se agrega ahí mismo y Vercel indica el registro DNS que debe crear el área de TI.

**Desde ese momento, cada cambio que subas a GitHub se publica solo en Vercel.**

---

## 4. Cargar los emprendimientos reales

### 4.1 Formulario para los estudiantes

Crea un Google Form con estas preguntas (los nombres pueden variar un poco,
el script reconoce palabras clave):

| Pregunta | Tipo |
|---|---|
| Nombre del emprendimiento | Respuesta corta |
| Categoría | Lista desplegable con las categorías de `datos/config.js` |
| Descripción (máx. 200 caracteres) | Párrafo |
| Nombre del estudiante | Respuesta corta |
| Programa | Lista: Administración de Empresas, Contaduría Pública, Ingeniería de Sistemas, Marketing y Publicidad |
| WhatsApp | Respuesta corta (10 dígitos) |
| Instagram / Facebook / TikTok / Página web | Respuesta corta (opcionales) |
| Fotos (hasta 3) | Carga de archivos, solo imágenes |

Pega el enlace del formulario en `datos/config.js` → `enlaceFormulario`
para que aparezca el botón "Inscribir mi emprendimiento".

Agrega al formulario una casilla de autorización: el estudiante acepta que
su nombre, redes y WhatsApp se publiquen en la vitrina.

### 4.2 Fotos

Las fotos que suben al formulario quedan en Google Drive, pero los enlaces de
Drive **no se pueden mostrar** directamente en una página. Por eso:

1. Descarga la carpeta de fotos del formulario desde Drive.
2. Crea en `fotos/` una carpeta por emprendimiento con su **id** (el script te
   lista los ids) y pon dentro `1.jpg`, `2.jpg`, `3.jpg`.
3. Reduce el peso antes de subirlas: máximo ~1200 px de ancho y menos de 300 KB
   cada una (gratis en <https://squoosh.app>).

Si un emprendimiento no tiene fotos, la página muestra un cuadro con el ícono
de su categoría.

### 4.3 Convertir las respuestas

1. En la hoja de respuestas: **Archivo → Descargar → Valores separados por comas (.csv)**.
   Guárdalo en la carpeta del proyecto como `inscripciones.csv`.
2. Con Node.js instalado (<https://nodejs.org>), en una terminal dentro de la carpeta:
   ```bash
   node scripts/csv-a-js.mjs inscripciones.csv
   ```
   Esto reescribe `datos/emprendimientos.js` y te muestra qué fotos faltan.
   Si cargas las fotos después, vuelve a ejecutarlo.
3. En `datos/config.js` cambia `modoMaqueta: true` por `false`.
4. Sube los cambios a GitHub (si ya habías subido la maqueta, reemplaza también `index.html` e `img/`) (en la web: **Add file → Upload files**, arrastra
   `datos/` y `fotos/` y confirma). Vercel publica solo.

> Sin Node: puedes editar `datos/emprendimientos.js` a mano copiando un bloque
> `{ ... },` por emprendimiento. Respeta comillas y comas.

> No subas `inscripciones.csv` a GitHub si el repositorio es público: contiene datos personales.

---

## 5. Cosas que se ajustan fácil

- **Número de stand:** se asigna solo por orden alfabético del nombre del emprendimiento.
- **Red del inicio:** se dibuja sola con los emprendimientos y categorías cargados; no hay que editarla.

- **Categorías y colores:** `datos/config.js`. Si un estudiante escribe una
  categoría que no existe, la vitrina la crea sola con color azul.
- **Agenda:** constante `AGENDA` dentro de `index.html` (buscar "Agenda").
- **Mensaje de WhatsApp precargado:** `mensajeWhatsApp` en `datos/config.js`.
- **Orden de la vitrina:** por defecto aleatorio en cada visita, para que todos
  los emprendimientos tengan la misma visibilidad. El visitante puede cambiar a orden por número de stand.
