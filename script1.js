document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
    <header>
      <nav class="navbar">
        <a href="#home" class="logo">Jasmeen</a>
        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#courses">Courses</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  `;

  const footerHTML = `
    <footer class="footer" style="background-color: #f9e6f0; color: #6b4c6b; padding: 2rem 1rem; font-family: 'Roboto', sans-serif; text-align: center;">
      <div class="footer-container" style="max-width: 1100px; margin: 0 auto;">
        <p style="font-weight: 700; font-size: 1.5rem; margin-bottom: 0.2rem;">Jasmeen Kaur</p>
        <p style="margin-top: 0; margin-bottom: 0.5rem; font-style: italic;">IT Support Specialist</p>
        <p style="margin: 0.5rem 0; font-weight: 600;">
          <i class="fas fa-envelope"></i> Email: <a href="mailto:jasmeenkamboj55@gmail.com" style="color: #6b4c6b; text-decoration: underline;">jasmeenkamboj55@gmail.com</a>
        </p>
        <p style="margin: 0.5rem 0; font-weight: 600;">
          <i class="fab fa-linkedin"></i> LinkedIn: <a href="https://www.linkedin.com/in/jasmeen-kaur07/" target="_blank" style="color: #6b4c6b; text-decoration: underline;">Jasmeen Kaur</a>
        </p>
        <nav style="margin: 1.5rem 0; font-size: 1.1rem;">
          <a href="#about" style="color: #6b4c6b; text-decoration: none; font-weight: 600; margin: 0 1rem;">About</a>
          <a href="#education" style="color: #6b4c6b; text-decoration: none; font-weight: 600; margin: 0 1rem;">Education</a>
          <a href="#experience" style="color: #6b4c6b; text-decoration: none; font-weight: 600; margin: 0 1rem;">Experience</a>
          <a href="#skills" style="color: #6b4c6b; text-decoration: none; font-weight: 600; margin: 0 1rem;">Skills</a>
          <a href="#projects" style="color: #6b4c6b; text-decoration: none; font-weight: 600; margin: 0 1rem;">Projects</a>
          <a href="#contact" style="color: #6b4c6b; text-decoration: none; font-weight: 600; margin: 0 1rem;">Contact</a>
        </nav>
        <p style="margin-top: 1rem; font-size: 0.9rem;">© 2024 Jasmeen Kaur. All rights reserved.</p>
      </div>
    </footer>
  `;

  const heroSection = document.querySelector('.hero-section');
  if (heroSection) {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    heroSection.insertBefore(canvas, heroSection.firstChild);
    const ctx = canvas.getContext('2d');

    let width, height;
    let particles = [];

    function init() {
      width = heroSection.offsetWidth;
      height = heroSection.offsetHeight;
      canvas.width = width;
      canvas.height = height;

      particles = [];
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 2 + 1,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    }

    function update() {
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx = -p.vx;
        if (p.y < 0 || p.y > height) p.vy = -p.vy;
      });
    }

    function animate() {
      update();
      draw();
      requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
      init();
    });

    init();
    animate();
  }

  const header = document.createElement("div");
  header.innerHTML = headerHTML;
  document.body.insertBefore(header, document.body.firstChild);

  const footer = document.createElement("div");
  footer.innerHTML = footerHTML;
  document.body.appendChild(footer);
});
