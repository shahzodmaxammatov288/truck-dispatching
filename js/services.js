
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

/* ============================ Tabs BEGIN ============================ */

// Selectors

const infoText = [
	{
		title: "Dispatching",
		text: "Our office works 24/7 to proactively provide honest updates on the behalf of carriers",
	},
	{
		title: "Accounting",
		text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, rerum",
	},
	{
		title: "paperwork",
		text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
	},
	{
		title: "ELD support",
		text: "Lorem ipsum dolor sit amet consectetur.",
	}

]

const tabsItem = document.querySelectorAll('.tabs-info-item');
const tabsInfoTitle = document.querySelector('.tabs-info-title');
const tabsInfoText = document.querySelector('.tabs-info-text');

tabsItem.forEach((item, i) => {
	item.addEventListener('click', function() {
		deleteItems();
		this.classList.add("active");
		tabsInfoTitle.textContent = infoText[i].title;
		tabsInfoText.textContent = infoText[i].text;
	})
})

function deleteItems() {
	for(let delItem of tabsItem) {
		delItem.classList.remove("active");
	}
}

/* ============================ Tabs END ============================ */

/* back-to-top begin ######################## */ 

$(function(){
	$('.back-to-top').click(function() {
		$('html, body').animate({ scrollTop: 0 }, 1500);
	});
})

/* back-to-top end ######################## */ 