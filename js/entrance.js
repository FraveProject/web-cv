const text = "Mucho gusto, soy Fredy".trim();

const typingElement = document.getElementById("typing-text");

let index = 0;

function getRandomSpeed(char) {
  // Pausa más larga después de coma o punto
  if (char === "," || char === ".") {
    return 400;
  }

  // Espacios un poco más rápidos
  if (char === " ") {
    return 100;
  }

  // Velocidad variable natural
  return Math.random() * 120 + 40; 
}

typingElement.textContent = "";

function typeWriter() {
  if (index < text.length) {
    const currentChar = text.charAt(index);
    typingElement.textContent += currentChar; 
    index++;



    setTimeout(() => {
      typeWriter();
    }, getRandomSpeed(currentChar));
  }
}

window.addEventListener("load", () => {
  
  // Espera a que termine la animación de BIENVENIDO (comienza a los 0.2s)
  setTimeout(() => {
    typeWriter();
  }, 800);

  // Mostrar tarjeta después del typing
  setTimeout(() => {
    const card = document.querySelector(".hero-card");
    card.style.transition = "all 0.8s ease-out";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, 2800);

});

const clickSound = new Audio("assets/sounds/cui.m4a");

const sounds = {
  selected: new Audio("assets/sounds/cui.m4a"),
  clicky: new Audio("assets/sounds/clicky.m4a"),
  success: new Audio("assets/sounds/suprise.m4a"),
  pop: new Audio("assets/sounds/pop-message.mp3"),
  drop: new Audio("assets/sounds/bou.mp3"),
  keyboard_sound: new Audio("assets/sounds/keyboard-single-click.mp3"),
  click_pen: new Audio("assets/sounds/click-pen.mp3")
};

document.addEventListener("click", (e) => {

  const soundType = e.target.dataset.sound;

  if (soundType && sounds[soundType]) {
    sounds[soundType].currentTime = 0;
    sounds[soundType].play();
  }
});

const boton = document.getElementById("btn-primary");

boton.addEventListener("click", function() {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
});