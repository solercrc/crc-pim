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


$(document).bind('submit', function(e) {
	e.preventDefault();
}).bind('formvalid.zf.abide', function(e, $form) {
	var first_name    = $('input#first_name').val();
	var last_name     = $('input#last_name').val();
	var email_address = $('input#email_address').val();
	var phone_number  = $('input#phone_number').val();
	var work_title    = $('input#work_title').val();
	var work_company  = $('input#work_company').val();
	var need_message  = $('textarea#need_message').val();

	$.ajax({
		url: 'mail.php',
		type: 'POST',
		//runs the php code 
		data: {
			first_name: first_name,
			last_name: last_name,
			email_address: email_address,
			phone_number: phone_number,
			work_title: work_title,
			work_company: work_company,
			need_message: need_message
		},
		cache: false,
		success: function(data) { // if success then generate the div and append the the following
			$('#success_message').hide();
			$('#success_message').html('<div class="callout success" data-closable="slide-out-right">');
			$('#success_message > .callout.success').append("<h5>Thanks for your Submission!</h5>").append("<p>We will review your message and get back to you shortly.</p>").append('<button class="close-button" aria-label="Dismiss success" type="button" data-close><span aria-hidden="true">&times;</span>').append('</button>').append('</div>');
			$('#success_message').show('slow');
			$('#crc_pim_form').trigger('reset');
		},
		error: function(jqXHR, status, error) { //this is to check if there is any error
			$('#success_message').hide();
			$('#success_message').html('<div class="callout alert" data-closable="slide-out-right">');
			$('#success_message > .callout.alert').append("<h5>Sorry! something went wrong...</h5>").append("<p>We are looking into this issue. Please try again later.</p>").append('<button class="close-button" aria-label="Dismiss alert" type="button" data-close><span aria-hidden="true">&times;</span>').append('</button>').append('</div>');
			$('#success_message').show('slow');
			$('#crc_pim_form').trigger('reset');
		}
	});
});