const carouselContainer = document.querySelector("[data-carousel]");
const carouselSlides = carouselContainer.querySelectorAll(
  "[data-carousel-slide]"
);
const carouselBtnLeft = carouselContainer.querySelector(
  '[data-carousel-button="prev"]'
);
const carouselBtnRight = carouselContainer.querySelector(
  '[data-carousel-button="next"]'
);
const carouselBtns = carouselContainer.querySelectorAll(
  "[data-carousel-button]"
);

const counter = (slides) => {
  let counter = 0;
  const next = () => {
    return counter >= slides.length - 1 ? (counter = 0) : (counter += 1);
  };
  const prev = () => {
    return counter <= 0 ? (counter = slides.length - 1) : (counter -= 1);
  };
  const current = () => counter;
  const set = (newCounter) => (counter = newCounter);
  return {
    next,
    prev,
    current,
    set,
  };
};

const sliderCounter = counter(carouselSlides);

const prevSlide = (currentSlideNumber) => {
  const prevSlideNumber = sliderCounter.prev();
  carouselSlides[currentSlideNumber].classList.toggle("active");
  return carouselSlides[prevSlideNumber].classList.toggle("active");
};

const nextSlide = (currentSlideNumber) => {
  const nextSlideNumber = sliderCounter.next();

  carouselSlides[currentSlideNumber].classList.add("move-right");
  return carouselSlides[nextSlideNumber].classList.toggle("active");
};

const displaySlide = (e) => {
  const button = e.target.dataset.carouselButton;
  const currentSlideNumber = sliderCounter.current();
  return button === "next"
    ? nextSlide(currentSlideNumber)
    : prevSlide(currentSlideNumber);
};

carouselBtns.forEach((button) =>
  button.addEventListener("click", displaySlide)
);
