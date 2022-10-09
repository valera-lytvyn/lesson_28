"use strict";

var playList = [
  {
    author: "LED ZEPPELIN",

    song: "STAIRWAY TO HEAVEN",
  },

  {
    author: "QUEEN",

    song: "BOHEMIAN RHAPSODY",
  },

  {
    author: "LYNYRD SKYNYRD",

    song: "FREE BIRD",
  },

  {
    author: "DEEP PURPLE",

    song: "SMOKE ON THE WATER",
  },

  {
    author: "JIMI HENDRIX",

    song: "ALL ALONG THE WATCHTOWER",
  },

  {
    author: "AC/DC",

    song: "BACK IN BLACK",
  },

  {
    author: "QUEEN",

    song: "WE WILL ROCK YOU",
  },

  {
    author: "METALLICA",

    song: "ENTER SANDMAN",
  },
];

let list = document.querySelector(".musicList");
function createPlayList(array) {
  array.forEach((item, index) => {
    let li = document.createElement("li");
    li.innerText = `${index + 1} -
       ${item.author} - ${item.author}`;
    li.style.color = "red";
    list.append(li);
  });
}

function showPlayList() {
  createPlayList(playList);
  console.log(list);
}

function hidePlayList() {
  list.innerHTML = null;
}

let modal = document.querySelector(".modal");
let openButton = document.querySelector(".openButton");
let closeButton = document.querySelector(".closeButton");

openButton.onclick = function () {
  modal.style.display = "block";
};

closeButton.onclick = function () {
  modal.style.display = "none";
};

let changeButton = document.querySelector(".changeButton");
let x = Math.floor(Math.random() * 4);
changeButton.onclick =  function() {
  ++x;
  console.log(x);
  if (x >= 4) {
    x = 0;
  }
  let red = document.querySelector(".circleRed");
  let yellow = document.querySelector(".circleYellow");
  let green = document.querySelector(".circleGreen");
  if (x === 1 || x === 3) {
    yellow.style.background = "yellow";
    red.style.background = null;
    green.style.background = null;
  }
  if (x === 2) {
    red.style.background = "red";
    green.style.background = null;
    yellow.style.background = null;
  }
  if (x === 0) {
    green.style.background = "green";
    red.style.background = null;
    yellow.style.background = null;
  }
}


