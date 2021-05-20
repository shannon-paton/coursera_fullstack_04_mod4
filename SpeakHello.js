(function (window) {
	var helloSpeaker = {};
	var speakWord = "Hello"; //creates variable speakWord with value set to "Hello"
	helloSpeaker.name = name; //helloSpeaker.name equal to current name in global names[i]
	helloSpeaker.speak = function (name) {
		console.log(speakWord + " " + name);
	}


	window.helloSpeaker = helloSpeaker; //helloSpeaker viewable to global window


})(window); //wrapped in function making it viewable to global window
