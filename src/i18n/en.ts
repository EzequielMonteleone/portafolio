import type { Content } from './types';

export const en: Content = {
  meta: {
    title: 'Ezequiel Monteleone — Senior Mobile/Frontend Engineer',
    description:
      'Senior software engineer with 10+ years of experience building scalable applications across mobile, frontend and backend. React Native, React, TypeScript.',
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
    role: 'Senior Mobile / Frontend Engineer',
    tagline:
      '10+ years designing and building scalable applications across mobile, frontend and backend.',
    ctaContact: 'Get in touch',
    ctaProjects: 'View projects',
  },
  about: {
    title: 'About me',
    paragraphs: [
      'Senior software engineer with 10+ years of experience designing and building scalable applications across mobile, frontend, and backend ecosystems. Strong background in React Native, React, TypeScript, and modern software architectures, with experience leading technical decisions, building products from scratch, and collaborating with cross-functional teams in fast-paced environments.',
      'Passionate about solving complex engineering problems, improving performance, and creating maintainable systems with long-term scalability in mind. Comfortable working across the full product lifecycle, from architecture and infrastructure discussions to implementation and production delivery.',
    ],
  },
  experience: {
    title: 'Experience',
    items: [
      {
        company: 'ITTI',
        role: 'Mobile Engineer',
        period: '2025 — Present',
        location: 'Buenos Aires',
        bullets: [
          'Core member of the MUV driver mobile team, contributing to technical decisions and product evolution.',
          'Designed and implemented React Native architectures for transportation solutions, focusing on scalability and performance.',
          'Collaborated closely with backend and product teams to define feature scope, technical feasibility, and delivery strategy.',
          'Took ownership of features end-to-end, from technical design to production rollout.',
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
        label: 'AI',
        items: [
          'AI-assisted development (Cursor, Claude, ChatGPT)',
          'Prompt Engineering & Context Design',
          'AI-powered debugging, refactoring & code generation',
          'AI agents & workflow automation',
          'LLM tooling & productivity workflows',
        ],
      },
    ],
  },
  projects: {
    title: 'Projects',
    items: [
      {
        name: 'MUV',
        role: 'Mobile Engineer',
        description:
          'Implemented new mobile features using React Native, Android and iOS.',
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
      'Have a project in mind or looking for a senior engineer for your team? Let\u2019s talk.',
    email: 'monteleone.ezequiel@gmail.com',
    location: 'Buenos Aires, Argentina',
    locationLabel: 'Location',
  },
  footer: {
    rights: 'All rights reserved.',
  },
};
