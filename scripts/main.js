/* ---------- Slider JS ---------- */
/* https://www.youtube.com/watch?v=yq4BeRtUHbk */

document.addEventListener('click', (e) => {
  let handle;

  if (e.target.matches('.handle')) {
    handle = e.target;
  } else {
    handle = e.target.closest('.handle');
  }

  if (handle != null) {
    onHandleClick(handle);
  }
});

function onHandleClick(handle) {
  const slider = handle.closest('.container').querySelector('.slider');

  let sliderIndex = parseInt(
    getComputedStyle(slider).getPropertyValue('--slider-index')
  );

  if (handle.classList.contains('left-handle')) {
    if (sliderIndex <= 0) {
      // loop back to end if going left of first slide
      sliderIndex = 6;
    }
    slider.style.setProperty('--slider-index', sliderIndex - 1);
  }

  if (handle.classList.contains('right-handle')) {
    if (sliderIndex >= 5) {
      // want index to loop back to 0
      sliderIndex = -1;
    }
    slider.style.setProperty('--slider-index', sliderIndex + 1);
  }
}
