const repeatedNumbers = cpf => {
  const INVALIDCPFs = [
    11111111111,
    22222222222,
    33333333333,
    44444444444,
    55555555555,
    66666666666,
    77777777777,
    88888888888,
    99999999999
  ];

  if (INVALIDCPFs.includes(cpf)) {
    return true;
  }

  return false;
};

const calculateTotalValue = multiplier => (result, current) => {
  return result + current * multiplier--;
}

const calculateDigit = (partCPF, multiplier) => {
  let generatedDigit = 0;
  let valueTotal = 0;
  valueTotal = partCPF.reduce(calculateTotalValue(multiplier), 0);
  generatedDigit = 11 - (valueTotal % 11);

  if (generatedDigit > 9) {
    generatedDigit = 0;
  }
  return generatedDigit;
}

export const validateCPF = input => {
  const cpfNumbers = input.value.replace(/\D/g, "");

  if (repeatedNumbers(cpfNumbers)) {
    input.setCustomValidity("Este não é um CPF válido");
    return;
  }

  const firstPart = cpfNumbers.substr(0, 9).split("");
  const firstCPFDigit = Number(cpfNumbers.charAt(9));
  const firstGeneratedDigit = calculateDigit(firstPart, 10);
  if (firstCPFDigit !== firstGeneratedDigit) {
    input.setCustomValidity("Este não é um CPF válido");
    return;
  }

  const secondPart = cpfNumbers.substr(0, 10).split("");
  const secondDigitOfCPF = Number(cpfNumbers.charAt(10));
  const secondDigitGenerated = calculateDigit(secondPart, 11);
  if (secondDigitOfCPF !== secondDigitGenerated) {
    input.setCustomValidity("Este não é um CPF válido");
    return;
  }

  input.setCustomValidity("");
};