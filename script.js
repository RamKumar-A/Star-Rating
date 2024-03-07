'use strict';

let curRating = 0;

const rating = document.querySelectorAll('.rating');
const incrementBtn = document.querySelector('.inc');
const decrementBtn = document.querySelector('.dec');

function updateRating() {
  rating.forEach((star, index) => {
    if (index < curRating) {
      star.innerHTML = '<span class="">&#9733;</span>';
      star.classList.add('greater-than');
    } else {
      star.innerHTML = '<span class="">&#9734;</span>';
      star.classList.remove('greater-than');
    }
  });
}

rating.forEach((el, index1) => {
  el.addEventListener('click', function () {
    curRating = index1 + 1;
    updateRating();
  });
});

incrementBtn.addEventListener('click', function () {
  if (curRating < rating.length) {
    curRating++;
    updateRating();
  }
});
decrementBtn.addEventListener('click', function () {
  if (curRating > 0) {
    curRating--;
    updateRating();
  }
});
