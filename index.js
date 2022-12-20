const lenEl = document.getElementById("len");
const numberEl = document.getElementById("number");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const symbolEl = document.getElementById("symbol");
const copyEl = document.querySelector(".copy");
const genEl = document.querySelector(".gen");
const pwDisplayEl = document.querySelector("#pw");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#£$%&*()_+-";

function getUpper() {
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}
function getLower() {
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}
function getNumber() {
  return number[Math.floor(Math.random() * number.length)];
}
function getSymbol() {
  return symbol[Math.floor(Math.random() * symbol.length)];
}

function genPassWord() {
  const len = lenEl.value;
  let password = "";
  if (upperEl.checked) {
    password += getUpper();
  }
  if (lowerEl.checked) {
    password += getLower();
  }

  if (numberEl.checked) {
    password += getNumber();
  }
  if (symbolEl.checked) {
    password += getSymbol();
  }

  for (let i = password.length; i < len; i++) {
    const x = getEach();
    password += x;
  }
  pwDisplayEl.innerHTML = password;
}

function getEach() {
  let each = [];
  if (upperEl.checked) {
    each.push(getUpper());
  }
  if (lowerEl.checked) {
    each.push(getLower());
  }

  if (numberEl.checked) {
    each.push(getNumber());
  }
  if (symbolEl.checked) {
    each.push(getSymbol());
  }
  if (each.length === 0) {
    return "";
  }
  return each[Math.floor(Math.random() * each.length)];
}

function copyToClip() {
  const textarea = document.createElement("textarea");
  const password = pwDisplayEl.innerText;
  //   console.log("hi");
  if (!password) {
    return;
  }

  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to clipboard");
}
genEl.addEventListener("click", () => {
  genPassWord();
});

copyEl.addEventListener("click", () => {
  copyToClip();
});
