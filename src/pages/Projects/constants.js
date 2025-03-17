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
        video:
          "https://res.cloudinary.com/dpzzxm1oc/video/upload/v1742168341/mequju2udovehy82xp2l.mp4",
        description:
          "Aplicación web diseñada para mostrar una estructura jerárquica de navegación, permitiendo una experiencia fluida, intuitiva y visualmente atractiva. La aplicación está construida con React y Material-UI, ofreciendo una interfaz limpia y completamente responsiva que se adapta a dispositivos móviles y escritorios.<br /><br />El proyecto incluye una configuración de Storybook, que permite el desarrollo y prueba de componentes aislados, y una integración de Cypress para pruebas end-to-end (E2E). Además, la aplicación está preparada con GitHub Actions para integración continua, asegurando que los tests se ejecuten automáticamente en cada cambio realizado en el código.",
        KeyAccomplishments: [
          "<b>Desarrollé una estructura jerárquica de navegación</b> que permite a los usuarios interactuar con una interfaz intuitiva.",
          "<b>Implementé una interfaz limpia y responsiva con Material-UI</b>, proporcionando una experiencia visualmente atractiva, adecuada para diferentes dispositivos.",
          "<b>Configuré React Router para gestionar rutas de manera eficiente</b>, permitiendo la navegación entre diferentes secciones de la aplicación sin recargar la página.",
          "<b>Integré Storybook en el proyecto</b>, facilitando el desarrollo y la documentación de los componentes de manera aislada, lo que mejora la mantenibilidad y escalabilidad del proyecto.",
          "<b>Configuré Cypress para realizar pruebas end-to-end (E2E)</b>, asegurando que la aplicación funcione correctamente en todos los flujos de usuario, de manera automatizada y eficiente.",
          "<b>Integré automatización con GitHub Actions</b>, configurando un flujo de trabajo para ejecutar pruebas automáticamente cada vez que se realiza un push o pull request en la rama principal del repositorio."
        ],
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
        video:
          "https://res.cloudinary.com/dpzzxm1oc/video/upload/v1742164445/xpce9hp9svsdqi9znmhc.mp4",
        description:
          "Aplicación de dibujo interactiva y responsiva que permite a los usuarios crear dibujos en un lienzo digital. Cuenta con herramientas fáciles de usar, como un pincel personalizable, borrado rápido y la opción de guardar tus creaciones como imágenes PNG.<br /><br />Desarrollada con Vue 3 y Vite, esta aplicación ofrece una experiencia de usuario fluida y rápida, adaptándose perfectamente a cualquier dispositivo gracias a su diseño responsivo.",
        KeyAccomplishments: [
          "<b>Creé una interfaz de usuario intuitiva</b> que permite a los usuarios dibujar en un lienzo digital, elegir el color y el tamaño del pincel de manera rápida y fácil.",
          "<b>Implementé herramientas de personalización</b> para el tamaño y color del pincel, brindando a los usuarios un control total sobre su experiencia de dibujo.",
          "<b>Implementé la funcionalidad de borrado rápido</b>, permitiendo a los usuarios limpiar el lienzo con un solo clic y empezar de nuevo sin complicaciones.",
          "<b>Integré la opción de guardar el dibujo como una imagen PNG</b>, permitiendo que los usuarios descarguen y compartan sus creaciones con facilidad.",
          "<b>Utilicé un diseño responsivo</b>, asegurando que la aplicación se adapte perfectamente a dispositivos de diferentes tamaños y resoluciones."
        ],
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
        { key: "project-3-8", label: "SQLite y SQLite3" },
        { key: "project-3-8", label: "Jest" }
      ],
      argsOnClick: {
        github: "https://github.com/darianaren/task-management",
        video:
          "https://res.cloudinary.com/dpzzxm1oc/video/upload/v1742171284/dkbrhtmj3eb9cmkjynds.mp4",
        description:
          "Esta aplicación de gestión de tareas extá diseñada para mejorar la productividad y organización de los usuarios. Ofrece una interfaz moderna e intuitiva donde los usuarios pueden crear, editar y organizar sus tareas de manera eficiente. Cada tarea cuenta con etiquetas personalizadas, título, descripción y fecha de entrega, lo que permite una categorización flexible y una mejor administración del flujo de trabajo.<br /><br />Además, la aplicación permite filtrar y visualizar tareas de manera dinámica, brindando una experiencia fluida y centrada en la eficiencia. Con un diseño responsivo, que garantiza una experiencia de usuario óptima tanto en escritorio como en móvil.",
        KeyAccomplishments: [
          "<b>Desarrollé una aplicación de gestión de tareas</b> con React y Material UI, ofreciendo una interfaz moderna y fácil de usar para organizar tareas de manera eficiente.",
          "<b>Implementé un sistema de filtrado combinado</b>, que permite buscar tareas de manera eficiente utilizando las etiquetas, estados y fechas de las mismas.",
          "<b>Integré SWR (Stale-While-Revalidate)</b> para el manejo de datos remotos, mejorando el rendimiento al hacer fetch de las tareas y ofreciendo una experiencia de usuario más fluida y rápida.",
          "<b>Implementé un diseño responsivo</b>, mejorando la experiencia del usuario en dispositivos móviles y de escritorio.",
          "<b>Desarrollé una API REST</b>, proporcionando endpoints seguros y eficientes para la gestión de tareas.",
          "<b>Implementé pruebas unitarias con Jest</b>, asegurando la fiabilidad de los endpoints y reduciendo errores en producción.",
          "<b>Configuré ESLint y Prettier en el proyecto</b>, asegurando un código limpio, estandarizado y fácil de mantener.",
          "<b>Apliqué principios de Clean Code y estructuración de responsabilidad única</b>, facilitando la escalabilidad y el mantenimiento del código a largo plazo."
        ],
        techStack: [
          { key: "techStack-3-1", label: "TypeScript" },
          { key: "techStack-3-2", label: "React JS" },
          { key: "techStack-3-3", label: "Next JS" },
          { key: "techStack-3-4", label: "SWR" },
          { key: "techStack-3-5", label: "Material-UI" },
          { key: "techStack-3-6", label: "Node JS" },
          { key: "techStack-3-7", label: "Express JS" },
          { key: "techStack-3-8", label: "SQLite y SQLite3" },
          { key: "techStack-3-8", label: "Jest" }
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
        description:
          "Work Match es una aplicación diseñada para conectar a personas que necesitan realizar trabajos temporales con aquellos que buscan ofrecer su tiempo. Con trabajos que deben completarse en menos de 8 horas, como cortar césped, lavar coches, pasear perros o limpiar casas, esta plataforma facilita la búsqueda y publicación de tareas de forma rápida y eficaz.<br /><br />Con una experiencia de usuario intuitiva, Work Match permite a los usuarios filtrar ofertas según sus preferencias y postularse a trabajos cercanos o adecuados a sus habilidades. Además, puedes realizar ambas acciones (ofrecer y buscar trabajo) desde una sola cuenta, maximizando la flexibilidad y accesibilidad.",
        KeyAccomplishments: [
          "<b>Desarrollé una aplicación de página única (SPA)</b> utilizando la pila PERN (PostgreSQL, Express, React, Node.js), ofreciendo una experiencia de usuario fluida y rápida sin recargar la página.",
          "<b>Implementé una API RESTful</b> que gestiona de forma eficiente las ofertas de trabajo, usuarios y pagos, permitiendo una interacción sin interrupciones entre el frontend y el backend.",
          "<b>Integré autenticación y autorización de terceros con Auth0</b>, lo que permite a los usuarios registrarse, iniciar sesión y gestionar sus cuentas de manera segura y sencilla.",
          "<b>Implementé una pasarela de pago con Stripe</b>, permitiendo a los usuarios realizar pagos seguros directamente en la plataforma para trabajos completados.",
          "<b>Configuré almacenamiento en la nube</b> para la gestión y persistencia de datos, asegurando que toda la información esté accesible y segura.",
          "<b>Implementé notificaciones por correo electrónico</b> para mantener a los usuarios actualizados sobre el estado de sus ofertas o postulaciones, mejorando la experiencia general de uso.",
          "<b>Desarrollé una funcionalidad de eliminación lógica</b>, garantizando que los usuarios puedan eliminar sus publicaciones de trabajo sin perder información valiosa.",
          "<b>Optimizé la forma de búsqueda y filtrado combinado</b>, lo que permite a los usuarios encontrar trabajos específicos rápidamente, mejorando la eficiencia y rapidez de la aplicación.",
          "<b>Apliqué estilos utilizando módulos CSS</b>, asegurando un diseño limpio, moderno y fácilmente mantenible para una experiencia visual consistente.",
          "<b>Diseñé e implementé un formulario controlado y optimizado</b>, incorporando validaciones en tiempo real, mejorando la experiencia de usuario y reduciendo errores de entrada."
        ],
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
        description:
          "Plataforma de Recetas Interactivas donde los usuarios pueden publicar y guardar sus recetas favoritas. La aplicación permite a los usuarios registrarse, iniciar sesión, y editar su perfil. Además de publicar, modificar y eliminar recetas propias, también pueden explorar y guardar las recetas de otros usuarios, manteniéndolas siempre a mano.<br /><br />Con un diseño intuitivo y responsivo, la aplicación se adapta a cualquier dispositivo, brindando una experiencia fluida tanto en móviles como en escritorios. De igual forma, los usuarios pueden disfrutar de un tema claro u oscuro según su preferencia y activar música para acompañar su experiencia en la cocina.",
        KeyAccomplishments: [
          "<b>Desarrollé una API RESTful con Express JS</b>, permitiendo a los usuarios gestionar recetas y perfiles de manera segura.",
          "<b>Implementé un sistema de autenticación con bcryptjs</b>, asegurando que los usuarios puedan registrarse e iniciar sesión de manera segura.",
          "<b>Desarrollé filtros avanzados de búsqueda con opciones combinadas</b>, permitiendo a los usuarios encontrar recetas según criterios específicos como nombre, tipo de dieta y/o tiempo de preparación, entre otros.",
          "<b>Desarrollé una interfaz intuitiva con React</b>, permitiendo a los usuarios ver, guardar y buscar recetas de otros usuarios.",
          "<b>Optimizé la experiencia de usuario con una interfaz responsiva</b> usando CSS Modules, garantizando el acceso fácil y fluido desde cualquier dispositivo.",
          "<b>Manejé el estado global con Redux</b>, facilitando la gestión de configuraciones de la aplicación como el cambio de tema (claro/oscuro) y la activación/desactivación de música de fondo, mejorando la experiencia del usuario.",
          "<b>Diseñé e implementé un formulario controlado y optimizado</b>, mejorando la experiencia de usuario y reduciendo errores de entrada.",
          "<b>Utilicé axios para realizar solicitudes HTTP al backend</b>, garantizando la eficiencia en el manejo de datos de recetas y usuarios."
        ],
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
          "Henry es un bootcamp enfocado en educar a sus estudiantes en carreras de tecnología, brindandoles más de 800 horas de práctica y desarrollando el aprendizaje autónomo.<br /><br />Este curso me ha brindado una capacitación intensiva en la que he adquirido numerosos conocimientos de las últimas tecnologías y lenguajes de programación, principalmente JavaScript, HTML, CSS, React JS, Node JS, Express y SQL.<br /><br />Así mismo, me brindó la oportunidad de construir, tanto de forma individual, como en equipo, proyectos del mundo real con metodologías y herramientas ágiles (Scrum), bajo aprendizajes colaborativos, autónomos y continuos.",
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
