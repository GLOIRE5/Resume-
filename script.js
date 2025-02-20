<script>
  
  const form = document.getElementById('contact-form');
  const thankYouMessage = document.getElementById('thank-you-message');
  const contactForm = document.getElementById('contact-form');


  form.addEventListener('submit', function (event) {
    event.preventDefault()

  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

        thankYouMessage.style.display = 'block';
        contactForm.style.display = 'none';  
        form.reset();
  } function(error) {
        console.log('Failed...', error);
        alert('Something went wrong. Please try again later.');
      });

</script>
