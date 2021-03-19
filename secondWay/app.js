let counter = 0;
const allImages = document.querySelectorAll("img");
const showNextBtn = document.querySelector("h1#right-arrow");
const showPrevBtn = document.querySelector("h1#left-arrow");
const imageContainer = document.querySelector('main div.slideContainer');
const width = imageContainer.clientWidth;



showNextBtn.addEventListener("click", showNext);
showPrevBtn.addEventListener('click', showPrevious);


