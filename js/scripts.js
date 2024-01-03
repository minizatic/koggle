var timerStarted = false;
var currentTime;
var timerDuration = currentTime = 5;

function timerClicked(el) {
	if (!timerStarted) {
		timerStarted = true;
		el.style.display = "none";
		document.getElementById("timer-progress").style.width = "100%";
		updateTimer();
	}
}

function updateTimer() {
	var timerPercentage = (currentTime / timerDuration) * 100;
	document.getElementById("timer-progress").style.width = `${timerPercentage}%`;
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