$(document).ready(function() {
	$('.circle-inner').each(function() {
		$(this).css({
			'position' : 'absolute',
			'left' : '50%',
			'top' : '50%',
			'margin-left' : -$(this).outerWidth()/2,
			'margin-top' : -$(this).outerHeight()/2
		});
	});
});

$(document).foundation();
