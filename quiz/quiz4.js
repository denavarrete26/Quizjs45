var n = 5;

function espacios (n)
{
  var s = "";
  for (var i = 0; i < n; i++)
   s += " ";
  return s;
}

for (var i = 0; i < n; i++) {
  var sp = espacios (n - (i+1));
  var content = "";
  for (j = 0; j < i+i; j++)
    content +=  j;
  console.log(sp + content);
}
