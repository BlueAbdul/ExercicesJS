const getData = () => {
    document.querySelector('#send').addEventListener("click",(e) => {
        let salaire = parseInt(document.querySelector('#userInput').value);
        let charge = parseInt(document.querySelector('#charge').value);
        let trente = document.querySelector('#plus30').checked;
        let handicap = document.querySelector('#handicap').checked;
       
        console.log(salaire, charge, trente, handicap);

        if( salaire > 0){
            let array = [];
            let impots = 0.73;   
            if(trente === true){
               impots += 0.02;
            }
            if(handicap === true){
                impots += 0.05;
            }
            if(charge > 0){
                let calculateCharge = charge * 0.01;
                impots += calculateCharge;
            }
            let announcedTax = Math.round(100 - impots * 100);
            let salaireNet = Math.round(salaire * impots);
            console.log(salaireNet);
            array.push(
                {property : 'salaire', value : salaire},
                {property : 'charge', value : charge},
                {property : 'trente', value : trente},
                {property : 'handicap', value : handicap},
                {property : 'salaireNet', value : salaireNet},
                {property : 'announcedTax', value : announcedTax}
                )
            domInjector(...array);    

        }
        else {
            document.querySelector('#result').innerHTML = "<h1>Vous êtes prié d'entrer un nombre positif </h1>"
        }
    })
}

const domInjector = (...elt) =>{
    let traitement = elt;
    let result = document.querySelector('#result');
    result.innerHTML = "";
    traitement.forEach((e) =>{
        if(e.property === 'salaire'){
            result.innerHTML += `<li class="list-group-item">Votre salaire brut : ${e.value} €</li>`;
        }
        if(e.property === 'charge'){
            result.innerHTML += `<li class="list-group-item">Personnes à votre charge : ${e.value}</li>`;
        }
        if(e.property === 'trente' && e.value === true){
            result.innerHTML += `<li class="list-group-item">Avez-vous plus de 30 ans ?  : Oui</li>`;
        }
        if(e.property === 'handicap' && e.value === true){
            result.innerHTML += `<li class="list-group-item">Êtes vous travailleurs handicapé ?  : Oui</li>`;
        }
        if(e.property === 'trente' && e.value === false){
            result.innerHTML += `<li class="list-group-item">Avez-vous plus de 30 ans ?  : Non</li>`;
        }
        if(e.property === 'handicap' && e.value === false){
            result.innerHTML += `<li class="list-group-item">Êtes vous travailleurs handicapé ?  : Non</li>`;
        }
        if(e.property === 'salaireNet'){
            result.innerHTML += `<li class="list-group-item"><b class="text-success"> Votre salaire net : ${e.value} € </b></li>`;
        }
        if(e.property === 'announcedTax'){
            result.innerHTML += `<li class="list-group-item">Taxe : ${e.value} %</li>`;
        }
    })


}

getData();