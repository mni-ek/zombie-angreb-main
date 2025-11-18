document.querySelector(".ukendt").classList.add("hide");

document.querySelector("#zombie-type").addEventListener("change", showUkendt);

function showUkendt() {
  console.log("showUkendt");

  if (document.querySelector("#zombie-type").value == "Ukendt-zombie") {
    document.querySelector(".ukendt").classList.remove("hide");
  }
}
