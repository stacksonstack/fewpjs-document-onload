// Your code goes here
document.addEventListener("DOMContentLoaded", changeText()); 
  
function changeText(){
    myText = document.getElementById('text')
    myText.innerHTML = "This is really cool!"
}