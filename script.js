$('#input1').on('input', function () {
	$('input[name="sticker"]:checked + .two #wordone').html($(this).val());
});

$('#input2').on('input', function () {
	$('input[name="sticker"]:checked + .two #wordtwo').html($(this).val());
});

$('#fontbox1').on('input', function () {
	$('input[name="sticker"]:checked + .two #wordone').css('font-size', `${$(this).val()}px`);
	$('input[name="sticker"]:checked + .two #wordone').attr('data-font-size', $(this).val());
});

$('#fontbox2').on('input', function () {
	$('input[name="sticker"]:checked + .two #wordtwo').css('font-size', `${$(this).val()}px`);
	$('input[name="sticker"]:checked + .two #wordtwo').attr('data-font-size', $(this).val());
})

$('input[name="color"]').change(function () {
	$('input[name="sticker"]:checked').attr('data-color', $(this).val());
	$('input[name="sticker"]:checked + .two').removeClass('pink blue green winner');
	$('input[name="sticker"]:checked + .two').addClass($(this).val());
});

$('input[name="sticker"]').change(function () {
	$('#input1').val($('input[name="sticker"]:checked + .two #wordone').text().length > 0 ? $('input[name="sticker"]:checked + .two #wordone').text() : '');
	$('#input2').val($('input[name="sticker"]:checked + .two #wordtwo').text().length > 0 ? $('input[name="sticker"]:checked + .two #wordtwo').text() : '');
	$('#fontbox1').val($('input[name="sticker"]:checked + .two #wordone').attr('data-font-size') || '80');
	$('#fontbox2').val($('input[name="sticker"]:checked + .two #wordtwo').attr('data-font-size') || '140');
	$('input[name="color"][value="pink"]').prop('checked', true);
	$(`input[name="color"][value="${$('input[name="sticker"]:checked').attr('data-color')}"]`).prop('checked', true);
});

$(function() {

  $(".control").draggable();
  $("#wordone").draggable({
    grid: [20, 20]
  });
  $("#wordtwo").draggable({
    grid: [20, 20]
  });

});
