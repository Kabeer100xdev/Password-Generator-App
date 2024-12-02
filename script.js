const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

//So the fist thing we are gonna do is to take the id and from the HTML and put it inside a text.content
let windowEl1 = document.getElementById("window1");
let windowEl2 = document.getElementById("window2");
//After we do that we are gonna add a string where we are gonna display our random password
let passwordWindow1 = "";
let passwordWindow2 = "";
//As you can see the password window is empty because we are gonna reassign the values later when the fucntion is gonna work and do it for us
//Then we are going to create a function that will generate the password
function randomPassword() {
  // So the first thing we are is to do is to assign a variable which holds the Random number Generator using Math.random
  let passwordWindow1 = "";
  for (let i = 0; i < 15; i++) {
    let randomNumber = Math.floor(Math.random() * characters.length);
    passwordWindow1 += characters[randomNumber];
    windowEl1.textContent = passwordWindow1;
  }

  let passwordWindow2 = "";
  for (let i = 0; i < 15; i++) {
    let randomNumber = Math.floor(Math.random() * characters.length);
    passwordWindow2 += characters[randomNumber];
    windowEl2.textContent = passwordWindow2;
  }
}
