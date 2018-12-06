var trySide = function() {
  var a = parseFloat(document.getElementById('num0').value);
  var b = parseFloat(document.getElementById('num1').value);
  var c = parseFloat(document.getElementById('num2').value);

if ((a+b)<=c || (a+c)<=b ||(b+c)<=a) {
    alert("not a triangle")
  } else if (a === b && b === c && a === c) {
    alert("equilateral");
  } else if (a === b || b === c || a === c) {
    alert("isosceles");
  } else if (a !== b && b !== c && a !== c){
  alert("scalene")
  } else {
  alert("it's not a triangle!")
};
};
