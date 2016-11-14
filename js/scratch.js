$box.on('click', function(){
  $(this).css('background', 'blue');
  alert('miss!');
});

$('.square').on('click', function(){
  if ( $(this).index() === 2 ) {
    $(this).css('background', 'red');
    console.log('hit!');
  } else {
    $(this).css('background', 'blue');
    console.log('miss!');
  }
});




// The click function
// Set Counter for end game function at 17

var i = 0;
var strikeCoord = $(this).index();

if( $(this).hasClass('hit') ) {
  console.log("You've already sunk this bit!");
} else if ( $(this).hasClass('missed') ) {
  console.log("Stop waisting shots! you've hit here already.");
} else{
  $('#grid2').toggleClass('hide');
  $('#grid').toggleClass('hide');
  if (sq[strikeCoord].isShip) {

    console.log('SHIP HIT!');
    $(this).css('background', 'red').addClass('hit');
    sinkCounter++;
    console.log(sinkCounter);

    if ( sinkCounter === 2 ) {
      $('.square').css('background', 'green');
      console.log("Conragtulations you have won");
    }
    // do stuff
    // register hit on coord

  } else {
    console.log('MISSED YOU FOOL!');
    $(this).css('background', 'blue').addClass('missed');
    // register hit on coord
  }
}
