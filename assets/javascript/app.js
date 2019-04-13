$(document).ready(function() {

    // When user clicks the "Submit" button, submit data and send email
    $(".submit").click(function(event) {
        console.log("submit button clicked");

        const name = $("#name").val();
        const email = $("#email").val();
        const message = $("#message").val();
        const statusElement = $(".status");
        statusElement.empty();
        
        if (name.length > 2) {
            console.log("Name checks out");
        }
        else {
            event.preventDefault();
            statusElement.append("<div>Please enter your name.</div>");
        }

        if (email.length > 5 && email.includes("@") && email.includes(".")) {
            console.log("Email checks out");
        } 
        else {
            event.preventDefault();
            statusElement.append("<div>Please enter a valid email.</div>");
        }

        if (message.length > 10) {
            console.log("Message checks out");
        }
        else {
            event.preventDefault();
            statusElement.append("<div>Your message must be at least 10 characters.</div>");
        }

    });
    
    // When user clicks "cancel" button, clear the form
    $(".cancel").click(function(event) {
        event.preventDefault();
        $("#name").val("");
        $("#email").val("");
        $("#message").val("");
        $(".status").empty();
    }); 
});