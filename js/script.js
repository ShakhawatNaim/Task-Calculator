let output = document.getElementById("output");

function addToOutput(value) {
  output.innerHTML += value;
}

function clearOutput() {
  output.innerHTML = "";
}

function calculate() {
  let result = eval(output.innerHTML);
  output.innerHTML = result;
}

//break

function add() {
  let numberOne = parseInt(document.getElementById("num-one").value);
  let numberTwo = parseInt(document.getElementById("num-two").value);
  let result = numberOne + numberTwo;
  document.getElementById("result").innerHTML = "Result: " + result;
}

function subtract() {
  let numberOne = parseInt(document.getElementById("num-one").value);
  let numberTwo = parseInt(document.getElementById("num-two").value);
  let result = numberOne - numberTwo;
  document.getElementById("result").innerHTML = "Result: " + result;
}

function divide() {
  let numberOne = parseInt(document.getElementById("num-one").value);
  let numberTwo = parseInt(document.getElementById("num-two").value);
  let result = numberOne / numberTwo;
  document.getElementById("result").innerHTML = "Result: " + result;
}

function multiply() {
  let numberOne = parseInt(document.getElementById("num-one").value);
  let numberTwo = parseInt(document.getElementById("num-two").value);
  let result = numberOne * numberTwo;
  document.getElementById("result").innerHTML = "Result: " + result;
}

