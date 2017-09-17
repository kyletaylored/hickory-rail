'use strict';

(function($){
	$(document).ready(function() {
		$('#support-content .row').imagesLoaded( function() {
			$('#support-content .row').equalize();
		});
		$('.partners-content .row').imagesLoaded( function() {
			$('.partners-content .row').equalize();
		});
	});
})(jQuery);