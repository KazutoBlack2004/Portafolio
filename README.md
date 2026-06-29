# Kazuto_Black Portfolio 👨‍💻

¡Bienvenido al código fuente de mi portafolio personal! Este proyecto es una Single Page Application (SPA) moderna, rápida y con un diseño "Glassmorphism" construida utilizando **Astro**, **React**, **Tailwind CSS** y **Framer Motion**. Además, cuenta con soporte multi-idioma integrado (i18next).

## 🚀 Tecnologías Principales
- **[Astro](https://astro.build/):** Para la arquitectura del sitio, rendimiento súper rápido y estructura por componentes.
- **[React](https://reactjs.org/):** Para manejar estados interactivos (como el cambio de idioma) y componentes dinámicos (Navbar, Footer, Proyectos).
- **[Tailwind CSS](https://tailwindcss.com/):** Framework de utilidades para un diseño ágil, responsivo y la implementación de efectos "Glass".
- **[Framer Motion](https://www.framer.com/motion/):** Para transiciones, animaciones de scroll y efectos visuales fluidos.
- **[i18next](https://www.i18next.com/):** Para soporte nativo de traducción (Inglés / Español).

---

## 🛠️ Desarrollo Local (Cómo ejecutarlo)

Para correr este proyecto en tu máquina local, sigue estos pasos:

1. **Instala las dependencias** (Asegúrate de tener Node.js instalado):
   ```bash
   npm install
   ```

2. **Inicia el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

3. **¡Listo!** Abre tu navegador y ve a `http://localhost:4321` para ver el portafolio en acción.

---

## 🌐 Cómo Desplegar este Sitio Estático (Render)

El método más fácil y rápido para desplegar este portafolio de manera gratuita (y con integración continua) es usar **[Render](https://render.com/)**.

### Despliegue Automático mediante GitHub (Recomendado)
1. Ve a [GitHub](https://github.com/) y asegúrate de que el código de tu proyecto esté subido a un repositorio.
2. Ve a [Render](https://render.com) e inicia sesión con tu cuenta de GitHub.
3. Haz clic en **"New +"** y selecciona **"Static Site"**.
4. Conecta tu repositorio de GitHub seleccionando el que acabas de subir.
5. Configura tu sitio estático con los siguientes **campos EXACTOS** (esto es crucial para que Astro funcione):
   - **Name:** *Portafolio* (o el que prefieras)
   - **Branch:** `main`
   - **Root Directory:** *(Déjalo en blanco / vacío)*
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
6. Haz clic en **"Create Static Site"**. En un par de minutos, tu sitio estará en vivo y Render te dará una URL pública `.onrender.com`.

*(Cada vez que hagas `git push` a la rama `main` de tu repositorio, Render actualizará tu sitio automáticamente).*

### Método 2: Despliegue Manual (Build Local)
Si prefieres generar los archivos tú mismo o usar otro servicio de hosting estático (como Vercel, Netlify o GitHub Pages):
1. Ejecuta el comando de construcción de producción en tu terminal local:
   ```bash
   npm run build
   ```
2. Esto generará una carpeta llamada `dist/` en la raíz de tu proyecto.
3. Puedes tomar todos los archivos dentro de la carpeta `dist/` y subirlos manualmente a cualquier servicio de hosting web.

---

## 📂 Estructura del Proyecto

```text
/
├── public/                 # Archivos estáticos públicos (imágenes, favicons)
├── src/
│   ├── components/         # Componentes React (NavBar, FooterSection, ProjectsSection, etc.)
│   ├── i18n/               # Configuración y diccionarios de idiomas (index.js)
│   ├── pages/              # Páginas de Astro (index.astro, etc.)
│   ├── styles/             # Archivos CSS globales (index.css)
│   └── layouts/            # Plantillas maestras de Astro
├── astro.config.mjs        # Configuración de Astro
├── tailwind.config.cjs     # Configuración de Tailwind (plugins y temas)
└── package.json            # Dependencias y scripts
```

---
*Construido con 💜 por [KazutoBlack2004](https://github.com/KazutoBlack2004)*
