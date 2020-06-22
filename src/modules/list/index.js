import { getUsers, getRepos } from '../../core/services/git-service.js';

window.onload = function () {
  dropdown();
}

const dropdown = () => {
  const dropdownMenu = document.querySelector('.dropdown-menu');
  const per_page = 10;
  let response = getUsers(per_page);  
  response.then(result => { 
    if(result){
      result.data.forEach(item => {
        dropdownMenu.append(dropdownItem(item.login))
      });
    }          
  }).catch(function (error) {
    console.warn('ERROR getUsers: ', error);
    return false;
  });
}

const dropdownItem = (user) => {
  const button = document.createElement('button');
  button.innerHTML = user;
  button.onclick = function () {
   embedTable(this.textContent);
 };
  button.classList.add('dropdown-item');
  return button;
 }

const embedTable = (user) => {
  let response = getRepos(user);
  response.then(result => { 
    if(result){
      const tbody = document.querySelector('tbody');
      tbody.innerHTML = '';
      console.log(result);
      result.data.forEach(item => {
        tbody.appendChild(innerRow(item,user));
      });
    }          
  }).catch(function (error) {
    console.warn('ERROR getRepos: ', error);
    return false;
  });
}

const innerRow = (item,user) =>{
  const tr = document.createElement('tr');
  const row = `<th scope=\"row\">${item.id}</th> 
    <td>${item.name}</td>
    <td>
      <a href=\"./details.html#${item.full_name}\">
        [detalhes]
      </a>
    </td>`;
    tr.innerHTML = row;
    return tr;
}





