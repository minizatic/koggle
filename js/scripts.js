var timerStarted = false;
var currentTime;
var timerDuration = currentTime = 5;
var diceArray = [
	"AAEEGN", "ABBJOO", "ACHOPS", "AFFKPS",
	"AOOTTW", "CIMOTU", "DEILRX", "DELRVY",
	"DISTTY", "EEGHNW", "EEINSU", "EHRTVW",
	"EIOSST", "ELRTTY", "HIMNQU", "HLNNRZ"
];

function timerClicked(el) {
	if (!timerStarted) {
		populateDice();
		timerStarted = true;
		el.style.display = "none";
		document.getElementById("timer-progress").style.width = "100%";
		updateTimer();
	}
}

function updateTimer() {
	var timerPercentage = (currentTime / timerDuration) * 100;
	document.getElementById("timer-progress").style.width = timerPercentage + "%";
	if (currentTime > 0) {
        currentTime--;
        setTimeout(updateTimer, 1000);
    } else {
    	var timerTextEl = document.getElementById("timer-text");
    	timerTextEl.style.display = "block";
    	timerTextEl.style.color = "black";
    	currentTime = timerDuration;
    	timerStarted = false;
    }
}

function populateDice() {
	var shuffledDice = shuffleArray(diceArray);
	var diceElements = document.getElementsByClassName("dice");
	var selectedFace;
	for (var i=0; i<diceElements.length; i++){
		selectedFace = shuffledDice[i].charAt(Math.floor(Math.random() * 6));
		diceElements[i].textContent = selectedFace == "Q" ? "Qu" : selectedFace;
	}
}

function shuffleArray(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

document.addEventListener("DOMContentLoaded", populateDice);