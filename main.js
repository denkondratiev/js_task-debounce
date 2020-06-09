'use strict';

function debounce(f, delay) {
  let timeout;

  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => f(...args), delay);
  };
}

const input = document.getElementById('input');
const output = document.getElementById('output');

function onChange(event) {
  output.textContent = event.target.value;
  // console.log(this.value);
}

const wrapper = debounce(onChange, 1000);

input.addEventListener('input', wrapper);
