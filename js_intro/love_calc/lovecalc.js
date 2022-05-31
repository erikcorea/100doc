prompt('What is you name?');
prompt('What is your name?');

var loveScore = Math.random() * 100;
loveScore  = Math.floor(loveScore) + 1;

if(loveScore > 70){
    alert("your socre is " + loveScore + "%" + "You love each other like Kany e loves Kanye.");
} else if(loveScore > 30 && loveScore < 70){
    alert("Your score " + loveScore + "is pretty good");
} else {
    alert("Your love scored is " + loveScore + "%");
}

function isLeap(year){
    if(year % 4 === 0){
        if(year % 100 === 0){
            if(year % 400 === 0){
                return "Leap Year"
            } else {
                return "Not a leap year.";
            }
        } else {
            return "Leap year.";
        }
    } else {
        return "Not leap year.";
    }
}


