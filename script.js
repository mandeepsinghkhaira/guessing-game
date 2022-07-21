let ai = Math.floor(Math.random() * 10) + 1;
let userAlert = alert("guess a number out of 10?... you have five attempts :P");
let guessAmount = 0;
let userInput;
while(ai !== userInput){
    guessAmount++;
    userInput = parseInt(window.prompt("guess a number out of 10?..."));
    console.log(`${userInput} is the wrong number, try again..`)
    if (guessAmount >= 5){
        console.log(`Sorry, your last guess  was: ${userInput}. Your five chances are up! Try again? y/n`);
        let tryAgain = prompt();
            if(tryAgain == "y" || tryAgain == "yeah" || tryAgain == "yh"){
                userInput = parseInt(window.prompt("guess a number out of 10?..."));
                console.log(`${userInput} is the wrong number, try again..`)
                guessAmount = 0;
            }
            else{
                console.log("Thanks for playing! Goodbye!")
                break;
            }
    }
}

if (userInput == ai){
console.log(`${userInput} was the correct guess! Well done!`);
}
else
{
    console.log("play again sometime!")
}
