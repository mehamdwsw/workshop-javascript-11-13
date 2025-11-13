const button_Squad_1=document.getElementById("Squad 1");
const button_Squad_2=document.getElementById("Squad 2");
const button_Squad_3=document.getElementById("Squad 3");
const button_Squad_4=document.getElementById("Squad 4");

console.log(button_Squad_1);

button_Squad_1.addEventListener("click",Affichage_Squad_1 );
button_Squad_2.addEventListener("click",Affichage_Squad_1 );
button_Squad_3.addEventListener("click",Affichage_Squad_1 );
button_Squad_4.addEventListener("click",Affichage_Squad_1 );

function Affichage_Squad_1(){
  const Affichage_Squad_1=document.getElementById("Affichage Squad 1");
let userListe = add_localSt();
 
  userListe.forEach((element) => {
    Affichage_Squad_1.innerHTML += `
<div class="d-flex align-items-center">
            <div class="image">
              <img
                src="${element.image}"
                class="rounded" width="100">
            </div>

            <div class="ml-3 w-100">

              <h4 class="mb-0 mt-0">${element.name}</h4>
              <span>${element.speciality}</span>
              <div class="col">
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                   Ajouter Squad
                  </button>
              </div>
            
            </div>   
          </div>
`
  });

}
  const Regex_Nom=/^[a-zA-ZÀ-ÿ]+$;/;
  const Regex_Prénom=/^[a-zA-ZÀ-ÿ]+$;/;
  const Regex_Email =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const Regex_Âge=/^(1[5-9]|[2-9]\d)$/;
  const Regex_URL_Photo=/^(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
function yas_and_no(){
const b=document.getElementById("disabledTextInput");
b.value
} 
  



async function data() {
  let data = await fetch("data.json");
  var userListe = await data.json();

  //ajouter la liste des apprenant au localstorage

  add_localSt();
  Affichage();

  localStorage.setItem("userListe", JSON.stringify(userListe));
}
data();

function add_localSt() {
  let data = localStorage.getItem("userListe");
  var userListe = JSON.parse(data);
  return userListe;
}

function Affichage() {
  let userListe = add_localSt();
  const prefail = document.getElementById("prefail");
  userListe.forEach((element) => {
    prefail.innerHTML += `
<div class="d-flex align-items-center">
            <div class="image">
              <img
                src="${element.image}"
                class="rounded" width="100">
            </div>

            <div class="ml-3 w-100">

              <h4 class="mb-0 mt-0">${element.name}</h4>
              <span>${element.speciality}</span>
              <div class="col">
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                   Ajouter Squad
                  </button>
              </div>
            
            </div>   
          </div>
`;
  });
}

