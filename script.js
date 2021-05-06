var selected;
var selectedPoint;
$("#input1").keyup(function () {
  if (selectedPoint.indexOf('pinka') >= 0) {
    $("#wordone").html($("#input1").val());
  } else if (selectedPoint.indexOf('pinkb') >= 0) {
    $("#wordoneb").html($("#input1").val());
  } else if (selectedPoint.indexOf('pinkc') >= 0) {
    $("#wordonec").html($("#input1").val());
  }
});

$("#input2").keyup(function () {
  if (selectedPoint.indexOf('pinka') >= 0) {
    $("#wordtwo").html($("#input2").val());
  } else if (selectedPoint.indexOf('pinkb') >= 0) {
    $("#wordtwob").html($("#input2").val());
  } else if (selectedPoint.indexOf('pinkc') >= 0) {
    $("#wordtwoc").html($("#input2").val());
  }
});

$("#fontbox1").keyup(function () {
  if (selectedPoint.indexOf('pinka') >= 0) {
    $("#wordone").css("font-size", $("#fontbox1").val() + "px");
  } else if (selectedPoint.indexOf('pinkb') >= 0) {
    $("#wordoneb").css("font-size", $("#fontbox1").val() + "px");
  } else if (selectedPoint.indexOf('pinkc') >= 0) {
    $("#wordonec").css("font-size", $("#fontbox1").val() + "px");
  }

});

$("#fontbox2").keyup(function () {
  if (selectedPoint.indexOf('pinka') >= 0) {
    $("#wordtwo").css("font-size", $("#fontbox2").val() + "px");
  } else if (selectedPoint.indexOf('pinkb') >= 0) {
    $("#wordtwob").css("font-size", $("#fontbox2").val() + "px");
  } else if (selectedPoint.indexOf('pinkc') >= 0) {
    $("#wordtwoc").css("font-size", $("#fontbox2").val() + "px");
  }

});

$(".two").click(function () {
  selected = $(this).attr("class");
  selectedPoint = selected.slice(4, selected.length);
  console.log(selectedPoint);
})
$(".sq").click(function () {
  var col;
  col = $(this).attr("name");

  if (selectedPoint.indexOf('pinka') >= 0) {
    $(".pinka").removeClass("pink");
    $(".pinka").removeClass("blue");
    $(".pinka").removeClass("green");
    $(".pinka").removeClass("winner");

    $(".pinka").addClass(col);
    $(".sq").removeClass("on");
    $(this).addClass("on");

  } else if (selectedPoint.indexOf('pinkb') >= 0) {
    $(".pinkb").removeClass("pink");
    $(".pinkb").removeClass("blue");
    $(".pinkb").removeClass("green");
    $(".pinkb").removeClass("winner");

    $(".pinkb").addClass(col);
    $(".sq").removeClass("on");
    $(this).addClass("on");

  } else if (selectedPoint.indexOf('pinkc') >= 0) {
    $(".pinkc").removeClass("pink");
    $(".pinkc").removeClass("blue");
    $(".pinkc").removeClass("green");
    $(".pinkc").removeClass("winner");

    $(".pinkc").addClass(col);
    $(".sq").removeClass("on");
    $(this).addClass("on");

  }
})
