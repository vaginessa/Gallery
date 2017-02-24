var ProjectApp = function (){
	// My app scripts
};

window.addEventListener('DOMContentLoaded', function() {
	new ProjectApp();
}) 

$(document).ready(function() {
	var html = $('body').width();


	if(html < 770) {
		// Column equal height
		var maxheight = 0;
		$(".header__item--title").each(function() {
		  if($(this).height() > maxheight) { maxheight = $(this).height(); }
		});

		$(".header__item--title").height(maxheight);

	}
	

	// Slider
	$('#slider').owlCarousel({
    loop:true,
  	items:1,
  	dots: true,
  	nav: true,
  	navText: ['', '']    
	})



	// Ajax form
	$("#contactForm").submit(function(e) {
		e.preventDefault();
	 //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);

		});
		return false;
	});

})
