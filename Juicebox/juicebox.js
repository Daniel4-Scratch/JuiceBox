// Fetch The Box
var modal = document.getElementById("myModal");

// Fetch the button
var btn = document.getElementById("myBtn");

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
