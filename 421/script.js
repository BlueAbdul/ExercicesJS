import {computer, randomizer} from './script.module.js';
import {names} from './module.js';





let user = document.querySelector('.user');
let cpu = document.querySelector('.computer');

let userWin = 0;
let computerWin = 0;

const game = () =>{
    document.querySelector('#letsgo').addEventListener('click', (e) => {
        let Terminator = new computer(names[randomizer]);
        let User = new computer(names[randomizer]);
        let userScore = parseInt(User.numbers.join(''));
        let cpuScore = parseInt(Terminator.numbers.join(''));
        console.log(userScore);
        if(userScore === 421 || userScore === 124 || userScore === 142 || userScore === 241 || userScore === 214 ){
            let doc = document.querySelector('.user');
            let result = document.querySelector('.score');
            userWin++;
            doc.innerHTML += `<p class="text-dark"><b class="text-success">Gagné ! </b> Jet : ${userScore}</p>`;
            result.innerHTML = `Moi : ${userWin}`;
        }
        if(cpuScore === 421 || cpuScore === 124 || cpuScore === 142 || cpuScore === 241 || cpuScore === 214 ){
            let doc = document.querySelector('.computer');
            let resultCPU = document.querySelector('.CPU');
            doc.innerHTML += `<p class="text-dark"><b class="text-success">Gagné ! </b> Jet : ${cpuScore}</p>`;
            computerWin++;
            resultCPU.innerHTML = `CPU : ${computerWin}`;
        } else{
            let doc = document.querySelector('.user');
            let docCPU = document.querySelector('.computer');
            doc.innerHTML += `<p class="text-dark"><b class="text-danger">Perdu ! </b> Jet : ${userScore}</p>`
            docCPU.innerHTML += `<p class="text-dark"><b class="text-danger">Perdu! </b> Jet : ${cpuScore}</p>`
        }
       
    })
}


game()