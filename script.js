const checkBtn = document.querySelector(".check");
let sicretNum = Math.trunc(Math.random() * 20 + 1);
const reset = document.querySelector(".reset");
let PopUpBtn = document.querySelector(".pop-up-btn");
let score = 20;
let highScore = 0;
let overlay = document.querySelector(".overlay");
let PopUP = document.querySelector(".pop-up");
let closeSvg = document.querySelector(".svg-X ");
let PopUPtitle = document.querySelector(".pop-up-title");
let container = document.querySelector(".container");
let blure = document.querySelector(".blure");
checkBtn.addEventListener("click", function () {
  const myNum = document.querySelector(".my-number").value;

  if (Number(myNum) === sicretNum) {
    document.querySelector(".status").textContent = "YOU WON!";
    document.querySelector(".number-random").textContent = myNum;
    document.body.style.backgroundColor = "green";
    PopUPtitle.textContent = "YOU WON THE GAME";

    PopUP.style.display = "block";
    overlay.style.display = "flex";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent =
        "highscore:" + highScore;
    }
  } else if (Number(myNum) > sicretNum) {
    document.querySelector(".status").textContent = " YOUR NUMBER IS TOO HIGT!";
    score--;
    document.querySelector(".score").textContent = "score: " + score;
  } else {
    document.querySelector(".status").textContent = "YOUR NUMBER IS TOO LOW!";
    score--;

    document.querySelector(".score").textContent = "score: " + score;
  }
  if (score < 1) {
    document.querySelector(".status").textContent = "YOU LOST!";
    document.body.style.backgroundColor = "red";
    PopUP.style.display = "block";
    PopUPtitle.textContent = "YOU LOST THE GAME";
    overlay.style.display = "flex";
  }
  if (myNum > 20) {
    PopUP.style.display = "block";
    overlay.style.display = "flex";
    PopUPtitle.textContent = "NUMBER BETWEEN 1 AND 20";
    document.body.style.backgroundColor = "yellow";
  }
});

// -------------------------------------------------

reset.addEventListener("click", () => {
  document.querySelector(".status").textContent = "start guessing . . .";
  document.querySelector(".my-number").value = "";
  score = 20;
  document.querySelector(".score").textContent = "score: " + score;
  document.body.style.backgroundColor = "";
  document.querySelector(".number-random").textContent = "?";
  sicretNum = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".pop-up").style.display = "none";
  overlay.style.display = "none";
});

PopUpBtn.addEventListener("click", () => {
  document.querySelector(".status").textContent = "start guessing . . .";
  document.querySelector(".my-number").value = "";
  score = 20;
  document.querySelector(".score").textContent = "score: " + score;
  document.body.style.backgroundColor = "";
  document.querySelector(".number-random").textContent = "?";
  sicretNum = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".pop-up").style.display = "none";
  overlay.style.display = "none";
});

closeSvg.addEventListener("click", () => {
  document.querySelector(".pop-up").style.display = "none";
  overlay.style.display = "none";
  document.body.style.backgroundColor = "";
});
