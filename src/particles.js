export function initParticles() {
  const container = document.getElementById("particles-bg");
  if (!container) return;

  const canvas = document.createElement("canvas");
  canvas.className = "absolute inset-0 w-full h-full";
  container.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  let particles = [];
  let mouse = { x: null, y: null };
  let animationId;
  let lastTime = 0;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 0.5;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.5 + 0.1;
      this.hue = Math.random() * 60 + 240;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      if (mouse.x && mouse.y) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          this.x -= dx * 0.005;
          this.y -= dy * 0.005;
        }
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${this.hue}, 70%, 60%, ${this.opacity})`;
      ctx.fill();
    }
  }

  function init(count) {
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }

  function connect() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `hsla(250, 70%, 60%, ${0.08 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animate(time) {
    const delta = time - lastTime;
    if (delta > 16) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      connect();
      lastTime = time;
    }
    animationId = requestAnimationFrame(animate);
  }

  window.addEventListener("resize", resize);
  document.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  document.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  resize();
  init(Math.min(Math.floor((canvas.width * canvas.height) / 12000), 80));
  animate(0);

  return () => {
    cancelAnimationFrame(animationId);
    window.removeEventListener("resize", resize);
    container.removeChild(canvas);
  };
}
