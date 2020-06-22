import {typeInput} from "./type-input.js";

import {
  VALUE_MISSING,
  TYPE_MISMATCH,
  TOO_SHORT,
  CUSTOM_ERROR,
  PATTERN_MISMATCH,
  RANGE_UNDER_FLOW
} from "./type-errors.js";

export const errorMessages = {
  [typeInput.NAME]: {
    [VALUE_MISSING]: "O nome é necessário"
  },
  [typeInput.BIRTH]: {
    [VALUE_MISSING]: "Esta não é uma data válida",
    [RANGE_UNDER_FLOW]: "A data deve ser superior à 01/01/1900",
  },
  [typeInput.CPF]: {
    [VALUE_MISSING]: "O CPF é necessário",
    [TOO_SHORT]: "Este não é um CPF válido",
    [CUSTOM_ERROR]: "Este não é um CPF válido"
  },
  [typeInput.EMAIL]: {
    [VALUE_MISSING]: "O e-mail é necessário",
    [TYPE_MISMATCH]: "Este não é um e-mail válido"
  },
  [typeInput.CEP]: {
    [VALUE_MISSING]: "O CEP é necessário",
    [PATTERN_MISMATCH]: "Este não é um CEP válido"
  },
  [typeInput.ADDRESS]: {
    [VALUE_MISSING]: "O logradouro é necessário"
  },
  [typeInput.NUMBER]: {
    [VALUE_MISSING]: "O número é necessário"
  },
  [typeInput.CITY]: {
    [VALUE_MISSING]: "A cidade é necessária"
  },
  [typeInput.DISTRICT]: {
    [VALUE_MISSING]: "O bairro é necessário"
  },
  [typeInput.UF]: {
    [VALUE_MISSING]: "O estado é necessário"
  }
};