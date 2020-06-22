const url = `https://api.github.com`;

export const getUser = () => {
  return axios.get(`${url}/user`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.warn('ERROR getUser: ',error);
      return false;
    });
}

export const getUsers = (quant) => {
    return axios.get(`${url}/users?per_page=${quant}`)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.warn('ERROR getUsers: ',error);
        return false;
      });
}

export const getRepos = (user) => {
  return axios.get(`${url}/users/${user}/repos`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.warn('ERROR getRepos: ',error);
      return false;
    });
}

export const getContributors = (user,repo) => {
  const quant = 20;
  return axios.get(`${url}/repos/${user}/${repo}/contributors?per_page=${quant}`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.warn('ERROR getContributors: ',error);
      return false;
    });
}

export const getIssues = (user,repo) => {
  const quant = 20;
  return axios.get(`${url}/repos/${user}/${repo}/issues?per_page=${quant}`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.warn('ERROR getIssues: ',error);
      return false;
    });
}
