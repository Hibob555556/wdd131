const INPUT = document.querySelector("#whole-input");
const OUTPUT = document.querySelector("#output");
const CPY = document.querySelector("#copy");
const WHOLE_NUM_VALIDATE = /^[1-9][0-9]*$/;

CPY.style.display = 'none';

function convertToBinary(num) {
    let bin = num.toString(2);
    return bin;
}

INPUT.addEventListener('keyup', () => {
    let number = Number(INPUT.value);
    let number_str = INPUT.value;
    let binary = 0;
    console.log("WHOLE NUM VALIDATE:", Number.isInteger(number))
    if (Number.isInteger(number)) {
        if (number == 0) {
            OUTPUT.textContent = "Please input number...";
        } else if (number <= Number.MAX_SAFE_INTEGER) {
            binary = convertToBinary(number);
            OUTPUT.textContent = binary;
        }
        else {
            console.log(number);
            OUTPUT.textContent = "Number too large...";
        }
    } else {
        console.log("Please only input whole numbers...")
        OUTPUT.textContent = "Please only input whole numbers...";
    }

    if (number != 0) CPY.style.display = 'block';
});

CPY.addEventListener('click', () => {
    let txt = OUTPUT.textContent;
    navigator.clipboard.writeText(txt);
    alert(`Copied the text: ${txt}`);
});
