$(document).foundation();

centerVertical = function(container) {
	jQuery(container).each(function() {
		$(this).css({
			'position' : 'absolute',
			'left' : '50%',
			'top' : '50%',
			'margin-left' : -$(this).outerWidth()/2,
			'margin-top' : -$(this).outerHeight()/2
		});
	});
}

$(document).ready(function() {
	centerVertical('.circle-inner, .compelling-circle-inner, .small-screen-circle-inner');
});
$(window).resize(function() {
	centerVertical('.circle-inner, .compelling-circle-inner, .small-screen-circle-inner');
});