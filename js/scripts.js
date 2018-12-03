var trySide = function() {
  var a = document.getElementById('num0').value;
  var b = document.getElementById('num1').value;
  var c = document.getElementById('num2').value;

  var strA = a.toString();
  var strB = b.toString();
  var strC = c.toString();

  if (strA === strB && strB === strC && strA === strC) {
    alert("equilateral");
  } else if (strA === strB || strB === strC || strA === strC) {
    alert("isosceles");
  } else if(strA !== strB && strB !== strC && strA !== strC && strA+strB>strC && strA+strC>strB &&strB+strC>strA){
    alert("scalene");
  } else {
    alert("it's not a triangle!");
  }
};
