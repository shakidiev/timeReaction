// function getRandomColor() {
//   var letters = "0123456789ABCDEF".split("");
//   var color = "#";
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.round(Math.random() * 15)];
//   } //ends for loop
//   return color;
// } // ends getRandomColor Function

// var clickedTime;
// var createdTime;
// var reactionTime;

// function makeBox() {
//   var time = Math.random();
//   time = time * 3000;

//   setTimeout(function () {
//     if (Math.random() > 0.5) {
//       document.getElementById("box").style.borderRadius = "100px";
//     } else {
//       document.getElementById("box").style.borderRadius = "0";
//     }

//     var top = Math.random();
//     top = top * 300;
//     var left = Math.random();
//     left = left * 500;

//     document.getElementById("box").style.top = top + "px";
//     document.getElementById("box").style.left = left + "px";

//     document.getElementById("box").style.backgroundColor = getRandomColor();

//     document.getElementById("box").style.display = "block";

//     createdTime = Date.now();
//   }, time);
// }

// document.getElementById("box").onclick = function () {
//   clickedTime = Date.now();

//   reactionTime = (clickedTime - createdTime) / 1000;

//   document.getElementById("printReactionTime").innerHTML =
//     "Your Reaction Time is: " + reactionTime + "seconds";

//   this.style.display = "none";

//   makeBox();
// };

// makeBox();

let startTime = new Date().getTime();

function getRandomColor() {
  let letters = "0123456789ABCDEF".split("");
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let makeShape = function () {
  let box = document.getElementById("box");
  let top = Math.random() * 400;
  let left = Math.random() * 700;
  let width = Math.random() * 200 + 50;
  box.style.width = width + "px";
  box.style.left = left + "px";
  box.style.top = top + "px";
  if (Math.random() < 0.3) {
    box.style.borderRadius = "50%";
    box.backgroundColor = getRandomColor();
    box.style.borderBottom = "none";
  } else if (Math.random() >= 0.3 && Math.random() <= 0.7) {
    box.style.borderRadius = "0";
    box.backgroundColor = getRandomColor();
    box.style.borderBottom = "none";
  } else if (Math.random() > 0.7) {
    box.style.borderRadius = "0";
    box.style.left = "0";
    box.style.width = "0";
    box.style.borderLeft = "50px solid transparent";
    box.style.borderRight = "50px solid transparent";
    box.style.borderBottom = "100px solid" + getRandomColor();
    box.style.backgroundColor = "transparent";
  }
  box.style.display = "block";
  startTime = new Date().getTime();
};

setTimeout(makeShape, Math.random() * 4000);

document.getElementById("box").onclick = function () {
  let box = document.getElementById("box");
  box.style.display = "none";
  let top = Math.random() * 400;
  let left = Math.random() * 700;
  let width = Math.random() * 200 + 50;
  box.style.width = width + "px";
  box.style.left = left + "px";
  box.style.top = top + "px";
  let finishTime = new Date().getTime();
  let reactionTime = (finishTime - startTime) / 1000;
  document.getElementById("reactionTime").innerHTML = reactionTime + "seconds";
  setTimeout(makeShape, Math.random() * 4000);
};
