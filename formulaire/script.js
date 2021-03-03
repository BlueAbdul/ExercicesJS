const submitForm = () => {
  document.querySelector("#submit").addEventListener("click", (e) => {
    let data = document.querySelectorAll("input");
    data.forEach((elt) => {
      let value = elt.value;
      let type = elt.type;
      JoetheFilter(value, type);
    });
  });
};

const JoetheFilter = (elt, type) => {
  console.log(elt, type);
  switch (type) {
    case "email":
      if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          elt
        )
      ) {
        console.log("good");
        document.querySelector(
          "#p-mail"
        ).innerHTML = `<div  class="btn btn-success">Success, email = ${elt} </div>`;
      }
      break;
    case "number":
      try {
        parseInt(elt);
        if (elt >= 1) {
          console.log("good");
          document.querySelector(
            "#p-number"
          ).innerHTML = `<div  class="btn btn-success">Success, age = ${elt}</div>`;
        }
      } catch (error) {
        console.log(error);
      }
      break;
    case "list":
      break;
    case "text":
      if (typeof elt === "string") {
        console.log("good");
        console.log(elt);
        if (elt === "") {
          console.log("vide");
        } 
        if(elt === "Homme" || elt === "Femme" || elt === "Autre" || elt === "Hélicoptère de combat")
         {
          console.log("LALALALALALA");
          document.querySelector(
            "#p-list"
          ).innerHTML = `<div  class="btn btn-success">Success, genre = ${elt}</div>`;
        } else {
          document.querySelector(
            "#p-text"
          ).innerHTML = `<div  class="btn btn-success">Success, nom = ${elt}</div>`;
        }
      }
      break;
    case "date":
      if (
        /^((?:19|20)\d\d)[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/.test(
          elt
        )
      ) {
        console.log("good");
        document.querySelector(
          "#p-date"
        ).innerHTML = `<div  class="btn btn-success">Success, date = ${elt}</div>`;
      }
      break;
    default:
      document.querySelector(
        ".result"
      ).innerHTML = `<div  class="btn btn-danger">Erreur, mauvaise données envoyées</div>`;
  }
};

submitForm();
