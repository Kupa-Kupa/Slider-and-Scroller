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
