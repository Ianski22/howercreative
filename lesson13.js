 document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      const statusDiv = document.getElementById('formStatus');
      
      if (!email || !message) {
        statusDiv.textContent = 'Please fill out all fields.';
        statusDiv.style.display = 'block';
        statusDiv.style.backgroundColor = '#ffdddd';
        statusDiv.style.color = '#ff0000';
        return;
      }
      
      statusDiv.textContent = 'Sending message...';
      statusDiv.style.display = 'block';
      statusDiv.style.backgroundColor = '#e6f7ff';
      statusDiv.style.color = '#0066cc';
      
      // Using fetch API
      const formData = new FormData();
      formData.append('email', email);
      formData.append('message', message);
      
      // For sending to an email service
      fetch('https://formsubmit.co/ajax/ianhowerdesign@gmail.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          message: message
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        statusDiv.textContent = 'Message sent successfully!';
        statusDiv.style.backgroundColor = '#ddffdd';
        statusDiv.style.color = '#008800';
        document.getElementById('contactForm').reset();
      })
      .catch(error => {
        console.error('Error:', error);
        statusDiv.textContent = 'There was a problem sending your message. Please try again later.';
        statusDiv.style.backgroundColor = '#ffdddd';
        statusDiv.style.color = '#ff0000';
      });
    });
