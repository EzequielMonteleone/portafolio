import type { Content } from './types';

export const es: Content = {
  meta: {
    title: 'Ezequiel Monteleone — Senior Software Engineer',
    description:
      'Ingeniero de software senior con más de 10 años de experiencia en full-stack, mobile, frontend y backend. React Native, React, TypeScript, Node.js, .NET e ingeniería de IA.',
  },
  nav: {
    about: 'Sobre mí',
    experience: 'Experiencia',
    skills: 'Skills',
    projects: 'Proyectos',
    education: 'Educación',
    contact: 'Contacto',
  },
  hero: {
    name: 'Ezequiel Monteleone',
    role: 'Senior Software Engineer',
    tagline:
      'Más de 10 años diseñando y construyendo aplicaciones escalables en full-stack, mobile y backend, e integrando IA en productos reales.',
    ctaContact: 'Contactame',
    ctaProjects: 'Ver proyectos',
  },
  about: {
    title: 'Sobre mí',
    paragraphs: [
      'Ingeniero de software senior con más de 10 años de experiencia diseñando y construyendo aplicaciones escalables en ecosistemas full-stack, mobile, frontend y backend. Sólida base en React Native, React, TypeScript, Node.js y .NET, con experiencia diseñando APIs, servicios backend e integraciones.',
      'Experiencia liderando decisiones técnicas, construyendo productos desde cero y trabajando a lo largo de todo el ciclo de vida del producto, desde la arquitectura y el diseño de sistemas hasta la implementación, el despliegue y la entrega en producción. Cómodo entre frontend y backend, con foco en mantenibilidad, escalabilidad, rendimiento y experiencia de desarrollo.',
      'Hoy estoy ampliando mi trabajo en ingeniería de IA: aplicaciones con LLMs, agentes, RAG y la integración de esas capacidades en productos de software. Me interesa resolver problemas complejos y usar tecnología nueva para construir soluciones inteligentes, escalables y prácticas.',
    ],
  },
  experience: {
    title: 'Experiencia',
    stackLabel: 'Tecnologías',
    items: [
      {
        company: 'ITTI',
        role: 'Software Engineer',
        period: '2025 — Presente',
        location: 'Buenos Aires',
        bullets: [],
        focuses: [
          {
            title: 'Ubox — Ueno Bank',
            bullets: [
              'Contribuí a Ubox, la plataforma de seguimiento de paquetes de Ueno Bank para que los clientes monitoreen compras internacionales desde el origen hasta la entrega final en la app.',
              'Construí y mantuve features mobile multiplataforma con Flutter, con foco en rendimiento, usabilidad y una experiencia fluida.',
              'Desarrollé servicios backend con Node.js y Fastify: APIs escalables y lógica de negocio para el tracking y las actualizaciones de estado en tiempo real.',
              'Implementé inyección de dependencias, validación de requests, caché e integraciones con servicios externos.',
              'Integré capacidades de IA en el backend con LangChain y LangGraph para workflows con LLMs, orquestación de agentes y tareas en varios pasos.',
              'Trabajé con producto, backend y mobile para definir requerimientos, entregar features y cuidar la calidad de los releases.',
            ],
            stack:
              'Flutter, Node.js, Fastify, TypeScript, tsyringe, LangChain, LangGraph, Spec Kit',
          },
          {
            title: 'MUV — apps de conductor y pasajero',
            bullets: [
              'Contribuí a la evolución de las apps de conductor y pasajero, desde el diseño y la implementación hasta la entrega, en conjunto con backend.',
              'Participé en decisiones de arquitectura mobile, manejo de estado y flujo de datos, con foco en escalabilidad, rendimiento y mantenibilidad.',
              'Trabajé en soluciones cross-platform y nativas para una experiencia consistente en Android e iOS.',
              'Implementé mapas, geolocalización y visualización de datos en tiempo real.',
              'Participé en tests de integración para sostener la confiabilidad y la estabilidad del producto.',
            ],
            stack:
              'React Native, Expo, Zustand, TanStack Query, Mapbox, Kotlin, Jetpack Compose, SwiftUI. IA: Cursor, MCPs, agentes y skills',
          },
        ],
      },
      {
        company: 'SANTEX',
        role: 'Mobile / Frontend Engineer',
        period: '2021 — 2025',
        location: 'Buenos Aires',
        bullets: [
          'Entregué soluciones end-to-end para múltiples clientes, actuando como referente técnico en desarrollo mobile y frontend.',
          'Definí la arquitectura de aplicaciones, el stack tecnológico y los estándares de código para proyectos con React Native, React.js, Android, iOS y NestJS.',
          'Construí design systems y librerías de componentes reutilizables desde cero para asegurar consistencia y escalabilidad.',
          'Trabajé directamente con stakeholders para traducir requerimientos de negocio en soluciones técnicas, influyendo en decisiones de producto y arquitectura.',
          'Mentoreé desarrolladores y revisé código para asegurar calidad y buenas prácticas.',
        ],
        stack:
          'React Native, Redux, Redux Toolkit, GraphQL, Redux Saga, TypeScript, iOS, Android, React.js, Next.js, Node.js, Vue.js. IA: Copilot',
      },
      {
        company: 'EV Jungle',
        role: 'Full Stack Developer',
        period: '2023 — 2024',
        location: 'Buenos Aires',
        bullets: [
          'Contribuí al diseño e implementación de features mobile nativas usando Kotlin y Swift.',
          'Desarrollé y mantuve servicios backend en Java, participando en discusiones de arquitectura y decisiones de integración.',
          'Diseñé lógica de negocio basada en flujos con Node-RED, mejorando la mantenibilidad y la visibilidad operativa.',
          'Actué como puente entre los equipos de mobile y backend para alinear soluciones técnicas.',
        ],
        stack: 'Android, iOS, Java, Node-RED, React.js, Next.js, GraphQL',
      },
      {
        company: 'Cloud(X)',
        role: 'Mobile / Frontend Developer',
        period: '2018 — 2021',
        location: 'Buenos Aires',
        bullets: [
          'Participé en proyectos internacionales, contribuyendo a decisiones de arquitectura en plataformas mobile y web.',
          'Construí arquitecturas frontend escalables con React, React Native, Next.js, iOS, Android y Xamarin Forms.',
          'Trabajé con equipos distribuidos, adaptando soluciones a diferentes mercados y requerimientos.',
        ],
        stack:
          'React Native, Redux, Redux Toolkit, Redux Saga, GraphQL, TypeScript, iOS, Android, React.js, Next.js, Node.js, Vue.js',
      },
      {
        company: 'Flux IT',
        role: 'Mobile Developer',
        period: '2016 — 2018',
        location: 'Buenos Aires',
        bullets: [
          'Desarrollé aplicaciones mobile de alto tráfico para Banco Galicia (banca retail y corporativa).',
          'Participé en decisiones de diseño técnico relacionadas con seguridad, rendimiento y modularización.',
          'Trabajé con stacks de Android e iOS.',
        ],
        stack: 'Android, iOS',
      },
      {
        company: 'X28 Alarmas',
        role: 'Full Stack Developer',
        period: '2013 — 2016',
        location: 'Buenos Aires',
        bullets: [
          'Diseñé y desarrollé sistemas internos empresariales para múltiples departamentos.',
          'Tomé ownership del análisis de requerimientos, diseño de sistemas e implementación usando C#, .NET y tecnologías mobile.',
          'Traduje procesos de negocio en soluciones de software escalables, sentando las bases para el crecimiento futuro.',
        ],
        stack:
          'Android, iOS, .NET, ASP.NET, MVC 4, SQL Server, Razor, C#, Entity Framework, LINQ',
      },
    ],
  },
  skills: {
    title: 'Skills',
    groups: [
      {
        label: 'Lenguajes',
        items: [
          'React',
          'React Native',
          'Flutter',
          'JavaScript',
          'TypeScript',
          'Swift',
          'Kotlin',
          'Java',
          'C#',
          '.NET',
          'Nest.js',
          'Python',
        ],
      },
      {
        label: 'Herramientas',
        items: [
          'Redux',
          'Redux Toolkit',
          'Redux Saga',
          'Redux Thunk',
          'Zustand',
          'TanStack Query',
          'Expo',
          'Jest',
          'Fastlane',
          'LaunchDarkly',
          'Firebase',
          'Zod',
          'Jenkins',
          'CircleCI',
          'CI/CD',
          'Serverless',
          'Cursor',
          'Claude Code',
          'Copilot',
        ],
      },
      {
        label: 'IA',
        items: [
          'Desarrollo asistido por IA (Cursor, Claude)',
          'Prompt Engineering & Context Design',
          'Debugging, refactor y generación de código con IA',
          'Agentes de IA y automatización de workflows',
          'LLM tooling y workflows de productividad',
          'IA generativa para ingeniería de software',
          'MCPs',
        ],
      },
    ],
    spoken: {
      label: 'Idiomas',
      items: ['Español', 'Inglés'],
    },
  },
  projects: {
    title: 'Proyectos',
    items: [
      {
        name: 'Corelia',
        role: 'Owner',
        featured: true,
        description:
          'Plataforma para administrar edificios y consorcios. Reúne en un solo lugar la propiedad, las unidades, dueños e inquilinos, expensas y espacios compartidos. Los residentes ven lo que deben, reservan amenities y cargan reclamos. Un asistente responde sobre el reglamento y puede preparar una reserva o un reclamo que solo se envía cuando la persona lo confirma.',
        url: 'https://corelia-admin.vercel.app/',
      },
      {
        name: 'Ueno Bank — uBox',
        role: 'Software Engineer',
        description:
          'Módulo de seguimiento de paquetes. Features mobile en Flutter y servicios backend en Node.js para que los clientes sigan compras internacionales desde el origen hasta la entrega.',
        url: 'https://www.ueno.com.py/',
      },
      {
        name: 'MUV',
        role: 'Software Engineer',
        description:
          'Features nuevas en las apps de conductor y pasajero con React Native, Android e iOS: mapas, geolocalización y datos en tiempo real.',
        url: 'https://www.itti.digital/',
      },
      {
        name: 'Cattler',
        role: 'Lead',
        description:
          'Desarrollo de features de gestión ganadera usando React Native.',
        url: 'https://www.cattler.com.ar/',
      },
      {
        name: 'EV Jungle',
        role: 'Fullstack Developer',
        description:
          'Features mobile nativas (Kotlin y Swift) y lógica backend en Java. Flujos de negocio creados y testeados con Node-RED.',
        url: 'https://www.evjungle.com',
      },
      {
        name: 'CH Robinson',
        role: 'Mobile Engineer',
        description:
          'Apps mobile con Kotlin, Swift y React Native, usando herramientas como Fullstory y LaunchDarkly.',
        url: 'https://www.chrobinson.com',
      },
      {
        name: 'Mentor Bets',
        role: 'Mobile / Frontend Lead',
        description:
          'App en React Native y panel de administración con React + Next.js, integrando Chakra UI como design system.',
      },
    ],
  },
  education: {
    title: 'Educación',
    items: [
      {
        title: 'Ingeniería en Sistemas',
        institution: 'Universidad Tecnológica Nacional (UTN)',
        period: '2011 — 2014',
      },
      {
        title: 'Analista de Sistemas',
        institution: 'Instituto de Formación Técnica Superior',
        period: '2008 — 2011',
      },
    ],
  },
  contact: {
    title: 'Contacto',
    intro:
      '¿Tenés un proyecto en mente o buscás un ingeniero senior para tu equipo? Escribime.',
    email: 'monteleone.ezequiel@gmail.com',
    phone: '+54 9 11 2501-0725',
    phoneHref: 'tel:+5491125010725',
    location: 'Buenos Aires, Argentina',
    locationLabel: 'Ubicación',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
  },
};
