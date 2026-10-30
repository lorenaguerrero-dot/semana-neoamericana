/* =========================================================
   CONFIGURACIÓN GENERAL DE LA VITRINA
   Edita este archivo para cambiar textos y categorías.
   ========================================================= */
window.CONFIG = {
  // true = muestra el aviso de "maqueta con datos de ejemplo".
  // Cámbialo a false cuando cargues los emprendimientos reales.
  modoMaqueta: true,

  // Enlace al formulario (Google Forms, Microsoft Forms…) donde los
  // estudiantes inscriben su emprendimiento. Déjalo vacío si aún no existe.
  enlaceFormulario: "",

  // Mensaje que se precarga al abrir WhatsApp desde la vitrina.
  mensajeWhatsApp:
    "¡Hola! Vi tu emprendimiento en la Feria Empresarial de la 21ª Semana Neoamericana y quiero más información.",

  // Categorías. "nombre" debe coincidir con lo que escriben los estudiantes
  // (no importan tildes ni mayúsculas). Íconos disponibles:
  // gastronomia, moda, belleza, tecnologia, artesanias, servicios,
  // mascotas, bienestar, idea
  categorias: [
    { nombre: "Gastronomía",              color: "#FD531E", icono: "gastronomia" },
    { nombre: "Moda y accesorios",        color: "#6D28D9", icono: "moda" },
    { nombre: "Belleza y cuidado personal", color: "#E5488F", icono: "belleza" },
    { nombre: "Tecnología",               color: "#00B7FF", icono: "tecnologia" },
    { nombre: "Artesanías y decoración",  color: "#E8890C", icono: "artesanias" },
    { nombre: "Servicios profesionales",  color: "#0FA88E", icono: "servicios" },
    { nombre: "Mascotas",                 color: "#C99A00", icono: "mascotas" },
    { nombre: "Salud y bienestar",        color: "#2FA65A", icono: "bienestar" }
  ]
};
