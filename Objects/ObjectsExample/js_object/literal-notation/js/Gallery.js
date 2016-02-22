var Gallery = {
	Images: ['istockphoto_14149033.jpg', 'istockphoto_14232771.jpg', 'istockphoto_14667148.jpg'],
	CurrentIndex: 0,
	Next: function()
	{
		if(Gallery.CurrentIndex < (Gallery.Images.length-1))
		{
			Gallery.CurrentIndex++;
		}
		else
		{
			Gallery.CurrentIndex = 0;
		}
		Gallery.Display();
	},
	Prev: function()
	{
		if(Gallery.CurrentIndex > 0)
		{
			Gallery.CurrentIndex--;
		}
		else
		{
			Gallery.CurrentIndex = (Gallery.Images.length-1);
		}
		Gallery.Display();
	},
	Display: function()
	{
		var photoGallery = document.getElementById('photo-gallery');
		var currentImage = Gallery.Images[Gallery.CurrentIndex];
		photoGallery.src = "../assets/img/"+ currentImage;
	}
};
window.onload = function()
{
	var _loopInterval = setInterval(Gallery.Next, 2500);
};