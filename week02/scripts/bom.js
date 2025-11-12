const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const msg_div = document.querySelector('#message');


let errMessageDisplayed = false;
/**
 * @description Handles the Add Chapter button being clicked. 
 */
button.addEventListener("click", () => {
    console.log("Button Clicked!!!");
    if (input.value.trim() === '') {
        if (!errMessageDisplayed) {
            let msg_text = "Please enter a favorite chapter."
            const msg = createErrMsg(msg_text);
            msg_div.append(msg);
        }
    } else {
        const li = document.createElement('li');
        const del_butt = document.createElement('button');

        li.textContent = input.value;
        del_butt.textContent = '❌';

        li.append(del_butt);
        list.append(li);

        del_butt.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });

        input.value = '';
    }
    if (!errMessageDisplayed) {
        setTimeout(() => {
            msg_div.textContent = '';
            errMessageDisplayed = false;
        }, 5000);
        errMessageDisplayed = true;
    }
    input.focus();
});


/**
 * @description Create and return a span containing an error icon and text.
 * @param {String} text 
 * @returns {HTMLSpanElement} 
 */
function createErrMsg(text) {
    const error = document.createElement('span');
    const err_icon = document.createElement('p');
    const err_text = document.createElement('p');

    err_icon.textContent = "❌";
    err_text.textContent = text;

    error.append(err_icon);
    error.append(err_text);

    return error;
}
