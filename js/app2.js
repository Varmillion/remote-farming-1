require("babel-polyfill");
import axios from 'axios';

const BASE_URL = 'http://0.0.0.0:5000/api';


// const getTodos = () => axios.get(BASE_URL+'/user')
//                           .then(function (response) {
//                             // handle success
//                               console.log(response.data);
//                               return response.data;
//                           });

// const createLi = item => {
//   const li = document.createElement('li');

//   li.appendChild(document.createTextNode(item.email + ' ____ ' + item.password));
//   return li;
// };
// const addTodosToDOM = user => {
//   const ul = document.querySelector('ul');

//   if (Array.isArray(user) && user.length > 0) {
//     user.map(user => {
//       ul.appendChild(createLi(user));
//     });
//   } else if (user) {
//     ul.appendChild(createLi(user));
//   }
// };
// const main = async () => {
//   addTodosToDOM(await getTodos());
// };

// main();
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------

// const getLands = () => axios.get(BASE_URL+'/property')
//                           .then(function (response) {
//                             // handle success
//                               console.log(response.data);
//                               return response.data;
//                           });


// const createLi1 = item => {
//   const li = document.createElement('li');

//   li.appendChild(document.createTextNode(item.id + '.  ' + item.name + ',  ' +item.address));

//   return li;
// };

// const addLandsToDOM = property => {
//   const ol = document.querySelector('ol');

//   if (Array.isArray(property) && property.length > 0) {
//     property.map(property => {
//       ol.appendChild(createLi1(property));
//     });
//   } else if (property) {
//     ol.appendChild(createLi(property));
//   }
// };

// const main1 = async () => {
//   addLandsToDOM(await getLands());
// };

// main1();


// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------




const getLands = () => axios.get(BASE_URL+'/property')
                          .then(function (response) {
                            // handle success
                              console.log(response.data);
                              return response.data;
                          });


const createLi1 = item => {
  const li = document.createElement('a');

  li.appendChild(document.createTextNode(item.id + '.  ' + item.name + ',  ' +item.address));

  return li;
};

const addLandsToDOM = property => {
  const ol = document.querySelector('ol');

  if (Array.isArray(property) && property.length > 0) {
    property.map(property => {
      ol.appendChild(createLi1(property));
    });
  } else if (property) {
    ol.appendChild(createLi(property));
  }
};

const main1 = async () => {
  addLandsToDOM(await getLands());
};

main1();





