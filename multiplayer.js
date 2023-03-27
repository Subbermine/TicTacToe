class player {
  constructor() {
    this.won = false;
    this.turn = 0;
  }
}
let player1 = new player();
let player2 = new player();

var cells = [];
function player_turn(a) {
  //player 1
  if (player1.turn == player2.turn) {
    document.getElementById(a).innerHTML = "X";
    document.getElementById(a).style.color = "red";
    player1.turn++;
    document.getElementById("header").innerHTML = "Player2 turn";
    cells[a] = "X";
    if (player1.turn >= 3) player1.won = decider("X");
    document
      .getElementById("body")
      .animate(
        [{ "background-color": "#6f92a3" }, { "background-color": "#a36f6f" }],
        { duration: 400 }
      );
    document.getElementById("body").style.backgroundColor = "#a36f6f";
  }
  //player 2
  else {
    document.getElementById(a).innerHTML = "O";
    document.getElementById(a).style.color = "blue";
    player2.turn++;
    document.getElementById("header").innerHTML = "Player1 turn";
    cells[a] = "O";
    if (player2.turn >= 3) player2.won = decider("O");
    document.getElementById("body").style.backgroundColor = "#6f92a3";
  }
  document.getElementById(a).setAttribute("disabled", "");
  document.getElementById(a).style.cursor = "initial";
  if (player1.won) won("Player1");
  if (player2.won) won("Player2");
  if (player1.turn == 5) {
    player1.won = decider("X");
    if (player1.won) won("Player1");
    else {
      document.getElementById("header").innerHTML = "Draw!";
      document.getElementById("play").style.visibility = "visible";
      document
        .getElementById("play")
        .animate([{ top: "100px" }, { top: "0px" }], { duration: 400 });
    }
  }
}
function decider(str) {
  if (
    (cells[0] == str && cells[1] == str && cells[2] == str) ||
    (cells[3] == str && cells[4] == str && cells[5] == str) ||
    (cells[6] == str && cells[7] == str && cells[8] == str) ||
    (cells[0] == str && cells[3] == str && cells[6] == str) ||
    (cells[1] == str && cells[4] == str && cells[7] == str) ||
    (cells[2] == str && cells[5] == str && cells[8] == str) ||
    (cells[0] == str && cells[4] == str && cells[8] == str) ||
    (cells[2] == str && cells[4] == str && cells[6] == str)
  )
    return true;
}
function won(s) {
  document.getElementById("header").innerHTML = `${s} won!`;
  for (let index = 0; index < 9; index++) {
    document.getElementById(index).setAttribute("disabled", "");
    document.getElementById(index).style.cursor = "initial";
    document
      .getElementById("play")
      .animate([{ top: "100px" }, { top: "0px" }], { duration: 400 });
  }
  document.getElementById("play").style.visibility = "visible";
}
function playagain() {
  window.location.reload();
}
