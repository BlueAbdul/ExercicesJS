

export let dataPromise = new Promise((resolve, reject) => {
     axios.get('https://jsonplaceholder.typicode.com/posts')
       .then(function (response) {
         setTimeout(() => { 
             console.log(`Code : ${response.status} OK`);
             console.log('success');
             resolve(response.data); }, 6000);
             
       })
       .catch(function (error) {
         console.log(`Erreur : ${error}`);
         console.log(error);
         throw('epic fail');
       })
       .then(function () {
         console.log('Gathering infos');
       });
  });
 

 