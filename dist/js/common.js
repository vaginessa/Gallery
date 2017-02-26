var ProjectApp = function (){
	// Close popups
	var overlay = document.querySelector('.overlay'),
		closeBtns = document.querySelectorAll('.btn__close'),
		popups = document.querySelectorAll('.popup');


	function closePopup(e) {
		var target =  e && e.target ? e.target : e.srcElement;
		if(target.getAttribute('data-id') === 'close') {
			for (var i = 0; i < popups.length; i++ ){
				popups[i].classList.remove('active');
			}
			overlay.classList.remove('active');
		}
	}

	if(overlay) {
		overlay.addEventListener('click', closePopup);
	}

	if(closeBtns) {
		for (var i = 0; i < closeBtns.length; i++) {
			closeBtns[i].addEventListener('click', closePopup);
		}
	}


	// Copyright year
	var year = new Date(),
		now = year.getFullYear();
	document.getElementById('year').innerHTML = now;
};

window.addEventListener('DOMContentLoaded', function() {
	new ProjectApp();
}) 

$(document).ready(function() {
	var html = $('body').width();


	// Popups
	$('.btn__popup').on('click', function() {
		var overlay = $('.overlay'),
			row = $(this).parent().parent().parent().parent().parent().parent().parent(),
			popup = row.children('.popup');

		overlay.addClass('active');
		popup.addClass('active');
	});



	$(".btn__info").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });



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
  	navText: ['', ''],
  	autoplay:true  
	})



	// Ajax form
	$(".contact__form").submit(function(e) {
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
