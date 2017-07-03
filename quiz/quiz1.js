//Ejercicio1
var n1 = 10;
var n2 = 30;
var n3 = 5;

var min = 5;
var max = 30;

if(n3 <= n2 || n3 <= n1)
{
  min = Math.min(n1, n2, n3);
}
else
{
  max = Math.max(n1, n2, n3);
}
console.log(max, min);
