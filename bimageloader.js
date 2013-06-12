;(function($) {
	var images = Array();
	var count = 0;
	var countLoaded = 0;

	$.bimageloader = {
		version: '0.0.1'
	};

	var defaults = {
		onEndPreloadAll: undefined
	};

	$.fn.bimageloader = function(settings) {
		//  Extend Gallery Object
		$.extend(this, {
			// Returns the version of the script
			version: $.bimageloader.version,

			loadImage: function(url) {
				var gal = this;
				var image = new Image();
				image.src = url;
				image.onerror = function(e){
					console.log('error loading image:' + countLoaded);
					countLoaded++;
					gal.checkLoadAll();
				}
				image.onload = function() {
					countLoaded++;
					gal.checkLoadAll();
				}	
			},
			preloadInit: function() {
				var gal = this;
				$(this).find('img').each(function(){
					var url = $(this).attr('src');
					images[count] = gal.loadImage(url);
					count++;
				});
			},
			checkLoadAll: function()	{
				if(	countLoaded == images.length && gal.onEndPreloadAll)
						gal.onEndPreloadAll();
			}
			
		});
		var gal = this;
		$.extend(this, defaults, settings);
		setTimeout(function() { gal.preloadInit(); }, 1000);
		return this;
	};
})(jQuery);