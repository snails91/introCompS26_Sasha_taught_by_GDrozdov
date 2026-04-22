console.log("This is the interaction site!");

let flowers = document.querySelectorAll(".flower");

flowers.forEach(function (flower) {
  flower.addEventListener("mouseout", bloom);
});

function bloom() {
  this.style.backgroundColor = "crimson";
}