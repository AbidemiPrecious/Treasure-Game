countdownEl = document.getElementById("countdown");
counter = 5;
wait = 3;
something = setInterval(function () {
  showCountDown(countdownEl, counter);
  counter--;
  if (counter < 0) clearInterval(something);
}, 1000);
function showCountDown(countdownEl, counter) {
  countdownEl.getElementsByClassName("text")[0].innerHTML = counter;
}

const balloons = document.querySelectorAll(".balloon");
for (let d = 0; d < balloons.length; d++) {
  balloons[d].addEventListener("click", () => {
    writeX(balloons[d].id);
  });
}

  let myId = Array.from({ length: 16 }, (_, i) => i + 1);
  //  console.log(myId);
  let picked = [];
function writeX(_id) {

    let ranBall = Math.floor(Math.random() * myId.length);
    console.log(`My random number: ${ranBall}`);
    picked.push(ranBall);
    console.log(picked);
    let isIn = "btn" + ranBall;
    console.log(isIn);
  
  if (_id == isIn) {
    document.getElementById(_id).innerHTML =
      "<img src='checked.png'>";
    const img = document.querySelector("img");
    img.style.visibility = "visible";
    return;
  }
  document.getElementById(_id).innerHTML = "X";
}

