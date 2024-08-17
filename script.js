let valueDispaly = document.querySelectorAll(`.count`);
let interval = 1000;

valueDispaly.forEach((value) => {
  let startValue = 0;
  let endValue = parseInt(value.getAttribute(`value`));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(() => {
    startValue += 1;
    value.innerText = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
