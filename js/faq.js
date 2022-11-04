
// Loader Begin ********************

const loader = document.querySelector('.loader-container');

window.addEventListener('DOMContentLoaded', function() {
	setTimeout(() => {
		loader.classList.add('hidden');
	}, 1000);
})

// Loader End **********************

/* Aos js begin */
AOS.init({
  offset: 150,
  duration: 1200
});
/* Aos js end */
/* ============================ NAVBAR SCROLL FIXED TOP BEGIN============================ */


window.addEventListener('scroll',function(){
	const navbar_desktop = document.querySelector(".navbar_desktop");
	navbar_desktop.classList.toggle("sticky",window.scrollY > 0);	
});

/* ============================ NAVBAR SCROLL FIXED TOP END ============================ */
/* ============================ NAVBAR TOGGLE BUTTON BEGIN ============================ */



	// JavaScript 

	const header_toggle_btn = document.querySelector('.header_toggle_btn'),
				header_toggle_btn_span = document.querySelectorAll('.header_toggle_btn_span');

				header_toggle_btn.addEventListener('click',function(){
					for(let i = 0; i < header_toggle_btn_span.length; i++) {
						header_toggle_btn_span[i].classList.toggle('active');
					}
				})
				window.addEventListener("resize", function() {
						if (window.innerWidth > 767) {
							for(let i = 0; i < header_toggle_btn_span.length; i++) {
								header_toggle_btn_span[i].classList.remove('active');
							}
					}
				});
				

	// Jquery 

	$(function(){
		$('.header_toggle_btn').on('click',function(){
			$('.navbar_ul').slideToggle(800);
		});

		$(window).resize(function() {
			if($(window).width() > 767) {
				$('.navbar_ul').removeAttr('style');
			}
		});
		
		$(window).resize(function() {
			if($(window).width() > 767) {
				$('.navbar_ul').removeAttr('style');
			}
		});
	});


/* ============================ NAVBAR TOGGLE BUTTON END ============================ */

/* back-to-top begin ######################## */ 

$(function(){
  $('.back-to-top').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 1500);
  });
})

/* back-to-top end ######################## */ 

/* privacy question link begin */ 

$(function() {	
		let privacy_link = $('.privacy_question_wrap_link');
		privacy_link.on('click', function(e) {
			e.preventDefault();
			let selector = $(this).attr('href');
			let target = $(selector);
			if($(window).width() > 767) {
				$('html, body').animate({scrollTop:target.offset().top - 100}, 500);
			} else {
				$('html, body').animate({scrollTop:target.offset().top - 20}, 500);
			}
		})
})

/* privacy question link end */ 