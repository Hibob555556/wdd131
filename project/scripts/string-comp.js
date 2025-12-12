const TEXT_IN_EX = document.querySelector('#text-in-expected');
const TEXT_IN_AC = document.querySelector('#text-in-actual');
const COMP_BUTTON = document.querySelector('#compare');
const OUTPUT = document.querySelector('#output');

function compText(expected, actual) {
    const expArr = expected.split("");
    const actArr = actual.split("");

    let same = false;
    if (expArr.length == actArr.length) same = true;

    let comparedText = [];
    if (same) {
        for (let i = 0; i < expArr.length; i++) {
            if (expArr[i] == actArr[i])
                comparedText.push({ key: expArr[i], value: true })
            else
                comparedText.push({ key: actArr[i], value: false });
        }
    }
    displayText(comparedText);
}

function displayText(compared) {
    console.log(compared);

    const letters = []
    for (let text of compared) {
        let a = document.createElement('a');
        a.textContent = text.key;
        if (text.value)
            a.setAttribute('style', "background-color: green;")
        else
            a.setAttribute('style', "background-color: red;")
        letters.push(a);
    }

    for (let letter of letters) {
        OUTPUT.appendChild(letter);
    }
}

COMP_BUTTON.addEventListener('click', () => {
    OUTPUT.innerHTML = '';
    compText(TEXT_IN_EX.value, TEXT_IN_AC.value);
});