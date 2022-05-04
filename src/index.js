// let line1 = [192, 97, 98, 99, 100, 101, 102, 103, 104, 105, 96, 189, 61, 8];
const enCode = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8",
  "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT",
  "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "CapsLock",
  "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote",
  "Enter", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period",
  "Slash", "ArrowLeft", "ShiftRight", "ControlLeft", "AltLeft", "MetaLeft", "Space", "MetaRight", "AltRight",
  "ArrowUp", "ArrowDown", "ArrowRight"];
const enLittle = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "delete",
  "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\",
  "caps lock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "return",
  "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "&#9650", "shift",
  "control", "option", "command", " ", "command", "option", "&#9668", "&#9660", "&#9658"];
// let line2= [];
// let line3 = [];
// let line4 = [];
// let line5 = [];
// eslint-disable-next-line prefer-const
let mas = [];
// eslint-disable-next-line prefer-const
let key = [];

document.onkeydown = function (event) {
// console.log(event.key);
  mas.push(event.code);
  key.push(event.key);
  console.log(mas);
  console.log(key);
};

class VirtualKeyboard {
  constructor() {
    this.lang = "en";
  }

  createKeyboard() {
    const body = document.querySelector("body");
    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("wrapper");
    body.appendChild(this.wrapper);
    this.textarea = document.createElement("textarea");
    this.textarea.classList.add("textarea");
    this.wrapper.appendChild(this.textarea);
    this.keyboard = document.createElement("div");
    this.keyboard.classList.add("keyboard");
    this.wrapper.appendChild(this.keyboard);
    let out = "";
    for (let i = 0; i < enLittle.length; i += 1) {
      out += `<div class="btn ${enCode[i]}">${enLittle[i]}</div>`;
    }
    this.keyboard.innerHTML = out;
  }
}

window.onload = () => {
  const myKeyboard = new VirtualKeyboard();
  myKeyboard.createKeyboard();
};

// function createKeyboard() {
//   const body = document.querySelector("body");
//   // eslint-disable-next-line prefer-const
//   let wrapper = document.createElement("div");
//   wrapper.classList.add("wrapper");
//   body.appendChild(wrapper);
//     let textarea = document.createElement("textarea");
//     textarea.classList.add("textarea");
//     wrapper.appendChild(textarea);
//     let keyboard = document.createElement("div");
//     keyboard.classList.add("keyboard");
//     wrapper.appendChild(keyboard);
//     // console.log(body);
//     // console.log(wrapper);
//     let out = "";
//     for (let i = 0; i < enLittle.length; i++) {
//         out += `<div class="btn ${enCode[i]}">` + enLittle[i] + "</div>";
//     }
//     keyboard.innerHTML = out;
// }
// createKeyboard();

// const btn = document.querySelectorAll(".btn");
// const btnSpace = document.querySelector(".Space");
// console.log(btnSpace);
// function makeSpecialBtn () {
//     for (let i = 0; i < btn.length; i++) {
//         // console.log(btn[i]);
//         if (btn[i].includes("Space")) {
//             console.log(btn[i]);
//         }
//     }
// }
// makeSpecialBtn();
// console.log(btn);
