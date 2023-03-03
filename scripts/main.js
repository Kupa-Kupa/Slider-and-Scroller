/* 
Helpful Links:
https://www.youtube.com/watch?v=hBbrGFCszU4
https://www.youtube.com/watch?v=flItyHiDm7E
 */

// const dropdowns = document.querySelectorAll('ul ul');
const dropdowns = document.querySelectorAll('.dropdown');

console.log(dropdowns.length);
console.log(dropdowns);

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener('click', displayDropdown);
  dropdown.addEventListener('mouseover', mouseoverDropdown);

  function displayDropdown() {
    console.log('click');
    const ul = dropdown.querySelector('ul');
    console.log(ul.classList);
    if (ul.classList.contains('hidden')) {
      ul.classList.remove('hidden');
    } else {
      ul.classList.add('hidden');
    }
  }

  function mouseoverDropdown() {
    console.log('mouseover');
    const ul = dropdown.querySelector('ul');
    console.log(ul.classList);
    if (ul.classList.contains('hidden')) {
      ul.classList.remove('hidden');
    }
  }

  dropdown.addEventListener('mouseout', hideDropdown);

  function hideDropdown() {
    console.log('mouseout');
    const ul = dropdown.querySelector('ul');
    ul.classList.add('hidden');
  }
});

// add mobile logic
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenu.addEventListener('click', showNav);

function showNav() {
  const nav = document.querySelector('.nav-bar');
  const ul = nav.querySelector('ul');

  if (!ul.classList.contains('active')) {
    ul.classList.add('active');
    mobileMenu.classList.add('active');
  } else {
    ul.classList.remove('active');
    mobileMenu.classList.remove('active');
  }

  // if (window.getComputedStyle(ul).display === 'none') {
  //   mobileMenu.classList.add('active');
  //   console.log('display is none');
  //   ul.style.display = 'initial';
  // } else {
  //   mobileMenu.classList.remove('active');
  //   console.log('display isnt none');
  //   ul.style.display = 'none';
  // }
}

/* change display with JS - alternative to adding class

function showNav() {
  const nav = document.querySelector('.nav-bar');
  const ul = nav.querySelector('ul');
  if (window.getComputedStyle(ul).display === 'none') {
    mobileMenu.classList.add('active');
    console.log('display is none');
    ul.style.display = 'initial';
  } else {
    mobileMenu.classList.remove('active');
    console.log('display isnt none');
    ul.style.display = 'none';
  }
}
*/

// for (let i = 0; i < dropdowns.length; i++) {
//   dropdowns[i].parentElement.addEventListener('click', displayDropdown);
//   // dropdown[i].parentElement.addEventListener('mouseover', displayDropdown);
//   // dropdown[i].parentElement.addEventListener('mouseout', displayDropdown);
// }
// dropdown.addEventListener('click', displayDropdown);

function displayDropdown(event) {
  // console.log(event.target.children);
  // if (event.target.children[0].classList.contains('hidden')) {
  //   event.target.children[0].classList.toggle('hidden');
  // } else {
  //   event.target.children[0].classList.toggle('hidden');
  // }
  // if (event.target.children[0].matches('ul ul')) {
  //   console.log(event.target.children[0]);
  //   event.target.children[0].classList.toggle('hidden');
  // }
  // console.log(event.target.children);
  // event.target.children[0].classList.toggle('hidden');
  //   const dropdownItems = document.querySelectorAll('.dropdown-items');
  //   for (let i = 0; i < dropdown.length; i++) {
  //     if (event.target.classList.contains('hidden')) {
  //       dropdown[i].classList.toggle('hidden');
  //     } else {
  //       dropdown[i].classList.toggle('hidden');
  //     }
  //   }
}

/* Image Slider */
/* Links
  https://www.youtube.com/watch?v=9HcxHDS2w1s
  https://www.youtube.com/watch?v=pcmCtB9l4aY
  */

let currentImage = 1;
let intervalTimer = 5000;
let slideLoop = setInterval(moveRight, intervalTimer);
showSlide();

function showSlide() {
  const img = document.querySelector(`.image-${currentImage}`);
  img.style.display = 'inline-block';
}

function hideSlide() {
  const img = document.querySelector(`.image-${currentImage}`);
  img.style.display = 'none';
}

// change fill of picker to match current slide
const sliderPicker = document.querySelector('.slider-picker');
// console.log(sliderPicker);

function changePickerFill() {
  for (const child of sliderPicker.children) {
    child.classList.remove('selected');

    if (parseInt(child.classList[1].split('-')[1]) === currentImage) {
      child.classList.add('selected');
    }
  }
}

// move to correct slide when picker is clicked
const picker1 = document.querySelector('.picker-1');
const picker2 = document.querySelector('.picker-2');
const picker3 = document.querySelector('.picker-3');
const picker4 = document.querySelector('.picker-4');
const picker5 = document.querySelector('.picker-5');
picker1.addEventListener('click', moveToSlide);
picker2.addEventListener('click', moveToSlide);
picker3.addEventListener('click', moveToSlide);
picker4.addEventListener('click', moveToSlide);
picker5.addEventListener('click', moveToSlide);

function moveToSlide(event) {
  hideSlide();
  let newSlideNumber = event.target.classList[1].split('-')[1];
  console.log(`selected slide is: ${newSlideNumber}`);
  currentImage = parseInt(newSlideNumber);
  showSlide();

  changePickerFill();

  clearInterval(slideLoop);
  slideLoop = setInterval(moveRight, intervalTimer);
}

// move slider on right arrow click
const rightArrow = document.querySelector('.right-arrow');
rightArrow.addEventListener('click', moveRight);

function moveRight() {
  // get current image and set display to none
  const currentImg = document.querySelector(`.image-${currentImage}`);
  currentImg.style.display = 'none';

  // check if slider is within the number of images or need to loop to start
  if (currentImage < 5) {
    currentImage++;
  } else {
    currentImage = 1;
  }

  console.log(`current image is: ${currentImage}`);

  // get new image and set display to inline-block
  const newImg = document.querySelector(`.image-${currentImage}`);
  newImg.style.display = 'inline-block';

  // change picker fill colour
  changePickerFill();

  // clear interval and then reset the interval timer
  clearInterval(slideLoop);
  slideLoop = setInterval(moveRight, intervalTimer);
}

// move slider on left arrow click
const leftArrow = document.querySelector('.left-arrow');
leftArrow.addEventListener('click', moveLeft);

function moveLeft() {
  // get current image and set display to none
  const currentImg = document.querySelector(`.image-${currentImage}`);
  currentImg.style.display = 'none';

  // check if slider is within the number of images or need to loop to end
  if (currentImage > 1) {
    currentImage--;
  } else {
    currentImage = 5;
  }

  // get new image and set display to inline-block
  const newImg = document.querySelector(`.image-${currentImage}`);
  newImg.style.display = 'inline-block';

  // change picker fill colour
  changePickerFill();

  // clear interval and then reset the interval timer
  clearInterval(slideLoop);
  slideLoop = setInterval(moveRight, intervalTimer);
}
