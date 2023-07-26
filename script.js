const display = document.getElementById('display');
const buttons = Array.from(document.querySelectorAll('button'));
let displayValue = '';
let operator = '';
let operand1 = '';

buttons.map(button => {
  button.addEventListener('click', (e) => {
    let buttonValue = e.target.value;

    if(buttonValue === 'clear'){
      displayValue = '';
      operator = '';
      operand1 = '';
      display.value = displayValue;
      return;
    }

    if(buttonValue === '='){
      switch(operator) {
        case '+':
        case '-':
        case '*':
        case '/':
          displayValue = eval(operand1 + operator + displayValue);
          break;
        case 'Math.pow':
          displayValue = Math.pow(operand1, parseFloat(displayValue));
          break;
        case 'Math.sqrt':
          displayValue = Math.sqrt(operand1);
          break;
        case 'Math.log':
          displayValue = Math.log(operand1);
          break;
        case 'Math.log10':
          displayValue = Math.log10(operand1);
          break;
        case 'Math.sin':
          displayValue = Math.sin(operand1);
          break;
        case 'Math.cos':
          displayValue = Math.cos(operand1);
          break;
        case 'Math.tan':
          displayValue = Math.tan(operand1);
          break;
        case 'Math.E':
          displayValue = Math.exp(operand1);
          break;
      }
      operand1 = displayValue;
      operator = '';
      display.value = displayValue;
      return;
    }

    if(['+', '-', '*', '/', 'Math.sqrt', 'Math.log', 'Math.log10', 'Math.sin', 'Math.cos', 'Math.tan', 'Math.pow', 'Math.E'].indexOf(buttonValue) > -1){
      operator = buttonValue;
      operand1 = displayValue;
      displayValue = '';
      return;
    }

    displayValue += buttonValue;
    display.value = displayValue;
  });
});