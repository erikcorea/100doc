//converts staticNodeList to array of items
[...document.querySelectorAll('.drum')].map((button) => button.addEventListener('click', handleClick));

function handleClick(){
    
    this.style.color = "white";


    let audio = new Audio('sounds/crash.mp3');
    audio.play();
}

