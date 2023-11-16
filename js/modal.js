"use strict";

// GENERAL DEFINED ELEMENTS
const overlay = document.querySelector(".modal-overlay");

///////////////////////////////////////////////////////
// MODAL GALLERY NR.1 - Dzīvoklis Rīgas Klusajā Centrā
///////////////////////////////////////////////////////

// ATLASU UN DEFINĒJU ELEMENTUS
// modālā galerija nr.1
const modal1 = document.getElementById("modal1");
// pirmā projekta bilde un pogas
const btnCloseModal1 = document.querySelector(".close-modal-1");
const imgOpenModal1 = document.querySelector(".project1");
const btnOpenModal1 = document.querySelector(".modal-btn-1");

// FUNKCIJA, LAI ATVĒRTU MODĀLO GALERIJU
const openModal1 = function () {
  modal1.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

imgOpenModal1.addEventListener("click", openModal1);
btnOpenModal1.addEventListener("click", openModal1);

// FUNCKIJA, LAI AIZVĒRTU MODĀLO GALERIJU
const closeModal1 = function () {
  modal1.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal1.addEventListener("click", closeModal1);
overlay.addEventListener("click", closeModal1);

// lai aizvērtu modālo ar 'escape' taustiņu
// when it doesn't contain the class 'hidden' it means that it's visible and that's the condition in which we want to close it
document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal1.classList.contains("hidden")) {
    closeModal1();
    // to execute code in clodeModal we need to call it with parentheses
  }
});

///////////////////////////////////////////////////////
// MODAL GALLERY NR.2 - Dzīvojamā Māja Baložos
///////////////////////////////////////////////////////

// ATLASU UN DEFINĒJU ELEMENTUS
// modālā galerija nr.2
const modal2 = document.getElementById("modal2");
// pirmā projekta bilde un pogas
const btnCloseModal2 = document.querySelector(".close-modal-2");
const imgOpenModal2 = document.querySelector(".project2");
const btnOpenModal2 = document.querySelector(".modal-btn-2");

// FUNKCIJA, LAI ATVĒRTU MODĀLO GALERIJU
const openModal2 = function () {
  modal2.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

imgOpenModal2.addEventListener("click", openModal2);
btnOpenModal2.addEventListener("click", openModal2);

// FUNCKIJA, LAI AIZVĒRTU MODĀLO GALERIJU
const closeModal2 = function () {
  modal2.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal2.addEventListener("click", closeModal2);
overlay.addEventListener("click", closeModal2);

// lai aizvērtu modālo ar 'escape' taustiņu
// when it doesn't contain the class 'hidden' it means that it's visible and that's the condition in which we want to close it
document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal2.classList.contains("hidden")) {
    closeModal2();
    // to execute code in clodeModal we need to call it with parentheses
  }
});

///////////////////////////////////////////////////////
// MODAL GALLERY NR.3 - Klasisks dzīvoklis Rīgas centrā
///////////////////////////////////////////////////////

// ATLASU UN DEFINĒJU ELEMENTUS
// modālā galerija nr.3
const modal3 = document.getElementById("modal3");
// pirmā projekta bilde un pogas
const btnCloseModal3 = document.querySelector(".close-modal-3");
const imgOpenModal3 = document.querySelector(".project3");
const btnOpenModal3 = document.querySelector(".modal-btn-3");

// FUNKCIJA, LAI ATVĒRTU MODĀLO GALERIJU
const openModal3 = function () {
  modal3.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

imgOpenModal3.addEventListener("click", openModal3);
btnOpenModal3.addEventListener("click", openModal3);

// FUNCKIJA, LAI AIZVĒRTU MODĀLO GALERIJU
const closeModal3 = function () {
  modal3.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal3.addEventListener("click", closeModal3);
overlay.addEventListener("click", closeModal3);

// lai aizvērtu modālo ar 'escape' taustiņu
// when it doesn't contain the class 'hidden' it means that it's visible and that's the condition in which we want to close it
document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal3.classList.contains("hidden")) {
    closeModal3();
    // to execute code in clodeModal we need to call it with parentheses
  }
});

///////////////////////////////////////////////////////
// MODAL GALLERY NR.4 - Dzīvojamā Māja Mārupē
///////////////////////////////////////////////////////

// ATLASU UN DEFINĒJU ELEMENTUS
// modālā galerija nr.4
const modal4 = document.getElementById("modal4");
// pirmā projekta bilde un pogas
const btnCloseModal4 = document.querySelector(".close-modal-4");
const imgOpenModal4 = document.querySelector(".project4");
const btnOpenModal4 = document.querySelector(".modal-btn-4");

// FUNKCIJA, LAI ATVĒRTU MODĀLO GALERIJU
const openModal4 = function () {
  modal4.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

imgOpenModal4.addEventListener("click", openModal4);
btnOpenModal4.addEventListener("click", openModal4);

// FUNCKIJA, LAI AIZVĒRTU MODĀLO GALERIJU
const closeModal4 = function () {
  modal4.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal4.addEventListener("click", closeModal4);
overlay.addEventListener("click", closeModal4);

// lai aizvērtu modālo ar 'escape' taustiņu
// when it doesn't contain the class 'hidden' it means that it's visible and that's the condition in which we want to close it
document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal4.classList.contains("hidden")) {
    closeModal4();
    // to execute code in clodeModal we need to call it with parentheses
  }
});

