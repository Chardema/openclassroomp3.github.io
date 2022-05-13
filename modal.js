function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//exit popup
const closeBtn = document.querySelector(".close");
closeBtn.onclick = (e) => closeModal();

const closeModal = () => {
  modalbg.style.display = "none";
};
// on déclare le formulaire
let form = document.querySelector("#contactform");

//regexp prenom
form.first.addEventListener("change", function () {
  validFirst(this);
});

const validFirst = function (inputFirst) {
  let msg;
  let valid = false;
  // au moins 2 caractère
  if (inputFirst.value.length < 2) {
    msg = "Le prénom est trop court";
  } else {
    msg = "le prenom est correct !!!";
    valid = true;
  }
  //Affichage
  //Récupération de la balise Small
  let small = inputFirst.nextElementSibling;

  //on test l'expression régulière
  if (valid) {
    small.innerHtml = "OK 👨🏼‍💻";
    small.classList.remove("text-danger");
    small.classList.add("text-success");
  } else {
    small.innerHtml = "c pas bon cthistoire 🥸";
    small.classList.remove("text-success");
    small.classList.add("text-danger");
  }
};

//regexp mail
form.email.addEventListener("change", function () {
  validEmail(this);
});

const validEmail = function (inputEmail) {
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );
  //on test la RegExp
  let testEmail = emailRegExp.test(inputEmail.value);
  let small = inputEmail.nextElementSibling;

  if (testEmail) {
    small.innerHtml = "Adresse valide";
    small.classList.remove("text-danger");
    small.classList.add("text-success");
  } else {
    small.innerHtml = "Adresse invalide";
    small.classList.remove("text-success");
    small.classList.add("text-danger");
  }
};
