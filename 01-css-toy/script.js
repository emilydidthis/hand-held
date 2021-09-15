
let slider = document.getElementById("range"); // gives line-height value
let lineHeight = document.getElementById("line-height");
let text = document.getElementById("text");
slider.addEventListener("input", updateOutput);

function updateOutput(){
    // display the current line height 
    lineHeight.innerHTML = "Line height: " + slider.value;
    text.style.lineHeight = slider.value;
}

console.log("hello");