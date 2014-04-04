// win === _.Equal(solution, word)


$(document).ready(function() {
  var words = ["word", "anotherword", "fart", "anotherfart"];

  var word = ['a','p','p','l','e','s']              //_.sample(words).split('');
  var solution = [];

  var counter = 8;



  var guess = function (letter){
    if (_.contains(word,letter)) { 
      correctGuess(letter);
    } else {
      incorrectGuess(letter);
    };
  };

  var correctGuess = function (letter) {
    solution.push(letter);
    // console.log(_.uniq(word).sort());

    if (_.uniq(word).sort() === solution.sort()) {

    console.log('win');
      // win();
    }; 
  };

  var incorrectGuess = function (letter) {
    counter -= 1;
  //div inner html
    console.log(counter);
    if (counter === 0) {
      lose();
    };

      var lose = function () {
        console.log('you suck!');
       };
    };
  // var win = function () {
   



  $("#letter-button").on('click', function(){
    var letter = $('#letter-input').val();
    // debugger;
    guess(letter);
  });
});
