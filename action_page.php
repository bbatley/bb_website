<?php

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

$nameErr = $emailErr = $genderErr = $websiteErr = "";
$firstName = $lastName = $email = $property = $subject = "";
  
// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Collect form data (basic validation added)
    if (empty($_POST["firstname"])) {
        $nameErr = "Name is required";
      } else {
        $firstName = test_input($_POST["name"]);
        // check if name only contains letters and whitespace
        if (!preg_match("/^[a-zA-Z-' ]*$/",$name)) {
          $nameErr = "Only letters and white space allowed";
        }
      }

    if (empty($_POST["firstname"])) {
        $nameErr = "Name is required";
      } else {
        $lastName = test_input($_POST["name"]);
        // check if name only contains letters and whitespace
        if (!preg_match("/^[a-zA-Z-' ]*$/",$name)) {
          $nameErr = "Only letters and white space allowed";
        }
      }
      
      if (empty($_POST["email"])) {
        $emailErr = "Email is required";
      } else {
        $email = test_input($_POST["email"]);
        // check if e-mail address is well-formed
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
          $emailErr = "Invalid email format";
        }
      }

    $country = filter_var($_POST["country"]);
    $subject = filter_var($_POST["subject"]);

    // Ensure required fields aren't empty
    if (empty($firstName) || empty($lastName) || empty($email)) {
        echo "Error: First name, last name, and email are required.";
        exit;
    }

    // Compose email
    $to = "bbatleyhomes@gmail.com"; 
    $emailSubject = "Contact Form Submission: $firstName $lastName";
    $body = "Name: $firstName $lastName\n".
            "Email: $email\n".
            "Property: $country\n".
            "Message:\n$subject";
    $headers = "From: $email\r\n";
    $email = test_input($_POST["email"]);

    // Send the email
    if (mail($to, $emailSubject, $body, $headers)) {
        echo "Thank you for contacting us! Your message has been sent.";
    } else {
        echo "Error: There was a problem sending your message. Please try again later.";
    }
}
?>