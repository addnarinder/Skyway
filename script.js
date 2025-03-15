// Toggle mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
});

// Form submission using Formspree
const form = document.getElementById('contact-form');
form.addEventListener('submit', async function(e) {
  e.preventDefault();
  
  const formData = new FormData(form);
  
  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (response.ok) {
      form.reset();
      document.getElementById('form-status').innerText = "Message sent successfully!";
    } else {
      document.getElementById('form-status').innerText = "Failed to send message. Please try again.";
    }
  } catch (error) {
    document.getElementById('form-status').innerText = "Error sending message. Please try again.";
    console.error('Error:', error);
  }
});
