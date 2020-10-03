export function juiceBox() {
  // Fetch The Box
  var modal = document.getElementById("jb-box");

  // Fetch the button
  var btn = document.getElementById("jb-btn");

  // Get the close button
  var span = document.getElementsByClassName("jb-close")[0];
  
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
}
export function juiceBoxPopup(head, cont, foot){
  document.head.innerHTML+='<!-- The Box --> <div id="jb-box" class="jb-box"> <!-- Box content --> <div class="jb-box-content"> <div class="jb-box-header"> <span class="jb-close">&times;</span> <h2>'+ head +'</h2> </div> <div class="jb-box-body"> <p>'+ cont +'</p> </div> <div class="jb-box-footer"> <h3>'+ foot +'</h3> </div> </div> </div>'
}
// <!-- The Box --> <div id="box" class="box"> <!-- Box content --> <div class="box-content"> <div class="box-header"> <span class="close">&times;</span> <h2>Hello!</h2> </div> <div class="box-body"> <p>This is a JuiceBox popup!</p> <p>:)</p> </div> <div class="box-footer"> <h3>© JuiceBox</h3> </div> </div> </div>
