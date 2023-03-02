// const dropdowns = document.querySelectorAll('ul ul');

const dropdowns = document.querySelectorAll('.dropdown');

console.log(dropdowns.length);
console.log(dropdowns);

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener('click', displayDropdown);
  dropdown.addEventListener('mouseover', displayDropdown);

  function displayDropdown() {
    const ul = dropdown.querySelector('ul');
    ul.classList.toggle('hidden');
  }

  dropdown.addEventListener('mouseout', hideDropdown);

  function hideDropdown() {
    const ul = dropdown.querySelector('ul');
    ul.classList.add('hidden');
  }
});

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
