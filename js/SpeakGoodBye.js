(function (window) {
	var byeSpeaker = {};
	var speakWord = "Goodbye"; //creates variable speakWord with value set to "Goodbye"
	byeSpeaker.name = name; //byeSpeaker.name equal to current name in global names[i]
	byeSpeaker.speak = function (name) {
		console.log(speakWord + " " + name);
	}

	window.byeSpeaker = byeSpeaker; //byeSpeaker viewable to global window


})(window); //wrapped in function making it viewable to global window

