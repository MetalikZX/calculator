let firstValue = "";
let secondValue = "";
let operator = "";
let isSecondValue = false;
const display = document.querySelector('.display');;


function calculate (a,operator,b) {
    let result;
    switch (operator) {
      case '+':
        result = a + b;
        return result
        break;
      case '-':
        result = a - b;
        return result
        break;
      case '*':
        result = a * b;
        return result
        break;
      case '/':
        result = a / b;
        return result
        break;
      default:
        return;
    }
    return result;
}


function handleButtonClick(event) {
  const target = event.target;
  if (target.tagName !== 'BUTTON') return;

  const id = target.id;
  const value = target.textContent;

  // Digits
  if (!isNaN(id)) {
    if (!isSecondValue) {
      firstValue += value;
      display.textContent = firstValue;
    } else {
      secondValue += value;
      display.textContent = secondValue;
    }
    return;
  }

  // Operator
  if (id === 'add' || id === 'subtract' || id === 'multiply' || id === 'divide') {
    if (firstValue === '') return;
    operator = value;
    isSecondValue = true;
     if (firstValue !== '' && operator !== '' && secondValue !== '') {
    const a = Number(firstValue);
    const b = Number(secondValue);
    const result = calculate(a, operator, b);

    display.textContent = result;
    firstValue = String(result);
    secondValue = '';
  }

  operator = value;
  isSecondValue = true;
  return;
  }

  // Equals
  if (id === 'result') {
    if (firstValue === '' || secondValue === '' || !operator) return;
    const a = Number(firstValue);
    const b = Number(secondValue);
    const result = calculate(a, operator, b);

    display.textContent = result;
    firstValue = String(result);
    secondValue = '';
    operator = null;
    isSecondValue = false;
  }
}

document
  .querySelector('.interface-grid')
  .addEventListener('click', handleButtonClick);

