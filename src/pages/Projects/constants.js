import certificateEfset from "../../assets/images/certificate-efset.png";
import certificateFullStack from "../../assets/images/certificate-full-stack.png";
import certificateHenryHero from "../../assets/images/certificate-henry-hero.png";
import experienceOwoApp from "../../assets/images/experience-owo-app.png";
import projectCookbook from "../../assets/images/project-cookbook.png";
import projectDrawingApp from "../../assets/images/project-drawing-app.png";
import projectTaskManagement from "../../assets/images/project-task-management.png";
import projectTreeApp from "../../assets/images/project-tree-app.png";
import projectWorkMatch from "../../assets/images/project-work-match.png";

export const PAGE_VARIANTS = Object.freeze({
  enter: (direction) => ({
    x: direction === "left" ? 100 : -100,
    opacity: 0
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction === "left" ? -100 : 100, opacity: 0 })
});

export const MENU_ITEMS = Object.freeze([
  {
    index: 0,
    key: "experience",
    label: "Experiencia"
  },
  {
    index: 1,
    key: "projects",
    label: "Proyectos"
  },
  {
    index: 2,
    key: "certificates",
    label: "Certificados"
  }
]);

export const EXPERIENCES = (openModal) =>
  Object.freeze([
    {
      onClick: openModal,
      title: "OWO App",
      key: "experience-owo",
      image: experienceOwoApp,
      subtitle: "Abril 2023 - Actual",
      description:
        "Optimización y desarrollo de funcionalidades en un sistema de transporte multimodal. Integración de Google Maps. Refactorización de código. Seguridad con Firebase y autenticación JWT. Implementación de notificaciones push y monitoreo con Sentry.",
      labels: [
        { key: "experience-1-1", label: "JavaScript" },
        { key: "experience-1-2", label: "TypeScript" },
        { key: "experience-1-3", label: "React JS" },
        { key: "experience-1-4", label: "Next JS" },
        { key: "experience-1-5", label: "Vite" },
        { key: "experience-1-6", label: "Vitest" },
        { key: "experience-1-7", label: "React Testing Library" },
        { key: "experience-1-8", label: "Node JS" },
        { key: "experience-1-9", label: "Express JS" },
        { key: "experience-1-10", label: "Firebase" },
        { key: "experience-1-11", label: "Google Cloud Functions" },
        { key: "experience-1-12", label: "CI/CD con GitHub Actions" }
      ],
      argsOnClick: {
        image: experienceOwoApp,
        description:
          "Sistema de transporte multimodal, que ofrece una red eficiente de reparto colaborativa, sostenible y ecológica, logrando bajar los costos de reparto y los tiempos de entrega.",
        KeyAccomplishments: [
          "<b>Optimicé y refactoricé código preexistente en JavaScript</b> aplicando principios de código limpio, lo que aumentó la escalabilidad y mantenibilidad por parte del equipo de desarrollo.",
          "<b>Desarrollé nuevas vistas y funcionalidades según los tipos de usuarios</b>, implementando una interfaz intuitiva y funcional.",
          "<b>Integré la ruta de entrega con Google Maps API</b>, mejorando significativamente la experiencia del usuario y reduciendo los tiempos de entrega en un 15%.",
          "<b>Diseñé e implementé API REST</b> para mejorar la comunicación entre servicios y facilitar la expansión de nuevas funcionalidades en la aplicación.",
          "<b>Implementé tokens JWT y CSRF</b>, junto con la autenticación de Firebase, para fortalecer la seguridad de la plataforma, protegiendo datos sensibles y asegurando el cumplimiento de estándares de seguridad.",
          "<b>Implementé notificaciones push</b> con Capacitor y Google Cloud Functions, para enviar recordatorios automáticos sobre la disponibilidad de los repartidores, ajustando las notificaciones según la disponibilidad registrada.",
          "<b>Incrementé la consistencia de datos utilizando SWR</b> en React para resolver problemas de sincronización entre la base de datos y la interfaz, mejorando la confiabilidad de la información presentada a los usuarios.",
          "<b>Desarrollé una librería de componentes reutilizables con Vite</b>, optimizando el rendimiento de la aplicación y reduciendo tiempos de carga.",
          "<b>Implementé pruebas unitarias con Vitest y Testing Library React</b>, optimizando el flujo de desarrollo y reduciendo errores en producción.",
          "<b>Reduje el tiempo de respuesta en la corrección de fallos</b>, al implementar monitoreo en tiempo real con Sentry, lo que permitió detectar y resolver errores críticos más rápido, mejorando la estabilidad de la aplicación en producción.",
          "<b>Participé en la colaboración del equipo</b> a través de pair programming y revisiones de código, compartiendo mejores prácticas en tecnologías como React, Firebase y JavaScript."
        ],
        techStack: [
          { key: "techStack-1-1", label: "JavaScript" },
          { key: "techStack-1-2", label: "TypeScript" },
          { key: "techStack-1-3", label: "React JS" },
          { key: "techStack-1-4", label: "Next JS" },
          { key: "techStack-1-5", label: "Vite" },
          { key: "techStack-1-6", label: "Vitest" },
          { key: "techStack-1-7", label: "React Testing Library" },
          { key: "techStack-1-8", label: "Node JS" },
          { key: "techStack-1-9", label: "Express JS" },
          { key: "techStack-1-10", label: "Firebase" },
          { key: "techStack-1-11", label: "Google Cloud Functions" },
          { key: "techStack-1-12", label: "CI/CD con GitHub Actions" }
        ]
      }
    }
  ]);

