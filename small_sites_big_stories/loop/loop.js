/* console.log("This is the loop site!");
	let container = document.querySelector('.container');

		for (let i=0; i<100; i++) {
			let randomWidth = Math.random()*100;
			let randomHeight = Math.random()*100;
			let newDiv = `<div style="width: ${randomWidth}px; height: ${randomHeight}px;"></div>`;
			container.innerHTML += newDiv;
		}

		function changeSizes() {
			let divs = document.querySelectorAll('.container div');
			divs.forEach((item) => {
				let randomWidth = Math.random()*100;
				let randomHeight = Math.random()*100;
				item.style.width = randomWidth + "px";
				item.style.height = randomHeight + "px";
			})
		}

		setInterval(changeSizes, 500);*/