class player {
  constructor() {
    this.won = false;
    this.turn = 0;
    this.gameswon = 0;
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
    document.getElementById(a).style.textShadow =
      "0 0 7px #f00,0 0 10px #f00,0 0 21px #f00,0 0 42px #fa0,0 0 82px #fa0,0 0 92px #fa0";
    player1.turn++;
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
    document.getElementById(a).style.textShadow =
      "0 0 7px #00f,0 0 10px #00f,0 0 21px #00f,0 0 42px #0fa,0 0 82px #0fa,0 0 92px #0fa";
    player2.turn++;
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
  if (s == "Player1") {
    document.getElementById(s).innerHTML = `${s}: ${++player1.gameswon}`;
  }
  if (s == "Player2") {
    document.getElementById(s).innerHTML = `${s}: ${++player2.gameswon}`;
  }
  for (let index = 0; index < 9; index++) {
    document.getElementById(index).disabled = true;
    document.getElementById(index).style.cursor = "initial";
    document
      .getElementById("play")
      .animate([{ top: "100px" }, { top: "0px" }], { duration: 400 });
  }
  document.getElementById("play").style.visibility = "visible";
}
function playagain() {
  for (let index = 0; index < 9; index++) {
    document.getElementById(index).disabled = false;
    document.getElementById(index).style.cursor = "pointer";
    document.getElementById(index).innerHTML = "";
    cells.length = 0;
  }
  player1.turn = 0;
  player2.turn = 0;
  player1.won = false;
  player2.won = false;
  document.getElementById("play").style.visibility = "hidden";
}
