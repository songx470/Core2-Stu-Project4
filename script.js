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
$(function () {

  $(".control").draggable();
  $("#wordone").draggable({
    grid: [20, 20]
  });
  $("#wordtwo").draggable({
    grid: [20, 20]
  });

});

$("#renderbutton").click(function () {

  html2canvas($(".one"), {
    useCORS: true,
    onrendered: function (canvas) {
      // canvas is the final rendered <canvas> element
      var myImage = canvas.toDataURL("image/png");
      window.open(myImage);
    }
  });
});


$(".shitty").click(function () {
  if ($(this).hasClass("shit")) {
    $("#wordtwo").removeClass("shit");
  } else {
    $("#wordtwo").addClass("shit");
  };
})



$('#share').click(function () {
  $('.modal').fadeToggle(200);

  $('.form .image-holder').html('');
  setTimeout(function () {
    screenshot();
  }, 500)

  $('.page-link').val(window.location.href);
  $('.image-link').val(window.location.href);

  $('.image-copy').click(function () {
    displayMessage('Copied image to clipboard');
  })

  $('.link').click(function () {
    $(this).select();
  })

  $('.modal').click(function (e) {
    if ($(e.target).is($(this))) {
      $(this).fadeOut(200);
      $('.modal').off("click");
    }
  })
})


function screenshot() {
  html2canvas($('section')[0]).then(function (canvas) {
    var dataURL = canvas.toDataURL();
    var img = $('<img>');
    img.attr('src', dataURL);

    img.appendTo('.form .image-holder')
    img.animate({
      width: '100%'
    }, 3000);

    displayMessage("Created Screenshot");
  });
}

function displayMessage(str) {
  var alert = $('.alert');

  alert.promise().done(function () {

    alert.addClass('active', 500);
    alert.text(str);

    setTimeout(function () {
      alert.removeClass('active', 500);
    }, 1500)
  })
}

var initDrawing = (function () {
  init();

  var canvas, ctx, flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false;

  var x = "black",
    y = 2;

  function init() {
    canvas = $('canvas')[0];
    // ctx = $("#canvas").get(0).getContext('2d');
    ctx = canvas.getContext("2d");
    w = canvas.width;
    h = canvas.height;

    canvas.addEventListener("mousemove", function (e) {
      findxy('move', e)
    }, false);
    canvas.addEventListener("mousedown", function (e) {
      findxy('down', e)
    }, false);
    canvas.addEventListener("mouseup", function (e) {
      findxy('up', e)
    }, false);
    canvas.addEventListener("mouseout", function (e) {
      findxy('out', e)
    }, false);
  }

  function draw() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
  }

  function findxy(res, e) {
    if (res == 'down') {
      prevX = currX;
      prevY = currY;
      currX = e.clientX - canvas.offsetLeft;
      currY = e.clientY - canvas.offsetTop;

      flag = true;
      dot_flag = true;
      if (dot_flag) {
        ctx.beginPath();
        ctx.fillStyle = x;
        ctx.fillRect(currX, currY, 2, 2);
        ctx.closePath();
        dot_flag = false;
      }
    }
    if (res == 'up' || res == "out") {
      flag = false;
    }
    if (res == 'move') {
      if (flag) {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;
        draw();
      }
    }
  }
})

initDrawing();


window.scrollTo(0, 0);
html2canvas(document.body).then((canvas) => {
  canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'screenshot.png';
        a.click();
        URL.revokeObjectURL(url);
    }, 'image/png');
});