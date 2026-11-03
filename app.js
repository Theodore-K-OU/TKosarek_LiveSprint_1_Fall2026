(function () {
  "use strict";

  const buttonPC = document.getElementById("btnPC");
  const buttonSC = document.getElementById("btnSC");

  const buttonPD = document.getElementById("btnPD");
  const buttonSD = document.getElementById("btnSD");

  const buttonPCC = document.getElementById("btnPCC");
  const buttonSCC = document.getElementById("btnSCC");

  const catE = document.getElementById("cat");
  const dogE = document.getElementById("dog");
  const cowE = document.getElementById("cow");

  buttonPC.addEventListener("click", (event) => {
    catE.classList.remove("hidden");
  });
  buttonSC.addEventListener("click", (event) => {
    catE.classList.add("hidden");
  });

  buttonPD.addEventListener("click", (event) => {
    dogE.classList.remove("hidden");
  });
  buttonSD.addEventListener("click", (event) => {
    dogE.classList.add("hidden");
  });

  buttonPCC.addEventListener("click", (event) => {
    cowE.classList.remove("hidden");
  });
  buttonSCC.addEventListener("click", (event) => {
    cowE.classList.add("hidden");
  });
})();
