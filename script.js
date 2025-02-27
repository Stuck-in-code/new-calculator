if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  // the current time function
  // this is the current time function
  setInterval(() => {
    const timeNow = document.querySelector(".time-now");
    const outDate = new Date();
    const currentTime = outDate.toLocaleTimeString();
    timeNow.innerText = currentTime;
  }, 1000);

  // calculator functionalities

  const displayText = document.querySelector(".display-text");
  const keyBoard = document.getElementsByClassName("keyboard")[0];
  const keyBoardBtn = keyBoard.getElementsByTagName("button");

  for (var i = 0; i < keyBoardBtn.length; i++) {
    keyBoardBtn[i].addEventListener("click", (e) => {
      if (e.target.innerText == "AC") {
        displayText.innerText = "";
      } else if (e.target.innerText == "DEL") {
        displayText.innerText = displayText.innerText.slice(0, -1);
      } else if (e.target.innerText == "=") {
        try {
          if (displayText.innerText.indexOf("%") != -1) {
            displayText.innerText = displayText.innerText.slice(0, -1) / 100;
          } else {
            displayText.innerText = eval(displayText.innerText);
          }
        } catch {
          displayText.innerHTML = "invalid";
        }
      } else {
        displayText.innerText += e.target.innerText;
      }
    });
  }
}
