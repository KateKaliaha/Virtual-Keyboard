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
const enBig = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "delete",
  "tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|",
  "caps lock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "return",
  "shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "&#9650", "shift",
  "control", "option", "command", " ", "command", "option", "&#9668", "&#9660", "&#9658"];

const ruLittle = ["]", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "delete",
  "tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "ё",
  "caps lock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "return",
  "shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "/", "&#9650", "shift",
  "control", "option", "command", " ", "command", "option", "&#9668", "&#9660", "&#9658"];
const ruBig = ["[", "!", "\"", "№", "%", ":", ",", ".", ";", "(", ")", "_", "+", "delete",
  "tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "Ё",
  "caps lock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "return",
  "shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", "?", "&#9650", "shift",
  "control", "option", "command", " ", "command", "option", "&#9668", "&#9660", "&#9658"];

class VirtualKeyboard {
  constructor() {
    this.lang = "en";
    this.ctrlShift = true;
    this.caps = false;
    this.size = true;
    this.shift = false;
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

  //   fetch() {
  //     const data = localStorage.getItem(this.lang, "lang");

  //     if (data === null) { return false; }

  //     return data;
  //   }

  listenEvent() {
    this.textarea.onblur = () => {
      this.textarea.focus();
    };

    document.onkeydown = (event) => {
      const cdn = event.code;
      const index = enCode.indexOf(cdn);
      const ruIndex = index;
      if (this.lang === "en") {
        localStorage.setItem("lang", "en");
        if (event.shiftKey && event.getModifierState("CapsLock") === false) {
          this.out = "";
          for (let i = 0; i < enLittle.length; i += 1) {
            this.out += `<div class="btn ${enCode[i]}">${enBig[i]}</div>`;
          }
          this.keyboard.innerHTML = this.out;
        } else if (event.shiftKey && event.getModifierState("CapsLock") === true) {
          this.out = "";
          for (let i = 0; i < enLittle.length; i += 1) {
            this.out += `<div class="btn ${enCode[i]}">${enBig[i]}</div>`;
          }
          this.keyboard.innerHTML = this.out;
        } else if (event.getModifierState("CapsLock") && event.shiftKey === false) {
          this.out = "";
          for (let i = 0; i < enLittle.length; i += 1) {
            if (i === 13 || i === 14 || i === 28 || i === 40 || i === 41 || i === 52
            || i === 53 || i === 54 || i === 55 || i === 56 || i === 58 || i === 59
            || i === 60) {
              this.out += `<div class="btn ${enCode[i]}">${enLittle[i]}</div>`;
            } else {
              this.out += `<div class="btn ${enCode[i]}">${enLittle[i].toUpperCase()}</div>`;
            }
            this.keyboard.innerHTML = this.out;
          }
        } else if (event.code === "CapsLock" && event.getModifierState("CapsLock")) {
          if (event.getModifierState("CapsLock") && event.shiftKey === false) {
            this.out = "";
            for (let i = 0; i < enLittle.length; i += 1) {
              if (i === 13 || i === 14 || i === 28 || i === 40 || i === 41 || i === 52
            || i === 53 || i === 54 || i === 55 || i === 56 || i === 58 || i === 59
            || i === 60) {
                this.out += `<div class="btn ${enCode[i]}">${enLittle[i]}</div>`;
              } else {
                this.out += `<div class="btn ${enCode[i]}">${enLittle[i].toUpperCase()}</div>`;
              }
              this.keyboard.innerHTML = this.out;
            }
            this.caps = true;
          }
        } else if (event.getModifierState("CapsLock") === false && event.shiftKey === false) {
          this.out = "";
          for (let i = 0; i < enLittle.length; i += 1) {
            this.out += `<div class="btn ${enCode[i]}">${enLittle[i]}</div>`;
          }
          this.keyboard.innerHTML = this.out;
          this.caps = false;
        }
        if (event.code !== "Enter" && event.code !== "Backspace" && event.code !== "Tab"
        && event.code !== "CapsLock" && event.code !== "ShiftLeft" && event.code !== "ShiftRight"
        && event.code !== "ControlLeft" && event.code !== "AltLeft" && event.code !== "MetaLeft"
        && event.code !== "MetaRight" && event.code !== "AltRight" && event.code !== "ArrowUp"
        && event.code !== "ArrowLeft" && event.code !== "ArrowDown" && event.code !== "ArrowRight") {
          this.textarea.innerHTML += `${event.key}`;
        }
        if (event.key === "Tab") {
          event.preventDefault();
          this.textarea.innerHTML += "\t";
        }
      }

      if (this.lang === "ru") {
        localStorage.setItem("lang", "ru");
        if (event.shiftKey && event.getModifierState("CapsLock") === false) {
          this.out = "";
          for (let i = 0; i < enLittle.length; i += 1) {
            this.out += `<div class="btn ${enCode[i]}">${ruBig[i]}</div>`;
          }
          this.keyboard.innerHTML = this.out;
        } else if (event.shiftKey && event.getModifierState("CapsLock") === true) {
          this.out = "";
          for (let i = 0; i < enLittle.length; i += 1) {
            this.out += `<div class="btn ${enCode[i]}">${ruBig[i]}</div>`;
          }
          this.keyboard.innerHTML = this.out;
        } else if (event.getModifierState("CapsLock") && event.shiftKey === false) {
          this.out = "";
          for (let i = 0; i < enLittle.length; i += 1) {
            if (i === 13 || i === 14 || i === 28 || i === 40 || i === 41 || i === 52
                      || i === 53 || i === 54 || i === 55 || i === 56 || i === 58 || i === 59
                      || i === 60) {
              this.out += `<div class="btn ${enCode[i]}">${ruLittle[i]}</div>`;
            } else {
              this.out += `<div class="btn ${enCode[i]}">${ruLittle[i].toUpperCase()}</div>`;
            }
          }
          this.keyboard.innerHTML = this.out;
          this.caps = true;
        } else if (event.code === "CapsLock") {
          if (event.getModifierState("CapsLock")) {
            document.querySelector(".keyboard .CapsLock").classList.add("active-caps");
            this.out = "";
            for (let i = 0; i < enLittle.length; i += 1) {
              if (i === 13 || i === 14 || i === 28 || i === 40 || i === 41 || i === 52
                      || i === 53 || i === 54 || i === 55 || i === 56 || i === 58 || i === 59
                      || i === 60) {
                this.out += `<div class="btn ${enCode[i]}">${ruLittle[i]}</div>`;
              } else {
                this.out += `<div class="btn ${enCode[i]}">${ruLittle[i].toUpperCase()}</div>`;
              }
            }
            this.keyboard.innerHTML = this.out;
            this.caps = true;
          }
        } else if (event.getModifierState("CapsLock") === false) {
          this.out = "";
          for (let i = 0; i < ruLittle.length; i += 1) {
            this.out += `<div class="btn ${enCode[i]}">${ruLittle[i]}</div>`;
          }
          this.keyboard.innerHTML = this.out;
          this.caps = false;
        }
        if (event.code !== "Enter" && event.code !== "Backspace" && event.code !== "Tab"
         && event.code !== "CapsLock" && event.code !== "ShiftLeft" && event.code !== "ShiftRight"
         && event.code !== "ControlLeft" && event.code !== "AltLeft" && event.code !== "MetaLeft"
         && event.code !== "MetaRight" && event.code !== "AltRight" && event.code !== "ArrowUp"
         && event.code !== "ArrowLeft" && event.code !== "ArrowDown" && event.code !== "ArrowRight") {
          if (this.caps) {
            this.textarea.innerHTML += ruLittle[ruIndex].toUpperCase();
          } else if (event.shiftKey) {
            this.textarea.innerHTML += ruBig[ruIndex];
          } else {
            this.textarea.innerHTML += ruLittle[ruIndex];
          }
        }
        if (event.key === "Tab") {
          event.preventDefault();
          this.textarea.innerHTML += "\t";
        }
      }
      if (event.ctrlKey && event.shiftKey && this.ctrlShift === true) {
        this.lang = "ru";
        this.out = "";
        for (let i = 0; i < ruLittle.length; i += 1) {
          this.out += `<div class="btn ${enCode[i]}">${ruLittle[i]}</div>`;
        }
        this.keyboard.innerHTML = this.out;
        this.ctrlShift = false;
      } else if (event.ctrlKey && event.shiftKey && this.ctrlShift === false) {
        this.lang = "en";
        this.out = "";
        for (let i = 0; i < enLittle.length; i += 1) {
          this.out += `<div class="btn ${enCode[i]}">${enLittle[i]}</div>`;
        }
        this.keyboard.innerHTML = this.out;
        this.ctrlShift = true;
      }
      if (event.key === "Enter") {
        this.textarea.innerHTML += "\n";
      }
      if (event.key === "ArrowUp") {
        this.textarea.innerHTML += "&#8593";
      }
      if (event.key === "ArrowLeft") {
        this.textarea.innerHTML += "&#8592";
      }
      if (event.key === "ArrowDown") {
        this.textarea.innerHTML += "&#8595";
      }
      if (event.key === "ArrowRight") {
        this.textarea.innerHTML += "&#8594";
      }
      document.querySelector(`.keyboard .${event.code}`).classList.add("active");
    };

    document.onkeyup = (event) => {
      if (this.lang === "en") {
        if (event.getModifierState("CapsLock") === false && event.shiftKey === false) {
          this.out = "";
          for (let i = 0; i < enLittle.length; i += 1) {
            this.out += `<div class="btn ${enCode[i]}">${enLittle[i]}</div>`;
          }
          this.keyboard.innerHTML = this.out;
          this.caps = false;
        }
      }
      if (this.lang === "ru") {
        if (event.getModifierState("CapsLock") === false && event.shiftKey === false) {
          this.out = "";
          for (let i = 0; i < ruLittle.length; i += 1) {
            this.out += `<div class="btn ${enCode[i]}">${ruLittle[i]}</div>`;
          }
          this.keyboard.innerHTML = this.out;
          this.caps = false;
        }
      }
      document.querySelector(`.keyboard .${event.code}`).classList.remove("active");
    };

    document.addEventListener("mousedown", (event) => {
      const buttons = document.querySelectorAll(".btn");
      if (event.target.innerHTML.length === 1 && !event.target.classList.contains("ArrowUp")
        && !event.target.classList.contains("ArrowLeft") && !event.target.classList.contains("ArrowDown")
        && !event.target.classList.contains("ArrowRight")) {
        this.textarea.innerHTML += event.target.innerHTML;
      }
      if (event.target.innerHTML === "return") {
        this.textarea.innerHTML += "\n";
      }
      if (event.target.innerHTML === "delete") {
        this.textarea.innerHTML = this.textarea.innerHTML.slice(0, -1);
      }
      if (event.target.classList.contains("ArrowUp")) {
        this.textarea.innerHTML += "&#8593";
      }
      if (event.target.classList.contains("ArrowLeft")) {
        this.textarea.innerHTML += "&#8592";
      }
      if (event.target.classList.contains("ArrowDown")) {
        this.textarea.innerHTML += "&#8595";
      }
      if (event.target.classList.contains("ArrowRight")) {
        this.textarea.innerHTML += "&#8594";
      }
      if (event.target.innerHTML === "tab") {
        this.textarea.innerHTML += "\t";
      }

      if (this.lang === "en") {
        if (event.target.classList.contains("CapsLock") && this.caps === false) {
          for (let i = 0; i < buttons.length; i += 1) {
            if (buttons[i].innerHTML.length === 1) {
              buttons[i].innerHTML = buttons[i].innerHTML.toUpperCase();
            }
          }
          this.caps = true;
        } else if (event.target.classList.contains("CapsLock") && this.caps === true) {
          for (let i = 0; i < buttons.length; i += 1) {
            if (buttons[i].innerHTML.length === 1) {
              buttons[i].innerHTML = buttons[i].innerHTML.toLocaleLowerCase();
            }
          }
          this.caps = false;
        }
        if (event.target.classList.contains("ShiftLeft") || event.target.classList.contains("ShiftRight")) {
          for (let i = 0; i < buttons.length; i += 1) {
            if (buttons[i].innerHTML.length === 1) {
              if (buttons[i].innerHTML === "`") {
                buttons[i].innerHTML = "~";
              } else if (buttons[i].innerHTML === "1") {
                buttons[i].innerHTML = "!";
              } else if (buttons[i].innerHTML === "2") {
                buttons[i].innerHTML = "@";
              } else if (buttons[i].innerHTML === "3") {
                buttons[i].innerHTML = "#";
              } else if (buttons[i].innerHTML === "4") {
                buttons[i].innerHTML = "$";
              } else if (buttons[i].innerHTML === "5") {
                buttons[i].innerHTML = "%";
              } else if (buttons[i].innerHTML === "6") {
                buttons[i].innerHTML = "^";
              } else if (buttons[i].innerHTML === "7") {
                buttons[i].innerHTML = "&";
              } else if (buttons[i].innerHTML === "8") {
                buttons[i].innerHTML = "*";
              } else if (buttons[i].innerHTML === "9") {
                buttons[i].innerHTML = "(";
              } else if (buttons[i].innerHTML === "0") {
                buttons[i].innerHTML = ")";
              } else if (buttons[i].innerHTML === "-") {
                buttons[i].innerHTML = "_";
              } else if (buttons[i].innerHTML === "=") {
                buttons[i].innerHTML = "+";
              } else if (buttons[i].innerHTML === "[") {
                buttons[i].innerHTML = "{";
              } else if (buttons[i].innerHTML === "]") {
                buttons[i].innerHTML = "}";
              } else if (buttons[i].innerHTML === "\\") {
                buttons[i].innerHTML = "|";
              } else if (buttons[i].innerHTML === ";") {
                buttons[i].innerHTML = ":";
              } else if (buttons[i].innerHTML === "'") {
                buttons[i].innerHTML = "\"";
              } else if (buttons[i].innerHTML === ",") {
                buttons[i].innerHTML = "<";
              } else if (buttons[i].innerHTML === ".") {
                buttons[i].innerHTML = ">";
              } else if (buttons[i].innerHTML === "/") {
                buttons[i].innerHTML = "?";
              } else {
                buttons[i].innerHTML = buttons[i].innerHTML.toUpperCase();
              }
            }
          }
        }
      }
      if (this.lang === "ru") {
        if (event.target.classList.contains("ShiftLeft") || event.target.classList.contains("ShiftRight")) {
          for (let i = 0; i < buttons.length; i += 1) {
            if (buttons[i].innerHTML.length === 1) {
              if (buttons[i].innerHTML === "]") {
                buttons[i].innerHTML = "[";
              } else if (buttons[i].innerHTML === "1") {
                buttons[i].innerHTML = "!";
              } else if (buttons[i].innerHTML === "2") {
                buttons[i].innerHTML = "\"";
              } else if (buttons[i].innerHTML === "3") {
                buttons[i].innerHTML = "№";
              } else if (buttons[i].innerHTML === "4") {
                buttons[i].innerHTML = "%";
              } else if (buttons[i].innerHTML === "5") {
                buttons[i].innerHTML = ":";
              } else if (buttons[i].innerHTML === "6") {
                buttons[i].innerHTML = ",";
              } else if (buttons[i].innerHTML === "7") {
                buttons[i].innerHTML = ".";
              } else if (buttons[i].innerHTML === "8") {
                buttons[i].innerHTML = ";";
              } else if (buttons[i].innerHTML === "9") {
                buttons[i].innerHTML = "(";
              } else if (buttons[i].innerHTML === "0") {
                buttons[i].innerHTML = ")";
              } else if (buttons[i].innerHTML === "-") {
                buttons[i].innerHTML = "_";
              } else if (buttons[i].innerHTML === "=") {
                buttons[i].innerHTML = "+";
              } else if (buttons[i].innerHTML === "/") {
                buttons[i].innerHTML = "?";
              } else {
                buttons[i].innerHTML = buttons[i].innerHTML.toUpperCase();
              }
            }
          }
        }
        if (event.target.classList.contains("CapsLock") && this.caps === false) {
          for (let i = 0; i < buttons.length; i += 1) {
            if (buttons[i].innerHTML.length === 1) {
              buttons[i].innerHTML = buttons[i].innerHTML.toUpperCase();
            }
          }
          this.caps = true;
        } else if (event.target.classList.contains("CapsLock") && this.caps === true) {
          for (let i = 0; i < buttons.length; i += 1) {
            if (buttons[i].innerHTML.length === 1) {
              buttons[i].innerHTML = buttons[i].innerHTML.toLocaleLowerCase();
            }
          }
          this.caps = false;
        }
      }
      event.target.classList.add("active");
    });

    document.addEventListener("mouseup", (event) => {
      event.target.classList.remove("active");
      if (this.lang === "en") {
        if (event.target.classList.contains("ShiftLeft") || event.target.classList.contains("ShiftRight")) {
          this.out = "";
          for (let i = 0; i < enLittle.length; i += 1) {
            this.out += `<div class="btn ${enCode[i]}">${enLittle[i]}</div>`;
          }
          this.keyboard.innerHTML = this.out;
        }
      }
      if (this.lang === "ru") {
        if (event.target.classList.contains("ShiftLeft") || event.target.classList.contains("ShiftRight")) {
          this.out = "";
          for (let i = 0; i < ruLittle.length; i += 1) {
            this.out += `<div class="btn ${enCode[i]}">${ruLittle[i]}</div>`;
          }
          this.keyboard.innerHTML = this.out;
        }
      }
    });
  }
}

window.onload = () => {
  const myKeyboard = new VirtualKeyboard();
  myKeyboard.createKeyboard();
  myKeyboard.listenEvent();
//   myKeyboard.fetch();
};
