console.log("This is the time site!");


		let pattern= document.querySelector("#pattern");

           


		setTimeout(function() {
			 pattern.style.fontWeight = "500";
			pattern.style.color = "rgb(231, 16, 149)";
			pattern.style.fontSize = "100px";
			pattern.innerHTML = "-";
		}, 2000);

		setTimeout(function() {pattern.innerHTML = "--";}, 1500);

		setTimeout(function() {pattern.innerHTML = "--o";}, 1000);

			setInterval(function() {
				i = Math.random();
				if (i>0.5){
					pattern.innerHTML += "-";
				}
				else if (i<0.4){
					pattern.innerHTML+="o";
				}
				else {
					pattern.innerHTML += "O";
				}
				
			}, 500);

		