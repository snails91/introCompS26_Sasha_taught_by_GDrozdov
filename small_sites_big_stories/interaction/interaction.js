console.log("This is the interaction site!");
	
		// Target an element (in this case, by its tag) and assign it to a variable
		let body = document.querySelector('body');

		// Create a function
		function goRando() {

			// Generate a random number between 0 and 1 and assign it to a variable
			let randomNumber = Math.random();

			// Check if the number’s value is less than 0.3
			if (randomNumber < 0.3) {
				// Change the body’s background color
				body.style.backgroundColor = 'blue';
			} else if (randomNumber < 0.6) {
				body.style.backgroundColor = 'red';
			} else {
				body.style.backgroundColor = 'yellow';
			}
		}
	