export const PROJECTS = (openModal) =>
  Object.freeze([
    {
      onClick: openModal,
      image: projectTreeApp,
      key: "project-tree-app",
      title: "Árbol de datos",
      subtitle: "Enero 2025",
      description:
        "Aplicación en React con TypeScript para visualizar y manipular un árbol de datos persistente en localStorage. Permite agregar/eliminar nodos, cambiar entre modos de vista y edición, y colapsar/expandir estructuras. Incorpora notificaciones y pruebas E2E con Cypress.",
      labels: [
        { key: "project-1-1", label: "TypeScript" },
        { key: "project-1-2", label: "React JS" },
        { key: "project-1-3", label: "React Router" },
        { key: "project-1-4", label: "Material-UI" },
        { key: "project-1-5", label: "Cypress" },
        { key: "project-1-6", label: "Storybook" },
        { key: "project-1-7", label: "CI con GitHub Actions" }
      ],
      argsOnClick: {
        deploy: "https://react-tree-app-peach.vercel.app/",
        github: "https://github.com/darianaren/react-tree-app",
        techStack: [
          { key: "techStack-1-1", label: "TypeScript" },
          { key: "techStack-1-2", label: "React JS" },
          { key: "techStack-1-3", label: "React Router" },
          { key: "techStack-1-4", label: "Material-UI" },
          { key: "techStack-1-5", label: "Cypress" },
          { key: "techStack-1-6", label: "Storybook" },
          { key: "techStack-1-7", label: "CI con GitHub Actions" }
        ]
      }
    },
    {
      onClick: openModal,
      image: projectDrawingApp,
      key: "project-drawing-app",
      title: "Aplicación de dibujo",
      subtitle: "Diciembre 2024",
      description:
        "Una aplicación de dibujo simple y responsiva construida con Vue 3 y Vite. Permite a los usuarios dibujar en un lienzo, cambiar el tamaño y color del pincel, limpiar el lienzo, y guardar sus creaciones como imágenes.",
      labels: [
        { key: "project-2-1", label: "Vue 3" },
        { key: "project-2-2", label: "Vite" },
        { key: "project-2-3", label: "HTML" }
      ],
      argsOnClick: {
        deploy: "https://drawing-app-liart.vercel.app/",
        github: "https://github.com/darianaren/drawing-app",
        techStack: [
          { key: "techStack-2-1", label: "Vue 3" },
          { key: "techStack-2-2", label: "Vite" },
          { key: "techStack-2-3", label: "HTML" }
        ]
      }
    },
    {
      onClick: openModal,
      image: projectTaskManagement,
      key: "project-task-management",
      subtitle: "Noviembre 2024",
      title: "Aplicación de gestión de tareas",
      description:
        "Consta de dos partes principales: Cliente (Frontend) y API (Backend). Ambas se comunican a través de una API RESTful, permitiendo la creación, edición, eliminación, y visualización de tareas, usuarios y etiquetas.",
      labels: [
        { key: "project-3-1", label: "TypeScript" },
        { key: "project-3-2", label: "React JS" },
        { key: "project-3-3", label: "Next JS" },
        { key: "project-3-4", label: "SWR" },
        { key: "project-3-5", label: "Material-UI" },
        { key: "project-3-6", label: "Node JS" },
        { key: "project-3-7", label: "Express JS" },
        { key: "project-3-8", label: "SQLite y SQLite3" }
      ],
      argsOnClick: {
        github: "https://github.com/darianaren/task-management",
        techStack: [
          { key: "techStack-3-1", label: "TypeScript" },
          { key: "techStack-3-2", label: "React JS" },
          { key: "techStack-3-3", label: "Next JS" },
          { key: "techStack-3-4", label: "SWR" },
          { key: "techStack-3-5", label: "Material-UI" },
          { key: "techStack-3-6", label: "Node JS" },
          { key: "techStack-3-7", label: "Express JS" },
          { key: "techStack-3-8", label: "SQLite y SQLite3" }
        ]
      }
    },
    {
      onClick: openModal,
      title: "Work Match",
      subtitle: "Febrero 2023",
      image: projectWorkMatch,
      key: "project-work-match",
      description:
        "Plataforma que conecta a usuarios con empleos temporales presenciales de corta duración. Permite publicar y postularse a trabajos, gestionar autenticación, pagos, almacenamiento en la nube y notificaciones por correo.",
      labels: [
        { key: "project-4-1", label: "JavaScript" },
        { key: "project-4-2", label: "React JS" },
        { key: "project-4-3", label: "React Router" },
        { key: "project-4-4", label: "Redux" },
        { key: "project-4-5", label: "Auth0" },
        { key: "project-4-6", label: "Styled Components" },
        { key: "project-4-7", label: "Node JS" },
        { key: "project-4-8", label: "Express JS" },
        { key: "project-4-9", label: "Nodemailer" },
        { key: "project-4-10", label: "Sequelize" },
        { key: "project-4-11", label: "Docker" },
        { key: "project-4-12", label: "Stripe" }
      ],
      argsOnClick: {
        github: "https://github.com/darianaren/Work-Match",
        video:
          "https://res.cloudinary.com/dpzzxm1oc/video/upload/v1742151264/prkxkstmwwtsdlidx3ra.mp4",
        techStack: [
          { key: "techStack-4-1", label: "JavaScript" },
          { key: "techStack-4-2", label: "React JS" },
          { key: "techStack-4-3", label: "React Router" },
          { key: "techStack-4-4", label: "Redux" },
          { key: "techStack-4-5", label: "Auth0" },
          { key: "techStack-4-6", label: "Styled Components" },
          { key: "techStack-4-7", label: "Node JS" },
          { key: "techStack-4-8", label: "Express JS" },
          { key: "techStack-4-9", label: "Nodemailer" },
          { key: "techStack-4-10", label: "Sequelize" },
          { key: "techStack-4-11", label: "Docker" },
          { key: "techStack-4-12", label: "Stripe" }
        ]
      }
    },
    {
      onClick: openModal,
      key: "project-cookbook",
      title: "Libro de cocina virtual",
      subtitle: "Diciembre 2022",
      image: projectCookbook,
      description:
        "Aplicación web con autenticación de usuarios que permite crear, modificar y eliminar recetas propias, además de explorar y guardar recetas de otros usuarios. Implementa filtrado avanzado, búsqueda por nombre y una API REST para la gestión de datos.",
      labels: [
        { key: "project-5-1", label: "JavaScript" },
        { key: "project-5-2", label: "React JS" },
        { key: "project-5-3", label: "React Router" },
        { key: "project-5-4", label: "Redux" },
        { key: "project-5-5", label: "Node JS" },
        { key: "project-5-6", label: "Express JS" },
        { key: "project-5-7", label: "Sequelize" }
      ],
      argsOnClick: {
        github: "https://github.com/darianaren/my-cookbook",
        video:
          "https://res.cloudinary.com/dpzzxm1oc/video/upload/v1742151134/rwdcxxsuvb3tl8294rbf.mp4",
        techStack: [
          { key: "techStack-5-1", label: "JavaScript" },
          { key: "techStack-5-2", label: "React JS" },
          { key: "techStack-5-3", label: "React Router" },
          { key: "techStack-5-4", label: "Redux" },
          { key: "techStack-5-5", label: "Node JS" },
          { key: "techStack-5-6", label: "Express JS" },
          { key: "techStack-5-7", label: "Sequelize" }
        ]
      }
    }
  ]);

