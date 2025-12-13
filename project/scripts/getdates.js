document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`

// use the date object
const today = new Date();
const year = document.querySelector("#currentyear");
year.textContent = `${today.getFullYear()} `;

const countries = ["Canada", "Chili", "Colombia", "Croatia", "Costa Rica"];
const countriesLong = countries.filter((country) => country.length > 7);
let li = countries.length
console.log(countriesLong)
console.log(li)