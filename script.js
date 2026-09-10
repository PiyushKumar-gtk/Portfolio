/**
 * PORTFOLIO JAVASCRIPT - PIYUSH KUMAR (B.Tech 1st Year)
 * Features: Typewriter effect, Dark/Light theme toggle, Smooth scroll & active nav,
 * Skill filtering tabs, Contact form validation & modal, Back-to-top handler.
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================
     1. THEME SWITCHER (DARK / LIGHT MODE)
     ========================================== */
  const themeToggle = document.getElementById('theme-toggle');
  const htmlRoot = document.documentElement;

  // Retrieve saved theme or prefer dark
  const savedTheme = localStorage.getItem('pk_portfolio_theme') || 'dark';
  htmlRoot.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlRoot.setAttribute('data-theme', newTheme);
      localStorage.setItem('pk_portfolio_theme', newTheme);
    });
  }

  /* ==========================================
     2. DYNAMIC TYPEWRITER EFFECT
     ========================================== */
  const typedTextSpan = document.getElementById('typed-text');
  const roles = [
    "C Programming & Logic",
    "Computer Fundamentals",
    "Git & GitHub Workflows",
    "Problem Solving",
    "Teamwork & Fast Learning"
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeEffect() {
    if (!typedTextSpan) return;

    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      typedTextSpan.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      typedTextSpan.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at full word
      typingSpeed = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 500;
    }

    setTimeout(typeEffect, typingSpeed);
  }

  // Start typewriter
  setTimeout(typeEffect, 600);

  /* ==========================================
     3. NAVBAR SCROLL & ACTIVE LINK TRACKING
     ========================================== */
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('main section');
  const navLinks = document.querySelectorAll('.nav-link');
  const backToTopBtn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    // Navbar shrink styling
    if (scrollPos > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Back-to-top button visibility
    if (scrollPos > 350) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }

    // Active nav link highlight
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });

  // Back to top click handler
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* ==========================================
     4. MOBILE MENU DRAWER TOGGLE
     ========================================== */
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close mobile menu on nav link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  /* ==========================================
     5. SKILLS FILTER TABS
     ========================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCategories = document.querySelectorAll('.skill-category');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      skillCategories.forEach(category => {
        const categoryType = category.getAttribute('data-category');
        if (filter === 'all' || filter === categoryType) {
          category.style.display = 'block';
          // Trigger slight fade-in
          category.style.opacity = '0';
          setTimeout(() => {
            category.style.opacity = '1';
          }, 50);
        } else {
          category.style.display = 'none';
        }
      });
    });
  });

  /* ==========================================
     6. INTERACTIVE CONTACT FORM & MODAL
     ========================================== */
  const contactForm = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const mailtoFallbackBtn = document.getElementById('mailto-fallback-btn');

  const nameInput = document.getElementById('sender-name');
  const emailInput = document.getElementById('sender-email');
  const subjectInput = document.getElementById('sender-subject');
  const messageInput = document.getElementById('sender-message');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const subjectError = document.getElementById('subject-error');
  const messageError = document.getElementById('message-error');

  const successModal = document.getElementById('success-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalConfirmBtn = document.getElementById('modal-confirm-btn');
  const modalUserName = document.getElementById('modal-user-name');
  const modalSummary = document.getElementById('modal-summary');

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function validateForm() {
    let isValid = true;

    // Reset errors
    nameError.textContent = '';
    emailError.textContent = '';
    subjectError.textContent = '';
    messageError.textContent = '';
    [nameInput, emailInput, subjectInput, messageInput].forEach(inp => {
      inp.parentElement.classList.remove('error');
    });

    // Validate Name
    if (!nameInput.value.trim()) {
      nameError.textContent = 'Please enter your full name.';
      nameInput.parentElement.classList.add('error');
      isValid = false;
    } else if (nameInput.value.trim().length < 2) {
      nameError.textContent = 'Name should be at least 2 characters long.';
      nameInput.parentElement.classList.add('error');
      isValid = false;
    }

    // Validate Email
    if (!emailInput.value.trim()) {
      emailError.textContent = 'Please provide an email address.';
      emailInput.parentElement.classList.add('error');
      isValid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
      emailError.textContent = 'Please provide a valid email format (e.g. name@domain.com).';
      emailInput.parentElement.classList.add('error');
      isValid = false;
    }

    // Validate Subject
    if (!subjectInput.value.trim()) {
      subjectError.textContent = 'Please enter a subject.';
      subjectInput.parentElement.classList.add('error');
      isValid = false;
    }

    // Validate Message
    if (!messageInput.value.trim()) {
      messageError.textContent = 'Please enter your message.';
      messageInput.parentElement.classList.add('error');
      isValid = false;
    } else if (messageInput.value.trim().length < 10) {
      messageError.textContent = 'Message should be at least 10 characters.';
      messageInput.parentElement.classList.add('error');
      isValid = false;
    }

    return isValid;
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!validateForm()) {
        return;
      }

      const senderName = nameInput.value.trim();
      const senderEmail = emailInput.value.trim();
      const senderSubject = subjectInput.value.trim();
      const senderMsg = messageInput.value.trim();

      // Show loading state
      submitBtn.classList.add('loading');
      submitBtn.disabled = true;

      // Simulate sending via client/server
      setTimeout(() => {
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;

        // Show confirmation in modal
        modalUserName.textContent = senderName;
        modalSummary.innerHTML = `
          <p><strong>From:</strong> ${escapeHtml(senderName)} (&lt;${escapeHtml(senderEmail)}&gt;)</p>
          <p><strong>Subject:</strong> ${escapeHtml(senderSubject)}</p>
          <p><strong>Message preview:</strong> <em>"${escapeHtml(senderMsg.substring(0, 80))}${senderMsg.length > 80 ? '...' : ''}"</em></p>
        `;

        successModal.classList.add('show');

        // Reset form inputs
        contactForm.reset();
      }, 900);
    });
  }

  // Fallback: Send directly via email client (mailto:)
  if (mailtoFallbackBtn) {
    mailtoFallbackBtn.addEventListener('click', () => {
      const subject = encodeURIComponent(subjectInput.value.trim() || 'Portfolio Contact from ' + (nameInput.value.trim() || 'Visitor'));
      const body = encodeURIComponent(
        `Hi Piyush,\n\nName: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}\n\nMessage:\n${messageInput.value.trim()}\n`
      );
      window.location.href = `mailto:piyush.kumar@example.com?subject=${subject}&body=${body}`;
    });
  }

  // Modal close handlers
  function closeModal() {
    successModal.classList.remove('show');
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalConfirmBtn) modalConfirmBtn.addEventListener('click', closeModal);
  if (successModal) {
    successModal.addEventListener('click', (e) => {
      if (e.target === successModal) closeModal();
    });
  }

  // Escape HTML helper
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /* ==========================================
     7. DYNAMIC YEAR
     ========================================== */
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

});
