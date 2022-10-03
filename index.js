const MeterToFeet = 3.281;
const LiterToGallon = 0.264;
const KiloToPound = 2.204;
const convertButton = document.getElementById("convert-btn");

let inputEl = document.getElementById("input-number");
let outputEl1 = document.getElementById("output-el1");
let outputEl2 = document.getElementById("output-el2");
let outputEl3 = document.getElementById("output-el3");

convertButton.addEventListener("click", function() {
    if (Number(inputEl.value) >= 0) {
        outputEl1.textContent = `${Number(inputEl.value)} meters = ${(Number(inputEl.value) * MeterToFeet).toFixed(3)} feet | ${Number(inputEl.value)} feet = ${(Number(inputEl.value) / MeterToFeet).toFixed(3)} meters`;
        outputEl2.textContent = `${Number(inputEl.value)} liters = ${(Number(inputEl.value) * LiterToGallon).toFixed(3)} gallons | ${Number(inputEl.value)} gallons = ${(Number(inputEl.value) / LiterToGallon).toFixed(3)} liters`
        outputEl3.textContent = `${Number(inputEl.value)} kilograms = ${(Number(inputEl.value) * KiloToPound).toFixed(3)} pounds | ${Number(inputEl.value)} pounds = ${(Number(inputEl.value) / KiloToPound).toFixed(3)} kilograms`

        inputEl.className = "inputBox"; 
    } else {
        outputEl1.textContent = `Not a valid number`;
        outputEl2.textContent = `Not a valid number`;
        outputEl3.textContent = `Not a valid number`;

        inputEl.className = "classNo";
    }
}) 