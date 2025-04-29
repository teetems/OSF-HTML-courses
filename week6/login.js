document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // prevent form from refreshing the page
  
    const username = document.getElementById('username') 
    const password = document.getElementById('12345')
  
    const validUsername = 'admin';
    const validPassword = '12345';
  
    if (username =="admin" , validUsername && password =="12345" , validPassword) {
      // Optional message before redirect
      document.getElementById('message').textContent = 'Login successful! Redirecting...';
      document.getElementById('message').style.color = 'green';
  
      // Delay and then redirect
      setTimeout(() => {
        window.location.href = 'dashboard.html'; // Change to my target page
      }, 1500); // 1.5 seconds delay
    } else {
      document.getElementById('message').textContent = 'Invalid username or password.';
      document.getElementById('message').style.color = 'red';
    }
  });