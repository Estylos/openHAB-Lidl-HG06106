(function(colortemp){
	var calc = Math.round((colortemp - 6500) * (500 - 150) / (2000 - 6500) + 150);
	var jsonCalc = JSON.stringify({ color_temp: calc });
	return jsonCalc
})(input)