const url = `https://api.postmon.com.br/v1/cep/`;

export const getCEP = (cep) => {
    return axios.get(`${url}${cep}`)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.warn('ERROR: ',error);
        return false;
      });
}
