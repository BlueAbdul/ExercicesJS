const canvas = document.querySelector('.canva');
let ctx = canvas.getContext('2d');


const fill = () => {
    let array = [];
    let nb = nb1 = nb2 = 0;
    randomNumbers(nb,nb1,nb2, array);
    console.log(array);
    ctx.fillStyle = `rgb(${array[0]},${array[1]},${array[2]})`;
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    console.log(ctx);
}

const randomNumbers = (nb,nb1,nb2, arr) => {
    
    
     nb = Math.floor(Math.random() * (265 - 0) + 0);
     nb1 = Math.floor(Math.random() * (265 - 0) + 0);
     nb2 = Math.floor(Math.random() * (265 - 0) + 0);

     
    arr.push(nb,nb1,nb2)
    return arr;    
}

const randomize = () => {
    document.querySelector('#send').addEventListener('click',(e) =>{
        fill();
    })
}

const getInputs = () =>{

    let arre = document.querySelectorAll('.form-control-range');
    let arr1 = arr2 = arr3 = 0;
    console.log(arr1,arr2,arr3);
    arre.forEach((e) =>{
        e.addEventListener("change", (e) =>{
            console.log(e.target.id);
            if(e.target.id === "form"){
                arr1 = e.target.value
            }
            if(e.target.id === "form1"){
                arr2 = e.target.value
            }
            if(e.target.id === "form2"){
                arr3 = e.target.value
            }
            fillInput(arr1,arr2,arr3);
        });
    })
       
    

}

const fillInput =(el,el1,el2) =>{
    console.log(el,el1,el2);
    ctx.fillStyle = `rgb(${el},${el1},${el2})`;
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}

fill();
randomize();
getInputs();
