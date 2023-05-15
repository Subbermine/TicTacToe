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
var image = "red";
var rotate = 0;
function player_turn(a) {
  //player 1
  if (player1.turn == player2.turn) {
    document.getElementById(a).innerHTML = "X";
    document.getElementById(a).style.color = "red";
    document.getElementById(a).style.textShadow =
      "0 0 7px #f00,0 0 10px #f00,0 0 21px #f00,0 0 42px #fa0,0 0 82px #fa0,0 0 92px #fa0";
    player1.turn++;
    cells[a] = "X";
    if (player1.turn >= 3) player1.won = colorpicker("X");
    if (player1.won) {
      image = "red";
      decider("X");
    }
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
    if (player2.turn >= 3) player2.won = colorpicker("O");
    if (player2.won) {
      image = "blue";
      decider("O");
    }
    document.getElementById("body").style.backgroundColor = "#6f92a3";
  }
  document.getElementById(a).setAttribute("disabled", "");
  document.getElementById(a).style.cursor = "initial";
  if (player1.won) won("Player1");
  if (player2.won) won("Player2");
  if (player1.turn == 5) {
    player1.won = colorpicker("X");
    if (player1.won) won("Player1");
    else {
      document.getElementById("play").style.visibility = "visible";
      document
        .getElementById("play")
        .animate([{ top: "100px" }, { top: "0px" }], { duration: 400 });
    }
  }
}
function colorpicker(str) {
  if (
    (cells[0] == str && cells[1] == str && cells[2] == str) ||
    (cells[3] == str && cells[4] == str && cells[5] == str) ||
    (cells[6] == str && cells[7] == str && cells[8] == str) ||
    (cells[0] == str && cells[3] == str && cells[6] == str) ||
    (cells[1] == str && cells[4] == str && cells[7] == str) ||
    (cells[2] == str && cells[5] == str && cells[8] == str) ||
    (cells[0] == str && cells[4] == str && cells[8] == str) ||
    (cells[2] == str && cells[4] == str && cells[6] == str)
  ) {
    return true;
  }
}
function decider(str) {
  document.getElementById(image).style.display = "inline-block";
  if (cells[0] == str && cells[1] == str && cells[2] == str) {
    document.getElementById(image).style.top = "45px";
  } else if (cells[3] == str && cells[4] == str && cells[5] == str) {
  } else if (cells[6] == str && cells[7] == str && cells[8] == str) {
    document.getElementById(image).style.top = "295px";
  } else if (cells[0] == str && cells[3] == str && cells[6] == str) {
    document.getElementById(image).style.transform = "rotate(90deg)";
    rotate = 90;
    document.getElementById(image).style.top = "155px";
    document.getElementById(image).style.left = "-135px";
  } else if (cells[1] == str && cells[4] == str && cells[7] == str) {
    document.getElementById(image).style.transform = "rotate(90deg)";
    rotate = 90;
    document.getElementById(image).style.top = "155px";
    document.getElementById(image).style.left = "-15px";
  } else if (cells[2] == str && cells[5] == str && cells[8] == str) {
    document.getElementById(image).style.transform = "rotate(90deg)";
    rotate = 90;
    document.getElementById(image).style.top = "155px";
    document.getElementById(image).style.left = "115px";
  } else if (cells[0] == str && cells[4] == str && cells[8] == str) {
    document.getElementById(image).style.transform = "rotate(45deg)";
    rotate = 45;
    document.getElementById(image).style.top = "155px";
    document.getElementById(image).style.left = "-15px";
  } else if (cells[2] == str && cells[4] == str && cells[6] == str) {
    document.getElementById(image).style.transform = "rotate(135deg)";
    rotate = 135;
    document.getElementById(image).style.top = "155px";
  }
  visibility();
}
function won(s) {
  if (s == "Player1") {
    document.getElementById(s).innerHTML = `${s}: ${++player1.gameswon}`;
  }
  if (s == "Player2") {
    document.getElementById(s).innerHTML = `${s}: ${++player2.gameswon}`;
  }
  document.getElementById("inner").innerHTML = `${s} won!`;
  document.getElementById("inner").style.display = "inline-block";
  document.getElementById("main").style.display = "inline-block";
  document
    .getElementById("main")
    .animate([{ opacity: 0 }, { opacity: 0.4 }], { duration: 200 });
  document
    .getElementById("inner")
    .animate([{ opacity: 0 }, { opacity: 0.9 }], { duration: 200 });
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
    document.getElementById(image).style.display = "none";
    cells.length = 0;
  }
  player1.turn = 0;
  player2.turn = 0;
  player1.won = false;
  player2.won = false;
  document.getElementById("play").style.visibility = "hidden";
  document.getElementById("invis").style.width = "0";
  rotate -= 2 * rotate;
  document.getElementById(image).style.transform = "rotate(" + rotate + ")";
  rotate = 0;
}
function visibility() {
  if (rotate == 90) {
    document.getElementById("invis").style.top = 5;
    document.getElementById("invis").style.height = 0;
    document.getElementById("invis").style.width = "375px";
    document
      .getElementById("invis")
      .animate([{ height: "0" }, { height: "375px" }], {
        duration: 400,
      });
    document.getElementById("invis").style.height = "375px";
  } else {
    document
      .getElementById("invis")
      .animate([{ width: "0" }, { width: "375px" }], {
        duration: 400,
      });
    document.getElementById("invis").style.width = "375px";
  }
}
