// Loader Begin ********************

const loader = document.querySelector('.loader-container');

window.addEventListener('DOMContentLoaded', function() {
	setTimeout(() => {
		loader.classList.add('hidden');
	}, 1000);
})

// Loader End **********************


$(function() {
  $('.equipment-list').hide();
  $('.equipment-box').click(function() {
    $('.equipment-list').slideToggle(500);
    $('.equipment-box').toggleClass('active');
    $('.equipment-box img').toggleClass('active');
  })
})

// Selectors
const formContainer = document.querySelectorAll('.form-container')
const registrNumbers = document.querySelectorAll('.registr-number');
const nextBtn = document.querySelectorAll('.nextBtn');

const equipItems = document.querySelectorAll(".equipment-items li");
const equipLi = document.querySelectorAll(".equipment-list li");
const closeBtn = document.querySelectorAll(".equipment-item img");


// EventListener && Functions

registrNumbers.forEach((num, n) => {
  num.addEventListener('click', () => {
    for(let j = 0; j < formContainer.length; j++) formContainer[j].classList.remove('show');
    if(n == 0 || n == 4 || n == 8 || n == 12) formContainer[0].classList.add('show');
    else if(n == 1 || n == 5 || n == 9 || n == 13) formContainer[1].classList.add('show');
    else if(n == 2 || n == 6 || n == 10 || n == 14) formContainer[2].classList.add('show');
    else if(n == 3 || n == 7 || n == 11 || n == 15) formContainer[3].classList.add('show');  
    window.scrollTo(0, 0);
  })
})

nextBtn.forEach((btn, m) => {
  btn.addEventListener('click', function() {
    for(let j = 0; j < formContainer.length; j++) formContainer[j].classList.remove('show');
    formContainer[m + 1].classList.add('show');
    window.scrollTo(0, 0);
  })
})

equipLi.forEach((item, i) => {
  item.addEventListener('click', () => {
    hasClass = equipItems[i].classList.contains("active");
    return (!hasClass) ? equipItems[i].classList.add('active') : false;
  })
})

closeBtn.forEach( (btn, i) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    equipItems[i].classList.remove('active');
  })
})

