/*
JuiceBox JavaScript Ent
Coded by Daniel
Thanks to w3schools
*/

alert('This is an example file only!')

// Fetch The Box
var modal = document.getElementById("box");

// Fetch the button
var btn = document.getElementById("btn");

// Get the close button
var span = document.getElementsByClassName("close")[0];

// Open Box when button click
btn.onclick = function() {
  modal.style.display = "block";
}

// Close box when button2 clicked
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the box, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
