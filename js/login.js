var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
	var username = document.getElementById("txtUsername").value;
	var password = document.getElementById("txtPassword").value;
	if ( username == "Nishan" && password == "Nishan1234"){
		// alert ("Login successfully");
		window.location = "home.html"; // Redirecting to other page.
		return false;
		}
		else{
		attempt --;// Decrementing by one.
		alert("You have left "+attempt+" attempt;");
		// Disabling fields after 3 attempts.
		if( attempt == 0){
		document.getElementById("txtUsername").disabled = true;
		document.getElementById("txtPassword").disabled = true;
		document.getElementById("submit").disabled = true;
		return false;
		}
	}
}

function register(){
	window.location = "register.html"; // Redirecting to other page.
}