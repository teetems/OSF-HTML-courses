// // Style the forms
// signupForm.style.backgroundColor = "#f5f5f5";
// signupForm.style.padding = "20px";
// signupForm.style.borderRadius = "8px";
// signupForm.style.width = "300px";
// signupForm.style.margin = "20px auto";

// Style input fields
// const inputs = signupForm.querySelectorAll("input");
// inputs.forEach(input => {
//   input.style.width = "100%";
//   input.style.padding = "10px";
//   input.style.margin = "8px 0";
//   input.style.borderRadius = "4px";
//   input.style.border = "1px solid #ddd";
//   input.style.boxSizing = "border-box";
// });

// // Style submit button
// const submitButton = signupForm.querySelector("button");
// submitButton.style.backgroundColor = "#0099cc";
// submitButton.style.color = "white";
// submitButton.style.width = "100%";
// submitButton.style.padding = "10px";
// submitButton.style.border = "none";
// submitButton.style.borderRadius = "4px";
// submitButton.style.cursor = "pointer";
// submitButton.style.marginTop = "10px";


//   }
// );
// Sign-Up and Login toggle
// document.getElementById("signup-link").onclick = () => {
//   document.getElementById("signup-form").style.display = "flex";
//   document.getElementById("login-form").style.display = "none";
// };

// document.getElementById("login-link").onclick = () => {
//   document.getElementById("signup-form").style.display = "none";
//   document.getElementById("login-form").style.display = "flex";
// };

// Form validation
// document.getElementById("signup-form").onsubmit = (e) => {
//   e.preventDefault();

// ["signup-username", "signup-password", "login-username", "login-password"].forEach(input => {
//   const input = document.getElementById("input");
//   if (input) {
//     input.style.margin = "5px 0";
//     input.style.padding = "8px";
//     input.style.borderRadius = "4px";
//     input.style.border = "1px solid #ddd";
//     input.style.fontSize = "14px";
//     input.style.transition = "border-color 0.3s ease";
   
    // Add focus styling using event listeners
    // input.addEventListener("focus", function() {
    //   this.style.outline = "none";
    //   this.style.borderColor = "#0099cc";
    //   this.style.boxShadow = "0 0 5px rgba(0, 153, 204, 0.3)";
    // });
    
    // input.addEventListener("blur", function() {
    //   this.style.boxShadow = "none";
    //   if (!this.value) {
    //     this.style.borderColor = "#ddd";
    //   }
    // });
  
  
  // Style submit buttons
//   const buttons = document.querySelectorAll("#signup-form button, #login-form button");
//   buttons.forEach(button => {
//     button.style.backgroundColor = "#0099cc";
//     button.style.color = "white";
//     button.style.border = "none";
//     button.style.padding = "12px";
//     button.style.marginTop = "15px";
//     button.style.borderRadius = "4px";
//     button.style.cursor = "pointer";
//     button.style.fontSize = "16px";
//     button.style.fontWeight = "bold";
//     button.style.transition = "background-color 0.3s ease";
    
    // // Add hover effect
    // button.addEventListener("mouseover", function() {
    //   this.style.backgroundColor = "#007aa3";
    // });
    
    // button.addEventListener("mouseout", function() {
    //   this.style.backgroundColor = "#0099cc";
    // });
    
    // Add active (press) effect
    // button.addEventListener("mousedown", function() {
    //   this.style.transform = "scale(0.98)";
    // });
    
    // button.addEventListener("mouseup", function() {
    //   this.style.transform = "scale(1)";
    // });
//   });