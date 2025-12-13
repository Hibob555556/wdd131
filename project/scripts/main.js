const HOME_BTN = document.querySelector('#home-btn');
const NAME_IN = document.querySelector('#user_name');
const NAME_BTN = document.querySelector("#save_name_btn");
const HI_CONT = document.querySelector('#say-hi');

try {
    HOME_BTN.addEventListener('click', () => {
        document.location.href = "/wdd131/project";
    });
} catch { }

try {
    NAME_BTN.addEventListener("click", () => {
        const name = NAME_IN.value;
        localStorage.setItem("username", name);
        showUsername()
    });
} catch { }

try {
    showUsername();
} catch { }

function showUsername() {
    let user = localStorage.getItem('username')
    HI_CONT.textContent = `Hello, ${user}`;
}