Array.prototype.GetIndex = function(item)
{
	for(var i=0; i<this.length; i++)
	{
		if(this[i] == item)
		{
			return i;
		}
	}
}