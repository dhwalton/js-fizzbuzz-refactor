$(document).ready(function() {

	function fizzBuzz(max) {
		var result = "";
		for (var i = 1; i <= max; i++) {
			var thisNum = "";
			if (i % 3 == 0) {
				thisNum += "Fizz";
			}
			if (i % 5 == 0) {
				thisNum += "Buzz";
			}
			if (thisNum == "") {
				thisNum = i;
			}
			result += thisNum + "<br />";
		}
		return result;
	}

	var fizzBuzzMax = "+" + prompt("Enter the max number for fizzin' and buzzin'");

	while (isNaN(fizzBuzzMax) || fizzBuzzMax < 1 || fizzBuzzMax % 1 != 0) {
		fizzBuzzMax = "+" + prompt("The max number must be an integer greater than 0!  Try again.");
	}

	$('body').append(fizzBuzz(fizzBuzzMax));

});