///////////////////////////////////////////////////////
// MODAL GALLERY NR.5 - Ģimenes Mājas Rekonstrukcija Mārupē
///////////////////////////////////////////////////////

// ATLASU UN DEFINĒJU ELEMENTUS
// modālā galerija nr.5
const modal5 = document.getElementById("modal5");
// pirmā projekta bilde un pogas
const btnCloseModal5 = document.querySelector(".close-modal-5");
const imgOpenModal5 = document.querySelector(".project5");
const btnOpenModal5 = document.querySelector(".modal-btn-5");

// FUNKCIJA, LAI ATVĒRTU MODĀLO GALERIJU
const openModal5 = function () {
  modal5.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

imgOpenModal5.addEventListener("click", openModal5);
btnOpenModal5.addEventListener("click", openModal5);

// FUNCKIJA, LAI AIZVĒRTU MODĀLO GALERIJU
const closeModal5 = function () {
  modal5.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal5.addEventListener("click", closeModal5);
overlay.addEventListener("click", closeModal5);

// lai aizvērtu modālo ar 'escape' taustiņu
// when it doesn't contain the class 'hidden' it means that it's visible and that's the condition in which we want to close it
document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal5.classList.contains("hidden")) {
    closeModal5();
    // to execute code in clodeModal we need to call it with parentheses
  }
});

///////////////////////////////////////////////////////
// MODAL GALLERY NR.6 - Neliela Dzīvojamā Māja Jelgavā
///////////////////////////////////////////////////////

// ATLASU UN DEFINĒJU ELEMENTUS
// modālā galerija nr.6
const modal6 = document.getElementById("modal6");
// pirmā projekta bilde un pogas
const btnCloseModal6 = document.querySelector(".close-modal-6");
const imgOpenModal6 = document.querySelector(".project6");
const btnOpenModal6 = document.querySelector(".modal-btn-6");

// FUNKCIJA, LAI ATVĒRTU MODĀLO GALERIJU
const openModal6 = function () {
  modal6.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

imgOpenModal6.addEventListener("click", openModal6);
btnOpenModal6.addEventListener("click", openModal6);

// FUNCKIJA, LAI AIZVĒRTU MODĀLO GALERIJU
const closeModal6 = function () {
  modal6.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal6.addEventListener("click", closeModal6);
overlay.addEventListener("click", closeModal6);

// lai aizvērtu modālo ar 'escape' taustiņu
// when it doesn't contain the class 'hidden' it means that it's visible and that's the condition in which we want to close it
document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal6.classList.contains("hidden")) {
    closeModal6();
    // to execute code in clodeModal we need to call it with parentheses
  }
});

///////////////////////////////////////////////////////
// MODAL GALLERY NR.7 - Restorāns Riviera
///////////////////////////////////////////////////////

// ATLASU UN DEFINĒJU ELEMENTUS
// modālā galerija nr.7
const modal7 = document.getElementById("modal7");
// pirmā projekta bilde un pogas
const btnCloseModal7 = document.querySelector(".close-modal-7");
const imgOpenModal7 = document.querySelector(".project7");
const btnOpenModal7 = document.querySelector(".modal-btn-7");

// FUNKCIJA, LAI ATVĒRTU MODĀLO GALERIJU
const openModal7 = function () {
  modal7.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

imgOpenModal7.addEventListener("click", openModal7);
btnOpenModal7.addEventListener("click", openModal7);

// FUNCKIJA, LAI AIZVĒRTU MODĀLO GALERIJU
const closeModal7 = function () {
  modal7.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal7.addEventListener("click", closeModal7);
overlay.addEventListener("click", closeModal7);

// lai aizvērtu modālo ar 'escape' taustiņu
// when it doesn't contain the class 'hidden' it means that it's visible and that's the condition in which we want to close it
document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal7.classList.contains("hidden")) {
    closeModal7();
    // to execute code in clodeModal we need to call it with parentheses
  }
});

///////////////////////////////////////////////////////
// MODAL GALLERY NR.8 - Dzīvoklis Vēsturiskā Ēkā Rīgas Centrā
///////////////////////////////////////////////////////

// ATLASU UN DEFINĒJU ELEMENTUS
// modālā galerija nr.8
const modal8 = document.getElementById("modal8");
// pirmā projekta bilde un pogas
const btnCloseModal8 = document.querySelector(".close-modal-8");
const imgOpenModal8 = document.querySelector(".project8");
const btnOpenModal8 = document.querySelector(".modal-btn-8");

// FUNKCIJA, LAI ATVĒRTU MODĀLO GALERIJU
const openModal8 = function () {
  modal8.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

imgOpenModal8.addEventListener("click", openModal8);
btnOpenModal8.addEventListener("click", openModal8);

// FUNCKIJA, LAI AIZVĒRTU MODĀLO GALERIJU
const closeModal8 = function () {
  modal8.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal8.addEventListener("click", closeModal8);
overlay.addEventListener("click", closeModal8);

// lai aizvērtu modālo ar 'escape' taustiņu
// when it doesn't contain the class 'hidden' it means that it's visible and that's the condition in which we want to close it
document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal8.classList.contains("hidden")) {
    closeModal8();
    // to execute code in clodeModal we need to call it with parentheses
  }
});
