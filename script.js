
  function addShadows (sel, num_of_shad) {
    var shadows = sel+'{text-shadow: ';
    var font_size = $(sel).css('font-size').slice(0,-2);
    while(--num_of_shad){
      shadows += '0 '+ (-font_size*num_of_shad) + 'px 0 rgba(0,0,0,'+(1/(num_of_shad+0.1))+'),';
      
    }

    // what follows is kinda nasty :(
    var styleTag = $('style').html();
    $('style').remove();
    $('html > head').append('<style>'+styleTag+shadows.slice(0,-1) + ";}"+'</style>');
  }

  function rotate (jqSel) {
      
    var letters = $(jqSel).html().split('');
    var n = letters.length;
    var deg = 360 / n;
    for (var i = 0; i < n; i++) {
      var TRANSF = "transform: rotate("+Math.round(deg*i)+"deg);";
      var el = $('<span/>', {
          'class': 'rot-' + i, 
          text: letters[i],
          style: TRANSF + '-webkit-' + TRANSF});
      $(jqSel).before(el);
    }
    $(jqSel).remove();
  }

  rotate('#rotated');
  addShadows('span[class^=rot-]', 4);

  $('#in').on('keyup', function (e) {
    $('span[class^=rot-]').remove();
    var newEl = $('<span></span', {id: 'rotated', text: $(this).val()})
    $('body').append(newEl);

    rotate('#rotated');
    //console.log();
    addShadows('span[class^=rot-]', $('#in-number').val());
  });