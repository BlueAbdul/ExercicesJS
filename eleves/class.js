import {eleves} from './script.module.js';
 export let arrayEtudiant = [];

class Eleve {

    constructor(eleveName,eleveFirstName, fr, eng, math, svt, serie){
        this.nom = eleveName;
        this.prenom = eleveFirstName;
        this.fr = fr;
        this.eng = eng;
        this.math = math;
        this.svt = svt;
        this.serie = serie;
    }
    get moyenne(){
        let reducer = (accumulator, currentValue) => accumulator + currentValue;
        let moyenne = 0;
        let length = this.svt.length + this.math.length + this.fr.length + this.eng.length;
        switch(this.serie){
            case 'S':
                length = this.svt.length*2 + this.math.length*2 + this.fr.length + this.eng.length;
             let svtm = (this.svt.reduce(reducer)+ this.math.reduce(reducer))*2;
             let freng = this.fr.reduce(reducer) + this.eng.reduce(reducer);
             let moyenneS = (svtm+freng)/length;
             return parseFloat(moyenneS.toFixed(2));
             break;
            case 'L':
                length = this.svt.length + this.math.length + this.fr.length*2 + this.eng.length*2;
            let svtmath = this.svt.reduce(reducer)+ this.math.reduce(reducer);
            let frbrit = (this.fr.reduce(reducer) + this.eng.reduce(reducer))*2;
            let  moyenneL = (svtmath+frbrit)/length;
             return parseFloat(moyenneL.toFixed(2));
             break;
        }
    }
    set eleve(Name){
        this.nom = Name;
    }

     commentaire(moy){
        console.log(moy);
        let commentaire ="";
        if(moy > 10 && moy < 13){
            return commentaire = "encouragement";
        }
        if(moy >= 13){
            return commentaire = "bien";
        }
        if(moy < 10 ){
            return commentaire = "gitGud";
        }
        
       
    }

}


let jie = new Eleve(eleves[0].firstName, eleves[0].lastName, eleves[0].fr, eleves[0].eng, eleves[0].math, eleves[0].svt, eleves[0].serie);

eleves.forEach((e, index) => {
   let student = new Eleve(e.firstName, e.lastName, e.fr, e.eng, e.math, e.svt, e.serie);
   let comment = student.commentaire(student.moyenne);
    arrayEtudiant.push({nom : student.nom, prenom : student.prenom, moyenne : student.moyenne, section: e.serie, commentaire : comment })
})


