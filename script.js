const button_Squad_1=document.getElementById("Squad 1");

console.log(button_Squad_1);

button_Squad_1.addEventListener("click",ffgf );
function ffgf(){
  const Affichage_Squad_1=document.getElementById("Affichage Squad 1");
  const Affichage_Squad_2=document.getElementById("Affichage Squad 2");
  const Affichage_Squad_3=document.getElementById("Affichage Squad 3");
  const Affichage_Squad_4=document.getElementById("Affichage Squad 4");

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
`;
Affichage_Squad_2.innerHTML += `
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
`;
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
`;
  });

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

