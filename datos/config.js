/* =========================================================
   CONFIGURACIÓN GENERAL DE LA VITRINA
   ========================================================= */
window.CONFIG = {
  // true = muestra el aviso de "maqueta con datos de ejemplo".
  modoMaqueta: false,

  // Enlace al formulario de inscripción. Vacío = inscripciones cerradas.
  enlaceFormulario: "",

  // Mensaje que se precarga al abrir WhatsApp desde la vitrina.
  mensajeWhatsApp:
    "¡Hola! Vi tu emprendimiento en la Feria Empresarial Virtual de la 21ª Semana Neoamericana y quiero más información.",

  // Categorías. "nombre" debe coincidir con la categoría de cada emprendimiento
  // (no importan tildes ni mayúsculas). "corto" es la etiqueta de la red del inicio.
  // Íconos: gastronomia, moda, belleza, tecnologia, artesanias, hogar,
  // servicios, industria, mascotas, bienestar, idea
  categorias: [
    { nombre: "Gastronomía y alimentos",          corto: "Gastronomía", color: "#FD531E", icono: "gastronomia" },
    { nombre: "Tecnología y productos digitales", corto: "Tecnología",  color: "#00A3E6", icono: "tecnologia" },
    { nombre: "Artesanías",                       corto: "Artesanías",  color: "#E8890C", icono: "artesanias" },
    { nombre: "Moda y accesorios",                corto: "Moda",        color: "#6D28D9", icono: "moda" },
    { nombre: "Servicios",                        corto: "Servicios",   color: "#0FA88E", icono: "servicios" },
    { nombre: "Belleza y cuidado personal",       corto: "Belleza",     color: "#E5488F", icono: "belleza" },
    { nombre: "Hogar y decoración",               corto: "Hogar",       color: "#C99A00", icono: "hogar" },
    { nombre: "Comercio e industria",             corto: "Comercio",    color: "#3E5C99", icono: "industria" }
  ]
};
