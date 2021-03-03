const userInput = document.querySelector("#userInput");
let userNumber = 0;
let randomNumber = 0;
let state = "";

const retrieveNumber = () => {
  document.querySelector("#sendUser").addEventListener("click", (e) => {
    console.log(userInput.value);
    if (userInput.value >= 1 && userInput.value <= 10) {
      userNumber = parseInt(userInput.value);
      compare();
      let date = new Date();
      document.querySelector(
        ".list-group"
      ).innerHTML += `<li class="list-group-item">${date.getHours()} H ${date.getMinutes()} m ${date.getSeconds()}s : Votre chiffre : ${userNumber} ${state}</li>`;
    } else {
      alert("Merci de bien vouloir entrer un nombre entre 1 et 10");
    }
  });
};

const randomizer = (max, min) => {
  return (randomNumber = Math.floor(Math.random() * (max - min) + min));
};

const compare = () => {
  console.log(randomNumber, userNumber);
  if (userNumber === randomNumber) {
    state = '<b class="text-success">Gagné!</b>';
  }
  if (userNumber > randomNumber) {
    state =
      '<b class="text-danger">Perdu</b> <b class="text-info">Plus petit</b>';
  }
  if (userNumber < randomNumber) {
    state =
      '<b class="text-danger">Perdu</b> <b class="text-info">Plus grand</b>';
  }
};

randomizer(1, 10);
retrieveNumber();
