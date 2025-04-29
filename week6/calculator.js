// display current date and time
function updateDateTime(){
    const now = new Date();
    const datetimeElement =document.getElementById('datetime')
datetimeElement.textContent =now.toLocaleString();
}
setInterval(updateDateTime, 1000);
updateDateTime();



function compute(){
    const num1 = parseFloat(document.getElementById("display").value);  
      const num2 =parseFloat(document.getElementById("display2").value); 
     const operator= document.getElementById("operator"). value;
     if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resulthere").value = "Invalid input";
        return;
    }
    switch(operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                result = "Cannot divide by 0";
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = "Invalid operator";
    }

    document.getElementById("resulthere").value = result;
}


    // const result = num1 + num2; 
    // document.getElementById("resulthere").value = result;
    // const result = num1 - num2; 
    // document.getElementById("resulthere").value = result;

    
 
    
    