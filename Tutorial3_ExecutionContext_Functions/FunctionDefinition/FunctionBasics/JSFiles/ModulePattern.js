/**
 * Created by viveksh2 on 7/29/14.
 */
var secretNumberGame = function() {
    var secretNumber = 21;

    return {
        responses: {
            true: "You are correct! Answer is " + secretNumber,
            lower: "Too high!",
            higher: "Too low!"
        },

        guess: function(guess) {
            var key =
                (guess == secretNumber) ||
                (guess < secretNumber ? "higher": "lower");
            alert(this.responses[key])
        }
    }
}

var game = secretNumberGame();
game.guess(45); //"Too high!"
game.guess(18); //"Too low!"
game.guess(21); //"You are correct! Answer is 21"