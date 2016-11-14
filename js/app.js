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



$(function(){

  console.log('jQuery Fired');

    var sq = "0";
  // // turn sq into an object
  // var sq = [
  //   {
  //     isShip: true,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //   },
  //   {
  //     isShip: true,
  //     hit: true
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //     hit: false
  //   },
  //   {
  //     isShip: false,
  //   },
  // ];

  function createGrid(index) {
    for (var i = 0; i < sq.length; i++) {
      $('#grid, #grid2').append('<li class="square"></li>');
    }
  }
  createGrid();
  var sinkCounter = 0;

  // $('body').on('click','.grid', function(){
  //   if( $('ul').hasClass('hide') ) {
  //     console.log('foo');
  //   }
  // });
  // Click Function
  $('.square').on('click', function(){
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

  });

}); // END load function