export const CERTIFICATES = (openModal) =>
  Object.freeze([
    {
      onClick: () =>
        window.open(
          "https://www.efset.org/cert/7vN1ae",
          "_blank",
          "noreferrer"
        ),
      key: "certificate-efset",
      title: "EF Standard English Test (EF SET)",
      subtitle: "Febrero 2023",
      image: certificateEfset,
      description: "Inglés B2"
    },
    {
      onClick: openModal,
      key: "certificate-full-stack",
      title: "Full Stack Web Developer",
      subtitle: "Febrero 2023",
      image: certificateFullStack,
      description: "JavaScript - HTML - CSS - Node JS - React JS - Redux - SQL",
      argsOnClick: {
        image: certificateFullStack,
        description:
          "Henry es un bootcamp enfocado en educar a sus estudiantes en carreras de tecnología, brindandoles más de 800 horas de práctica y desarrollando el aprendizaje autónomo.<br /><br />Este curso me ha brindado un entrenamiento intensivo en el que he adquirido numerosos conocimientos de las últimas tecnologías y lenguajes de programación, principalmente JavaScript, HTML, CSS, React JS, Node JS, Express y SQL.<br /><br />Así mismo, me brindó la oportunidad de construir, tanto de forma individual, como en equipo, proyectos del mundo real con metodologías y herramientas ágiles (Scrum), bajo aprendizajes colaborativos, autónomos y continuos.",
        knowledge: [
          { key: "knowledge-2-1", label: "JavaScript" },
          { key: "knowledge-2-2", label: "HTML" },
          { key: "knowledge-2-3", label: "CSS" },
          { key: "knowledge-2-4", label: "Node JS" },
          { key: "knowledge-2-5", label: "React JS" },
          { key: "knowledge-2-6", label: "Redux" },
          { key: "knowledge-2-7", label: "SQL" }
        ]
      }
    },
    {
      onClick: openModal,
      key: "certificate-henry-hero",
      title: "Reconocimiento Henry Hero",
      subtitle: "Febrero 2023",
      image: certificateHenryHero,
      description: "Docencia",
      argsOnClick: {
        image: certificateHenryHero,
        description:
          "Tuve la dicha de participar del programa Henry Hero, el cual consiste principalmente en enseñar los temas esenciales a aquellos estudiantes que están dando sus primeros pasos en programación y desean formar parte de la comunidad de Henry. Así como también, resolver sus dudas e inquietudes, inspirarles confianza y brindarles apoyo en esta nueva etapa.",
        knowledge: [
          { key: "knowledge-3-1", label: "Docencia" },
          { key: "knowledge-3-2", label: "JavaScript" },
          { key: "knowledge-3-3", label: "HTML" },
          { key: "knowledge-3-4", label: "CSS" },
          { key: "knowledge-3-5", label: "Node JS" },
          { key: "knowledge-3-6", label: "React JS" },
          { key: "knowledge-3-7", label: "Redux" },
          { key: "knowledge-3-8", label: "SQL" }
        ]
      }
    }
  ]);

export const MENU_PAGE = (openModal) =>
  Object.freeze({
    0: { menuPage: EXPERIENCES(openModal), divider: true },
    1: { menuPage: PROJECTS(openModal), divider: true },
    2: { menuPage: CERTIFICATES(openModal), orientation: "vertical" }
  });
