let currentIndex = 1;
const carouselInner = document.getElementById('carouselInner');
const totalSlides = carouselInner.children.length + 1;
let slideWidth = carouselInner.children[0].offsetWidth;
let child;
let cloned;
let filterForms = document.querySelectorAll('#filters > form')
let filters = document.querySelector('#filters > div')
let clicked = 0;


window.addEventListener("DOMContentLoaded", getGridElemSize);
window.addEventListener("resize", getGridElemSize);
window.addEventListener("resize", () => {
  slideWidth = carouselInner.children[0].offsetWidth;
  carouselInner.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
});

function updateCarousel() {
  carouselInner.style.transition = 'transform 0.5s ease-in-out';
  carouselInner.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

function noneupdateCarousel() {
  carouselInner.style.transition = 'none';
  carouselInner.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
}

function nextSlide() {
  if(currentIndex == (totalSlides-1)){
    child = carouselInner.children[0];
    cloned = child.cloneNode(true);
    carouselInner.insertBefore(cloned, carouselInner.children[currentIndex-1].nextSibling);
    currentIndex++; 
    updateCarousel();
    setTimeout(() => {
      currentIndex = 1;
      noneupdateCarousel();
      carouselInner.removeChild(cloned);
    }, 500);
  } else {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }
}

function prevSlide() {
  if(currentIndex == 1){
    child = carouselInner.children[totalSlides - 2];
    cloned = child.cloneNode(true);
    cloned.style.transform = 'translateX(0%)';
    cloned.style.position = 'absolute';
    carouselInner.insertBefore(cloned, carouselInner.children[currentIndex-1]);
    currentIndex--;
    updateCarousel();
    setTimeout(() => {
      currentIndex = totalSlides - 1;
      noneupdateCarousel();
      carouselInner.removeChild(cloned);
    }, 500);
  } else {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }
}

function hideforms(){
  if(window.innerWidth  <= 820 && clicked == 0) {
    for (let xx of filterForms) {
      xx.style.display = 'none';
    }
  } else {
    for (let xx of filterForms) {
      xx.style.display = 'block';
    }
  }
}
function openfilters() {
  if(clicked == 0){
    clicked = 1;
    hideforms();
  } else {
    clicked = 0;
    hideforms();
  }
}

window.addEventListener('resize', hideforms)
filters.addEventListener('click', openfilters)