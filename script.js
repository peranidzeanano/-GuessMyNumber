const checkBtn = document.querySelector(".check");
let sicretNum = Math.trunc(Math.random() * 20 + 1);
const reset = document.querySelector(".reset");

let score = 20;
let highScore = 0;
checkBtn.addEventListener("click", function () {
  const myNum = document.querySelector(".my-number").value;

  if (Number(myNum) === sicretNum) {
    document.querySelector(".status").textContent = "YOU WON!";
    document.querySelector(".number-random").textContent = myNum;
    document.body.style.backgroundColor = "green";

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
    document.body.style.backgroundColor = "RED";
    document.querySelector(".score").textContent = "score: 0";
  }
});

reset.addEventListener("click", () => {
  document.querySelector(".status").textContent = "start guessing . . .";
  document.querySelector(".my-number").value = "";
  score = 20;
  document.querySelector(".score").textContent = "score: " + score;
  document.body.style.backgroundColor = "";
  document.querySelector(".number-random").textContent = "?";
  sicretNum = Math.trunc(Math.random() * 20 + 1);
});
