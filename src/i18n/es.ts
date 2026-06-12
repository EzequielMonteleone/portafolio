import type { Content } from './types';

export const es: Content = {
  meta: {
    title: 'Ezequiel Monteleone — Senior Mobile/Frontend Engineer',
    description:
      'Ingeniero de software senior con más de 10 años de experiencia construyendo aplicaciones escalables en mobile, frontend y backend. React Native, React, TypeScript.',
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
    role: 'Senior Mobile / Frontend Engineer',
    tagline:
      'Más de 10 años diseñando y construyendo aplicaciones escalables en mobile, frontend y backend.',
    ctaContact: 'Contactame',
    ctaProjects: 'Ver proyectos',
  },
  about: {
    title: 'Sobre mí',
    paragraphs: [
      'Ingeniero de software senior con más de 10 años de experiencia diseñando y construyendo aplicaciones escalables a través de ecosistemas mobile, frontend y backend. Sólida base en React Native, React, TypeScript y arquitecturas de software modernas, con experiencia liderando decisiones técnicas, construyendo productos desde cero y colaborando con equipos multidisciplinarios en entornos ágiles.',
      'Apasionado por resolver problemas complejos de ingeniería, mejorar el rendimiento y crear sistemas mantenibles pensando en la escalabilidad a largo plazo. Cómodo trabajando a lo largo de todo el ciclo de vida del producto, desde discusiones de arquitectura e infraestructura hasta la implementación y entrega en producción.',
    ],
  },
  experience: {
    title: 'Experiencia',
    items: [
      {
        company: 'ITTI',
        role: 'Mobile Engineer',
        period: '2025 — Presente',
        location: 'Buenos Aires',
        bullets: [
          'Miembro core del equipo mobile de MUV (driver), contribuyendo a decisiones técnicas y a la evolución del producto.',
          'Diseñé e implementé arquitecturas en React Native para soluciones de transporte, enfocadas en escalabilidad y rendimiento.',
          'Colaboré de cerca con los equipos de backend y producto para definir el alcance de las features, la viabilidad técnica y la estrategia de entrega.',
          'Tomé ownership de features de punta a punta, desde el diseño técnico hasta el rollout en producción.',
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
        ],
      },
      {
        label: 'IA',
        items: [
          'Desarrollo asistido por IA (Cursor, Claude, ChatGPT)',
          'Prompt Engineering & Context Design',
          'Debugging, refactor y generación de código con IA',
          'Agentes de IA & automatización de workflows',
          'LLM tooling & workflows de productividad',
        ],
      },
    ],
  },
  projects: {
    title: 'Proyectos',
    items: [
      {
        name: 'MUV',
        role: 'Ingeniero Mobile',
        description:
          'Implementación de nuevas features mobile usando React Native, Android e iOS.',
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
          'Features mobile nativas (Kotlin & Swift) y lógica backend en Java. Flujos de negocio creados y testeados con Node-RED.',
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
    location: 'Buenos Aires, Argentina',
    locationLabel: 'Ubicación',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
  },
};
