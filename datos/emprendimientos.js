/* =========================================================
   EMPRENDIMIENTOS DE LA FERIA EMPRESARIAL VIRTUAL · 21SN
   Fuente: Respuestas | Feria de Emprendimiento Semana Neoamericana 2026
   (21 emprendimientos; todos autorizaron la difusión).
   Las descripciones se resumieron a partir de lo que escribió cada
   estudiante. Las fotos vienen de su carpeta de Drive y están en /fotos.

   Campos:
   id          identificador sin espacios (nombre de su carpeta en /fotos)
   nombre, categoria, descripcion, estudiante, programa, ubicacion
   whatsapp    número de 10 dígitos o con indicativo
   instagram / facebook / tiktok   usuario o enlace completo
   web         enlace a página web o tienda
   fotos       hasta 3 rutas: ["fotos/mi-id/1.jpg", ...]
   logo        (opcional) "fotos/mi-id/logo.jpg"
   ========================================================= */
window.EMPRENDIMIENTOS = [
  { id: "appuebliar", nombre: "apPuebliar", categoria: "Tecnología y productos digitales",
    descripcion: "App móvil para descubrir lugares mágicos de Colombia: una guía de municipios para planear viajes y aventuras que además conecta a comerciantes con una comunidad de viajeros.",
    estudiante: "Mauricio Penagos", programa: "Administración de Empresas", ubicacion: "Antioquia",
    whatsapp: "3004434363", instagram: "appuebliar.col", facebook: "", tiktok: "", web: "",
    fotos: ["fotos/appuebliar/1.jpg", "fotos/appuebliar/2.jpg", "fotos/appuebliar/3.jpg"] },

  { id: "motitas-time", nombre: "Motitas Time", categoria: "Moda y accesorios",
    descripcion: "Fabricación y venta de bolsos, carteras y cosmetiqueras en PVC, sintéticos y charoles, combinando materiales y colores.",
    estudiante: "Dayanne Vanessa Bello Sánchez", programa: "Contaduría Pública", ubicacion: "Bogotá, D. C.",
    whatsapp: "3102474101", instagram: "", facebook: "", tiktok: "motitastime", web: "",
    fotos: ["fotos/motitas-time/1.jpg", "fotos/motitas-time/2.jpg", "fotos/motitas-time/3.jpg"] },

  { id: "cafe-organico-de-mi-tierra", nombre: "Café orgánico de mi tierra", categoria: "Gastronomía y alimentos",
    descripcion: "Café 100 % orgánico, variedad Castilla, molido. Por libra, media libra o cuarto de libra.",
    estudiante: "Yessenia Murcia Garzón", programa: "Contaduría Pública", ubicacion: "Cundinamarca",
    whatsapp: "3213583901", instagram: "", facebook: "", tiktok: "", web: "",
    fotos: [] },

  { id: "creative", nombre: "CREATIVE", categoria: "Artesanías",
    descripcion: "Llaveros, esferos y cerámicas en resina, totalmente personalizados y únicos.",
    estudiante: "Solangue Marcela Sánchez Fonseca", programa: "Contaduría Pública", ubicacion: "Bogotá, D. C.",
    whatsapp: "3219765715", instagram: "almacreative", facebook: "", tiktok: "", web: "",
    fotos: [] },

  { id: "econet-marketing", nombre: "Econet Marketing", categoria: "Servicios",
    descripcion: "Planes de manejo de redes sociales y campañas en Meta Ads para negocios que quieren crecer en digital.",
    estudiante: "Nidy Jazmín Echeverría Suárez", programa: "Marketing y Publicidad", ubicacion: "Cundinamarca",
    whatsapp: "3133786992", instagram: "econet_marketing", facebook: "", tiktok: "", web: "",
    fotos: ["fotos/econet-marketing/1.jpg", "fotos/econet-marketing/2.jpg", "fotos/econet-marketing/3.jpg"] },

  { id: "epoxidos", nombre: "Epóxidos", categoria: "Hogar y decoración",
    descripcion: "Piezas únicas en resina epóxica que combinan lujo, diseño y personalidad: espejos, relojes y cuadros que hacen la diferencia.",
    estudiante: "Sergio Daniel Santana Velásquez", programa: "Contaduría Pública", ubicacion: "Bogotá, D. C.",
    whatsapp: "3162232158", instagram: "epoxidos", facebook: "", tiktok: "epoxidos1", web: "",
    fotos: ["fotos/epoxidos/1.jpg", "fotos/epoxidos/2.jpg", "fotos/epoxidos/3.jpg"], logo: "fotos/epoxidos/logo.jpg" },

  { id: "evidence-sas", nombre: "Evidence SAS", categoria: "Servicios",
    descripcion: "Agencia de marketing: hacemos contenido que las personas recuerdan.",
    estudiante: "Juan David Orozco Robayo", programa: "Marketing y Publicidad", ubicacion: "Bogotá, D. C.",
    whatsapp: "3186656515", instagram: "contenido_estrategico", facebook: "", tiktok: "", web: "",
    fotos: ["fotos/evidence-sas/1.jpg", "fotos/evidence-sas/2.jpg"] },

  { id: "illuyanka-labs", nombre: "Illuyanka Labs", categoria: "Tecnología y productos digitales",
    descripcion: "Soluciones digitales de última generación (software, inteligencia artificial, automatización y nube) que impulsan la transformación y el crecimiento de los negocios.",
    estudiante: "Stiven Eduardo Domínguez Colmenares", programa: "Ingeniería de Sistemas", ubicacion: "Bogotá, D. C.",
    whatsapp: "3009444200", instagram: "", facebook: "", tiktok: "", web: "https://illuyankalabs.com",
    fotos: ["fotos/illuyanka-labs/1.jpg", "fotos/illuyanka-labs/2.jpg"] },

  { id: "j-love", nombre: "J.love", categoria: "Artesanías",
    descripcion: "Minidonitas, cartucheras hechas con empaques reciclados, tulas en fique con estampados DTF, jabones artesanales, llaveros personalizados, camisas y más.",
    estudiante: "Jennyfer Andrea Aldana García", programa: "Marketing y Publicidad", ubicacion: "Bogotá, D. C.",
    whatsapp: "3019656059", instagram: "", facebook: "", tiktok: "j..love6", web: "",
    fotos: ["fotos/j-love/1.jpg"] },

  { id: "joyeria-lazo-dorado", nombre: "Joyería Lazo Dorado", categoria: "Moda y accesorios",
    descripcion: "Joyas en oro laminado con dos años de garantía: el punto medio entre la bisutería y la joyería fina, con elegancia a un precio accesible.",
    estudiante: "Alisson Herrera", programa: "Administración de Empresas", ubicacion: "Meta",
    whatsapp: "3144051716", instagram: "joyerialazodorado", facebook: "", tiktok: "joyeria.lazodorado", web: "",
    fotos: [] },

  { id: "lacteos-keyal", nombre: "Lácteos Keyal", categoria: "Gastronomía y alimentos",
    descripcion: "Quesos hilados elaborados con la mejor tradición láctea de Hato Corozal, Casanare. El toque maestro para tus comidas.",
    estudiante: "María Isabel Cáceres Hernández", programa: "Contaduría Pública", ubicacion: "Casanare",
    whatsapp: "3001164965", instagram: "", facebook: "", tiktok: "", web: "https://lacteos-keyal.cercia.co",
    fotos: ["fotos/lacteos-keyal/1.jpg", "fotos/lacteos-keyal/2.jpg", "fotos/lacteos-keyal/3.jpg"] },

  { id: "leidyjohana-studio", nombre: "Leidyjohana.studio", categoria: "Belleza y cuidado personal",
    descripcion: "Diseño de cejas y pestañas: laminado de cejas, lifting de pestañas, pestañas con henna, pelo a pelo y depilación.",
    estudiante: "Leidy Johana Orozco Cardona", programa: "Contaduría Pública", ubicacion: "Caldas",
    whatsapp: "3113130661", instagram: "leidyjohana.studio", facebook: "", tiktok: "", web: "",
    fotos: ["fotos/leidyjohana-studio/1.jpg", "fotos/leidyjohana-studio/2.jpg", "fotos/leidyjohana-studio/3.jpg"], logo: "fotos/leidyjohana-studio/logo.jpg" },

  { id: "lumiere-du-monde", nombre: "Lumière du monde", categoria: "Artesanías",
    descripcion: "Velas aromáticas, decorativas, de moldes y recordatorios para eventos.",
    estudiante: "Sara Pimentel Lesmes", programa: "Administración de Empresas", ubicacion: "Bogotá, D. C.",
    whatsapp: "3197759193", instagram: "lumieredumonde.art", facebook: "", tiktok: "", web: "",
    fotos: ["fotos/lumiere-du-monde/1.jpg", "fotos/lumiere-du-monde/2.jpg", "fotos/lumiere-du-monde/3.jpg"] },

  { id: "malu-candels", nombre: "Malu Candels", categoria: "Artesanías",
    descripcion: "Buqués de velas artesanales elaboradas con cera de soya.",
    estudiante: "Marcela Hidalgo Peñaranda", programa: "Administración de Empresas", ubicacion: "Bogotá, D. C.",
    whatsapp: "3208656615", instagram: "malu.candels", facebook: "", tiktok: "", web: "",
    fotos: [] },

  { id: "mel-aurum", nombre: "Mel Aurum (Apicultura)", categoria: "Gastronomía y alimentos",
    descripcion: "Producción y comercialización de miel y sus derivados, apostándole al cuidado y la protección de las abejas polinizadoras.",
    estudiante: "Yésica Yurani Jaramillo Zapata", programa: "Contaduría Pública", ubicacion: "Antioquia",
    whatsapp: "3106164146", instagram: "", facebook: "", tiktok: "", web: "",
    fotos: ["fotos/mel-aurum/1.jpg", "fotos/mel-aurum/2.jpg", "fotos/mel-aurum/3.jpg"] },

  { id: "mfm-frutos-secos", nombre: "MFM Frutos Secos", categoria: "Gastronomía y alimentos",
    descripcion: "Frutos secos, semillas, frutas deshidratadas y productos con chocolate. Sabor natural y calidad para disfrutar y compartir.",
    estudiante: "María Fernanda Mora Rodríguez", programa: "Administración de Empresas", ubicacion: "Bogotá, D. C.",
    whatsapp: "3219374258", instagram: "", facebook: "", tiktok: "", web: "",
    fotos: [] },

  { id: "mundo-pantuflas", nombre: "Mundo Pantuflas", categoria: "Moda y accesorios",
    descripcion: "Fabricación de pantuflas con diseños divertidos de personajes y animales.",
    estudiante: "Ginna Alejandra", programa: "Administración de Empresas", ubicacion: "Bogotá, D. C.",
    whatsapp: "3157653444", instagram: "mundo_pantuflas", facebook: "", tiktok: "", web: "",
    fotos: ["fotos/mundo-pantuflas/1.jpg", "fotos/mundo-pantuflas/2.jpg", "fotos/mundo-pantuflas/3.jpg"] },

  { id: "rutaedu", nombre: "RutaEdu+", categoria: "Servicios",
    descripcion: "Plataforma virtual de preparación para pruebas de Estado y concursos de mérito (Icfes, Concurso Docente, DIAN, Contraloría) con simulacros y módulos de inglés, ofimática y lectura. Plan básico gratis.",
    estudiante: "Elian David Betancourt Negrete", programa: "Ingeniería de Sistemas", ubicacion: "Córdoba",
    whatsapp: "3205140753", instagram: "rutaeduplus", facebook: "https://www.facebook.com/people/Rutaeduplus/61595109244187/", tiktok: "rutaeduplus", web: "",
    fotos: ["fotos/rutaedu/1.jpg", "fotos/rutaedu/2.jpg", "fotos/rutaedu/3.jpg"] },

  { id: "servirapi-app", nombre: "ServiRapi App", categoria: "Tecnología y productos digitales",
    descripcion: "App y plataforma que conecta hogares y empresas con técnicos y profesionales certificados, de forma confiable y garantizada.",
    estudiante: "Petry María Blanco Sanjuanelo", programa: "Administración de Empresas", ubicacion: "Bogotá, D. C.",
    whatsapp: "3052622907", instagram: "petryblanco", facebook: "", tiktok: "", web: "",
    fotos: [] },

  { id: "softlegacy", nombre: "SoftLegacy", categoria: "Tecnología y productos digitales",
    descripcion: "Desarrollo de software a la medida: transformamos ideas en herramientas digitales que optimizan procesos y resuelven problemas reales de personas y empresas.",
    estudiante: "Jorge Andrei Hernández Rodríguez", programa: "Ingeniería de Sistemas", ubicacion: "Bogotá, D. C.",
    whatsapp: "3052851155", instagram: "softlegacy", facebook: "", tiktok: "", web: "https://softlegacy.vercel.app",
    fotos: ["fotos/softlegacy/1.jpg", "fotos/softlegacy/2.jpg"], logo: "fotos/softlegacy/logo.jpg" },

  { id: "universal-comercializadora", nombre: "Universal Comercializadora SAS", categoria: "Comercio e industria",
    descripcion: "Comercialización de perfilería de aluminio para ventanería y divisiones de baño, y lámina de aluminio para distintos sectores de la industria.",
    estudiante: "Sandra Milena Balanta Zapata", programa: "Contaduría Pública", ubicacion: "Bogotá, D. C.",
    whatsapp: "3106039299", instagram: "", facebook: "", tiktok: "", web: "",
    fotos: [] }
];
