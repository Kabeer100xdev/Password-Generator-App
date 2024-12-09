// Array of all possible characters for password generation
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

// Get DOM elements
const Button = document.getElementById("PasswordGenerator");
const windowEl1 = document.getElementById("window1");

const slideValue = document.getElementById("number-viewer");
const inputSlider = document.querySelector("input");

const onlyAlphabetsEl1 = document.getElementById("cb1-6"); // Uppercase checkbox
const onlyAlphabetsEl2 = document.getElementById("cb1-7"); // Lowercase checkbox
const onlyNumbers = document.getElementById("cb1-8"); // Numbers checkbox
const onlySymbols = document.getElementById("cb1-9"); // Symbols checkbox

const copytext1 = document.getElementById("copy-text1"); // Copy button
const toastBox = document.getElementById("toastBox"); // Toast container

// Default settings: Include all characters
let filteredCharacters = [...characters];

/**
 * Checkbox logic for filtering characters.
 * Uppercase letters only.
 */
onlyAlphabetsEl1.addEventListener("change", () => {
  if (onlyAlphabetsEl1.checked) {
    filteredCharacters = characters.filter((char) => /[A-Z]/.test(char));
    // Deselect other checkboxes
    onlyAlphabetsEl2.checked = false;
    onlyNumbers.checked = false;
    onlySymbols.checked = false;
  } else {
    filteredCharacters = [...characters];
  }
});

/**
 * Lowercase letters only.
 */
onlyAlphabetsEl2.addEventListener("change", () => {
  if (onlyAlphabetsEl2.checked) {
    filteredCharacters = characters.filter((char) => /[a-z]/.test(char));
    // Deselect other checkboxes
    onlyAlphabetsEl1.checked = false;
    onlyNumbers.checked = false;
    onlySymbols.checked = false;
  } else {
    filteredCharacters = [...characters];
  }
});

/**
 * Numbers only.
 */
onlyNumbers.addEventListener("change", () => {
  if (onlyNumbers.checked) {
    filteredCharacters = characters.filter((char) => /[0-9]/.test(char));
    // Deselect other checkboxes
    onlyAlphabetsEl1.checked = false;
    onlyAlphabetsEl2.checked = false;
    onlySymbols.checked = false;
  } else {
    filteredCharacters = [...characters];
  }
});

/**
 * Symbols only.
 */
onlySymbols.addEventListener("change", () => {
  if (onlySymbols.checked) {
    filteredCharacters = characters.filter((char) =>
      /[~`!@#$%^&*()_\-+={}\[\]:;"'<>,.?\/|\\]/.test(char)
    );
    // Deselect other checkboxes
    onlyAlphabetsEl1.checked = false;
    onlyAlphabetsEl2.checked = false;
    onlyNumbers.checked = false;
  } else {
    filteredCharacters = [...characters];
  }
});

/**
 * Generate random password based on selected options.
 */
Button.addEventListener("click", randomPassword);

function randomPassword() {
  let passwordWindow1 = "";

  // Loop to generate a password of the desired length
  for (let i = 0; i < inputSlider.value; i++) {
    const randomNumber = Math.floor(Math.random() * filteredCharacters.length);
    passwordWindow1 += filteredCharacters[randomNumber];
  }

  // Display the generated password
  windowEl1.textContent = passwordWindow1;
}

/**
 * Update the slider value display dynamically.
 */
inputSlider.oninput = () => {
  const value = inputSlider.value;
  slideValue.textContent = value;
};

/**
 * Copy the generated password to clipboard.
 */
copytext1.addEventListener("click", Copytext);

function Copytext() {
  if (windowEl1.textContent === "") {
    ShowToast(errorMsg);
  } else {
    ShowToast(successMsg);
    navigator.clipboard.writeText(windowEl1.textContent);
  }
}

/**
 * Toast notification system.
 */
const successMsg =
  '<i class="fa-solid fa-circle-check"></i> Successfully Copied';
const errorMsg = `<i class="fa-solid fa-circle-xmark"></i> The password has not been generated yet`;

copytext1.addEventListener("click", ToastMessage);

function ShowToast(Msg) {
  const toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = Msg;
  toastBox.appendChild(toast);

  if (Msg.includes("password")) {
    toast.classList.add("error");
  }

  // Remove the toast after 5 seconds
  setTimeout(() => {
    toast.remove();
  }, 5000);
}
