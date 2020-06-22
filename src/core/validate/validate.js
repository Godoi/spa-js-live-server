import { validateCPF } from "./validate-cpf.js";
import { errorMessages } from "../../shared/constants/error-messages.js";
import { typeErrors } from "../../shared/constants/type-errors.js";
import { getCEP } from "../../core/services/cep-service.js";

const returnErrorMessage = (type, validity) => {
  let errorMessage = "";
  typeErrors.forEach(error => {
    if (validity[error]) {
      errorMessage = errorMessages[type][error];
    }
  });
  return errorMessage;
};

const clearTheFields = () => {
  document.getElementById("address").value = "";
  document.getElementById("complement").value = "";
  document.getElementById("city").value = "";
  document.getElementById("district").value = "";
  document.getElementById("uf").value = ""; 
}

const removeElementError = (element) => {
  const classElementError = "danger";
  element.parentElement.classList.remove(classElementError);  
  if( element.parentElement.childNodes[2] != undefined){
    element.parentElement.removeChild(element.parentElement.childNodes[2]);
  }
}

const fillInFields = (input) => {
  if (input.validity.valid) {
    let response = getCEP(input.value);
      response.then(result => { 
        if(result){
          const uf =  document.getElementById("uf");
          const city = document.getElementById("city");
          const address = document.getElementById("address");
          const district = document.getElementById("district");
          const complement = document.getElementById("complement");      
             
          uf.value = result.data.estado_info.nome != undefined ? result.data.estado_info.nome : ''; 
          city.value = result.data.cidade != undefined ? result.data.cidade : ''; 
          address.value = result.data.logradouro != undefined ? result.data.logradouro : ''; 
          district.value = result.data.bairro != undefined ? result.data.bairro : ''; 
          complement.value = result.data.complemento != undefined ? result.data.complemento : ''; 
    
          removeElementError(uf);
          removeElementError(address);
          removeElementError(district);
        }          
      }).catch(clearTheFields());
    }  
};

export const validate = (input, addError = true) => { 
  const classElementError = "danger";
  const parentElement = input.parentNode;
  const errorElementExists = parentElement.querySelector(
    `.${classElementError}`
  );
  const elementError = errorElementExists || document.createElement("span");
  const type = input.dataset.rel;
  const validElement = input.validity.valid;

  const specificValidators = {
    cpf: input => validateCPF(input),
    cep: input => fillInFields(input)
  };
  if (specificValidators[type]) {
    specificValidators[type](input);
  }
  if(!validElement){
    elementError.className = classElementError;
    elementError.textContent = returnErrorMessage(
      input.dataset.rel,
      input.validity
    );
    if (addError) {
      input.after(elementError);
      input.parentElement.classList.add(classElementError);
      toastr.error('Necessário o preenchimento dos campos obrigatórios.');
    }
  } else {
    input.parentElement.classList.remove(classElementError);
    elementError.remove();
  }
  return validElement;
};