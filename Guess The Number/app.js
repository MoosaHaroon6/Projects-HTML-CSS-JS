//  body visualization  set-up  (started)

const body = document.querySelector("body");
// body.style.background = "#fff";
body.style.color = "#353148";

//  body visualization  set-up  (ended)



// elements collection (picked-up) (started)

const submitBtn = document.querySelector("#submit-btn");
const userInp = document.querySelector("#num-input");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".last-result");
const startOver = document.querySelector(".results");
const low_High = document.querySelector(".low-high");

// elements collection (picked-up)  (ended)



// para element created  (started)

const xPara = document.createElement("P");

// para element created   (ended)




// array created to push user guesses & initialized num of Guesses  (started)

let prevGuessArr = [];
let numOfGuess = 1;

// array created to push user guesses  & initialized num of Guesses  (ended)



// game's initial (start or not) (started)

let playGame = true;

// game's initial (start or not) (ended)



// initializing random number (started)

let randomNum = parseInt(Math.random() * 100 + 1);
// console.log(randomNum);

// initializing random number (ended)



// playGame is true (logical Exp)  (started)

if (playGame) {
    submitBtn.addEventListener('click',
        (e) => {
            e.preventDefault();
            const guess = parseInt(userInp.value);
            console.log(guess);
            validateGuess(guess)
            userInp.value = ''
        })
}

// playGame is true (logical Exp)  (started)



// logical functions declaration  (started)

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please enter a number");
    }
    else if (guess <= 0) {
        alert("Please enter a greater number");
    }
    else if (guess >= 101) {
        alert("Please enter a number less than 101");
    }
    else {
        prevGuessArr.push(guess);
        if (numOfGuess === 10) {
            displayGuess(guess);
            displayMessage("Your Guesses are Finished ,Click On start to Play Again");
            endGame()
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNum) {
        // displayMessage("You Guessed it Correct!");
        endGame()
        low_High.innerHTML = `<h3 class="glow">You Guessed it Correct!</h3>`;
    }
    else if (guess < randomNum) {
        displayMessage("You Guess Is Very Low");
        low_High.style.color = "#033c86";
        low_High.style.textAlign = "center";
    }
    else if (guess > randomNum) {
        displayMessage("You Guessed Very High");
        low_High.style.color = "#d80a25";
        low_High.style.textAlign = "center";
    }
}

function displayGuess(guess) {
    guessSlot.innerHTML += `<li>You Guessed :${guess}</li>`
    numOfGuess++;
    remaining.innerHTML = `${11 - numOfGuess}`;
}

function displayMessage(msg) {
    low_High.innerHTML = `<h3>${msg}</h3>`
}

function endGame() {

    userInp.value = ''
    userInp.setAttribute('disabled', '');
    xPara.classList.add('button');
    xPara.innerHTML = `
        <button id="new-Game-Btn">Start NewGame</button>`
    startOver.appendChild(xPara);
    remaining.innerHTML = `
        Random Num was : ${randomNum}
        `
    playGame = false;

    newGame()
}

function newGame() {
    const newGameBtn = document.querySelector("#new-Game-Btn");
    newGameBtn.addEventListener('click', () => {
        randomNum = parseInt(Math.random() * 100 + 1);
        userInp.removeAttribute('disabled');
        guessSlot.innerHTML = '';
        numOfGuess = 1;
        prevGuessArr = [];
        remaining.innerHTML = '';
        startOver.removeChild(xPara);
        playGame = true
    })
}

// logical functions declaration  (ended)