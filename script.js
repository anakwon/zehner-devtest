

const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
// console.log(track); 

const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;
// console.log(slideSize.width)


// arrange the slide to next to another

// Create a function so its reusable
const setSlidePosition = (slide, index) => {
	slide.style.left = slideWidth * index + 'px';
}

// loop each slide to match the style left of the width size 
slides.forEach(setSlidePosition);


const moveToSlide = (track, currentSlide, targetSlide) => {
	track.style.transform = 'translateX(-' + targetSlide.style.left + ')';

	// making sure class current-slide moves over to next
	currentSlide.classList.remove('current-slide');
	targetSlide.classList.add('current-slide');
}


// click right -> move slider to right
nextButton.addEventListener('click', e => {
	const currentSlide = track.querySelector('.current-slide');
	const nextSlide = currentSlide.nextElementSibling;

	moveToSlide(track, currentSlide, nextSlide);

})

// click left -> move slider to the previous one
prevButton.addEventListener('click', e => {
	const currentSlide = track.querySelector('.current-slide');
	const prevSlide = currentSlide.previousElementSibling;

	moveToSlide(track, currentSlide, prevSlide)

})