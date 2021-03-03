import {names} from './module.js';

export let randomizer = Math.floor(Math.random() * names.length);




export class computer {

    constructor(name){
        this.nom = name;
    }

    get numbers(){
        let num1 = Math.round(Math.random() * (6 - 1 + 1) + 1);
        let num2 = Math.round(Math.random() * (6 - 1 + 1) + 1);
        let num3 = Math.round(Math.random() * (6 - 1 + 1) + 1);
      
        let numbersArray = [];
        numbersArray.push(num1,num2,num3)
        return numbersArray;
    }

}


