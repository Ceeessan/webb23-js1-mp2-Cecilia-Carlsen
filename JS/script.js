const typeYourNameHere = document.querySelector('#typeYourName');
const signInBtn = document.querySelector('#signIn');

signInBtn.addEventListener('click', showsYourName);

function showsYourName(event) {
    event.preventDefault();


    const yourNameShows = document.querySelector('#yourName');

    yourNameShows.innerText = "Hello " + typeYourNameHere.value + signInBtn.value + ", let's play!";
    yourNameShows.style.fontFamily = "Bebas Neue";
    yourNameShows.style.letterSpacing = '1px';

    form.reset();
}




const buttonsDiv = document.querySelector('#playButtonsDiv');
const resultShown = document.querySelector('#playerVScomputer');


buttonsDiv.addEventListener('click', clickOnButtons);

// Result of who wins the round.
let scoreForPlayer = 0;
let scoreForComputer = 0;
let scoreForTie = 0;

// Result of how many rounds you have won.
let playerWins = 1;
let computerWins = 1;

// Function for playing the game
function clickOnButtons(event) {

    let playerScore = document.querySelector('#playerScore');
    let computerScore = document.querySelector('#computerScore');
    let tieScore = document.querySelector('#tieScore');

    let myMove = event.target.getAttribute('move');

    let computerMove = Math.ceil(Math.random() * 3);

    // Computers rule for randomly picking Rock, Paper and Scissors.
    if (computerMove === 1) {
        computerMove = 'rock';
        resultShown.innerText = 'rock';
    }
    else if (computerMove === 2) {
        computerMove = 'paper';
        resultShown.innerText = 'paper';
    } else if (computerMove === 3) {
        computerMove = 'scissors';
        resultShown.innerText = 'scissors';
    }

    const textForPlayer = 'Your score:';
    const textForComputer = 'Computer Score:';
    const textForTie = 'Tie:';



    if (myMove === 'rock') {
        resultShown.innerText = 'rock';

        if (computerMove === 'rock') {
            resultShown.innerText = 'rock';
            scoreForTie++;
        }
        else if (computerMove === 'paper') {
            resultShown.innerText = 'paper';
            scoreForComputer++;
        }
        else if (computerMove === 'scissors') {
            resultShown.innerText = 'scissors';
            scoreForPlayer++;

        }
    }


    else if (myMove === 'paper') {
        resultShown.innerText = 'paper';


        if (computerMove === 'rock') {
            resultShown.innerText = 'rock';
            scoreForPlayer++;
        }
        else if (computerMove === 'paper') {
            resultShown.innerText = 'paper';
            scoreForTie++;
        }
        else if (computerMove === 'scissors') {
            resultShown.innerText = 'scissors';
            scoreForComputer++;
        }
    }



    else if (myMove === 'scissors') {
        resultShown.innerText = 'scissors';


        if (computerMove === 'rock') {
            resultShown.innerText = 'rock';
            scoreForComputer++;
        }
        else if (computerMove === 'paper') {
            resultShown.innerText = 'paper';
            scoreForPlayer++;
        }
        else if (computerMove === 'scissors') {
            resultShown.innerText = 'scissors';
            scoreForTie++;
        }

    }


    resultShown.innerText = ` Your move: ${myMove}, 
    Computer move: ${computerMove}`;

    playerScore.innerText = `${textForPlayer} ${scoreForPlayer}`;
    computerScore.innerText = `${textForComputer} ${scoreForComputer}`;
    tieScore.innerText = `${textForTie} ${scoreForTie}`;


    const winnerResult = document.querySelector('#winnerResult');
    const roundsOfWinsForPlayer = document.querySelector('#roundsOfWinsForPlayer');
    const roundsOfWinsForComputer = document.querySelector('#roundsOfWinsForComputer');


    //Determine winner and reset game.
    if (scoreForPlayer === 3) {
        scoreForPlayer = 0;
        scoreForComputer = 0;
        scoreForTie = 0;

        winnerResult.innerText = 'You win!';

        roundsOfWinsForPlayer.innerText = `Your score: ${playerWins++}`;
    }

    else if (scoreForComputer === 3) {
        scoreForPlayer = 0;
        scoreForComputer = 0;
        scoreForTie = 0;

        winnerResult.innerText = 'Computer wins!';

        roundsOfWinsForComputer.innerText = `Computer score: ${computerWins++}`;
    }
    else {
        winnerResult.innerText = 'Who will win?';
    }




    const resetBtn = document.querySelector('#resetGame');
    resetBtn.addEventListener('click', resetGame)

    function resetGame() {

        playerScore.innerText = `Your score:`;
        computerScore.innerText = `Computer score:`;
        tieScore.innerText = `Tie:`;

        roundsOfWinsForComputer.innerText = "Your score: ";
        roundsOfWinsForPlayer.innerText = "Computer score: ";
    }

}
