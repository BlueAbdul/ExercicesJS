import {dataPromise} from './script.module.js';

dataPromise.then((value) => {
    console.log(value);
    let target = document.querySelector('.result');
    target.innerHTML = "";
    value.forEach((elt) => {
        console.log(elt);
        target.innerHTML += `<tr class="imhere"><td>${elt.id}</td><td colspan="2">${elt.title}</td></tr>`
    });
  });

  dataPromise.catch((error) => {
    console.error(error);
  });  