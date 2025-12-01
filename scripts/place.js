// fill out the Data Table labels and values
// -------------------------------------------------------------------------
const data_tbody = document.querySelector('#data-label-values');

const labels = ["Area:", "Population:", "Capital:",
    "Languages:", "Currency:", "State Bird:"]
const values = ["84,900 mi²", "3.5 Million", "Salt Lake City",
    "English", "US Dollar", "California Gull"]
const label_len = labels.length;

let elems = []
for (let i = 0; i < label_len; i++) {
    // get label and value
    var [label, value] = (() => [labels[i], values[i]])();

    // create elements
    var table_body = document.createElement('tr');
    var label_elem = document.createElement('td');
    var value_elem = document.createElement('td');

    // set label and value text
    label_elem.textContent = label;
    value_elem.textContent = value;

    // add padding to each element
    label_elem.classList.add("pd-2");
    value_elem.classList.add("pd-2");

    // create row
    table_body.append(label_elem);
    table_body.append(value_elem);

    // add row to table
    data_tbody.append(table_body)
}
// -------------------------------------------------------------------------



// fill out the Data Table labels and values
// -------------------------------------------------------------------------
const weather_tbody = document.querySelector('#weather-label-values');

const TEMP = 18;
const WIND = 5;

// calc wind chill if applicable
let wind_chill = "N/A";
if (TEMP <= 50 && WIND > 3)
    wind_chill = `${calculateWindChill(TEMP, WIND).toFixed(2)} °F`;

const w_labels = ["Temperature:", "Conditions:", "Wind:", "Wind Chill:"];
const w_values = [`${TEMP} °F`, "Snowy", `${WIND} mph`, `${wind_chill}`];
const w_label_len = labels.length;

elems = [];
for (let i = 0; i < w_label_len; i++) {
    var [label, value] = (() => [w_labels[i], w_values[i]])();

    // create elements
    var table_body = document.createElement('tr');
    var label_elem = document.createElement('td');
    var value_elem = document.createElement('td');

    // set label and value text
    label_elem.textContent = label;
    value_elem.textContent = value;

    // add padding to each element
    label_elem.classList.add("pd-2");
    value_elem.classList.add("pd-2");

    // create row
    table_body.append(label_elem);
    table_body.append(value_elem);

    // add row to table
    weather_tbody.append(table_body)
}

// -------------------------------------------------------------------------


// Weather Functions
// -------------------------------------------------------------------------
/**
 * @description Calculates and returns the windchill in the desired temperature format
 * @note unit = 0 ---> Fahrenheit unit = 1 ---> Celsius
 * @param {number} temp Temperature in fahrenheit
 * @param {number} wind Wind in mph
 * @returns {number} Wind Chill
 */
function calculateWindChill(temp, wind) {
    return 35.74 + 0.6215 * temp - 35.75 * Math.pow(wind, 0.16) + 0.4275 * temp * Math.pow(wind, 0.16);
}
// -------------------------------------------------------------------------


// fill out the last modified and copyright information in the footer
// -------------------------------------------------------------------------
document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`

// use the date object
const today = new Date();
const year = document.querySelector("#currentyear");
year.textContent = `${today.getFullYear()} `;
// -------------------------------------------------------------------------
