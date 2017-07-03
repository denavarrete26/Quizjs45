var n = [15, 29, 78, 29, 40, 20, 18, 100, 78, 68];

function pares(n)
{
  for(var i = 0; n % 2 == 0; i++)
  var par = pares(n-(i + 1));

  for(var j = 0; n % 2 == 0; j++)
  console.log(par + (j++));
}
