
var colors = ['red', 'blue', 'green', 'maroon', 'crimson', 'teal', 'sienna'];

i = 0;

$( document ).ready(function() {

  $('#change-color').click(function(){
    $('#wrapper').css('backgroundColor', colors[i]);
    i = (i === colors.length - 1) ? 0 : (i+1);
  });

});



