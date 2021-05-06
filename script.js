$("#input1").keyup(function() {
  $("#wordone").html($("#input1").val());
});

$("#input2").keyup(function() {
  $("#wordtwo").html($("#input2").val());
});

$("#fontbox1").keyup(function() {
  $("#wordone").css("font-size", $("#fontbox1").val() + "px");
});

$("#fontbox2").keyup(function() {
  $("#wordtwo").css("font-size", $("#fontbox2").val() + "px");
});

$(".sq").click(function() {
  var col;
  col = $(this).attr("name");
  $(".two").removeClass("pink");
  $(".two").removeClass("blue");
  $(".two").removeClass("green");
  $(".two").removeClass("winner");

  $(".two").addClass(col);
  $(".sq").removeClass("on");
  $(this).addClass("on");
})
$(function() {

  $(".control").draggable();
  $("#wordone").draggable({
    grid: [20, 20]
  });
  $("#wordtwo").draggable({
    grid: [20, 20]
  });

});

