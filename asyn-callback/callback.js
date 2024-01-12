// function display(some) {
//   document.getElementById("demo").innerHTML = some;
// }

function Calculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

let result = myCalculator(5, 5);
display(result);



console.log("Line 1 Code");
 
setTimeout(function(){
    console.log('line 2 Code')
}, 2000)


console.log("Line 3 Code");