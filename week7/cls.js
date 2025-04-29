// ocument.getElementById('loginForm').addEventListener('submit', function(e) {
//     e.preventDefault(); // prevent form from refreshing the page
//   document.getElementById('loginform')
    function validate(){

let username = document.forms["loginaction"]["username"].value 
    let password = document.forms["loginaction"]["password"].value
  
    const validUsername = 'adeayo';
    const validPassword = '12345';
  
    if (username =='adeayo' , validUsername && password =='12345' , validPassword) {
      // Optional message before redirect
      document.getElementById('message').textContent = 'Login successful! Redirecting...';
      document.getElementById('message').style.color = 'green';
    }
      if(username == ""){
    alert("username is required")
    return false;
};
 if(password == ""){
    alert("password is needed")
 return false;
}   
 window.open("/week2/assignment3.html")   
    
   
}

       
    //     window.location.href=""; // Change to my target page
    //   }, ; 
    // else (
    //   document.getElementById('message').textContent = 'Invalid username or password.';
    //   document.getElementById('message').style.color = 'red';
    // )
//   });