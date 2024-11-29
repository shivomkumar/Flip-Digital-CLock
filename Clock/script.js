function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
  
    const digitElements = document.getElementsByClassName("digit");
    const digits = [hours[0], hours[1], ":", minutes[0], minutes[1], ":", seconds[0], seconds[1]];
  
    for (let i = 0; i < digits.length; i++) {
      const digitElement = digitElements[i];
      const currentDigit = digitElement.innerText;
  
      if (currentDigit !== digits[i]) {
        digitElement.classList.add("flipping");
        setTimeout(() => {
          digitElement.innerText = digits[i];
          digitElement.classList.remove("flipping");
        }, 500);
      }
    }
  
    setTimeout(updateClock, 1000);
  }
  
  updateClock();
  