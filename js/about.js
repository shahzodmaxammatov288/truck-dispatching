
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


/* ============================ asked questions Begin ============================ */

const asked_questions_button = document.querySelectorAll('.asked_questions_button');

	
asked_questions_button.forEach((e) => {
	e.addEventListener('click', () => {
		if(e.innerHTML == "+") {
			e.innerHTML = "-";
		}
		else {
			e.innerHTML = "+";
		}
	})
})


$(function() {
	class tabs {
		constructor(argument) {
			$(argument).find('.asked_questions_box_text').hide();
			$(argument).find('.asked_questions_button').click(() => {
				$(argument).find('.asked_questions_box_text').slideToggle(500);
			})
		}
	}

	let asked_questions_box = $('.asked_questions_box');

	for (let i of asked_questions_box) {
		i = new tabs(i);
	}

})
/* ============================ asked questions End ============================ */


/* back-to-top begin ######################## */ 

$(function(){
  $('.back-to-top').click(function() {
    $('html, body').animate({ scrollTop: 0 }, 1500);
  });
})

/* back-to-top end ######################## */ 