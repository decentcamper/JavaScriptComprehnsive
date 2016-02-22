function GalleryObj()
{
	this.Images = ['istockphoto_14149033.jpg', 'istockphoto_14232771.jpg', 'istockphoto_14667148.jpg'];
	this.CurrentIndex = 0;
	this._loopInterval = setInterval(this.Next, 2500);
}

GalleryObj.prototype.Next = function()
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
};

GalleryObj.prototype.Prev = function()
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
};

GalleryObj.prototype.Display = function()
{
	var photoGallery = document.getElementById('photo-gallery');
	var currentImage = Gallery.Images[Gallery.CurrentIndex];
	photoGallery.src = "../assets/img/"+ currentImage;
};

var Gallery = new GalleryObj();