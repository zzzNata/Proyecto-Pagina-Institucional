# Instituto Web

Landing page institucional para la Escuela Superior de Comercio N° 2 de Jardín América, desarrollada con Astro y Tailwind CSS. El proyecto está pensado para presentar la oferta académica, requisitos de inscripción, información institucional y un formulario de contacto dirigido a futuros estudiantes.

## Descripción del proyecto

Este sitio web es una propuesta moderna y clara para promocionar carreras terciarias con enfoque práctico, orientación laboral y acceso a la información relevante para la inscripción. La estructura está pensada para ser atractiva visualmente, rápida y fácil de mantener.

Incluye:
- Hero section con llamado a la acción
- Sección institucional y valores
- Oferta académica con cards de carreras
- Requisitos de inscripción
- Testimonios de estudiantes
- FAQ
- Formulario de contacto
- Navegación responsive
- Diseño adaptado para mobile, tablet y desktop

## Tecnologías utilizadas

- Astro
- Tailwind CSS
- JavaScript
- HTML5
- CSS3
- Form submission con Web3Forms

## Demo

Puedes ver el proyecto funcionando en tu entorno local o desplegarlo en un servicio de hosting como Vercel o Netlify.

## Estructura del proyecto

```bash
.
├── public/
│   └── pdfs/
├── src/
│   ├── components/
│   │   ├── CarreraCard.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Navbar.astro
│   │   ├── Requisitos.astro
│   │   └── TopBanner.astro
│   ├── data/
│   │   └── carreras.js
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
├── tsconfig.json
├── README.md
└── public/
```

## Requisitos previos

Antes de empezar, asegúrate de tener instalado:

- Node.js 22 o superior
- npm

## Instalación

1. Cloná el repositorio:

```bash
git clone https://github.com/tu-usuario/instituto-web.git
cd instituto-web
```

2. Instalá las dependencias:

```bash
npm install
```

## Ejecutar en modo desarrollo

```bash
npm run dev
```

Abre tu navegador en:

```bash
http://localhost:4321
```

## Build para producción

```bash
npm run build
```

Para previsualizar el proyecto compilado:

```bash
npm run preview
```

## Variables de entorno

Actualmente el proyecto no exige variables de entorno para funcionar de forma local, pero si más adelante agregás servicios externos como email, analytics o formularios, podés configurar un archivo `.env`.

## Funcionalidades destacadas

- Diseño responsive para todos los tamaños de pantalla
- Sección principal con CTA hacia la inscripción
- Información clara y visualmente ordenada
- Cards de carreras con detalle de duración y modalidad
- Enlaces a PDFs informativos
- Formulario de contacto para consultas
- Estilo moderno con paleta institucional

## Capturas de pantalla

> Agregá aquí capturas del proyecto para que quede más atractivo en GitHub.

```md
![Home](./public/imagen-home.png)
![Carreras](./public/imagen-carreras.png)
```

## Roadmap

- Mejorar la experiencia del formulario
- Añadir secciones adicionales de contenido
- Integrar WhatsApp con enlaces directos
- Optimizar SEO y metadata
- Añadir más contenido institucional y multimedia

## Despliegue

El proyecto puede desplegarse fácilmente en:

- Vercel
- Netlify
- GitHub Pages
- cualquier hosting estático compatible con Astro

## Licencia

Este proyecto está disponible bajo la licencia MIT. Puedes usarlo, modificarlo y adaptarlo para tus propios fines.

## Autor

Desarrollado por Natanael Valdovinos


GitHub: [github.com/zzzNata]
Email: valdonata@hotmail.com

## Contacto

Si querés colaborar, hablar sobre el proyecto o trabajar juntos en una nueva idea, podés contactarme por cualquiera de los canales mencionados arriba.

---

