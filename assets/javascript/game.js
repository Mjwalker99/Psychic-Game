var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

  var wins = 0;
  var losses = 0;
  var gLeft = 9;
  var soFar = [];

  document.onkeyup = function (event) {

    var userGuess = event.key;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];


    if (options.indexOf(userGuess) > -1) {

      if (userGuess === computerGuess) {
        wins++;
        gLeft = 9;
        soFar = [];
      }

      if (userGuess != computerGuess) {
        gLeft--;
        soFar.push(userGuess);
      }

      if (gLeft === 0) {

        gLeft = 9;
        losses++;
        soFar = [];


      }

      var html =
        "<h1> The Psychic Game </h1>" +
        "<p>Guess what letter I'm thinking of</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Left: " + gLeft + "</p>" +
        "<p>Your Guesses so far: " + soFar.join(", ") + "</p>";

      document.querySelector("#div1").innerHTML = html;


    }
  };
