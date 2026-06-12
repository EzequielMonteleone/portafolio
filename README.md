# Portafolio — Ezequiel Monteleone

Portafolio personal bilingüe (español / inglés) construido con [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com), pensado para desplegar en [Vercel](https://vercel.com).

## Características

- Bilingüe con i18n nativo de Astro: español en `/` (idioma por defecto) e inglés en `/en`.
- Toggle de idioma en la barra de navegación.
- Diseño oscuro, minimalista y responsive.
- Secciones: Sobre mí, Experiencia, Skills, Proyectos, Educación y Contacto.
- SEO listo: metadatos Open Graph, canonical y `hreflang`.

## Estructura

```text
src/
├── components/      # Secciones de la página (Hero, Experience, Skills, ...)
├── i18n/            # Contenido y helpers de idiomas (es.ts, en.ts, ui.ts)
├── layouts/         # Layout base con <head> y SEO
├── pages/
│   ├── index.astro      # Español (/)
│   └── en/index.astro   # Inglés (/en)
└── styles/global.css    # Tailwind + estilos globales
```

El contenido de cada idioma vive en `src/i18n/es.ts` y `src/i18n/en.ts`. Para editar textos, modificá esos archivos.

## Comandos

| Comando           | Acción                                        |
| :---------------- | :-------------------------------------------- |
| `npm install`     | Instala dependencias                          |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321`    |
| `npm run build`   | Compila el sitio estático en `./dist/`        |
| `npm run preview` | Previsualiza el build localmente              |

## Deploy en Vercel

El sitio es estático, así que Vercel lo detecta automáticamente:

1. Subí el repositorio a GitHub.
2. En Vercel, importá el proyecto. Detectará Astro y usará:
   - Build command: `npm run build`
   - Output directory: `dist`
3. Deploy.

> Nota: el build local desactiva la telemetría de Astro. En Vercel no es necesario, pero si querés silenciarla podés definir la variable de entorno `ASTRO_TELEMETRY_DISABLED=1`.
