let slideIndex = 1;
let slideInterval;

showSlides(slideIndex);
startSlideShow();

function plusSlides(n) {
  showSlides(slideIndex += n);
  resetSlideShow();
}

function currentSlide(n) {
  showSlides(slideIndex = n);
  resetSlideShow();
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot"); // Restored dots usage
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].classList.add("active");
  dots[slideIndex-1].className += " active";
}

function startSlideShow() {
  slideInterval = setInterval(() => {
    plusSlides(1);
  }, 2000); // Change slide every 2 seconds
}

function resetSlideShow() {
  clearInterval(slideInterval);
  startSlideShow();
}

document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll(".section");
  sections.forEach(section => {
    section.classList.add("show");
  });

  const slideshowContainer = document.querySelector('.slideshow-container');
  slideshowContainer.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
  });
  slideshowContainer.addEventListener('mouseleave', () => {
    startSlideShow();
  });

  // Removed arrow button event listeners as arrows are removed from HTML

  // Typing effect for hero description
  const heroDescription = document.querySelector('.hero-description');
  if (heroDescription) {
    const text = heroDescription.textContent;
    heroDescription.textContent = '';
    let index = 0;

    function type() {
      if (index < text.length) {
        heroDescription.textContent += text.charAt(index);
        index++;
        setTimeout(type, 50);
      }
    }
    type();
  }

  // Footer layout update as per user request
  const footer = document.querySelector('footer');
  if (footer) {
    footer.innerHTML = `
      <p>Jasmeen Kaur</p>
      <p>IT Support Specialist</p>
      <p>
        Email: <a href="mailto:jasmeenkamboj55@gmail.com">jasmeenkamboj55@gmail.com</a> &nbsp; | &nbsp;
        LinkedIn: <a href="https://www.linkedin.com/in/jasmeen-kaur07/" target="_blank">Jasmeen Kaur</a>
      </p>
      <nav class="footer-nav">
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
      <p>© 2025 Jasmeen Kaur. All rights reserved.</p>
    `;
  }
});
