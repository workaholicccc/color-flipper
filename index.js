const Red=document.getElementById("red")
const Blue=document.getElementById("blue")
const Green=document.getElementById("green")
const Random=document.getElementById("random")

function setColor(name){  //function to change the background color
    document.body.style.backgroundColor=name;
}

Red.addEventListener("click",function(){  //this will change the color to red when the button is clicked
    setColor("red");
});

Blue.addEventListener("click",function(){ //this will change the color to blue when the button is clicked
    setColor("blue");
});

Green.addEventListener("click",function(){ //this will change the color to green when the button is clicked
    setColor("green");
});

Random.addEventListener("click",function(){  //this will generate random colors when the button is clicked
    // Generate random values for Red, Green, and Blue (0-255)
    const r = Math.floor(Math.random() * 256); // 0-255
    const g = Math.floor(Math.random() * 256); // 0-255
    const b = Math.floor(Math.random() * 256); // 0-255
    
    // Setting the  background color in RGB format
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    //if we want to decide the color spectrum:
    // const colors=["red","blue","green","yellow","purple","orange"];
    // const randomColor=colors[Math.floor(Math.random()*colors.length)]; //generating random number
    // setColor(randomColor);

})
//Note: .addEventListener() method lets us handle HTML events.
// It "listens" for specific events (like clicks, key presses, mouse movements) on an HTML element, and runs a function when that event occurs.
//element.addEventListener(event, function); ----> basic syntax