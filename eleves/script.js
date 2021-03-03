import {arrayEtudiant} from './class.js';

console.log(arrayEtudiant);

const insert = () => {
    let doc = document.querySelector('.list-group')
    doc.innerHTML = "";

    arrayEtudiant.forEach((e) =>{
        doc.innerHTML += `<li class="list-group-item">
        <b>Nom : ${e.prenom} </b> <br> <b>Prénom : ${e.nom}</b> <br> <b>Série : ${e.section} </b><br>
        moyenne : ${e.moyenne} <br> <i>Commentaire : ${e.commentaire}</i>
    </li>`
    })
}

insert();