const watcher = () =>{

     
     document.querySelector('#submit').addEventListener("click",(e) => {
        let number = parseInt(document.querySelector('#number').value)
        let arr = [];
         if(number > 0){
            document.querySelector('#result').innerHTML = '';
             for(i=1;i<11;i++){
                 let calculus = number*i;
                 console.log(calculus);
                 arr.push({nombre : number, multiple : i, result : calculus})
             }
             arr.forEach((e) => {  
                document.querySelector('#result').innerHTML += `<li class="list-group-item">${e.nombre} x ${e.multiple} = ${e.result}</li>` ;
             })
         } else {
             alert('Un chiffre au dessus de 0 ')
         }
         
     })
}

watcher();

