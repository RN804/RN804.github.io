function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


$(document).ready(function() {
// Display on click for Team building activities
$("#clickhere").click(function() {
$("#hiddentext").slideDown();
});
$("#hiddentext").click(function(){
    $("#hiddentext").slideUp();
  });
    });
