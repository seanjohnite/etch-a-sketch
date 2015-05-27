size = 720

addBlack = function() {
	$(this).addClass('black');
};

addRandomRGB = function() {
	random_color = '#' + Math.floor(Math.random()*16777215).toString(16);
	$(this).css("background-color", random_color);
};

addGray10 = function() {
	if ($(this).css("opacity") < 1) {
		$(this).css("opacity", "+=0.10")
	};
};

resetAndMakeNew = function() {
	$('div.container').empty();

	var deflt = '16'

	newSquares = prompt("How many squares per side for new grid?", deflt);

	newDivSize = 720.0 / newSquares;

	for (i = 0; i < newSquares * newSquares; i++) {
		drawingBoard.append("<div></div>")
	};

	$('div.container').children('div').css({
		"height": newDivSize,
		"width": newDivSize
	});
}

resetForBlack = function() {
	resetAndMakeNew();
	$('.container').children('div').mouseenter(addBlack);
}

colorReset = function() {
	resetAndMakeNew();
	$('.container').children('div').mouseenter(addRandomRGB);
}

grayReset = function() {
	resetAndMakeNew();
	$('.container').children('div').css({"background-color": "#000", "opacity": "0"});
	$('.container').children('div').mouseenter(addGray10);
};

$(document).ready(function() {

	$('body').prepend("<div class='container'></div>");

	drawingBoard = $('div.container');

	drawingBoard.before("<div class='buttons'><button id='blackreset'>Reset For Black</button></div>");

	$('.buttons').append("<button id='color_reset'>Reset to Random Colors</button>");

	$('.buttons').append("<button id='gray_reset'>Reset for Shades of Gray</button>");

	$('.buttons').before("<br><h1>Etch-A-Sketch</h1>")

	$('.buttons').before("<br><p>Click one of the reset buttons to reset the Etch-A-Sketch. My favorite is the shades of gray :)</p>")
	
	

	for (i = 0; i < 16*16; i++) {
		drawingBoard.append("<div></div>")
	};

	drawingBoard.children('div').mouseenter(addBlack);

	$('#blackreset').on('click', resetForBlack);
	$('#color_reset').on('click', colorReset);
	$('#gray_reset').on('click', grayReset)
});