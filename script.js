/**
 * ==============================================================================
 * MUBASHIRA PK - PERSONAL PORTFOLIO JAVASCRIPT
 * Description: Interactive behaviors, typewriter animation, form validation,
 *              scroll detection, and mobile menu handling.
 * Suitable for: Beginners & Workshop learners. Fully documented with comments!
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  // --------------------------------------------------------------------------
  // 1. DYNAMIC COPYRIGHT YEAR
  // --------------------------------------------------------------------------
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // --------------------------------------------------------------------------
  // 2. NAVBAR SCROLL EFFECT
  // Adds background shadow and blur when user scrolls down
  // --------------------------------------------------------------------------
  const mainNavbar = document.getElementById('mainNavbar');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // Toggle navbar 'scrolled' class
    if (scrollPosition > 50) {
      mainNavbar.classList.add('scrolled');
    } else {
      mainNavbar.classList.remove('scrolled');
    }

    // Toggle Back to Top button visibility
    if (backToTopBtn) {
      if (scrollPosition > 350) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    }
  });

  // Back to top click event
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --------------------------------------------------------------------------
  // 3. AUTO-COLLAPSE MOBILE NAVBAR ON NAV LINK CLICK
  // On mobile screens, when a link is tapped, the menu collapses automatically
  // --------------------------------------------------------------------------
  const navLinks = document.querySelectorAll('.modern-navbar .nav-link, .btn-hire');
  const navbarCollapse = document.getElementById('navbarContent');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        // Trigger Bootstrap's collapse toggle via its API
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
      }
    });
  });

  // --------------------------------------------------------------------------
  // 4. TYPEWRITER EFFECT IN HERO SECTION
  // Cycles through specialized titles
  // --------------------------------------------------------------------------
  const typewriterElement = document.getElementById('typewriterText');
  const roles = [
    'DATA ANALYST',
    'PYTHON & EDA SPECIALIST',
    'EXPLORATORY DATA ANALYSIS (EDA)',
    'ADVANCED EXCEL & DASHBOARDS',
    'SQL & BUSINESS INSIGHTS'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 100;
  const erasingSpeed = 50;
  const delayBetweenRoles = 1800;

  function typeEffect() {
    if (!typewriterElement) return;

    const currentRole = roles[roleIndex];

    if (isDeleting) {
      // Remove characters
      typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      // Add characters
      typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    // Determine timing for next action
    let nextDelay = isDeleting ? erasingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at end of word
      nextDelay = delayBetweenRoles;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      // Move to next title in array
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      nextDelay = 400;
    }

    setTimeout(typeEffect, nextDelay);
  }

  // Start the typewriter loop
  typeEffect();

  // --------------------------------------------------------------------------
  // 5. ANIMATE SKILL PROGRESS BARS ON SCROLL
  // Uses IntersectionObserver to trigger progress bars when scrolled into view
  // --------------------------------------------------------------------------
  const skillBars = document.querySelectorAll('.skill-progress-fill');

  if ('IntersectionObserver' in window && skillBars.length > 0) {
    const skillsObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const targetWidth = bar.style.width;
          // Temporarily set to 0 and re-apply width to trigger smooth animation
          bar.style.width = '0%';
          setTimeout(() => {
            bar.style.width = targetWidth;
          }, 100);
          observer.unobserve(bar);
        }
      });
    }, { threshold: 0.2 });

    skillBars.forEach(bar => skillsObserver.observe(bar));
  }

  // --------------------------------------------------------------------------
  // 6. CONTACT FORM VALIDATION & INTERACTIVE FEEDBACK
  // Client-side validation with error and success notifications
  // --------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const successAlert = document.getElementById('formSuccessAlert');
  const errorAlert = document.getElementById('formErrorAlert');
  const errorMessage = document.getElementById('formErrorMessage');

  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();

      // Form inputs
      const nameInput = document.getElementById('userName');
      const emailInput = document.getElementById('userEmail');
      const subjectInput = document.getElementById('userSubject');
      const messageInput = document.getElementById('userMessage');

      let isValid = true;
      let firstInvalidInput = null;

      // Helper function to validate email pattern
      function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
      }

      // 1. Validate Name
      if (!nameInput.value.trim()) {
        nameInput.classList.add('is-invalid');
        isValid = false;
        if (!firstInvalidInput) firstInvalidInput = nameInput;
      } else {
        nameInput.classList.remove('is-invalid');
        nameInput.classList.add('is-valid');
      }

      // 2. Validate Email
      if (!emailInput.value.trim() || !isValidEmail(emailInput.value.trim())) {
        emailInput.classList.add('is-invalid');
        isValid = false;
        if (!firstInvalidInput) firstInvalidInput = emailInput;
      } else {
        emailInput.classList.remove('is-invalid');
        emailInput.classList.add('is-valid');
      }

      // 3. Validate Subject
      if (!subjectInput.value.trim()) {
        subjectInput.classList.add('is-invalid');
        isValid = false;
        if (!firstInvalidInput) firstInvalidInput = subjectInput;
      } else {
        subjectInput.classList.remove('is-invalid');
        subjectInput.classList.add('is-valid');
      }

      // 4. Validate Message (minimum 10 characters)
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        messageInput.classList.add('is-invalid');
        isValid = false;
        if (!firstInvalidInput) firstInvalidInput = messageInput;
      } else {
        messageInput.classList.remove('is-invalid');
        messageInput.classList.add('is-valid');
      }

      // Handle Form Submission Outcome
      if (!isValid) {
        // Show error alert
        if (errorAlert) {
          errorMessage.textContent = 'Please correct the highlighted fields above before sending.';
          errorAlert.classList.remove('d-none');
        }
        if (successAlert) successAlert.classList.add('d-none');
        if (firstInvalidInput) firstInvalidInput.focus();
      } else {
        // Successful simulation
        if (errorAlert) errorAlert.classList.add('d-none');
        if (successAlert) {
          successAlert.classList.remove('d-none');
          successAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        // Reset form inputs & valid marks
        contactForm.reset();
        [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
          input.classList.remove('is-valid');
          input.classList.remove('is-invalid');
        });

        // Hide success alert after 6 seconds
        setTimeout(() => {
          if (successAlert) {
            successAlert.classList.add('d-none');
          }
        }, 6000);
      }
    });

    // Remove is-invalid state when user types
    const formFields = contactForm.querySelectorAll('.form-control');
    formFields.forEach(field => {
      field.addEventListener('input', () => {
        field.classList.remove('is-invalid');
        if (errorAlert) errorAlert.classList.add('d-none');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 7. DEVELOPER CONSOLE MESSAGE
  // --------------------------------------------------------------------------
  console.log(
    '%c Mubashira PK - Portfolio Loaded Successfully! %c Ready for opportunities & collaboration! ',
    'background: #8b5cf6; color: white; padding: 4px 8px; border-radius: 4px; font-weight: bold;',
    'background: #06b6d4; color: black; padding: 4px 8px; border-radius: 4px; font-weight: bold;'
  );
});
