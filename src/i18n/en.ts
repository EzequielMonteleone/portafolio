import type { Content } from './types';

export const en: Content = {
  meta: {
    title: 'Ezequiel Monteleone — Senior Software Engineer',
    description:
      'Senior software engineer with 10+ years of experience across full-stack, mobile, frontend and backend. React Native, React, TypeScript, Node.js, .NET and AI engineering.',
  },
  nav: {
    about: 'About',
    experience: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    education: 'Education',
    contact: 'Contact',
  },
  hero: {
    name: 'Ezequiel Monteleone',
    role: 'Senior Software Engineer',
    tagline:
      '10+ years designing and building scalable applications across full-stack, mobile and backend, and bringing AI into real products.',
    ctaContact: 'Get in touch',
    ctaProjects: 'View projects',
  },
  about: {
    title: 'About me',
    paragraphs: [
      'Senior software engineer with 10+ years of experience designing and building scalable applications across full-stack, mobile, frontend, and backend ecosystems. Strong background in React Native, React, TypeScript, Node.js, and .NET, with experience designing APIs, backend services, and integrations.',
      'Experienced in leading technical decisions, building products from scratch, and working across the full product lifecycle, from architecture and system design to implementation, deployment, and production delivery. Comfortable across frontend and backend, with a strong focus on maintainability, scalability, performance, and developer experience.',
      'Currently expanding into AI engineering: LLM-powered applications, AI agents, RAG, and the integration of those capabilities into modern software products. Passionate about solving complex engineering problems and using new technology to build intelligent, scalable, and practical solutions.',
    ],
  },
  experience: {
    title: 'Experience',
    stackLabel: 'Technologies',
    items: [
      {
        company: 'ITTI',
        role: 'Software Engineer',
        period: '2025 — Present',
        location: 'Buenos Aires',
        bullets: [],
        focuses: [
          {
            title: 'Ubox — Ueno Bank',
            bullets: [
              'Contributed to Ubox, Ueno Bank’s parcel tracking platform, so customers can monitor international purchases from origin to final delivery in the mobile app.',
              'Built and maintained cross-platform mobile features with Flutter, focused on performance, usability, and a seamless experience.',
              'Developed backend services with Node.js and Fastify: scalable APIs and business logic for parcel tracking and real-time status updates.',
              'Implemented dependency injection, request validation, caching, and integrations with external services.',
              'Integrated AI-powered backend capabilities with LangChain and LangGraph for LLM workflows, agent orchestration, and multi-step tasks.',
              'Worked with product, backend, and mobile to define requirements, ship features, and keep releases high quality.',
            ],
            stack:
              'Flutter, Node.js, Fastify, TypeScript, tsyringe, LangChain, LangGraph, Spec Kit',
          },
          {
            title: 'MUV — Driver & Passenger apps',
            bullets: [
              'Contributed to the driver and passenger apps, from design and implementation through delivery, alongside backend teams.',
              'Joined technical decisions on mobile architecture, state management, and data flow, with a focus on scalability, performance, and maintainability.',
              'Worked on cross-platform and native solutions to keep a consistent experience on Android and iOS.',
              'Implemented maps, geolocation, and real-time data visualization.',
              'Took part in integration testing to support reliability and long-term stability.',
            ],
            stack:
              'React Native, Expo, Zustand, TanStack Query, Mapbox, Kotlin, Jetpack Compose, SwiftUI. AI: Cursor, MCPs, agents, and skills',
          },
        ],
      },
      {
        company: 'SANTEX',
        role: 'Mobile / Frontend Engineer',
        period: '2021 — 2025',
        location: 'Buenos Aires',
        bullets: [
          'Delivered end-to-end solutions for multiple clients, acting as technical reference for mobile and frontend development.',
          'Defined application architecture, technology stack, and coding standards for projects using React Native, React.js, Android, iOS, and NestJS.',
          'Built design systems and reusable component libraries from scratch to ensure consistency and scalability.',
          'Worked directly with stakeholders to translate business requirements into technical solutions, influencing product and architectural decisions.',
          'Mentored developers and reviewed code to ensure quality and best practices.',
        ],
        stack:
          'React Native, Redux, Redux Toolkit, GraphQL, Redux Saga, TypeScript, iOS, Android, React.js, Next.js, Node.js, Vue.js. AI: Copilot',
      },
      {
        company: 'EV Jungle',
        role: 'Full Stack Developer',
        period: '2023 — 2024',
        location: 'Buenos Aires',
        bullets: [
          'Contributed to the design and implementation of native mobile features using Kotlin and Swift.',
          'Developed and maintained backend services in Java, participating in architectural discussions and integration decisions.',
          'Designed flow-based business logic using Node-RED, improving maintainability and operational visibility.',
          'Acted as a bridge between mobile and backend teams to align technical solutions.',
        ],
        stack: 'Android, iOS, Java, Node-RED, React.js, Next.js, GraphQL',
      },
      {
        company: 'Cloud(X)',
        role: 'Mobile / Frontend Developer',
        period: '2018 — 2021',
        location: 'Buenos Aires',
        bullets: [
          'Participated in international projects, contributing to architectural decisions across mobile and web platforms.',
          'Built scalable frontend architectures using React, React Native, Next.js, iOS, Android, and Xamarin Forms.',
          'Worked closely with distributed teams, adapting solutions to different markets and requirements.',
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
          'Developed high-traffic mobile applications for Banco Galicia (retail and corporate banking).',
          'Participated in technical design decisions related to security, performance, and modularization.',
          'Worked with Android and iOS stacks.',
        ],
        stack: 'Android, iOS',
      },
      {
        company: 'X28 Alarmas',
        role: 'Full Stack Developer',
        period: '2013 — 2016',
        location: 'Buenos Aires',
        bullets: [
          'Designed and developed internal enterprise systems across multiple departments.',
          'Took ownership of requirements analysis, system design, and implementation using C#, .NET, and mobile technologies.',
          'Translated business processes into scalable software solutions, laying the foundation for future growth.',
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
        label: 'Languages',
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
        label: 'Tools',
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
        label: 'AI',
        items: [
          'AI-assisted development (Cursor, Claude)',
          'Prompt Engineering & Context Design',
          'AI-powered debugging, refactoring & code generation',
          'AI agents & workflow automation',
          'LLM tooling & productivity workflows',
          'Generative AI for software engineering',
          'MCPs',
        ],
      },
    ],
    spoken: {
      label: 'Spoken languages',
      items: ['Spanish', 'English'],
    },
  },
  projects: {
    title: 'Projects',
    items: [
      {
        name: 'Corelia',
        role: 'Owner',
        featured: true,
        description:
          'Platform for managing apartment buildings and homeowners’ associations. It brings properties, units, owners and tenants, monthly fees, and shared spaces into one place. Residents see what they owe, book amenities, and file complaints. An assistant answers questions about building rules and can prepare a booking or complaint that only goes through once the person confirms it.',
        url: 'https://corelia-admin.vercel.app/',
      },
      {
        name: 'Ueno Bank — uBox',
        role: 'Software Engineer',
        description:
          'Parcel tracking module. Mobile features in Flutter and backend services in Node.js so customers can follow international purchases from origin to delivery.',
        url: 'https://www.ueno.com.py/',
      },
      {
        name: 'MUV',
        role: 'Software Engineer',
        description:
          'New features on the driver and passenger apps with React Native, Android, and iOS, including maps, geolocation, and real-time data.',
        url: 'https://www.itti.digital/',
      },
      {
        name: 'Cattler',
        role: 'Lead',
        description: 'Developed cattle management features using React Native.',
        url: 'https://www.cattler.com.ar/',
      },
      {
        name: 'EV Jungle',
        role: 'Fullstack Developer',
        description:
          'Built native mobile features (Kotlin & Swift) and backend logic in Java. Created and tested business flows with Node-RED.',
        url: 'https://www.evjungle.com',
      },
      {
        name: 'CH Robinson',
        role: 'Mobile Engineer',
        description:
          'Worked on mobile apps using Kotlin, Swift and React Native, leveraging tools like Fullstory and LaunchDarkly.',
        url: 'https://www.chrobinson.com',
      },
      {
        name: 'Mentor Bets',
        role: 'Mobile / Frontend Lead',
        description:
          'Built a React Native app and an admin panel using React + Next.js, integrating Chakra UI as the design system.',
      },
    ],
  },
  education: {
    title: 'Education',
    items: [
      {
        title: 'System Engineering',
        institution: 'Universidad Tecnológica Nacional (UTN)',
        period: '2011 — 2014',
      },
      {
        title: 'System Analyst',
        institution: 'Instituto de Formación Técnica Superior',
        period: '2008 — 2011',
      },
    ],
  },
  contact: {
    title: 'Contact',
    intro:
      'Have a project in mind or looking for a senior engineer for your team? Let’s talk.',
    email: 'monteleone.ezequiel@gmail.com',
    phone: '+54 9 11 2501-0725',
    phoneHref: 'tel:+5491125010725',
    location: 'Buenos Aires, Argentina',
    locationLabel: 'Location',
  },
  footer: {
    rights: 'All rights reserved.',
  },
};
