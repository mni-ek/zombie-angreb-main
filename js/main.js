document.querySelector("#headCircle").addEventListener("mouseover", mouseOverHead);
document.querySelector("#headCircle").addEventListener("mouseout", mouseOutHead);
document.querySelector("#headCircle").addEventListener("click", clickHead);

function mouseOverHead() {
  console.log("mouseOverHead");
  document.querySelector("#headCircle").style.fill = "var(--primary-bg-color)";
}

function mouseOutHead() {
  console.log("mouseOutHead");
  document.querySelector("#headCircle").style.fill = "var(--secondary-bg-color)";
}

function clickHead() {
  console.log("clickHead");
  document.querySelector(".info-text > h2").textContent = "Zombiehead";
  document.querySelector(".placeholder").textContent = "Bal bla bla";
  document.querySelector("#efficiency").innerHTML = `<h3>Mikkel</h3>
<p>Bla bla bla weekend</p>`;
  document.querySelector("#requirement").innerHTML = `<h3>Karsten</h3>
<p>Bla bla bla god weekend</p>`;
}

document.querySelector("#shoulderCircle").addEventListener("mouseover", mouseOverShoulder);
document.querySelector("#shoulderCircle").addEventListener("mouseout", mouseOutShoulder);
document.querySelector("#shoulderCircle").addEventListener("click", clickShoulder);

function mouseOverShoulder() {
  console.log("mouseOverShoulder");
  document.querySelector("#shoulderCircle").style.fill = "var(--primary-bg-color)";
}

function mouseOutShoulder() {
  console.log("mouseOutShoulder");
  document.querySelector("#shoulderCircle").style.fill = "var(--secondary-bg-color)";
}

function clickShoulder() {
  console.log("clickShoulder");
  document.querySelector(".info-text > h2").textContent = "Zombie shoulder";
  document.querySelector(".placeholder").textContent = "Bal bla bla";
  document.querySelector("#efficiency").innerHTML = `<h3>Mikkel</h3>
<p>Bla bla bla weekend</p>`;
  document.querySelector("#requirement").innerHTML = `<h3>Karsten</h3>
<p>Bla bla bla god weekend</p>`;
}

document.querySelector("#kneeCircle").addEventListener("mouseover", mouseOverKnee);
document.querySelector("#kneeCircle").addEventListener("mouseout", mouseOutKnee);
document.querySelector("#kneeCircle").addEventListener("click", clickKnee);

function mouseOverKnee() {
  console.log("mouseOverKnee");
  document.querySelector("#kneeCircle").style.fill = "var(--primary-bg-color)";
}

function mouseOutKnee() {
  console.log("mouseOutKnee");
  document.querySelector("#kneeCircle").style.fill = "var(--secondary-bg-color)";
}

function clickKnee() {
  console.log("clickKnee");
  document.querySelector(".info-text > h2").textContent = "Zombie knee";
  document.querySelector(".placeholder").textContent = "Bal bla bla";
  document.querySelector("#efficiency").innerHTML = `<h3>Mikkel</h3>
<p>Bla bla bla weekend</p>`;
  document.querySelector("#requirement").innerHTML = `<h3>Karsten</h3>
<p>Bla bla bla god weekend</p>`;
}
