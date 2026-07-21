import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        projects: 'Projects'
      },
      hero: {
        greeting: "Hi, I'm Kazuto_Black",
        role: "Full Stack Developer",
        location: "Based in Chile",
        description: "I am a Computer Science Engineer and Full Stack Developer. I specialize in designing and building web solutions from end to end, and in my free time, I develop video games as a hobby. I am also passionate about data science, always aiming to create scalable and interactive products.",
        contact: "Contact me",
        work: "My work",
        downloadCv: "Download CV"
      },
      contact: {
        titleStart: "Get in",
        titleAccent: "Touch",
        subtitle: "Have a project in mind, want to collaborate, or just say hello? Fill out the form and I'll get back to you as soon as possible.",
        nameLabel: "Name",
        namePlaceholder: "John Doe",
        emailLabel: "Email",
        emailPlaceholder: "john@example.com",
        messageLabel: "Message",
        messagePlaceholder: "How can I help you?",
        sendButton: "Send Message",
        sendingButton: "Sending...",
        successAlert: "Message sent successfully! I will get back to you soon.",
        errorAlert: "Oops! Something went wrong. Please try again later.",
        warningAlert: "Please fill in all fields before sending.",
        detailsTitle: "Contact Information",
        copyEmail: "Copy Email",
        copiedEmail: "Copied!",
        directMail: "Direct Mail"
      },
      footer: {
        rights: 'All Rights Reserved'
      },
      projects: {
        badge: 'Portfolio',
        titleStart: 'Featured',
        titleAccent: 'Works',
        subtitle: 'A curated selection of my most significant projects, showcasing my expertise in web development, design, and creating interactive experiences.',
        website: 'Website',
        github: 'GitHub',
        hintDrift: 'drifting slowly · hover to pause',
        hintInteract: 'scroll · drag · or use arrows',
        items: {
          chilebite: {
            titleStart: 'Chile',
            titleAccent: 'Bite',
            desc: 'Chilean gastronomy platform where users can find step-by-step recipes, calculate macronutrients, discover restaurants, and connect with a community of cooking enthusiasts.'
          },
          apuntes: {
            titleStart: 'Apuntes',
            titleAccent: 'DeOli',
            desc: 'A modern, fast, and high-performance web platform designed as an interactive documentation center for Computer Science subjects.'
          },
          love: {
            titleStart: 'Love',
            titleAccent: 'Messages',
            desc: 'A web platform built to transform conventional messages into memorable digital experiences. Create and send personalized letters for special occasions.'
          },
          pokemon: {
            titleStart: 'Pokedex',
            titleAccent: 'Prueba',
            desc: 'A web application using the PokeAPI to demonstrate frontend development skills and API consumption.'
          }
        }
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        about: 'Sobre mí',
        projects: 'Proyectos'
      },
      hero: {
        greeting: "Hola, soy Kazuto_Black",
        role: "Desarrollador Full Stack",
        location: "Residente en Chile",
        description: "Soy Ingeniero Informático y desarrollador Full Stack. Me especializo en diseñar y construir soluciones web de principio a fin, y en mi tiempo libre desarrollo videojuegos como hobby. Además, me apasiona la ciencia de datos, buscando siempre crear productos escalables e interactivos.",
        contact: "Contáctame",
        work: "Mi trabajo",
        downloadCv: "Descargar CV"
      },
      contact: {
        titleStart: "Ponte en",
        titleAccent: "Contacto",
        subtitle: "¿Tienes un proyecto en mente, deseas colaborar o simplemente saludar? Completa el formulario y te responderé lo antes posible.",
        nameLabel: "Nombre",
        namePlaceholder: "Juan Pérez",
        emailLabel: "Correo Electrónico",
        emailPlaceholder: "juan@ejemplo.com",
        messageLabel: "Mensaje",
        messagePlaceholder: "¿En qué puedo ayudarte?",
        sendButton: "Enviar Mensaje",
        sendingButton: "Enviando...",
        successAlert: "¡Mensaje enviado con éxito! Te responderé muy pronto.",
        errorAlert: "¡Ups! Algo salió mal. Por favor, inténtalo de nuevo más tarde.",
        warningAlert: "Por favor, completa todos los campos antes de enviar.",
        detailsTitle: "Información de Contacto",
        copyEmail: "Copiar Correo",
        copiedEmail: "¡Copiado!",
        directMail: "Correo Directo"
      },
      footer: {
        rights: 'Todos los derechos reservados'
      },
      projects: {
        badge: 'Portafolio',
        titleStart: 'Trabajos',
        titleAccent: 'Destacados',
        subtitle: 'Una selección cuidadosa de mis proyectos más importantes, demostrando mi experiencia en desarrollo web, diseño y creación de experiencias interactivas.',
        website: 'Sitio Web',
        github: 'GitHub',
        hintDrift: 'deslizando lentamente · pasa el mouse para pausar',
        hintInteract: 'scroll · arrastra · o usa las flechas',
        items: {
          chilebite: {
            titleStart: 'Chile',
            titleAccent: 'Bite',
            desc: 'Plataforma chilena de gastronomía donde los usuarios pueden encontrar recetas paso a paso, calcular macronutrientes, descubrir restaurantes y conectar con una comunidad de entusiastas de la cocina.'
          },
          apuntes: {
            titleStart: 'Apuntes',
            titleAccent: 'DeOli',
            desc: 'Plataforma web moderna, rápida y de alto rendimiento diseñada como un centro de documentación interactivo para asignaturas de la carrera de Informática.'
          },
          love: {
            titleStart: 'Love',
            titleAccent: 'Messages',
            desc: 'Plataforma web diseñada como mero entretenimiento, construida para transformar mensajes convencionales en experiencias digitales memorables.'
          },
          pokemon: {
            titleStart: 'Pokedex',
            titleAccent: 'Prueba',
            desc: 'Página web que utiliza la PokeAPI con el fin de demostrar conocimientos fundamentales de desarrollo frontend y consumo de APIs.'
          }
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
