

let num1 = parseInt(document.getElementById("input1").value);
let num2 = parseInt(document.getElementById("input2").value);
let total = 0;

function updateNums(){
  let new1 = parseInt(document.getElementById("input1").value);
  let new2 = parseInt(document.getElementById("input2").value);
  if (!new1 && !new2) return;
  num1 = new1;
  num2 = new2;
}

document.getElementById("add").onclick=addNum;
document.getElementById("minus").onclick=subtractNum;
document.getElementById("multiply").onclick=multiNum;
document.getElementById("divide").onclick=divideNum;



function addNum(){
  updateNums();
  total = num1 + num2;
  resultUpdate();
  console.log(total);
}

function subtractNum(){
  updateNums();
  total = num1 - num2;
  resultUpdate();
  console.log(num1, num2, total);
}

function multiNum(){
  updateNums();
  total = num1 * num2;
  resultUpdate();
  console.log(total);
}

function divideNum(){
  updateNums();
  total = num1 / num2;
  resultUpdate();
  console.log(total);
}

function resultUpdate(){
  if (!num1 && !num2) return;
  document.getElementById("result").innerHTML = "Result :" + " " + total;
}

resultUpdate();
console.log(total);
