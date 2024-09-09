// Fetch random cat image from The Cat API
document.addEventListener('DOMContentLoaded', function() {
    const fetchCatBtn = document.getElementById('fetchCatBtn');
    const catImage = document.getElementById('catImage');
    
    fetchCatBtn.addEventListener('click', function() {
        // Fetch random cat image from The Cat API
        fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => response.json())
            .then(data => {
                // Set the image source to the fetched URL
                catImage.src = data[0].url;
                catImage.style.display = 'block';  // Ensure image is displayed
            })
            .catch(error => {
                console.error('Error fetching cat image:', error);
                alert('Failed to fetch cat image. Please try again.');
            });
    });
});
  
  // Fetch breed information from breeds.json and display it
  fetch('breeds.json')
    .then(response => response.json())
    .then(breeds => {
      const breedInfoDiv = document.getElementById('breedInfo');
      breeds.forEach(breed => {
        breedInfoDiv.innerHTML += `
          <div class="breed">
            <h3>${breed.name}</h3>
            <img src="${breed.url}" alt="${breed.name}">
            <p>${breed.description}</p>
            <p><strong>Origin:</strong> ${breed.origin}</p>
            <p><strong>Life Span:</strong> ${breed.life_span} years</p>
          </div>`;
      });
    })
    .catch(error => console.error('Error fetching breed data:', error));
  
  // Handle pop-up form open/close
  const openSignUpBtn = document.getElementById('openSignUp');
  const signUpForm = document.getElementById('signUpForm');
  const closeFormBtn = document.getElementById('closeForm');
  
  // Open form when 'Sign Up' button is clicked
  openSignUpBtn.addEventListener('click', () => {
    signUpForm.style.display = 'block';
  });
  
  // Close form when 'Close' button is clicked
  closeFormBtn.addEventListener('click', () => {
    signUpForm.style.display = 'none';
  });
  
  // Form validation
  document.getElementById('signup').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
  
    if (name === '' || email === '' || password === '') {
      alert('Please fill out all fields.');
      return;
    }
  
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    alert('Sign-up successful!');
    signUpForm.style.display = 'none'; // Close the form on successful sign-up
  });
  
  // Email validation helper function
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  // JavaScript to handle pop-up form
document.addEventListener('DOMContentLoaded', function() {
    var openSignUpBtn = document.getElementById('openSignUp');
    var signUpForm = document.getElementById('signUpForm');
    var closeFormBtn = document.getElementById('closeForm');
  
    openSignUpBtn.addEventListener('click', function() {
      signUpForm.style.display = 'block';
    });
  
    closeFormBtn.addEventListener('click', function() {
      signUpForm.style.display = 'none';
    });
  });

  
  
  