// Confeti Adelante

globalThis.oncontextmenu = function () {
  return false;
};

const canvasConfeti2 = document.getElementById("canvas2");
const ctxConfeti2 = canvasConfeti2.getContext("2d");

let ancho2 = (canvasConfeti2.width = window.innerWidth);
let alto2 = (canvasConfeti2.height = window.innerHeight);

let confetis2 = [];

const coloresConfeti2 = [
  "rgba(237, 16, 16, 1)",
  "rgba(15, 40, 231, 1)",
  "rgba(255, 255, 255, 1)",
  "rgba(227, 15, 47, 1)",
  "rgba(15, 19, 227, 1)",
  "rgba(235, 23, 55, 1)",
  "rgba(255, 255, 255, 1)",
];

function crearConfeti2() {
  const cantidad = 100;
  for (let i = 0; i < cantidad; i++) {
    confetis2.push({
      x: Math.random() * ancho2,
      y: Math.random() * -alto2,
      r: Math.random() * 5 + 2,
      color:
        coloresConfeti2[Math.floor(Math.random() * coloresConfeti2.length)],
      velocidadY: Math.random() * 2 + 1,
    });
  }
}

function animarConfeti2() {
  ctxConfeti2.clearRect(0, 0, ancho2, alto2);

  for (let i = 0; i < confetis2.length; i++) {
    let c = confetis2[i];
    ctxConfeti2.beginPath();
    ctxConfeti2.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctxConfeti2.fillStyle = c.color;
    ctxConfeti2.fill();

    c.y += c.velocidadY;
    if (c.y > alto2) {
      c.y = -10;
      c.x = Math.random() * ancho2;
    }
  }

  requestAnimationFrame(animarConfeti2);
}

crearConfeti2();
setTimeout(() => {
  animarConfeti2();
}, 1500);
