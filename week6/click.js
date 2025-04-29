let hw= document.getElementsByClassName("man")
for (let i = 0; i < hw.length; i++) {
    hw[i].style.color= "green"
    hw[i].style.backgroundColor= "pink"
    hw[i].style.margin = "10px"
}

function let(){
    window.alert("good")
}

// const man={name:"Grace", age: "56", color: "yellow", height:"600m",
// answer:function()console.log('hello,'+ this.name + "" +"is"+ ""+ this.age +"years old");


const man= {name:"Grace", age:"55", color: "yellow", height:"600m",
    answer:function(){console.log('hello,'+ this.name + "" + "is"+ " "+ this.age +"years old");
    }
}
man.answer();

 

  
    
