//
// JavaScript file name : profile.js
//

// Function to deliver message
function deliverMessage() {
	// Validation flag
	let nameValid = true;

	// Get name
	const name = document.getElementById('name').value.trim();
	
	// validate name
	if (name === '') {
		nameValid = false;
		alert("Please enter your name");
		return;	
	}
	
	// Validation flag
	let phoneValid = true;	
	
	// Pattern for Phone validation
	const phonePattern = /^[0-9]{10}$/;		
	
	// Get phone number
	const phone = document.getElementById('phone').value.trim();		

	// validate phone number
	if (phone !== '') {	
		if (!phonePattern.test(phone))
		{
			phoneValid = false;
			alert("Please enter a valid Phone Number");
			return;		
		}
	}
	
	// Validation flag
	let emailValid = true;
	
	// Pattern for Email validation	
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	
	// Get email address
	const email = document.getElementById('email').value.trim();	
	
	// validate email address	
	if (email === '') {
		nameValid = false;
		alert("Please enter your Email address");
		return;		
	}	

	if (!emailPattern.test(email))
	{
		nameValid = false;
		alert("Invalid Email Address. Please enter Email Address");
		return;			
	}
	
	// Validation flag
	let messageValid = true;
		
	// Get Message
	const msg = document.getElementById('message').value.trim();		
	// validate Message
	if (msg === '') {
		messageValid = false;
		alert("Please enter your Message");
		return;		
	}		

	alert("Your Message sent OK.");
}

