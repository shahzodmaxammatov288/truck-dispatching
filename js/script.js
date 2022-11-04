

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


/* ============================ JOB HEADER BUTTON BEGIN ============================ */

// JQUERY

$(function(){
	$('.header_button').hover(function(){
		$('.header_ul').toggleClass('show');
		$('.header_button i').toggleClass('active');
		$('.header_button').toggleClass('active');
	});
	$('.header_li').hover(function(){
		$('.header_ul').toggleClass('show');
		$('.header_button i').toggleClass('active');
		$('.header_button').toggleClass('active');
	});

	$(window).resize(function() {
		if($(window).width() < 767) {
				$('.header_button').click(function(){
					$('.header_ul').toggleClass('show');
					$('.header_button i').toggleClass('active');
					$('.header_button').toggleClass('active');
				});
				$('.header_li').click(function(){
					$('.header_ul').toggleClass('show');
					$('.header_button i').toggleClass('active');
					$('.header_button').toggleClass('active');
				});	
		}
	});
});

// JAVASCRIPT

const header_li = document.querySelectorAll('.header_li'),
 	  header_span = document.querySelector('.header_span');

 	header_li.forEach(function(text){
 		text.addEventListener('click',function() {
 			header_span.textContent = this.textContent;
 		})
 	});


/* ============================ JOB HEADER BUTTON END ============================ */

/* ============================ WHAT WE SPECIALIZE IN BEGIN  ============================ */
		if(window.innerWidth > 991) {
				const we_specialize_box = document.querySelectorAll('.we_specialize_box');
				for(let i = 0; i < we_specialize_box.length-1;i++) {
							we_specialize_box[i].classList.add('active');
				}
		}
		window.addEventListener("resize", function() {
			if (window.innerWidth <= 991) {
				const we_specialize_box = document.querySelectorAll('.we_specialize_box');
				for(let i = 0; i < we_specialize_box.length-1;i++) {
							we_specialize_box[i].classList.remove('active');
				}
			}
			if (window.innerWidth > 991) {
				const we_specialize_box = document.querySelectorAll('.we_specialize_box');
				for(let i = 0; i < we_specialize_box.length-1;i++) {
							we_specialize_box[i].classList.add('active');
				}
			}
		});
/* ============================ WHAT WE SPECIALIZE IN END  ============================ */


/* ============================ WHO WE HELPED BEGIN  ============================ */

$(document).ready(function() {
	$('#autoWidth').lightSlider({
			autoWidth:true,
			loop:true,
			onSliderLoad: function() {
					$('#autoWidth').removeClass('cS-hidden');
			} 
	});  
});


/* ============================ WHO WE HELPED END  ============================ */




/* back-to-top begin ######################## */ 

$(function(){
  $('.back-to-top').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 1500);
  });
})

/* back-to-top end ######################## */ 



/* let’s talk Begin ################################### */

window.addEventListener('DOMContentLoaded', function() {
	window.addEventListener('scroll', function() {
		document.querySelector('.lets_talk_btn').classList.toggle('show', window.scrollY > 0);
	})
})

/* let’s talk end ################################### */