// function sendEmail() {
// 	Email.send({
// 	Host: "smtp.gmail.com",
// 	Username : "<sender’s email address>",
// 	Password : "<email password>",
// 	To : '<recipient’s email address>',
// 	From : "<sender’s email address>",
// 	Subject : "<email subject>",
// 	Body : "<email body>",
// 	}).then(
// 		message => alert("mail sent successfully")
// 	);
// }
// Above is the basic configurations which se

//jshint esversion:6



function submitbtn() {
	document.getElementById("contact").action = "https://docs.google.com/forms/u/1/d/e/1FAIpQLSfZrlXYuLexmMO8sPmik0Tp5KtgpujPkQlG3GHY3z8X4DarPA/formResponse";



		}

		function frameload(){
	 alert("Message Sent successfully");
	  location.href = "index.html";
	  }
