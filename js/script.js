/* Pseudo Approach
-- Create some boxes that respond to a click - alert hit/miss
-- create two boxes that alert when both are hits
-- turn boxes into js elements that loop through - applying an id to each.
-- spit out boxes using a for loop
-- object keys : is-ship, coordinate
*/


/*
  -- Log the gameplay inside a JSON file



*/

var players;

$(function(){

  // alert('jQuery Fired');

  players = [[
    0,0,1,1,0,0,0,0,0,0,
    1,0,0,0,0,0,0,1,0,0,
    1,0,0,0,0,0,0,1,0,0,
    1,0,0,0,0,0,0,1,0,0,
    0,0,0,0,0,0,0,1,0,0,
    0,1,1,1,0,0,0,1,0,0,
    0,0,0,0,0,0,0,0,0,0,
    0,0,0,1,1,1,1,0,0,0,
    0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0
  ], [
    0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,1,1,1,0,0,0,
    0,1,0,0,0,0,0,0,0,0,
    0,1,0,0,1,1,1,1,0,0,
    0,1,0,0,0,0,0,0,0,0,
    0,1,0,0,0,0,0,1,0,0,
    0,1,0,0,0,0,0,1,0,0,
    0,0,0,0,0,0,0,1,0,0,
    0,1,1,0,0,0,0,0,0,0
  ]];
  var playersCounter = [0,0];


  players.forEach(function(positions, key){
    for(i = 0; i < 100; i++){
      $('[data-player='+key+']').append('<li class="square" id='+ i + '></li>');
    }
  });

  $('body').on('click','.square', function(){

    var currentPlayer = $(this).parent().attr('data-player');

    if( $(this).hasClass('hit') ) {
      alert("You've already sunk this bit!");
    } else if ( $(this).hasClass('missed') ) {
      alert("Stop waisting shots! you've hit here already.");
    }else{
      $('#grid2').toggleClass('hide');
      $('#grid').toggleClass('hide');
    // If the square is a 1 === SHIP then style and log HIT
      if ( players[currentPlayer][$(this).attr('id')] === 1 ) {
        // Log Hit Comment
        alert('SHIP HIT!');

        // Change Background Colour
        $(this).css('background', 'red url(images/boom.png)').addClass('hit');

        // Add a hit to the hit counter
        playersCounter[currentPlayer]++;
        // alert(playersCounter);

        // $('#grid2').toggleClass('hide');
        // $('#grid').toggleClass('hide');
        // Track number of hits and once reached max - end game
        if ( playersCounter[currentPlayer] === 17 ) {
          $('.square').css('background', 'green');
          alert("Conragtulations Player " + (parseInt(currentPlayer)+1) + " you have won");
        }
      } else {
        alert('MISSED YOU FOOL!');
        $(this).css('background', 'blue').addClass('missed');

      }

    } // END check for hit

  });

}); // END load function
