var tempC = 15;
var tempF = (tempC * 2) + 30;

var thresholdTempF = 32;

document.write(tempF);
document.write(thresholdTempF);

function checkTemp(grey) {
	if (tempF < thresholdTempF) {
		document.body.setAttribute("style", "background-color: grey");
	};
	else {
		document.body.setAttribute("style", "background-color: yellow");
	}
}


