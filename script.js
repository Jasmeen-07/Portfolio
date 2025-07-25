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

// EmailJS integration for contact form
// Note: You must replace 'YOUR_USER_ID', 'YOUR_SERVICE_ID', and 'YOUR_TEMPLATE_ID' with your actual EmailJS credentials

(function(){
  emailjs.init('YOUR_USER_ID');
})();

const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  clearErrors();

  let isValid = true;

  const nameInput = document.getElementById('name');
  if (!nameInput.value.trim()) {
    showError('name', 'Please enter your name');
    isValid = false;
  }

  const emailInput = document.getElementById('email');
  if (!emailInput.value.trim()) {
    showError('email', 'Please enter your email');
    isValid = false;
  } else if (!validateEmail(emailInput.value.trim())) {
    showError('email', 'Please enter a valid email address');
    isValid = false;
  }

  const subjectInput = document.getElementById('subject');
  if (!subjectInput.value.trim()) {
    showError('subject', 'Please enter a subject');
    isValid = false;
  }

  const messageInput = document.getElementById('message');
  if (!messageInput.value.trim()) {
    showError('message', 'Please enter your message');
    isValid = false;
  }

  if (isValid) {
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
      from_name: nameInput.value.trim(),
      from_email: emailInput.value.trim(),
      subject: subjectInput.value.trim(),
      message: messageInput.value.trim()
    })
    .then(() => {
      formStatus.textContent = 'Thank you for your message! I will get back to you soon.';
      formStatus.style.color = '#28a745';
      contactForm.reset();
    }, (error) => {
      formStatus.textContent = 'Oops! Something went wrong. Please try again later.';
      formStatus.style.color = '#d93025';
      console.error('EmailJS error:', error);
    });
  } else {
    formStatus.textContent = '';
  }
});

function showError(fieldId, message) {
  const errorSpan = document.getElementById(fieldId + '-error');
  if (errorSpan) {
    errorSpan.textContent = message;
  }
}

function clearErrors() {
  const errorSpans = document.querySelectorAll('.error-message');
  errorSpans.forEach(span => {
    span.textContent = '';
  });
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email.toLowerCase());
}
