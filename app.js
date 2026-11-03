(function () {
  "use strict()";

  const buttonPC = document.getElementById("btnSC");
  const buttonSC = document.getElementById("btnPC");

  const buttonPD = document.getElementById("btnSD");
  const buttonSD = document.getElementById("btnPD");

  const buttonPCC = document.getElementById("btnSCC");
  const buttonSCC = document.getElementById("btnPCC");

  const catE = document.getElementById("cat");
  const dogE = document.getElementById("dog");
  const cowE = document.getElementById("cow");

  render();

  buttonPC.addEventListener("click", (event) => {
    catE.classList.remove("hidden");
    render();
  });
  buttonSC.addEventListener("click", (event) => {
    catE.classList.add("hidden");
    render();
  });

  buttonPD.addEventListener("click", (event) => {
    dogE.classList.remove("hidden");
    render();
  });
  buttonSD.addEventListener("click", (event) => {
    dogE.classList.add("hidden");
    render();
  });

  buttonPCC.addEventListener("click", (event) => {
    cowE.classList.remove("hidden");
    render();
  });
  buttonSCC.addEventListener("click", (event) => {
    cowE.classList.add("hidden");
    render();
  });
});
