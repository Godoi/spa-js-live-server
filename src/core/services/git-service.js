import axios from '../../../node_modules/axios/dist/axios.js';
const url = `https://api.github.com`;

export const getUser = () => {
  return axios.get(`${url}/user`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.warn('ERROR: ',error);
      return false;
    });
}

export const getUsers = () => {
    return axios.get(`${url}/users`)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.warn('ERROR: ',error);
        return false;
      });
}

export const getRepos = (user) => {
  return axios.get(`${url}/users${user}/user/repos`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.warn('ERROR: ',error);
      return false;
    });
}