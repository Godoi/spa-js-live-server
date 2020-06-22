import { validate } from './validate.js';

window.onload = function () {
  toastr.options = {
    "timeOut": "0",
    "closeButton": true,
    "preventDuplicates": true,
    "positionClass": "toast-top-center",
  }
  const inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    input.addEventListener('invalid', (e) => {
      e.preventDefault();
      validate(input);
    });
    input.addEventListener('input', () => {
      validate(input, false);
    });
    input.addEventListener('blur', () => {
      validate(input);
    });
  });
}
