$(document).ready(function() {

    // When user clicks the "Submit" button, submit data and send email
    $(".submit").click(function(event) {
        event.preventDefault();
        console.log("submit button clicked");

        const name = $(".name").val();
        const email = $(".email").val();
        const message = $("#textarea1").val();
        const statusElement = $(".status");
        statusElement.empty();
        
        if (name.length > 2) {
            console.log("Name checks out");
        }
        else {
            statusElement.append("<div>Please enter your name.</div>");
        }

        if (email.length > 5 && email.includes("@") && email.includes(".")) {
            console.log("Email checks out");

        } 
        else {
            statusElement.append("<div>Please enter a valid email.</div>");
        }

        if (message.length > 10) {
            console.log("Message checks out");
        }
        else {
            statusElement.append("<div>Your message must be at least 20 characters.</div>");
        }

    });
    
    // When user clicks "cancel" button, clear the form
    $(".cancel").click(function(event) {
        event.preventDefault();
        $(".name").val("");
        $(".email").val("");
        $("#textarea1").val("");
        $(".status").empty();
    });
    
});

// var mandrill = require('node-mandrill')('<your API Key>'); 

// function sendEmail ( _name, _email, _subject, _message) {
//     mandrill('/messages/send', {
//         message: {
//             to: [{email: _email , name: _name}],
//             from_email: 'noreply@yourdomain.com',
//             subject: _subject,
//             text: _message
//         }
//     }, function(error, response){
//         if (error) console.log( error );
//         else console.log(response);
//     });
// }

// // define your own email api which points to your server.

// app.post( '/api/sendemail/', function(req, res){

//     var _name = req.body.name;
//     var _email = req.body.email;
//     var _messsage = req.body.message;

//     //implement your spam protection or checks. 

//     sendEmail ( _name, _email, _message );

// });