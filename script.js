// timer
var modal = document.getElementById("myModal");
var div = document.getElementsByClassName("close")[0];
const myId = Array.from({ length: 16 }, (_, i) => i + 1);
let picked = [];
let won = false;
countdownEl = document.getElementById("countdown");
counter =21;
completed = false;
something = setInterval(function () {
  if (counter < 1) {
     document.getElementById("modal_case").innerHTML = "YOU have LOST!!!";
     modal.style.display = "block";
     div.onclick = function () {
       modal.style.display = "none";
     };
     window.onclick = function (event) {
       if (event.target == modal) {
         modal.style.display = "none";
       }
     };
    completed = true;
    clearInterval(something);
    return ; 
  }
  counter--;
  showCountDown(countdownEl, counter);

}, 1000);
function refreshPage() {
  window.location.reload();
} 

showCountDown = (countdownEl, counter) => countdownEl.getElementsByClassName("text")[0].innerHTML = counter;

const balloons = document.querySelectorAll(".balloon");
for (let d = 0; d < balloons.length; d++) {
  balloons[d].addEventListener("click", () => {
    writeX(parseInt(balloons[d].id));
  });
}

function writeX(_id) {
  if (!picked.includes(_id) && !won && !completed ) {
    const pickFrom = myId.filter((num) => {
      return !picked.includes(num);
    });
    const ranBall = pickFrom[Math.floor(Math.random() * pickFrom.length)];
    picked.push(_id);
    if (_id == ranBall) {
      document.getElementById(_id).innerHTML = "<img src='checked.png'>";
      const img = document.querySelector("img");
      img.style.visibility = "visible";
      document.getElementById("modal_case").innerHTML = "YOU have WON!!!";
      modal.style.display = "block";
      div.onclick = function () {
        modal.style.display = "none";
      };
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };

      won = true;
      clearInterval(something);

      return;
    }
  document.getElementById(_id).innerHTML = "X";
  }
}
