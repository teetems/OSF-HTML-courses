// Basic styling
document.body.style.fontFamily = "Arial";
document.body.style.padding = "20px";

// Title styling
const title = document.getElementById("title");
title.style.backgroundColor = "#0099cc";
title.style.padding = "10px";
title.style.color = "black";
title.style.fontWeight = "bold";

// Navigation bar
const nav = document.getElementById("nav");
nav.style.textAlign = "right";
nav.style.marginBottom = "20px";

// Image container
const imgContainer = document.getElementById("imagecontainer");
imgContainer.style.textAlign = "center";

const mainImage = document.getElementById("bg1");
mainImage.style.width = "80%";
mainImage.style.cursor = "pointer";

// Navigation buttons
const prevBtn = document.getElementById("prev-button");
const nextBtn = document.getElementById("next-button");

[prevBtn, nextBtn].forEach(btn => {
  btn.style.margin = "10px";
  btn.style.padding = "10px";
  btn.style.border = "none";
  btn.style.backgroundColor = "#0099cc";
  btn.style.color = "white";
  btn.style.borderRadius = "5px";
  btn.style.cursor = "pointer";
});

// Text reveal
const textReveal = document.getElementById("textshow");
textReveal.style.margin = "20px";
textReveal.style.display = "none";
textReveal.style.textAlign = "center";
textReveal.style.fontWeight = "bold";

// Scaling image
const scalingImage = document.getElementById("scalingimage");
scalingImage.style.transition = "transform 0.5s, background-color 0.5s";
scalingImage.style.display = "block";
scalingImage.style.margin = "20px auto";
scalingImage.style.cursor = "pointer";

// Match width of scalingImage to mainImage
function matchImageWidth() {
  scalingImage.style.width = mainImage.clientWidth + "px";
  scalingImage.style.height = "auto";
}
matchImageWidth();
window.addEventListener("resize", matchImageWidth);

// Word toggle box
const wordToggle = document.getElementById("wordtoggle");
wordToggle.style.padding = "15px";
wordToggle.style.margin = "20px auto";
wordToggle.style.width = "300px";
wordToggle.style.textAlign = "center";
wordToggle.style.backgroundColor = "lightblue";
wordToggle.style.cursor = "pointer";

// Forms styling
const formContainer = document.getElementById("formcontainer2");
formContainer.style.marginTop = "30px";
formContainer.style.backgroundColor = "#f5f5f5";
  formContainer.style.padding = "20px";
  formContainer.style.borderRadius = "8px";
  formContainer.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  formContainer.style.maxWidth = "400px";
  formContainer.style.margin = "30px auto";

// ["signupForm", "loginform"].forEach(id => {
  // const SignupFormform = document.getElementById("SignupForm");
  const SignupForm = document.getElementById("formcontainer");
  const loginForm = document.getElementById("loginform");
  
  // signupForm.style.backgroundColor = "#f5f5f5";
// signupForm.style.padding = "20px";
// signupForm.style.borderRadius = "8px";
// signupForm.style.width = "300px";
// signupForm.style.margin = "20px auto";

  // form.style.display = "flex";
//   form.style.flexDirection = "column";
//   form.style.width = "250px";
//   form.style.margin = "10px auto";
// });


  
  // Style the signup/login links
  const links = document.querySelectorAll("#Signup-link, #login-link");
  links.forEach(link => {
    link.style.color = "#0099cc";
    link.style.cursor = "pointer";
    link.style.fontWeight = "bold";
    link.style.padding = "5px";
    
    // Add hover effect
    link.addEventListener("mouseover", function() {
      this.style.textDecoration = "underline";
    });
    
    link.addEventListener("mouseout", function() {
      this.style.textDecoration = "none";
    });
  });
  
  // Hide login form initially
  document.getElementById("loginform").style.display = "grid";
// }




// Image switching
const images = ["/week7/imageweek7/getty1.jpg", "/week7/imageweek7/getty2.jpeg"];
let index = 0;

nextBtn.onclick = () => {
  if (index < images.length - 1) {
    index++;
    mainImage.src = images[index];
    textReveal.style.display = "none";
  }
};

prevBtn.onclick = () =>{
  if (index > 0) {
    index--;
    mainImage.src = images[index];
    textReveal.style.display = "none";
  }
};

// Text reveal on clicking image 2
mainImage.onclick = () => {
  if (mainImage.src.includes("getty2")) {
    textReveal.style.display = "block";
    textReveal.textContent = "This is the world of web designs";
    textReveal.style.top = mainImage.offsetTop + (mainImage.offsetHeight / 3) + "px"; // Position 1/3 down the image
    textReveal.style.left = mainImage.offsetLeft + "px";
    textReveal.style.width = mainImage.offsetWidth + "px";
    textReveal.style.color = "black";
    textReveal.style.padding = "15px";
    textReveal.style.boxSizing = "border-box";
    textReveal.style.zIndex = "10"; // Make sure it appears above the image
    textReveal.style.borderRadius = "5px";
    
  }
};

// Scale and color change on image click
scalingImage.onclick = () => {
  if (scalingImage.style.transform === "scale(1.1)") {
    scalingImage.style.transform = "scale(1)";
    scalingImage.style.backgroundColor = "transparent";
  } else {
    scalingImage.style.transform = "scale(0.7)";
    scalingImage.style.backgroundColor = "yellow";
  }
};

// Word toggle on click
const words = [
  "My name is Adesola Odunsi",
  "I am a tech enthusiast",
  "I love JavaScript",
  "thanks to OsF and Exquitec"
];
let wordIndex = 0;
wordToggle.textContent = words[wordIndex];

wordToggle.onclick = () => {
  wordIndex = (wordIndex + 2) % words.length;
  wordToggle.textContent = words[wordIndex];
};


  const user = document.getElementById("signupusername").value;
  const pass = document.getElementById("signup-password").value;
  if (!user || !pass) alert("Fill all fields to sign up.");
  else alert("Signed up successfully! Go to Login.");
// };

document.getElementById("login-form").onsubmit = (e) => {
  e.preventDefault();
  const user = document.getElementById("loginusername").value;
  const pass = document.getElementById("loginpassword").value;
  if (!user || !pass) alert("Fill all fields to login.");
  else alert("Login successful!");
};
