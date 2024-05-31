<?php
// Check if the form has been submitted
if (!empty($_POST['step'])) {
    // Initialize the form data
    $formData = array();

    // Check the step
    switch ($_POST['step']) {
        case 1:
            // Step 1: Introduce Yourself
            $name = $_POST['name'];
            break;
        case 2:
            // Step 2: Business Information
            $business = $_POST['business'];
            break;
        case 3:
            // Step 3: Website Information
            $website = $_POST['website'];
            break;
        case 4:
            // Step 4: Moodboard
            $moodboard = $_FILES['moodboard'];
            break;
        case 5:
            // Step 5: Contact Information
            $contactDate = $_POST['contactDate'];
            $phoneNumber = $_POST['phoneNumber'];
            $email = $_POST['email'];
            break;
    }

    // Validate the form data
    if (!empty($name)) {
        // Redirect to the next step
        header('Location: form-order.html');
        exit;
    } else {
        echo 'Please fill in your name';
    }
}
