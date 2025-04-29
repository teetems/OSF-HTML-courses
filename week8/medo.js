const title = document.getElementById("title");
title.style.backgroundColor = "#0099cc";
title.style.padding = "10px";
title.style.color = "black";
title.style.fontWeight = "bold";

const img2container = document.getElementById("img2container");
const scaleeimage = document.getElementById("scaleimage");
const clickableimage = document.getElementById("clickableimage");

// Apply initial styles to ensure vertical stacking and proper layout
if (clickableimage) {
    clickableimage.style.display = "block"; // Stack vertically
    clickableimage.style.margin = "10px 0"; // Optional spacing
}

// Buttons
const buttons = document.getElementsByTagName('button');
for (let button of buttons) {
    button.style.padding = '10px 20px';
    button.style.fontSize = '16px';
    button.style.cursor = 'pointer';
    button.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
}

if (img2container && scaleeimage) {
    // Style container
    img2container.style.display = "block"; // Stack vertically
    img2container.style.width = "600px"; // Adjust to image size
    img2container.style.height = "200px"; // Adjust to image size
    img2container.style.textAlign = "center"; // Center scaled image
    img2container.style.backgroundColor = "transparent"; // Initial background
    img2container.style.margin = "10px 0"; // Optional spacing

    // Style image
    scaleeimage.style.display = "block"; // Ensure image is block-level
    scaleeimage.style.width = "100%"; // Fill container
    scaleeimage.style.height = "100%";

// Text Container
const texttContainer = document.getElementById('text-container');
texttContainer.style.backgroundColor = 'lightgreen';
// texttContainer.style.Toppadding = '80px';
texttContainer.style.borderRadius = '100px';
texttContainer.style.margin = '20px';
texttContainer.style.cursor = 'pointer';
texttContainer.style.height = '100px';
texttContainer.style.textAlign = 'center';
texttContainer.style.width= '700px';

// Form Container
const formContainer = document.getElementById('formcontainer');
formContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
formContainer.style.padding = '20px';
formContainer.style.borderRadius = '100px';
formContainer.style.display = 'block';
formContainer.style.textAlign = 'center';
}


const images = [
    "/week8/gettyimages4.jpg",
    "/week8/gettyimages6.jpg"
]
let currentIndex = 0
// select the image and button
const imageElement = document.getElementById("myimage1")
 const nextbutton =document.getElementById("nextbutton")
 const prevbutton = document.getElementById("prevbutton") 
//  add click event to button
nextbutton.addEventListener("click" , ()=> {
    currentIndex = (currentIndex + 1)% images.length;
    imageElement.src = images[currentIndex];
});
    prevbutton.addEventListener("click" , ()=> {
    currentIndex = (currentIndex - 1+ images.length)% images.length;
    imageElement.src = images[currentIndex];
});
let second = document.getElementById("second");
second.style.position = "relative"
let text = document.getElementById("textdisplay");
text.style.position = "absolute"
text.style.color = "white"
second.addEventListener("mouseenter", function() {
   text.innerHTML = "The man is good" 
})
second.addEventListener("mouseleave", function() {
    text.innerHTML = ""
 })

        const imgcontainer = document.getElementById("img2container");
         const scaleimage = document.getElementById("scaleimage")
    scaleimage.addEventListener("mouseenter" ,function() {
        scaleimage.style.transition = "transform 0.5s ease-in-out";
            img2container.style.transition = "backgroundColor 0.5s ease-in-out";
            scaleimage.style.transform = "scale(0.5)";
            img2container.style.backgroundColor = "blue";
        });

        // Mouseleave: Scale to 1, yellow background, 3s ease-in-out
        scaleimage.addEventListener("mouseleave", function() {
            scaleimage.style.transition = "transform 3s ease-in-out";
            img2container.style.transition = "backgroundColor 3s ease-in-out";
            scaleimage.style.transform = "scale(1)";
            img2container.style.backgroundColor = "yellow";
        });
        // Text container with mouseover and click
        const textContainer = document.getElementById('text-container');
        textContainer.innerHTML = "Sign up to know more about me and world of web development"
        textContainer.addEventListener("mouseenter", () => {
            textContainer.innerHTML = "My Name is Adesola Temitope i am a techy enthusiast, i am so passionate about software development"
        });
        textContainer.addEventListener("mouseleave", () => {
            textContainer.innerHTML = "Sign up to know more about me and world of web development"
        });
        // textContainer.addEventListener('click', () => {
        //     textIndex = (textIndex + 1) % texts.length;
        //     textContainer.textContent = texts[textIndex];
        // });
        // Sign-up form submission
        function submitForm() {
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            if (username && email && password) {
                // formContainer.style.display = 'none';
                document.getElementById('signup-container')
            } else {
                alert('Please fill all fields');
            }
            window.open("sign.html") 
        }
        document.getElementById('signup-button').addEventListener('click', submitForm);

          
    
        