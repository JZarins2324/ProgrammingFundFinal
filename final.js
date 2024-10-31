// Functions
function start(option) {
    option = prompt("Would you like to go left on the dark wooded path or right through the rocky cave? (Enter L or R)");
    return(option);
}

// Woods Path

function streamOrThicket(option){
    option = prompt("Would you like to go left into the stream or right through the thicket? (Enter L or R)");
    return(option);
}

function tunnelOrField(option) {
    option = prompt("Would you like to go left into a cave or right through a field? (Enter L or R)");
    return(option);
}

// Cave Path

function riverOrRavine(option) {
    option = prompt("Would you like to go left across a river or right into a ravine? (Enter L or R)");
    return(option);
}

function followGuide(option) {
    option = prompt("Would you like to follow the guide? (Enter Y or N)");
    return(option);
}

// Misc. Functions

function restart(reset) {
    reset = prompt("Wanna restart? (Enter Y or N)");
    return(reset);
}

function win() {
    alert("You made it out of the forest");
  }

function lose() {
    alert("You died");
}

// Variable Declarations

var choice1 = "";
var choice2 = "";
var choice3 = "";
var loopCounter = 0;
var maxLoops = 1;
var reset = "";

// Story Processing

while (loopCounter < maxLoops) {

    choice1 = start(choice1);

    if (choice1 === "L") {
        choice2 = streamOrThicket(choice2);
        if (choice2 === "L") {
            choice3 = tunnelOrField(choice3);
            if (choice3 === "L") {
                lose();
                alert("You were mauled by a bear");
            } else if (choice3 === "R") {
                lose();
                alert("You were eaten by wolves");
            }
        } else if (choice2 === "R") {
            lose();
            alert("You were trampled by a moose");
        }

    } else if (choice1 === "R") {
        choice2 = riverOrRavine(choice2);
        if (choice2 === "L") {
            lose();
            alert("You forgot you are a terrible swimmer and drowned");
        } else if (choice2 === "R") {
            choice3 = followGuide(choice3);
            if (choice3 === "Y") {
                win();
            } else if (choice3 === "N") {
                lose();
                alert("You got lost and starved to death");
            }
        }
    }

    loopCounter++;

    reset = restart(reset);
    if (reset === "Y") {
        maxLoops++;
    }
}