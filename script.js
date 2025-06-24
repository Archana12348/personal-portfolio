// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
})

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".custom-navbar")
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }
})

// Back to top button
const backToTopBtn = document.getElementById("backToTop")

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show")
  } else {
    backToTopBtn.classList.remove("show")
  }
})

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Contact form handling
function showNotification(message, type) {
  const alertBox = document.createElement("div")
  alertBox.className = `custom-alert ${type}`
  alertBox.innerHTML = `
    <i class="fas fa-${type === "success" ? "check-circle" : "exclamation-circle"}"></i>
    ${message}
    <button onclick="this.parentElement.remove()">&times;</button>
  `
  document.body.appendChild(alertBox)

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (alertBox.parentElement) {
      alertBox.remove()
    }
  }, 5000)
}

document.getElementById("contactForm").addEventListener("submit", async function (e) {
  e.preventDefault()

  const formData = new FormData(this)
  const submitBtn = this.querySelector('button[type="submit"]')
  const originalText = submitBtn.innerHTML

  // Show loading state
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...'
  submitBtn.disabled = true

  try {
    // Simulate form submission (replace with actual backend endpoint)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Show success message
    showNotification("Message sent successfully!", "success")
    this.reset()
  } catch (error) {
    // Show error message
    showNotification("Failed to send message. Please try again.", "error")
  } finally {
    // Reset button
    submitBtn.innerHTML = originalText
    submitBtn.disabled = false
  }
})




// Typing animation for hero section
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Initialize typing animation when page loads
window.addEventListener("load", () => {
  const heroSubtitle = document.querySelector(".hero-subtitle")
  if (heroSubtitle) {
    const originalText = heroSubtitle.textContent
    typeWriter(heroSubtitle, originalText, 50)
  }
})

// Skill bars animation
function animateSkillBars() {
  const skillBars = document.querySelectorAll(".progress-bar")

  skillBars.forEach((bar) => {
    const width = bar.style.width
    bar.style.width = "0%"

    setTimeout(() => {
      bar.style.width = width
    }, 500)
  })
}

// Trigger skill bars animation when about section is in view
const aboutSection = document.getElementById("about")
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateSkillBars()
      observer.unobserve(entry.target)
    }
  })
})

if (aboutSection) {
  observer.observe(aboutSection)
}

// Certificate modal functionality
document.querySelectorAll(".certificate-card").forEach((card) => {
  card.addEventListener("click", function () {
    const img = this.querySelector("img")
    const title = this.querySelector("h5").textContent

    // Create modal
    const modal = document.createElement("div")
    modal.className = "modal fade"
    modal.innerHTML = `
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body text-center">
                        <img src="${img.src}" alt="${title}" class="img-fluid">
                    </div>
                </div>
            </div>
        `

    document.body.appendChild(modal)
    const bsModal = new bootstrap.Modal(modal)
    bsModal.show()

    // Remove modal from DOM when hidden
    modal.addEventListener("hidden.bs.modal", () => {
      modal.remove()
    })
  })
})

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const parallax = document.querySelector(".hero-section")
  const speed = scrolled * 0.5


})

// Add loading class to elements as they come into view
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const loadingObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("loading")
      loadingObserver.unobserve(entry.target)
    }
  })
}, observerOptions)

// Observe all sections
document.querySelectorAll("section").forEach((section) => {
  loadingObserver.observe(section)
})

// Preloader
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader")
  if (preloader) {
    preloader.style.opacity = "0"
    setTimeout(() => {
      preloader.style.display = "none"
    }, 500)
  }
})

// Add CSS for slideInRight animation
const style = document.createElement("style")
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`
document.head.appendChild(style)

// Initialize tooltips
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl))

// Console welcome message
console.log(`
🚀 Welcome to Archana Gupta's Portfolio!
📧 Contact: archnagupta8666@gmail.com
💼 LinkedIn: http://linkedin.com/in/archana-gupta1319
🐙 GitHub: https://github.com/Archana12348

Thanks for checking out the code! 😊
`)
// Start typing effect on page load
document.addEventListener("DOMContentLoaded", function() {
  setTimeout(type, typingSpeed);
});
document.addEventListener('visibilitychange',
  function() {
      if (document.visibilityState === "visible") {
          document.title = "Projects | Portfolio Archana Gupta";
          $("#favicon").attr("href", "/assets/images/favicon.png");
      } else {
          document.title = "Come Back To Portfolio";
          $("#favicon").attr("href", "/assets/images/favhand.png");
      }
  });
