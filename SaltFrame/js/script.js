// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", function () {
  const mobileToggle = document.querySelector(".mobile-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      const icon = this.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-times");
      }
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      if (!event.target.closest(".nav-wrapper")) {
        navMenu.classList.remove("active");
        const icon = mobileToggle.querySelector("i");
        if (icon) {
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars");
        }
      }
    });

    // Close menu when clicking a link
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", function () {
        navMenu.classList.remove("active");
        const icon = mobileToggle.querySelector("i");
        if (icon) {
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars");
        }
      });
    });
  }

  // Theme Switcher
  const themeSwitcher = document.querySelector(".theme-switcher");
  const body = document.body;

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    if (themeSwitcher) {
      const icon = themeSwitcher.querySelector("i");
      if (icon) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
      }
    }
  }

  if (themeSwitcher) {
    themeSwitcher.addEventListener("click", function () {
      body.classList.toggle("dark-mode");
      const icon = this.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-moon");
        icon.classList.toggle("fa-sun");
      }

      // Save preference
      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    });
  }

  // Smooth Scroll for Anchor Links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#" && href !== "") {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offsetTop = target.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // Cookie Banner Functionality
  const cookieBanner = document.getElementById("cookieBanner");
  const cookieModal = document.getElementById("cookieModal");
  const acceptAllBtn = document.getElementById("acceptAll");
  const customizeBtn = document.getElementById("customizeCookies");
  const declineBtn = document.getElementById("declineAll");
  const savePreferencesBtn = document.getElementById("savePreferences");
  const closeModalBtn = document.getElementById("closeModal");

  // Check if user has already made a choice
  const cookieConsent = localStorage.getItem("cookieConsent");
  if (!cookieConsent && cookieBanner) {
    cookieBanner.style.display = "block";
  }

  if (acceptAllBtn) {
    acceptAllBtn.addEventListener("click", function () {
      localStorage.setItem("cookieConsent", "all");
      localStorage.setItem("analyticsCookies", "true");
      localStorage.setItem("marketingCookies", "true");
      if (cookieBanner) cookieBanner.style.display = "none";
    });
  }

  if (customizeBtn) {
    customizeBtn.addEventListener("click", function () {
      if (cookieModal) cookieModal.style.display = "flex";
    });
  }

  if (declineBtn) {
    declineBtn.addEventListener("click", function () {
      localStorage.setItem("cookieConsent", "essential");
      localStorage.setItem("analyticsCookies", "false");
      localStorage.setItem("marketingCookies", "false");
      if (cookieBanner) cookieBanner.style.display = "none";
    });
  }

  if (savePreferencesBtn) {
    savePreferencesBtn.addEventListener("click", function () {
      const analyticsChecked =
        document.getElementById("analyticsCookies").checked;
      const marketingChecked =
        document.getElementById("marketingCookies").checked;

      localStorage.setItem("cookieConsent", "custom");
      localStorage.setItem("analyticsCookies", analyticsChecked);
      localStorage.setItem("marketingCookies", marketingChecked);

      if (cookieModal) cookieModal.style.display = "none";
      if (cookieBanner) cookieBanner.style.display = "none";
    });
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", function () {
      if (cookieModal) cookieModal.style.display = "none";
    });
  }

  // Contact Form Submission
  const contactForm = document.getElementById("contactForm");
  const successModal = document.getElementById("successModal");
  const closeSuccessModalBtn = document.getElementById("closeSuccessModal");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simulate form submission
      setTimeout(function () {
        contactForm.reset();
        if (successModal) successModal.style.display = "flex";
      }, 500);
    });
  }

  if (closeSuccessModalBtn) {
    closeSuccessModalBtn.addEventListener("click", function () {
      if (successModal) successModal.style.display = "none";
    });
  }

  // Close modal on outside click
  if (successModal) {
    successModal.addEventListener("click", function (e) {
      if (e.target === successModal) {
        successModal.style.display = "none";
      }
    });
  }

  // Newsletter Form Submission
  const newsletterForm = document.getElementById("newsletterForm");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;

      if (email) {
        alert(
          "Thank you for subscribing! You will receive our latest updates."
        );
        this.reset();
      }
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    if (question) {
      question.addEventListener("click", function () {
        const isActive = item.classList.contains("active");

        // Close all FAQ items
        faqItems.forEach((faq) => faq.classList.remove("active"));

        // Open clicked item if it wasn't active
        if (!isActive) {
          item.classList.add("active");
        }
      });
    }
  });

  // Parallax Effect (Simple)
  const parallaxElements = document.querySelectorAll("[data-speed]");

  if (parallaxElements.length > 0) {
    window.addEventListener("scroll", function () {
      const scrolled = window.pageYOffset;

      parallaxElements.forEach((element) => {
        const speed = element.getAttribute("data-speed") || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = "translateY(" + yPos + "px)";
      });
    });
  }

  // Back to Top Button (if exists)
  const backToTop = document.querySelector(".back-to-top");

  if (backToTop) {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 300) {
        backToTop.style.display = "block";
      } else {
        backToTop.style.display = "none";
      }
    });

    backToTop.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }

  // Lazy Loading Images (Simple)
  const images = document.querySelectorAll("img[data-src]");

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver(function (
      entries,
      observer
    ) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  } else {
    // Fallback for older browsers
    images.forEach((img) => {
      img.src = img.dataset.src;
      img.removeAttribute("data-src");
    });
  }

  // Active Navigation Highlighting
  const currentLocation = window.location.pathname.split("/").pop();
  const menuItems = document.querySelectorAll(".nav-menu a");

  menuItems.forEach((item) => {
    const href = item.getAttribute("href");
    if (href === currentLocation || (currentLocation === "" && href === "/")) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
});
