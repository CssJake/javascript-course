$(function(){
  console.log('jQuery Fired');

  var sq = [0,0,1,1,0];

  for (var i = 0; i < sq.length; i++) {
    var val = sq[i];
    // Append the Squares
    $('#grid').append('<li class="square" id='  + i + '> ' +'</li>');
    //
    // $('body').on('click',val[i], function(val){
    //   console.log(val);
    // });

    if ( sq[i] === 'a' ) {
      console.log('There is an a');
    }
  }
  $('body').on('click','.square', function(){

    console.log(sq[$(this).attr('id')]);

    if ( sq[$(this).attr('id')] === 1 ) {
      console.log('kaboom');
    }
    // if value = 1 {
      // do this

    // } else {
        // do that

    // }
    if ( sq[i] === 'a' ) {
      console.log('There is an a');
    }
  });
});
