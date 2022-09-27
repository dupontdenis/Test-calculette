let obj = {
  currentOperand: '2',
  previousOperand: '3+',
  operation: "*"
}

/**
 * 
 * @param {*} obj Obj is the calculator
 */
function clear(obj) {

  obj.currentOperand = '';
  obj.previousOperand = '';
  obj.operation = undefined;

}

function clearObj( {currentOperand, previousOperand, operation} ) {

  currentOperand = '';
  previousOperand = '';
  operation = undefined;

  return {
    currentOperand,
    previousOperand,
    operation
  }

}


function appendNumber(obj, number) {
  let newCurrent = obj.currentOperand.toString() + number.toString();
  obj.currentOperand = newCurrent
  return obj.currentOperand;
}


function add(x,y){
  return x+y;
}


module.exports = {
  clear,
  clearObj,
  appendNumber,
  add
}
