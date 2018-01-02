<?php
// check if fields passed are empty
if ( empty( $_POST['first_name'] ) || empty( $_POST['last_name'] ) || !filter_var( $_POST['email_address'], FILTER_VALIDATE_EMAIL ) ) {
	echo "No arguments Provided!";
	return false;
}

$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email_address = $_POST['email_address'];
$phone_number = $_POST['phone_number'];
$work_title = $_POST['work_title'];
$work_company = $_POST['work_company'];
$need_message = $_POST['need_message'];

// create email body and send it
$to = 'tom@tomsoler.com';
$email_subject = 'CRC PIM Page Submission';
$email_body = "Submission details:\n\nFirst Name: $first_name\n\nLast Name: $last_name\n\nEmail Address: $email_address\n\nPhone Number: $phone_number\n\nTitle: $work_title\n\nCompany: $work_company\n\nMessage:\n$need_message";
$headers = "From: ". $first_name . ' ' . $last_name . " <" . $email_address . ">\r\n";
$headers .= "Return-Path: return@tomsoler.com\n";
$headers .= "Reply-To: $email_address";

mail( $to, $email_subject, $email_body, $headers, '-freturn@tomsoler.com' );

return true;