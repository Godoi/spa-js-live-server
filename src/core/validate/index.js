import { validate } from './validate.js';
import { eventSubmit } from '../../modules/register/register.js'
//const { default: eventSubmit } = require("../../modules/register/register.js");

window.onload = function () {
  toastr.options = {
    "timeOut": "0",
    "closeButton": true,
    "preventDuplicates": true,
    "positionClass": "toast-top-center",
  }

  let form = document.querySelector('form');
  eventSubmit(form);
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
