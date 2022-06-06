let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];


function nextSequence(){
    let randomNum = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNum];

    gamePattern.push(randomChosenColor);

    //1. Use jQuery to select the button with the same id as the randomChosenColour
    //2. Use Google/Stackoverflow to figure out how you can use jQuery to animate a flash to the button selected in step 1.
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    let audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play()
}

nextSequence()


