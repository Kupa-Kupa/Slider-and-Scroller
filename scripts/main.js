const dropdown = document.querySelectorAll('ul ul');

// dropdown.addEventListener('mouseover', displayDropdown);
// dropdown.addEventListener('mouseout', displayDropdown);
console.log(dropdown.length);

for (let i = 0; i < dropdown.length; i++) {
  dropdown[i].parentElement.addEventListener('click', displayDropdown);
}
// dropdown.addEventListener('click', displayDropdown);

function displayDropdown(event) {
  console.log(event.target);
  const dropdownItems = document.querySelectorAll('.dropdown-items');
  for (let i = 0; i < dropdown.length; i++) {
    if (event.target.classList.contains('hidden')) {
      dropdown[i].classList.toggle('hidden');
    } else {
      dropdown[i].classList.toggle('hidden');
    }
  }
}
