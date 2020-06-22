export const registerService = (payload) => {
  console.log(payload);
  toastr.success(payload, 'Sucesso!');
}