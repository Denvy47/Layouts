//MAIN SLIDER
let sliderInterval = setInterval(() => { moveSlide(1) }, 8000)

let i = 0;
function moveSlide(direct) {
  const items = document.querySelectorAll('.slide-bg');

  items[i].classList.remove('slide-show');
  i += direct;
  if (i === items.length) {
    i = 0;
    items[i].classList.add('slide-show');
  } else if (i < 0) {
    i = items.length - 1;
    items[i].classList.add('slide-show');
  } else {
    items[i].classList.add('slide-show');
  }

  clearInterval(sliderInterval);
  sliderInterval = setInterval(() => { moveSlide(1) }, 8000)
}

//ACCORDION
let panelItem = document.querySelectorAll('.panel-title');
let bodyItem = document.querySelectorAll('.panel-body');

for (let i = 0; i < panelItem.length; i++) {
  panelItem[i].addEventListener('click', toggleItem);
}

function toggleItem(e) {
  let title = e.target;

  if (title.classList.contains('fas')) {
    title = title.parentNode;
  }

  for (let i = 0; i < panelItem.length; i++) {
    if (panelItem[i] !== title) {
      panelItem[i].classList.remove('panel-active');
      panelItem[i].nextElementSibling.classList.remove('active');
      panelItem[i].nextElementSibling.style.maxHeight = null;
      panelItem[i].firstElementChild.classList.remove('fa-minus-circle');
      panelItem[i].firstElementChild.classList.add('fa-plus-circle');
    } else {
      title.classList.toggle('panel-active');
      title.nextElementSibling.classList.toggle('active');
      title.firstElementChild.classList.toggle('fa-plus-circle');
      title.firstElementChild.classList.toggle('fa-minus-circle');
    }
  }

  if (title.nextElementSibling.style.maxHeight) {
    title.nextElementSibling.style.maxHeight = null;
  } else {
    title.nextElementSibling.style.maxHeight = title.nextElementSibling.scrollHeight + "px";
  }
}

//PORTFOLIO FILTER
const btnAll = document.querySelector('#all');
const allItems = document.querySelectorAll('.portfolio-items .portfolio-item');
const btnIllust = document.querySelector('#illustration');
const illustItems = document.querySelectorAll('.portfolio-items .illustration');
const btnArt = document.querySelector('#art');
const artItems = document.querySelectorAll('.portfolio-items .digital-art');
const btnDesign = document.querySelector('#design');
const designItems = document.querySelectorAll('.portfolio-items .web-design');

btnAll.addEventListener('click', filterTiles);
btnIllust.addEventListener('click', filterTiles);
btnArt.addEventListener('click', filterTiles);
btnDesign.addEventListener('click', filterTiles);

function filterTiles(e) {
  const btn = e.target;

  for (let i = 0; i < allItems.length; i++) {
    allItems[i].style.order = 0;
  }
  btnAll.classList.remove('active-filter');
  btnIllust.classList.remove('active-filter');
  btnArt.classList.remove('active-filter');
  btnDesign.classList.remove('active-filter');

  let order = 0;
  switch (btn) {
    case btnAll:
      btnAll.classList.add('active-filter');
      for (let i = 0; i < allItems.length; i++) {
        allItems[i].style.order = 0;
      }
      break;

    case btnIllust:
      btnIllust.classList.add('active-filter');
      for (let i = 0; i < illustItems.length; i++) {
        illustItems[i].style.order = --order;
      }
      break;

    case btnArt:
      btnArt.classList.add('active-filter');
      for (let i = 0; i < artItems.length; i++) {
        artItems[i].style.order = --order;
      }
      break;

    case btnDesign:
      btnDesign.classList.add('active-filter');
      for (let i = 0; i < designItems.length; i++) {
        designItems[i].style.order = --order;
      }
      break;
  }
}

//SLIDER IN CLIENTS SECTION
function replaceSlide(index) {
  const slides = document.querySelectorAll('.clients-inner-slider .slide');
  const buttons = document.querySelectorAll('.clients-inner-slider .slide-btn')

  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('slide-active');
    buttons[i].classList.remove('active');
  }

  switch (index) {
    case 0:
      slides[0].classList.add('slide-active');
      buttons[0].classList.add('active');
      break;
    case 1:
      slides[1].classList.add('slide-active');
      buttons[1].classList.add('active');
      break;
    case 2:
      slides[2].classList.add('slide-active');
      buttons[2].classList.add('active');
      break;
  }
}
