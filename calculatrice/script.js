const audio = new Audio('./tac.wav');
let firstSet = false;

const watcher = () => {

    let input = document.querySelectorAll('#num');

    input.forEach((e) => {
        e.addEventListener('click', (e) => {
            console.log(e.target.value);
            audio.play();
            let array = [];
            let operation = "";
            let firstNumber = 0;
            let secondNumber = 0;
            array.push(e.target.value);
            document.querySelector('.calculator-screen').value += e.target.value;
        
        })   
    })

    let valid = document.querySelector('.equal-sign')

    valid.addEventListener('click', (e) =>{
        let calcul = eval(document.querySelector('.calculator-screen').value);
        
        if(calcul === Infinity){
            document.querySelector('.malin').innerHTML = '<img src="https://media.tenor.com/images/d968728f0a24fc31ee1c8b6b36bc3968/tenor.gif" alt="">';
            document.querySelector('.calculator-screen').value = 'pls';
            document.querySelector('.all-clear').classList.add('glow');
        }else {

            document.querySelector('.calculator-screen').value = calcul;
        }
    })

    let erase = document.querySelector('.all-clear')

    erase.addEventListener('click', (e) =>{
        document.querySelector('.calculator-screen').value = '';
        document.querySelector('.malin').innerHTML = '';
        document.querySelector('.all-clear').classList.remove('glow');
    })
}

watcher()