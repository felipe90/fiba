import type { OrganizationInfo, ImpactMetric, Project, DonationDetails } from '~/types/content'

export const ORGANIZATION_INFO: OrganizationInfo = {
  name: 'Fundación Bellas Artes Integra',
  slogan: 'El ADN del Arte',
  mission: 'Fomentar, democratizar y preservar las bellas artes en Panamá mediante programas pedagógicos, inclusión comunitaria y rescate del patrimonio cultural para transformar vidas y construir tejido social.',
  vision: 'Ser la institución referente en Centroamérica para el desarrollo integral a través de la cultura, empoderando a nuevas generaciones de creadores, promotores y ciudadanos sensibles al arte.',
  legalRuc: 'RUC: 155714298-2-2023 DV 45',
  pillars: [
    {
      id: 'educacion',
      title: 'Educación y Formación Artística',
      description: 'Talleres formativos, programas de becas y clínicas especializadas en artes plásticas, música y artes escénicas para niños y jóvenes de comunidades prioritarias.',
      icon: 'GraduationCap'
    },
    {
      id: 'inclusion',
      title: 'Inclusión y Tejido Comunitario',
      description: 'Activaciones en espacios públicos, muralismo participativo y talleres accesibles que integran a familias, minorías y personas con diversidad funcional.',
      icon: 'Users'
    },
    {
      id: 'patrimonio',
      title: 'Patrimonio y Creación Viva',
      description: 'Documentación, preservación de técnicas tradicionales, festivales culturales y fomento a la producción artística panameña contemporánea.',
      icon: 'Palette'
    }
  ],
  contact: {
    email: 'contacto@fundacionfiba.org',
    phone: '+507 6800-3421',
    address: 'Calle 50, Edificio Plaza 2000, Nivel 4',
    city: 'Ciudad de Panamá',
    country: 'Panamá',
    whatsappNumber: '50768003421'
  },
  socialLinks: [
    {
      platform: 'instagram',
      name: 'Instagram',
      url: 'https://instagram.com/fundacionfiba'
    },
    {
      platform: 'facebook',
      name: 'Facebook',
      url: 'https://facebook.com/fundacionfiba'
    },
    {
      platform: 'linkedin',
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/fundacionfiba'
    },
    {
      platform: 'youtube',
      name: 'YouTube',
      url: 'https://youtube.com/@fundacionfiba'
    }
  ]
}

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: 'ninos',
    label: 'Niños y Jóvenes Beneficiados',
    value: 1500,
    prefix: '+',
    suffix: '',
    description: 'Participantes en talleres educativos, clínicas formativas y residencias artísticas.',
    icon: 'Users'
  },
  {
    id: 'talleres',
    label: 'Talleres y Clínicas Realizadas',
    value: 120,
    prefix: '+',
    suffix: '',
    description: 'Sesiones pedagógicas gratuitas de pintura, escultura, música y apreciación del arte.',
    icon: 'Sparkles'
  },
  {
    id: 'proyectos',
    label: 'Iniciativas y Proyectos Culturales',
    value: 25,
    prefix: '+',
    suffix: '',
    description: 'Exposiciones, murales comunitarios y festivales ejecutados con impacto medible.',
    icon: 'FolderHeart'
  },
  {
    id: 'transparencia',
    label: 'Transparencia y Eficiencia',
    value: 100,
    prefix: '',
    suffix: '%',
    description: 'Rendición de cuentas verificable, auditoría social y aplicación rigurosa de fondos.',
    icon: 'ShieldCheck'
  }
]

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'semillero-de-artes',
    slug: 'semillero-de-artes-comunitarias',
    title: 'Semillero de Artes Comunitarias',
    category: 'educacion',
    categoryLabel: 'Educación',
    summary: 'Programa formativo integral de iniciación en artes visuales y música para niños de San Miguelito y Curundú.',
    fullDescription: 'El Semillero de Artes Comunitarias es un programa formativo continuo que provee materiales artísticos profesionales, instrucción con maestros reconocidos y alimentación en cada sesión para más de 450 infantes en situación de vulnerabilidad social.',
    coverImage: '/images/projects/project-semillero.svg',
    gallery: [
      '/images/projects/project-semillero.svg',
      '/images/projects/project-murales.svg'
    ],
    status: 'en-curso',
    year: 2024,
    location: 'San Miguelito y Panamá Centro',
    beneficiariesCount: 450,
    tags: ['Educación', 'Pintura', 'Niñez', 'Inclusión'],
    featured: true
  },
  {
    id: 'murales-identidad-viva',
    slug: 'murales-identidad-viva',
    title: 'Murales: Identidad Viva',
    category: 'comunidad',
    categoryLabel: 'Comunidad',
    summary: 'Intervención comunitaria de arte urbano participativo para revitalizar espacios públicos y rescatar la memoria barrial.',
    fullDescription: 'Proyecto de co-creación artística donde vecinos y artistas profesionales pintan murales monumentales inspirados en las historias, leyendas y raíces de las comunidades históricas del país.',
    coverImage: '/images/projects/project-murales.svg',
    gallery: [
      '/images/projects/project-murales.svg',
      '/images/projects/project-acordes.svg'
    ],
    status: 'en-curso',
    year: 2024,
    location: 'El Chorrillo y Santa Ana',
    beneficiariesCount: 800,
    tags: ['Arte Urbano', 'Comunidad', 'Patrimonio', 'Muralismo'],
    featured: true
  },
  {
    id: 'acordes-esperanza',
    slug: 'acordes-de-esperanza',
    title: 'Acordes de Esperanza',
    category: 'musica',
    categoryLabel: 'Música',
    summary: 'Ensemble orquestal juvenil y dotación de instrumentos de cuerda y viento para talentos emergentes.',
    fullDescription: 'Iniciativa que otorga instrumentos musicales de calidad en calidad de préstamo de honor y tutorías con músicos de orquesta sinfónica para jóvenes con vocación musical destacada.',
    coverImage: '/images/projects/project-acordes.svg',
    gallery: [
      '/images/projects/project-acordes.svg',
      '/images/projects/project-semillero.svg'
    ],
    status: 'en-curso',
    year: 2023,
    location: 'Colón y Panamá Oeste',
    beneficiariesCount: 250,
    tags: ['Música', 'Orquesta', 'Juventud', 'Becas'],
    featured: true
  },
  {
    id: 'adn-escultura-contemporanea',
    slug: 'adn-escultura-contemporanea',
    title: 'ADN: Muestra de Escultura',
    category: 'exposiciones',
    categoryLabel: 'Exposiciones',
    summary: 'Exposición itinerante que fusiona técnicas escultóricas ancestrales panameñas con lenguajes del arte contemporáneo.',
    fullDescription: 'Curaduría de obras tridimensionales creadas por artistas emergentes y maestros artesanos indígenas, exhibidas en centros culturales con entrada gratuita y visitas guiadas pedagógicas.',
    coverImage: '/images/projects/project-escultura.svg',
    gallery: [
      '/images/projects/project-escultura.svg',
      '/images/projects/project-murales.svg'
    ],
    status: 'completado',
    year: 2023,
    location: 'Casco Antiguo, Panamá',
    beneficiariesCount: 3200,
    tags: ['Escultura', 'Exposición', 'Cultura', 'Casco Antiguo'],
    featured: false
  },
  {
    id: 'taller-maestros-del-lienzo',
    slug: 'taller-maestros-del-lienzo',
    title: 'Maestros del Lienzo: Clínica Avanzada',
    category: 'artes-plasticas',
    categoryLabel: 'Artes Plásticas',
    summary: 'Residencia formativa de óleo y grabado para jóvenes artistas autodidactas del interior del país.',
    fullDescription: 'Clínica intensiva de 3 meses con becas completas de hospedaje, materiales de alta gama y mentorías individualizadas para perfeccionar técnicas pictóricas clásicas y contemporáneas.',
    coverImage: '/images/projects/project-lienzo.svg',
    gallery: [
      '/images/projects/project-lienzo.svg',
      '/images/projects/project-escultura.svg'
    ],
    status: 'proximo',
    year: 2025,
    location: 'Azuero y Coclé',
    beneficiariesCount: 60,
    tags: ['Artes Plásticas', 'Oleo', 'Mentoría', 'Residencia'],
    featured: false
  }
]

export const DONATION_CONFIG: DonationDetails = {
  bank: {
    bankName: 'Banco General Panamá',
    accountType: 'Cuenta Corriente',
    accountNumber: '03-95-01-123456-7',
    accountHolder: 'Fundación Bellas Artes Integra',
    ruc: '155714298-2-2023 DV 45',
    email: 'donaciones@fundacionfiba.org'
  },
  yappy: {
    directoryName: '@fundacionfiba',
    phone: '+507 6800-3421',
    instructions: [
      'Abre tu aplicación de Banco General o Yappy.',
      'Ve a la pestaña del Directorio Comercial o Buscar.',
      'Escribe y selecciona @fundacionfiba.',
      'Ingresa el monto que deseas donar y en el detalle escribe tu nombre/correo.',
      '¡Confirma el envío! Tu aporte financia materiales y formación artística directa.'
    ]
  },
  whatsapp: {
    phoneNumber: '50768003421',
    defaultMessage: 'Hola, deseo coordinar una donación o alianza corporativa con la Fundación Bellas Artes Integra.'
  }
}
