
    // Contact page behavior: validates form and showing simple thank-you modal
    document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const modal = document.getElementById('thankYouModal');
    const closeModal = document.querySelector('.modal-content .close');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Basic form validation (client-side)
      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !phone || !message) {
        alert("Please fill in all fields.");
        return;
      }

      // Show modal after submission
      modal.classList.add('show');

      // Reset form to blank state for another entry
      form.reset();
    });

    // Close modal via the X button
    closeModal.addEventListener('click', () => {
      modal.classList.remove('show');
    });

    // Also close when clicking outside the dialog content
    modal.addEventListener('click', (e) => { 
      if (e.target === modal) {
         modal.classList.remove('show');
      }
    });
  });