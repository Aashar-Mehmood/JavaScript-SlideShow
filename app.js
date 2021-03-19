
const mainContainer = document.querySelector('main div.slideContainer');
const slideImages = document.querySelectorAll('div.slideContainer img');
const prevbtn = document.getElementById('left-arrow');
const nextbtn = document.getElementById('right-arrow');
const length = mainContainer.clientWidth;
let i = 0;

nextbtn.addEventListener('click', slideForward);
prevbtn.addEventListener('click', slideBackward);

function slideForward() {

	slideImages[i].classList.remove('active');
	if(slideImages[i].nextElementSibling){
		slideImages[i].nextElementSibling.classList.add('active');
		i++;
	}
	else {
		i = 0;
		slideImages[i].classList.add('active');
	}
	
}


function slideBackward() {
		slideImages[i].classList.remove('active');
	if(slideImages[i].previousElementSibling){
		slideImages[i].previousElementSibling.classList.add('active');
		i--;
	}
	else {
		i = slideImages.length-1;
		slideImages[i].classList.add('active');
	}
}

var interval = null;

document.getElementById('startAuto').addEventListener('click', ()=>{
	interval = setInterval(slideForward, 2000);
});

document.getElementById('stopAuto').addEventListener('click', ()=>{
	clearInterval(interval);
});





