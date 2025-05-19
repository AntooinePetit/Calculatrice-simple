const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');
let isFirstInput = true;

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const value = String(e.target.value);
    console.log(value);

    if(isFirstInput === true) {
      isFirstInput = false;
      display.textContent = "";
    }

    switch (value) {
      case 'C':
        display.textContent = '0';
        break;
      case '=':
        display.textContent = eval(display.textContent);
        break;
      default:
        display.textContent += value;
    }
  })
})