import cvIcon from "../../assets/icons/cv.svg";
import homeIcon from "../../assets/icons/home.svg";
import skillsIcon from "../../assets/icons/skills.svg";
import contactIcon from "../../assets/icons/contact.svg";
import projectsIcon from "../../assets/icons/projects.svg";
import pdf from "../../assets/pdf/Dariana Rengifo - Full Stack Developer.pdf";

export const NAV_ITEMS = Object.freeze([
  {
    to: "/",
    icon: homeIcon,
    label: "Inicio"
  },
  {
    to: "/skills",
    icon: skillsIcon,
    label: "Conocimientos"
  },
  {
    to: "/projects",
    icon: projectsIcon,
    label: "Experiencia"
  },
  {
    to: pdf,
    icon: cvIcon,
    isExternal: true,
    label: "Descargar CV",
    download: "Dariana Rengifo - Full Stack Developer - CV"
  },
  {
    to: "/contact",
    icon: contactIcon,
    label: "Contactar"
  }
]);
