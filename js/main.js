$(document).ready( function() {

  $("#meow").click( function() {
    $("#animals").append("<img class='animal' src='images/nyancat.png' alt='Nyan Cat' />");
  });

  // $(".animal").click( function() {
  //   alert("blah");
  // });

  $("#animals").on("click", ".animal", function() {
    $(this).css('visibility', 'hidden');
  });

});
