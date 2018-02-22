/*   //make guessing buttons
      var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      for (var i = 0; i < letters.length; i++) {
        var letterBtn = $("<button>");
        letterBtn.addClass("letter-button letter letter-button-color");
        letterBtn.attr("data-letter", letters[i]);
        letterBtn.text(letters[i]);
        $("#buttons").append(letterBtn);
      }

      $(".letter-button").on("click", function () {
        var fridgeMagnet = $("<div>");
        fridgeMagnet.addClass("letter fridge-color");
        fridgeMagnet.text($(this).attr("data-letter"));
        $("#graveyard").append(fridgeMagnet);
      });
 */
//get a random word
$.get('https://raw.githubusercontent.com/AlexHakman/Java-challenge/master/words.txt', function (wholeTextFile) {
  var lines = wholeTextFile.split("\n");
  var randomIndex = Math.floor(Math.random() * lines.length);
  var hangWord = lines[randomIndex];
  var placeHold = [];
  var previousGuesses = [];
  var wrongGuessCount = [];
  var guessWord = [];

  function splitWord() {
    var hangLetters = (hangWord.split(" "));
    console.log(hangLetters)
  }

  /* var uniqueLetters = hangWord.filter(function (el, i, arr) {
    return arr.indexOf(el) === i;
  });
 */

  console.log(hangWord);

  //replace display of work with _s
  for (var i = 0; i < hangWord.length; i++) placeHold.push("_");
  document.getElementById("guessWord").innerHTML = (placeHold.join(" "));


  //take guesses for letters
  $(document).on("keyup", handleKeyUp);
  function handleKeyUp(event) {
    if (event.keyCode > 64 && event.keyCode < 91) {
      var found = false;
      var previouslyEntered = false;
      var input = String.fromCharCode
        (event.keyCode).toLowerCase();

      for (i = 0; i < previousGuesses.length; i++) {
        if (input == previousGuesses[i]) {
          previouslyEntered = true;
        }
      }


      //process guesses
      if (!previouslyEntered) {
        previousGuesses.push(input);

        for (i = 0; i < hangWord.length; i++) {

          if (input == hangWord[i]) {
            found = true;
          }
        }
        if (found) {
          checkAnswer();
          function checkAnswer() {
            guessWord.push(input);

            console.log(guessWord);

          }
        }
        else {
          wrongAnswer();
          wrongGuessCount.push(input);
        }
      }
    }
  }

  //display correct guesses by replacing blanks



  //create winning and losing conditions
  function victory() {


    console.log(uniqueLetters)

    if (uniqueLetters.sort().join(',') === guessWord.sort().join(',')) {
      alert('You win!');
    }

  };


  function wrongAnswer() {

    console.log(wrongGuessCount);

    if (wrongGuessCount.length === 6) {
      alert("You lose!")
    }

    //draw body parts for wrong answers
  }

});