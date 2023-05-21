class player {
  constructor() {
    this.turn = 0;
    this.won = false;
    this.gameswon = 0;
  }
}
var rotate = 0;
var image;
var gamechecker = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
comp = new player();
player1 = new player();
function player_turn(id) {
  document.getElementById(id).innerHTML = "X";
  document.getElementById(id).style.color = "red";
  document.getElementById(id).style.textShadow =
    "0 0 7px #f00,0 0 10px #f00,0 0 21px #f00,0 0 42px #fa0,0 0 82px #fa0,0 0 92px #fa0";
  document.getElementById(id).style.cursor = "initial";
  document.getElementById(id).setAttribute("disabled", "");
  let row;
  let col;
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
  if (player1.turn >= 3) player1.won = colorpicker("X");
  if (player1.turn != 5 && player1.won == false) {
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
    document.getElementById(compid).style.color = "blue";
    document.getElementById(compid).style.textShadow =
      "0 0 7px #00f,0 0 10px #00f,0 0 21px #00f,0 0 42px #0fa,0 0 82px #0fa,0 0 92px #0fa";
    document.getElementById(compid).style.cursor = "initial";
    document.getElementById(compid).setAttribute("disabled", "");
    gamechecker[comprow - 1][compcol - 1] = "O";
    comp.turn++;
  }
  if (comp.turn >= 3) comp.won = colorpicker("O");

  if (comp.won) {
    image = "blue";
    won("comp");
    decider("O");
  }
  if (player1.won) {
    image = "red";
    won("player");
    decider("X");
  }

  if (player1.turn == 5) {
    player1.won = colorpicker("X");
    if (player1.won) {
      image = "red";
      decider("X");
      won("player");
    } else {
      document.getElementById("play").style.visibility = "visible";
      document
        .getElementById("play")
        .animate([{ top: "100px" }, { top: "0px" }], { duration: 400 });
    }
  }
}
function colorpicker(str) {
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
function decider(str) {
  document.getElementById(image).style.display = "inline-block";
  if (
    gamechecker[0][0] == str &&
    gamechecker[0][1] == str &&
    gamechecker[0][2] == str
  ) {
    document.getElementById(image).style.top = "45px";
  } else if (
    gamechecker[1][0] == str &&
    gamechecker[1][1] == str &&
    gamechecker[1][2] == str
  ) {
  } else if (
    gamechecker[2][0] == str &&
    gamechecker[2][1] == str &&
    gamechecker[2][2] == str
  ) {
    document.getElementById(image).style.top = "295px";
  } else if (
    gamechecker[0][0] == str &&
    gamechecker[1][0] == str &&
    gamechecker[2][0] == str
  ) {
    rotate = 90;
    document.getElementById(image).style.transform = "rotate(90deg)";
    document.getElementById(image).style.top = "155px";
    document.getElementById(image).style.left = "-135px";
  } else if (
    gamechecker[0][1] == str &&
    gamechecker[1][1] == str &&
    gamechecker[2][1] == str
  ) {
    document.getElementById(image).style.top = "155px";
    document.getElementById(image).style.left = "-15px";
    rotate = 90;
    document.getElementById(image).style.transform = "rotate(90deg)";
  } else if (
    gamechecker[0][2] == str &&
    gamechecker[1][2] == str &&
    gamechecker[2][2] == str
  ) {
    rotate = 90;
    document.getElementById(image).style.top = "155px";
    document.getElementById(image).style.left = "115px";
    document.getElementById(image).style.transform = "rotate(90deg)";
  } else if (
    gamechecker[0][0] == str &&
    gamechecker[1][1] == str &&
    gamechecker[2][2] == str
  ) {
    document.getElementById(image).style.transform = "rotate(45deg)";
    rotate = 45;
    document.getElementById(image).style.top = "155px";
    document.getElementById(image).style.left = "-15px";
  } else if (
    gamechecker[0][2] == str &&
    gamechecker[1][1] == str &&
    gamechecker[2][0] == str
  ) {
    document.getElementById(image).style.transform = "rotate(135deg)";
    rotate = 135;
    document.getElementById(image).style.top = "155px";
  }
  visibility();
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

function won(s) {
  if (s == "player") {
    document.getElementById(
      "Player1"
    ).innerHTML = `Player: ${++player1.gameswon}`;
  } else {
    document.getElementById(
      "Player2"
    ).innerHTML = `Computer: ${++comp.gameswon}`;
  }
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
  for (let index = 0; index < 9; index++) {
    document.getElementById(index).disabled = false;
    document.getElementById(index).style.cursor = "pointer";
    document.getElementById(index).innerHTML = "";
  }
  gamechecker = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  document.getElementById(image).style.display = "none";
  player1.turn = 0;
  comp.turn = 0;
  player1.won = false;
  comp.won = false;
  document.getElementById("play").style.visibility = "hidden";
  document.getElementById("invis").style.width = "0";
  document.getElementById("invis").style.height = "375px";
  document.getElementById("main").style.display = "none";
  document.getElementById("inner").style.display = "none";
  document.getElementById(image).style.transform = "rotate(0)";
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
