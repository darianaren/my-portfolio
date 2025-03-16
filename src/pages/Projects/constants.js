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
      argsOnClick: {
        title: "OWO App",
        image: experienceOwoApp,
        description: "",
        KeyAccomplishments: [],
        techStack: [
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
        ]
      },
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
      ]
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
        { key: "project-2-1", label: "TypeScript" },
        { key: "project-2-2", label: "React JS" },
        { key: "project-2-3", label: "React Router" },
        { key: "project-2-4", label: "Material-UI" },
        { key: "project-2-5", label: "Cypress" },
        { key: "project-2-6", label: "Storybook" },
        { key: "project-2-7", label: "CI con GitHub Actions" }
      ]
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
        { key: "project-3-1", label: "Vue 3" },
        { key: "project-3-2", label: "Vite" },
        { key: "project-3-3", label: "HTML" }
      ]
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
        { key: "project-1-1", label: "TypeScript" },
        { key: "project-1-2", label: "React JS" },
        { key: "project-1-3", label: "Next JS" },
        { key: "project-1-4", label: "SWR" },
        { key: "project-1-5", label: "Material-UI" },
        { key: "project-1-6", label: "Node JS" },
        { key: "project-1-7", label: "Express JS" },
        { key: "project-1-8", label: "SQLite y SQLite3" }
      ]
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
      ]
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
      ]
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
      description: "JavaScript - HTML - CSS - Node JS - React JS - Redux - SQL"
    },
    {
      onClick: openModal,
      key: "certificate-henry-hero",
      title: "Reconocimiento Henry Hero",
      subtitle: "Febrero 2023",
      image: certificateHenryHero,
      description: "Docencia"
    }
  ]);

export const MENU_PAGE = (openModal) =>
  Object.freeze({
    0: { menuPage: EXPERIENCES(openModal), divider: true },
    1: { menuPage: PROJECTS(openModal), divider: true },
    2: { menuPage: CERTIFICATES(openModal), orientation: "vertical" }
  });
