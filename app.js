let usrInput = document.getElementById("input-btn");
const areaCalc = document.getElementById("area-btn");

const currentTextResult = document.getElementById("text-result");
const currentAreaResult = document.getElementById("area-result");

const volCalc = document.getElementById("vol-btn");
const currentVolumeResult = document.getElementById("vol-result");
const pie = 3.141;

function inputByUser() {
  if (usrInput.value === "") {
    usrInput.value = 0;
  }
  return parseInt(usrInput.value);
}

function areaOutput(text, number) {
  currentTextResult.textContent = text;
  currentAreaResult.textContent = number;
}

function volumeOutput(text, number) {
  currentTextResult.textContent = text;
  currentVolumeResult.textContent = number;
}

const defaultRadius = 0;
let currentRadius = defaultRadius;

function areaCalculation() {
  const enteredRadius = inputByUser();
  currentRadius = pie * enteredRadius * enteredRadius;
  const resultDescription = `π × ${enteredRadius} × ${enteredRadius}`;
  areaOutput(resultDescription, currentRadius);
}
areaCalc.addEventListener("click", areaCalculation);

function volumeCalculate() {
  let heightInput = prompt(
    `please enter height in "mm" for volume calculation`
  );
  if (heightInput <= 0 || isNaN(heightInput)) {
    alert("Please enter a valid Number");
    return;
  }
  let height = parseInt(heightInput);
  const enteredRadius = inputByUser();
  currentRadius = pie * enteredRadius * enteredRadius * height;
  const resultDescription = `π × ${enteredRadius} × ${enteredRadius} × ${height}`;
  volumeOutput(resultDescription, currentRadius);
}
volCalc.addEventListener("click", volumeCalculate);

let typed = new Typed(".typing", {
  strings: ["Circle Area", "Cylinder Volume"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});