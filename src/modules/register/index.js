import { registerService } from '../../core/services/register-service.js';
import { validate } from '../../core/validate/validate.js';

const eventSubmit = (form) => { 
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const payload = JSON.stringify({
      name: e.target.querySelector("[data-rel=\"name\"]").value,
      birth: e.target.querySelector("[data-rel=\"birth\"]").value,
      cpf: e.target.querySelector("[data-rel=\"cpf\"]").value,
      email: e.target.querySelector("[data-rel=\"email\"]").value,
      cep: e.target.querySelector("[data-rel=\"cep\"]").value,
      address: e.target.querySelector("[data-rel=\"address\"]").value,
      number: e.target.querySelector("[data-rel=\"number\"]").value,
      complement: e.target.querySelector("[data-rel=\"complement\"]").value,
      city: e.target.querySelector("[data-rel=\"city\"]").value,
      district: e.target.querySelector("[data-rel=\"district\"]").value,
      uf: e.target.querySelector("[data-rel=\"uf\"]").value,
      description: e.target.querySelector("[data-rel=\"description\"]").value,
    });
    registerService(payload);
  })
}

window.onload = function () {
  toastr.options = {
    "timeOut": "5000",
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
