import { getContributors, getIssues } from '../../core/services/git-service.js';

window.onload = function () {
  const url = window.location.href;
  const params = url.split('#');
  const param = params[1].split('/');
  contributors(param[0],param[1]);
  issues(param[0],param[1]);
}
const aboveOneHundred = (value) => {
  return value.contributions > 100;
}
const aboveTwoHundred = (value) => {
  return value.contributions > 200;
}
const aboveFiveHundred = (value) => {
  return value.contributions > 500;
}
const contributors = (user,repo) => {
  let response = getContributors(user,repo);
  response.then(result => { 
    if(result){
      console.log('result ',result);
      let oneHundred = result.data.filter(aboveOneHundred);
      let twoHundred = result.data.filter(aboveTwoHundred);
      let fiveHundred = result.data.filter(aboveFiveHundred);
      if(oneHundred.length>0){
        embedList('oneHundred',oneHundred);
      }else{
        noItem('oneHundred');
      }
      if(twoHundred.length>0){
        embedList('twoHundred',twoHundred);
      }else{
        noItem('twoHundred');
      }
      if(fiveHundred.length>0){
        embedList('fiveHundred',fiveHundred);
      }else{
        noItem('fiveHundred');
      }
    } else{
      noItem('oneHundred');
      noItem('twoHundred');
      noItem('fiveHundred');
    }          
  }).catch(function (error) {
      console.warn('ERROR getContributors: ', error);
      return false;
  });
}
const issues = (user,repo) => {
  let response = getIssues(user,repo);
  response.then(result => { 
    if(result){
      if(result.data.length>0){
        embedListIssues('issues', result.data);
      }else{
        noItem('issues');
      }
    }else{
      noItem('issues');
    }          
  }).catch(function (error) {
      console.warn('ERROR getContributors: ', error);
      return false;
  });
}
const innerItemContributions = (item) => {
  let li = ` <li class="list-group-item d-flex justify-content-between align-items-center">
  ${item.login}<span class="badge badge-primary badge-pill">  ${item.contributions} </span>
  </li>`
  return li;
}
const embedList = (id,itens) => {
  let ul = document.getElementById(id);
  ul.innerHTML = '';
  itens.forEach(item => {
    ul.innerHTML = innerItemContributions(item);
  });
}
const innerItemIssues = (item) => {
  if(item.state === 'open'){
    let li = ` <li class="list-group-item d-flex justify-content-between align-items-center">
    ${item.title}<span class="badge badge-primary badge-pill">  ${item.state} </span>
    </li>`
    return li;
  }else{
    let li = ` <li class="list-group-item d-flex justify-content-between align-items-center">
    ${item.title}<span class="badge badge-danger badge-pill">  ${item.state} </span>
    </li>`
    return li;
  }
}
const embedListIssues = (id,itens) => {
  let ul = document.getElementById(id);
  ul.innerHTML = '';
  itens.forEach(item => {
    ul.innerHTML = innerItemIssues(item);
  });
}
const noItem = (id) => {
  let ul = document.getElementById(id);
  ul.innerHTML = '';
  ul.innerHTML = innernoItem();
}
const innernoItem = () => {
  let li = ` <li class="list-group-item d-flex justify-content-between align-items-center">
  Nenhum item encontrado.
  </li>`
  return li;
}

