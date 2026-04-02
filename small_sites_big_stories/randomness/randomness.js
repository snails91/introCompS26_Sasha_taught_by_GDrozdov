console.log("This is the randomness site!");

let twist = 15;
let suprise = Math.random()*100;
let subject = document.querySelector("subject");
let feature = document.querySelector("feature");

console.log(suprise);

if (suprise > 90){

    subject.style.width = "160px";
    subject.style.borderRadius = "80px 80px 40px 40px";

    feature.style.transform = "rotate(0deg)";
    feature.style.width = "60px";
    feature.style.height = "60px";
    feature.style.top = "220px";
    feature.style.left = "608px";
    feature.style.borderRadius = "50px 50px 50px 50px";
    feature.style.backgroundColor = "rgb(147, 135, 135)";
    feature.style.border = "solid 8px rgb(46, 46, 46)";

}

else{

}

