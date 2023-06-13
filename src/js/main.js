//carrousel

const menusArrow = document.querySelectorAll('.arrowButton');
const sliderCarrousel = document.querySelector('.slider-carrousel')

menusArrow.forEach((menu) => {
    menu.addEventListener('click', (e) => {
      if(e.currentTarget.getAttribute('aria-details') === 'left-arrow') {
        e.preventDefault();
        sliderCarrousel.scrollLeft -= sliderCarrousel.offsetWidth;
      } 
    })
  })
  
  menusArrow.forEach((menu) => {
    menu.addEventListener('click', (e) => {
      if(e.currentTarget.getAttribute('aria-details') === 'right-arrow') {
        e.preventDefault();
        sliderCarrousel.scrollLeft += sliderCarrousel.offsetWidth;
      } 
    })
  })