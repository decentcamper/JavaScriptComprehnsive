var found = -1;
for (var a = 0; a < array.length; a++) 
{
  if (array[a] == 'banana')
  {
    found = a;
    break;
  }
}

if (found > -1)
  alert('banana found at element ' + found);
