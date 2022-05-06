// let line1 = [192, 97, 98, 99, 100, 101, 102, 103, 104, 105, 96, 189, 61, 8];
const enCode = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8",
  "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT",
  "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "CapsLock",
  "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote",
  "Enter", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period",
  "Slash", "ArrowUp", "ShiftRight", "ControlLeft", "AltLeft", "MetaLeft", "Space", "MetaRight", "AltRight",
  "ArrowLeft", "ArrowDown", "ArrowRight"];
const enLittle = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "delete",
  "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\",
  "caps lock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "return",
  "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "&#9650", "shift",
  "control", "option", "command", " ", "command", "option", "&#9668", "&#9660", "&#9658"];

const ruLittle = ["]", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "delete",
  "tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "ё",
  "caps lock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "return",
  "shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "/", "&#9650", "shift",
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
    // document.onkeydown = (event) => {
    //   console.log(event);
    //   document.querySelector(`.keyboard .btn .${enCode[event]}`).classList.add("active");
    // };
  }

  listenEvent() {
    this.textarea.onblur = () => {
      this.textarea.focus();
    };

    document.onkeydown = (event) => {
      const cdn = event.code;
      const index = enCode.indexOf(cdn);
      const ruIndex = index;
      if (this.lang === "en") {
        document.querySelector(`.keyboard .${event.code}`).classList.add("active");
        this.textarea.innerHTML += `${event.key}`;
      }
      if (event.ctrlKey && event.shiftKey && this.lang === "en") {
        this.lang = "ru";
        let out = "";
        for (let i = 0; i < ruLittle.length; i += 1) {
          out += `<div class="btn ${enCode[i]}">${ruLittle[i]}</div>`;
        }
        this.keyboard.innerHTML = out;
      }
      if (this.lang === "ru") {
        this.textarea.innerHTML += ruLittle[ruIndex];
      }
    };

    document.onkeyup = (event) => {
      document.querySelector(`.keyboard .${event.code}`).classList.remove("active");
    };

    document.addEventListener("mousedown", (event) => {
      if (event.target.classList.contains("btn")) {
        event.target.classList.add("active");
        this.textarea.innerHTML += event.target.innerHTML;
        // this.textarea.innerHTML = document.querySelector(`.keyboard .${event.code}`).innerHTML;
      }
    });

    document.addEventListener("mouseup", (event) => {
      if (event.target.classList.contains("btn")) {
        event.target.classList.remove("active");
      }
    });
  }
}

window.onload = () => {
  const myKeyboard = new VirtualKeyboard();
  myKeyboard.createKeyboard();
  myKeyboard.listenEvent();
};
