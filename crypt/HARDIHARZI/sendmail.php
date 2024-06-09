<?php
// Set the response header to JSON
header('Content-Type: application/json');

// Set the correct headers for CORS support
header('Access-Control-Allow-Origin: *'); // Allow requests from all domains
header('Access-Control-Allow-Methods: POST'); // Only allow POST requests
header('Access-Control-Allow-Headers: Content-Type'); // Only allow Content-Type header

// Get the raw POST data
$input = file_get_contents('php://input');

// Decode the JSON data
$data = json_decode($input, true);

// Validate the input data
if (!isset($data['name']) || !isset($data['email']) || !isset($data['message'])) {
    echo json_encode(['message' => 'Invalid input data']);
    http_response_code(400); // Bad Request
    exit;
}

// Sanitize input data
$name = htmlspecialchars($data['name']);
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$message = htmlspecialchars($data['message']);

// Check if email is valid
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['message' => 'Invalid email address']);
    http_response_code(400); // Bad Request
    exit;
}

echo '<pre>' . print_r($_POST, true) . '</pre>'; // Added the suggested edit

// Email parameters
$to = 'joomlacort@gmail.com';
$subject = 'hardiharzi Contact Form';
$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Create the email body
$emailBody = "Name: $name\n";
$emailBody .= "Email: $email\n";
$emailBody .= "Message:\n$message\n";

// Send the email
if (mail($to, $subject, $emailBody, $headers)) {
    echo json_encode(['message' => 'Message sent successfully!']);
} else {
    echo json_encode(['message' => 'Failed to send message']);
    http_response_code(500); // Internal Server Error
}
