const canvas = document.getElementById('gridCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  // ancho de la ventana
  canvas.width = window.innerWidth;
  // alto total del documento para que abarque todo el scroll
  canvas.height = document.documentElement.scrollHeight;
  drawGrid();
}

function drawGrid() {
  const spacing = 100; // distancia entre líneas
  const lineWidth = 1;
  const lineColor = '#888888';

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = lineWidth;

  // dibujar líneas verticales
  for (let x = 0; x <= canvas.width; x += spacing) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }

  // dibujar líneas horizontales
  for (let y = 0; y <= canvas.height; y += spacing) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }
}

// ajustar el canvas al cargar y cuando cambie el tamaño o el scroll
window.addEventListener('load', resizeCanvas);
window.addEventListener('resize', resizeCanvas);
window.addEventListener('scroll', () => {
  // no es necesario redibujar en scroll porque el canvas es fijo en documento
});