// win === _.Equal(solution, word)


$(document).ready(function() {
  var words = ["word", "anotherword", "fart", "anotherfart"];

  var word = _.sample(words);
  var solution = [];

  var counter = 8;



  var guess = function (letter){
    // is letter in word?
    if { 
  // correctGuess(letter);
    } else {
  // incorrectGuess(letter);
    };
  };

  var correctGuess = function (letter) {
  // pass letter(s) into solution
  // sort alphabetically word and solution
  // if (_.Equal(solution, word)) {
      // win();
    }; 
  };

  var incorrectGuess = function (letter) {
  // 
  // -1 counter
  // if counter === 0 fun lose();
  };

  var lose = function () {

  };

  var win = function () {

  };


  $("#button").on('click', function(){
    console.log('i am here');
    var letter = $(this).val();
    guess(lettter);
  });

});
