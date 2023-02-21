export default {
  global: {
    componenteFormativo:
      'Plan de mejora del plan de emergencias y contingencias',
    descripcionCurso:
      'Los planes de mejora son herramientas que nos permiten hacer una gestión para implementar acciones que mitiguen los efectos negativos de las amenazas. Estas acciones serán el resultado de un análisis causal, a partir de la revisión documental de los incumplimientos de requisitos legales y el desarrollo de simulacros, con el fin de prevenir y enfrentar los problemas de gestión.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Ciclo de mejoramiento continuo de Deming ',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Plan de mejora y acciones de mejora',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Evaluación de resultados del plan de emergencias y contingencias',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Evaluación plan de emergencias',
      referencia:
        'Fondo de Prevención y Atención de Desastres- FOPAE (2012). <em>Guía para elaborar planes de emergencia y contingencia</em>. Pág. 63-64.',
      tipo: 'Artículo',
      link:
        'https://implementandosgi.com/wp-content/uploads/2018/08/Guia-Planes-Emergencia-FOPAE.pdf',
    },
    {
      tema: 'Mejora continua',
      referencia:
        'ISO 9001 Norma Técnica Colombiana (2015). <em>Sistemas de Gestión de la Calidad. Requisitos.</em> ',
      tipo: 'Norma ',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Normograma/NORMA%20ISO%209001%202015.pdf',
    },
    {
      tema: 'Plan de mejora',
      referencia:
        'Instituto Uruguayo de Normas Técnicas (2009). <em>Herramientas para la mejora de la calidad</em>. Wordprees.com',
      tipo: 'Guía ',
      link:
        'https://qualitasbiblo.files.wordpress.com/2013/01/libro-herramientas-para-la-mejora-de-la-calidad-curso-unit.pdf',
    },
    {
      tema: 'Protocolo de activación del plan de emergencias y contingencias',
      referencia:
        'Fondo de Prevención y Atención de Desastres- FOPAE (2014). <em>Guía para el desarrollo de simulaciones.</em>',
      tipo: 'Guía ',
      link:
        'https://www.sire.gov.co/documents/82884/85386/ANEXO+10+-+GUIA+DESARROLLO+SIMULACIONES.pdf/518cc905-189c-4cbb-931e-667340fe32d0',
    },
  ],
  glosario: [
    {
      termino: 'Acción correctiva',
      significado:
        'la acción que se toma para eliminar la causa de una no conformidad detectada u otra situación no deseable.',
    },
    {
      termino: 'Acción preventiva',
      significado:
        'acción que se lleva a cabo para eliminar o mitigar las causas de una no conformidad u otra situación potencial que no sea deseable.',
    },
    {
      termino: 'Autoevaluación',
      significado:
        'es una evaluación que un individuo realiza de sí mismo o de una cuestión propia. Evaluar implica calcular, detectar o indicar el valor de algo.',
    },
    {
      termino: 'Ciclo <em>Deming</em> ',
      significado:
        'es un sistema que se utiliza en las empresas para lograr un proceso de mejora continua.',
    },
    {
      termino: 'Evaluación',
      significado:
        'se denomina la acción y efecto de evaluar. La palabra como tal deriva de evaluar, que a su vez proviene del francés <em>évaluer</em>, que significa ‘determinar el valor de algo’.',
    },
    {
      termino: 'Lista de chequeo',
      significado:
        'es una herramienta impresa a modo de formato, utilizada para recoger y compilar de forma estructurada datos asociados a un proceso o situación particular definida. Los datos reunidos representan una entrada para el uso de otras herramientas de control de calidad.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'es la ejecución constante de acciones que mejoran los procesos en una organización, minimizando al máximo el margen de error y de pérdidas.',
    },
    {
      termino: 'Planificar ',
      significado:
        'establecer objetivos y procesos necesarios para conseguir resultados de acuerdo con las expectativas de los clientes y las políticas de la organización.',
    },
    {
      termino: 'Simulación',
      significado:
        'es un juego de roles que se realiza en un ambiente controlado, normalmente es un salón o sala, por lo que son llamados ‘ejercicios de escritorio’. En una simulación participan los tomadores de decisiones y los actores más representativos del contexto municipal de emergencias (CMGRD, representantes de los diferentes sectores, etc.), y se basa en situaciones hipotéticas que se derivan del análisis de riesgos del municipio, la estrategia de respuesta y protocolos específicos.',
    },
    {
      termino: 'Simulacro',
      significado:
        'son ejercicios prácticos que representan una situación de emergencia cercana a la realidad, basados siempre en el análisis del riesgo municipal; en consecuencia, una simulación es una forma de poner a prueba la Estrategia Municipal de Respuesta y sus protocolos. Este tipo de ejercicio amerita una gran movilización de recursos (personal, equipos, entidades, etc.), por lo que su desarrollo es más complejo y costoso que una simulación; durante la planeación del simulacro se debe velar por que exista coherencia con la cotidianidad municipal y que el ejercicio se encuentre en contexto.',
    },
  ],
  referencias: [
    {
      referencia:
        'Betancourt, D. F. (2016). <em>La lista de chequeo en calidad: Qué es y cómo se hace</em>. Recuperado el 17 de octubre de 2022, de Ingenio Empresa:',
      link: 'www.ingenioempresa.com/lista-de-chequeo',
    },
    {
      referencia:
        'Fondo de Prevención y Atención de Desastres- FOPAE (2012). <em>Guía para elaborar planes de emergencia y contingencia</em>. pp. 63-64.',
      link:
        'https://implementandosgi.com/wp-content/uploads/2018/08/Guia-Planes-Emergencia-FOPAE.pdf',
    },
    {
      referencia:
        'Instituto Uruguayo de Normas Técnicas (2009). <em>Herramientas para la mejora de la calidad</em>. Wordprees.com ',
      link:
        'https://qualitasbiblo.files.wordpress.com/2013/01/libro-herramientas-para-la-mejora-de-la-calidad-curso-unit.pdf',
    },
    {
      referencia:
        'ISO 9001 Norma Técnica Colombiana (2015). <em>Sistemas de Gestión de la Calidad. Requisitos</em>',
      link:
        'https://colaboracion.dnp.gov.co/CDT/Normograma/NORMA%20ISO%209001%202015.pdf',
    },
    {
      referencia:
        'Pérez Porto, J.  y Gardey, A. (2020). <em>Definición de Autoevaluación.</em>',
      link: 'https://definicion.de/autoevaluacion/',
    },
    {
      referencia:
        'Orellana Nirian, P. (2020) <em>Proceso de mejora continua</em>. Economipedia.com',
      link: '',
    },
    {
      referencia:
        'Unidad Nacional de Gestión del riesgo de desastres, (2016). <em>Guía metodológica para el desarrollo de simulaciones y simulacros.</em>',
      link:
        'https://repositorio.gestiondelriesgo.gov.co/bitstream/handle/20.500.11762/18505/VOL-6-GUIA-METODOLOGICA-SIMULACROS-Y-SIMULACIONES.pdf;jsessionid=71D9B75863C06A238923B016D6E1CDB1?sequence=15#:~:text=Los%20simulacros%20son%20ejercicios%20pr%C3%A1cticos,de%20Respuesta%20y%20sus%20protocolos',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
