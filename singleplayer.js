class player {
  constructor() {
    this.turn = 0;
    this.won = false;
  }
}
var gamechecker = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
comp = new player();
player1 = new player();
function player_turn(id) {
  document.getElementById(id).innerHTML = "X";
  document.getElementById(id).style.cursor = "initial";
  document.getElementById(id).setAttribute("disabled", "");
  let row;
  let col;
  document
    .getElementById("body")
    .animate(
      [{ "background-color": "#6f92a3" }, { "background-color": "#a36f6f" }],
      { duration: 400 }
    );
  document.getElementById("body").style.backgroundColor = "#a36f6f";
  document.getElementById("header").innerHTML = "Comp turn";
  if (0 <= id && id <= 2) {
    row = 1;
    col = row + id;
  } else if (id >= 3 && id <= 5) {
    row = 2;
    col = id - row;
  } else if (id >= 6 && id <= 8) {
    row = 3;
    col = id - row - 2;
  }
  gamechecker[row - 1][col - 1] = "X";
  player1.turn++;
  if (player1.turn != 5) {
    let compid;
    let comprow;
    let compcol;
    do {
      comprow = Math.floor(Math.random() * 3 + 1);
      compcol = Math.floor(Math.random() * 3 + 1);
      if (comprow == 1) compid = compcol - comprow;
      else if (comprow == 2) compid = comprow + compcol;
      else if (comprow == 3) compid = 2 + comprow + compcol;
      if (player1.turn == 5) {
        break;
      }
    } while (document.getElementById(compid).innerHTML != "");
    document.getElementById(compid).innerHTML = "O";
    document.getElementById(compid).style.cursor = "initial";
    document.getElementById(compid).setAttribute("disabled", "");
    gamechecker[comprow - 1][compcol - 1] = "O";
    document.getElementById("header").innerHTML = "Player's turn";
    comp.turn++;
  }
  document.getElementById("body").style.backgroundColor = "#6f92a3";
  if (player1.turn >= 3) player1.won = decider("X");
  if (comp.turn >= 3) comp.won = decider("O");

  if (comp.won) won("comp");
  if (player1.won) won("player");

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
    (gamechecker[0][0] == str &&
      gamechecker[0][1] == str &&
      gamechecker[0][2] == str) ||
    (gamechecker[1][0] == str &&
      gamechecker[1][1] == str &&
      gamechecker[1][2] == str) ||
    (gamechecker[2][0] == str &&
      gamechecker[2][1] == str &&
      gamechecker[2][2] == str) ||
    (gamechecker[0][0] == str &&
      gamechecker[1][0] == str &&
      gamechecker[2][0] == str) ||
    (gamechecker[0][1] == str &&
      gamechecker[1][1] == str &&
      gamechecker[2][1] == str) ||
    (gamechecker[0][2] == str &&
      gamechecker[1][2] == str &&
      gamechecker[2][2] == str) ||
    (gamechecker[0][0] == str &&
      gamechecker[1][1] == str &&
      gamechecker[2][2] == str) ||
    (gamechecker[0][2] == str &&
      gamechecker[1][1] == str &&
      gamechecker[2][0] == str)
  )
    return true;
  else return false;
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
