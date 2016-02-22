for (var a = array.length ? 1; a >= 0; a--)
{
  // Actions can be performed here on array[a], before deletion
  ...

  array.splice(a, 1);  
}
