// Toggle mobile menu with a minimalist animation
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Open the Free Estimate modal when clicking the button in the hero section
const openEstimate = document.getElementById('open-estimate');
const estimateModal = document.getElementById('estimate-modal');
const closeEstimate = document.getElementById('close-estimate');

openEstimate.addEventListener('click', () => {
  estimateModal.style.display = 'block';
});

closeEstimate.addEventListener('click', () => {
  estimateModal.style.display = 'none';
});

// Close the modal if clicking outside the modal content
window.addEventListener('click', (e) => {
  if (e.target === estimateModal) {
    estimateModal.style.display = 'none';
  }
});

// Form submission for Contact Form using Formspree
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const formData = new FormData(contactForm);
    try {
      const response = await fetch(contactForm.action, {
        method: contactForm.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        contactForm.reset();
        document.getElementById('form-status').innerText = "Message sent successfully!";
      } else {
        document.getElementById('form-status').innerText = "Failed to send message. Please try again.";
      }
    } catch (error) {
      document.getElementById('form-status').innerText = "Error sending message. Please try again.";
      console.error('Error:', error);
    }
  });
}

// Form submission for Free Estimate Form using Formspree
const estimateForm = document.getElementById('estimate-form');
if (estimateForm) {
  estimateForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const formData = new FormData(estimateForm);
    try {
      const response = await fetch(estimateForm.action, {
        method: estimateForm.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      if (response.ok) {
        estimateForm.reset();
        document.getElementById('estimate-status').innerText = "Estimate submitted successfully!";
        // Optionally, close the modal after submission
        estimateModal.style.display = 'none';
      } else {
        document.getElementById('estimate-status').innerText = "Failed to submit estimate. Please try again.";
      }
    } catch (error) {
      document.getElementById('estimate-status').innerText = "Error submitting estimate. Please try again.";
      console.error('Error:', error);
    }
  });
}

// Auto-scroll portfolio container (optional scrolling effect)
const portfolioContainer = document.querySelector('.portfolio-container');
if (portfolioContainer) {
  let scrollAmount = 0;
  function autoScrollPortfolio() {
    scrollAmount += 1;
    if (scrollAmount >= portfolioContainer.scrollWidth - portfolioContainer.clientWidth) {
      scrollAmount = 0;
    }
    portfolioContainer.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }
  // Adjust the interval as needed
  setInterval(autoScrollPortfolio, 50);
}
