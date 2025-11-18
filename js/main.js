const head = document.querySelector("#headCircle");
const shoulder = document.querySelector("#shoulderCircle");
const knee = document.querySelector("#kneeCircle");

const overskift = document.querySelector(".info-text > h2");
const placeholder = document.querySelector(".placeholder");
const efficiency = document.querySelector("#efficiency");
const requirement = document.querySelector("#requirement");

head.addEventListener("mouseover", mouseOverHead);
head.addEventListener("mouseout", mouseOutHead);
head.addEventListener("click", clickHead);

function mouseOverHead() {
  console.log("mouseOverHead");
  head.style.fill = "var(--primary-bg-color)";
}

function mouseOutHead() {
  console.log("mouseOutHead");
  head.style.fill = "var(--secondary-bg-color)";
}

function clickHead() {
  console.log("clickHead");
  overskift.textContent = "Zombie head";
  placeholder.textContent = "Bal bla bla";
  efficiency.innerHTML = `<h3>Mikkel</h3><p>Bla bla bla weekend</p>`;
  requirement.innerHTML = `<h3>Karsten</h3><p>Bla bla bla god weekend</p>`;
}

shoulder.addEventListener("mouseover", mouseOverShoulder);
shoulder.addEventListener("mouseout", mouseOutShoulder);
shoulder.addEventListener("click", clickShoulder);

function mouseOverShoulder() {
  console.log("mouseOverShoulder");
  shoulder.style.fill = "var(--primary-bg-color)";
}

function mouseOutShoulder() {
  console.log("mouseOutShoulder");
  shoulder.style.fill = "var(--secondary-bg-color)";
}

function clickShoulder() {
  console.log("clickShoulder");
  overskift.textContent = "Zombie shoulder";
  placeholder.textContent = "Bal bla bla";
  efficiency.innerHTML = `<h3>Mikkel</h3><p>Bla bla bla weekend</p>`;
  requirement.innerHTML = `<h3>Karsten</h3><p>Bla bla bla god weekend</p>`;
}

knee.addEventListener("mouseover", mouseOverKnee);
knee.addEventListener("mouseout", mouseOutKnee);
knee.addEventListener("click", clickKnee);

function mouseOverKnee() {
  console.log("mouseOverKnee");
  knee.style.fill = "var(--primary-bg-color)";
}

function mouseOutKnee() {
  console.log("mouseOutKnee");
  knee.style.fill = "var(--secondary-bg-color)";
}

function clickKnee() {
  console.log("clickKnee");
  overskift.textContent = "Zombie knee";
  placeholder.textContent = "Bal bla bla";
  efficiency.innerHTML = `<h3>Mikkel</h3><p>Bla bla bla weekend</p>`;
  requirement.innerHTML = `<h3>Karsten</h3><p>Bla bla bla god weekend</p>`;
}
