var timerBar, currentTime, diceElements, shuffledDice, timerPercentage, timerTextEl, selectedFace, currentCell, cellRotation;
var timerStarted = false;
var timerDuration = currentTime = 180;
var diceArray = [
	"AAEEGN", "ABBJOO", "ACHOPS", "AFFKPS",
	"AOOTTW", "CIMOTU", "DEILRX", "DELRVY",
	"DISTTY", "EEGHNW", "EEINSU", "EHRTVW",
	"EIOSST", "ELRTTY", "HIMNQU", "HLNNRZ"
];

function timerClicked(e) {
	if (!timerStarted) {
		populateDice();
		timerStarted = true;
		e.target.style.display = "none";
		timerBar.style.width = "100%";
		updateTimer();
	}
}

function updateTimer() {
	timerPercentage = (currentTime / timerDuration) * 100;
	timerBar.style.width = timerPercentage + "%";
	if (currentTime > 0) {
        currentTime--;
        setTimeout(updateTimer, 1000);
    } else {
    	timerTextEl.style.display = "block";
    	timerTextEl.style.color = "black";
    	currentTime = timerDuration;
    	timerStarted = false;
    }
}

function populateDice() {
	shuffledDice = shuffleArray(diceArray);
	for (var i=0; i<diceElements.length; i++){
		selectedFace = shuffledDice[i].charAt(Math.floor(Math.random() * 6));
		currentCell = diceElements[i];
		currentCell.textContent = selectedFace == "Q" ? "Qu" : selectedFace;
		cellRotation = Math.floor(Math.random() * 4) * 90;
		currentCell.style.transform = currentCell.style.webkitTransform = "rotate(" + cellRotation + "deg)";
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

function contentLoaded() {
	timerBar = document.getElementById("timer-progress");
	timerTextEl = document.getElementById("timer-text");
	diceElements = document.getElementsByClassName("dice-content");
	document.getElementById("timer-text").addEventListener("click", timerClicked);
	populateDice();
}

document.addEventListener("DOMContentLoaded", contentLoaded);