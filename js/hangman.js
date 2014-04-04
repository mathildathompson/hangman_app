// win === _.Equal(solution, word)


$(document).ready(function() {
  var words = ["word", "anotherword", "fart", "anotherfart"];

  var word = ['a','p','p','l','e']   //_.sample(words).split('');
  var solution = [];

  // var underScore = function () {
    var wordLength = word.length;
      var underscores = [];
      for ( i = 0; i < wordLength; i++) {
      underscores = underscores + "_ ";
      // new_solution = underscores.slice();
      };
    $("#solution").text(underscores);
  // };

  var counter = 8;



  var guess = function (letter){
    if (_.contains(word, letter)) { 
      correctGuess(letter);
    } else {
      incorrectGuess(letter);
    };
  };

  var correctGuess = function (letter) {
    var i = _.indexOf(word, letter);
    solution[i] = letter;
    $( "#solution" ).text(solution);
    console.log(solution[i] = letter);
debugger;
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
