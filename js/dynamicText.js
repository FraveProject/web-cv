const skillsInfo = {
  html: {
    title: "HTML",
    desc: "Desarrollo estructuras web organizadas para constriur la base de las interfaces. Utilizo nombres descriptivos a etiquetas para mejorar la legibilidad, accesibilidad y jerarquía del contenido."
  },
  css: {
    title: "CSS",
    desc: "Diseño interfaces modernas y adaptables utilizando Flexbox y Grid. Me enfoco en crear estilos limpios, responsivos y organizados para mejorar la experiencia visual y la adaptabilidad a distintos dispositivos."
  },
  js: {
    title: "JavaScript",
    desc: "Implemento interactividad en las páginas web mediante manipulación del DOM, manejo de eventos y scripts dinámicos que mejoran la experiencia del usuario."
  },
  sql: {
    title: "SQL",
    desc: "Elaboro métodos para la manipulación y gestion de datos a través de consultas SQl preparadas, aplicando técnicas que garanticen la integridad de la información."
  },

  resolucion_conflictos: {
    title: "Resolución de conflictos",
    desc: "Capacidad de analizar situaciones de desacuerdo e intentar llegar a un acuerdo. Procuro escuchar a las partes involucradas para hallar posibles alternativas que favorezcan el trabajo en equipo"
  },
  creatividad: {
    title: "Creatividad",
    desc: "Me gusta explorar distintas formas de resolver un problema y proponer ideas que aporten valor. Busco combinar lógica y creatividad para desarrollar soluciones funcionales y originales en los proyectos."
  },
  comunicacion: {
    title: "Comunicación",
    desc: "Procuro expresar ideas de forma clara y organizada, facilitando la comprensión dentro del equipo. Una buena comunicación permite coordinar mejor el trabajo y evita malentendidos."
  },
  empatia: {
    title: "Empatía",
    desc: "Intento comprender las perspectivas y necesidades de otras personas para mejorar la colaboración. La empatía me ayuda a construir relaciones respetuosas y a trabajar fluidamente dentro del equipo."
  }
};


document.querySelectorAll(".skill").forEach(button => {

  button.addEventListener("click", () => {

    const skill = button.dataset.skill;
    const card = button.closest(".card");

    const subtitle = card.querySelector(".skill-subtitle");
    const description = card.querySelector(".skill-description");

    subtitle.textContent = skillsInfo[skill].title;
    description.textContent = skillsInfo[skill].desc;

    card.querySelectorAll(".skill").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

  });

});

document.querySelectorAll(".skill.active").forEach(btn => btn.click());