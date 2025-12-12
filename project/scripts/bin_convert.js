const INPUT = document.querySelector("#whole-input");
const OUTPUT = document.querySelector("#output");
const CPY = document.querySelector("#copy");

function convertToBinary(num) {
    let bin = num.toString(2);
    return bin;
}

INPUT.addEventListener('keyup', () => {
    let number = parseInt(INPUT.value);
    let binary = 0;
    if (number <= Number.MAX_SAFE_INTEGER) {
        binary = convertToBinary(number);
        OUTPUT.textContent = binary;
    } else OUTPUT.textContent = "Number too large...";
});

CPY.addEventListener('click', () => {
    let txt = OUTPUT.textContent;
    navigator.clipboard.writeText(txt);
    alert("Copied the text: " + txt);
});
