$(document).ready(function() {
  // This sets the first image of gallows when the screen is loaded.
    $("#gallows").append("<img id='gallows_img' src='img/img8.jpg'>")
    
  // These are the variables we use throughout the function
    var words = ["word", "anotherword", "fart", "anotherfart"];
    var word = ['w', 'o', 'r', 'd']          // _.sample(words).split('');
    var guessedLetters = [];
    var counter = 8;
  
    var guess = function (letter) {

    // Store the solution in an empty array to create the underscores and correct letter guesses  
      var solution = [];

    // All guessed letters go into an empty array to compare to word
      guessedLetters.push(letter);

    // Iterate through each letter of word
      _.each(word, function(letter){    

    // Check if the guessed letter matches any letters in the word array
        if (_.indexOf(guessedLetters, letter) === -1) {
          solution.push("_"); 
          $('#solution').text(solution.join(' '));
        } else {
          solution.push(letter); 
          $('#solution').text(solution.join(' '));
          if (word.join('') === solution.join('')) {
             win();
          };
        };
      });
    incorrectGuess(letter);
    };

   var incorrectGuess = function (letter) {
      if (_.indexOf(word, letter) === -1) {
        counter -= 1;
        $("#guesses").text(counter);
        $("#gallows").html("<img id='gallows_img' src='img/img" + counter + ".jpg'>")
        console.log(counter);
        if (counter === 0) {
          $("#guess_inputs").hide();
          lose();
        };
      };
    };
    

    var lose = function () {
    $("*")
        .fadeOut(4000).delay(4000).queue(function() {
        location.reload();
    });
    };
   
    
    var win = function () {
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

    $("#giveup-button").on('click', function() {
      $('#solution').text(word.join(''));
    });

    $("#reset-button").on('click', function() {
      location.reload();
    });

    $("#letter-button").on('click', function(){
      var letter = $('#letter-input').val();
      guess(letter);
    });
});

