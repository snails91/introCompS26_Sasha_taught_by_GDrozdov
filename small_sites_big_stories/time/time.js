console.log("This is the time site!");


		let pattern= document.querySelector("#pattern");

		setTimeout(function() {
			pattern.innerHTML = "- O -";
			pattern.style.fontSize = "40px";
            pattern.style.fontWeight = "800";
            pattern.style.color = "rgb(231, 16, 149)";
		}, 500);

		setTimeout(function() {
			pattern.innerHTML = "oOO--OOo-";
			pattern.style.fontSize = "40px";
            pattern.style.fontWeight = "500";
		}, 2000);

		setTimeout(function() {
			pattern.innerHTML = "o-oOOo-oO-OO-Oo-";
			pattern.style.fontSize = "100px";

			setInterval(function() {
				pattern.innerHTML += "-";
			}, 500);

		}, 3000);