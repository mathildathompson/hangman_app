  // This sets the first image of gallows when the screen is loaded.
    $("#gallows").append("<img id='gallows_img' src='img/img8.jpg'>")
    
  // These are the variables we use throughout the function
    var words = ["word", "anotherword", "fart", "anotherfart"];
    var word = ['w', 'o', 'r', 'd']          // _.sample(words).split('');
    var underscores = [];
    var guessedLetters = [];
    var counter = 8;
    var $solution_div = $('#solution'); //You dont want to continue to select this from the DOM througout the exercise as its expensive; 
    var $guesses = $('#guesses');
    var $gallows = $('#gallows');
    var $guess_input = $('#guess-inputs');

    var guess = function (letter) {

      var solution = [];

      guessedLetters.push(letter);

      _.each(word, function(letter){    
        if (_.indexOf(guessedLetters, letter) === -1) {
          solution.push("_"); 
        } else {
          solution.push(letter); 
        }
       });

      $solution_div.html(solution.join(''));
      //Before you were only checking if the user had one every time you were pushing a letter into the solution which is expensive; 
      checkWin(word, solution);
    

      incorrectGuess(letter);
    };

   var incorrectGuess = function (letter) {
      if (_.indexOf(word, letter) === -1) {
        counter -= 1;
        $guesses.text(counter);
        $gallows.html("<img id='gallows_img' src='img/img" + counter + ".jpg'>")
        if (counter === 0) {
          $guess_input.hide();
          lose();
        };
      };
    };
    

    var lose = function () {
    $("*")
        .fadeOut(4000).delay(4000).queue(function() {
        location.reload();
    });

      // location.reload();
    };
   
    
    var checkWin = function (word, solution) {
      if (word.join('') !== solution.join('')) {
        return; //It will return out of the function and run no further code; 
      };

      $("#gallows").fadeOut(1000);
      $("#content").text('You Win!')
      $("#content").css('color', 'white');
      $("#content").css('font-size', '100px')
      $('#content').each(function() {
        var elem = $(this);
          setInterval(function() {
            if (elem.css('visibility') == 'hidden') {
            elem.css('visibility', 'visible');
            } else {
            elem.css('visibility', 'hidden');
            }    
          }, 500);
        });
      $('body').css('background-image', 'url("img/psybackground.jpg")');
      $("#reset-button").text('Play Again!');
      $("#gif").css('img', 'url("img/psybackground.jpg")');
      $('#cat-gif').each(function() {
        var elem = $(this);
          setInterval(function() {
            if (elem.css('visibility') == 'hidden') {
            elem.css('visibility', 'visible'); }  
          });
        });
      $("#cat-gif").animate({left: "+1300"}, 5000);
      $("#cat-gif").animate({left: "-800"}, 5000);
    };

//Put this inside the initialise, better practice than having all of your code inside $(document).ready function; 
var initialise = function(){
    $("#giveup-button").on('click', function() {
      $('#solution').text(word.join(''));
    });

    $("#reset-button").on('click', function() {
      location.reload();
    });

    $("#letter-button").on('click', function(){
      var letter = $('#letter-input').val();
      guess(letter);
      $('#letter-input').val('');
    });
}

$(document).ready(initialise);

