// Author: Cayden Lunt
// File: display.js

const QUESTION_CONTAINERS = [
    "what-is",
    "why-is",
    "string-comparator-for"
];

const STRING_DROPDOWNS = [
    document.querySelector(`#string-1`),
    document.querySelector(`#string-2`),
    document.querySelector(`#string-3`)
]

/**
 * @description Hide the answers for each scenario
 * @returns {none}
 */
function hideAnswers() {
    QUESTION_CONTAINERS.forEach(element => {
        let elem = document.querySelector(`#${element}`)
        elem.style.display = "none";
    });
}

function createListeners() {
    let i = 0;
    STRING_DROPDOWNS.forEach(element => {
        i++;
        console.log(i);
        element.addEventListener('click', showAnswer(i));
    });
}

function showAnswer(id) {
    return function () {
        console.log(`ID Clicked: ${id}`)
        let elem;
        switch (id) {
            case 1:
                elem = document.querySelector('#what-is');
                break;

            case 2:
                elem = document.querySelector('#why-is');
                break;

            case 3:
                elem = document.querySelector('#string-comparator-for');
                break;
        }
        if (elem.style.display != 'block')
            elem.style.display = 'block';
        else
            elem.style.display = 'none';
    }
}

createListeners();
hideAnswers();
