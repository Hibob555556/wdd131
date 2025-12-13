const HOME_BTN = document.querySelector('#home-btn');
const NAME_IN = document.querySelector('#user_name');
const NAME_BTN = document.querySelector("#save_name_btn");
const MOOD_IN = document.querySelector('#user_mood');
const HI_CONT = document.querySelector('#say-hi');

try {
    HOME_BTN.addEventListener('click', () => {
        document.location.href = "/wdd131/project";
    });
} catch { }

try {
    NAME_BTN.addEventListener("click", () => {
        const name = NAME_IN.value;
        const mood = MOOD_IN.value;
        localStorage.setItem("username", name);
        localStorage.setItem("mood", mood);
        showUsername()
    });
} catch { }

try {
    showUsername();
} catch { }

function showUsername() {
    let user = localStorage.getItem('username');
    let mood = localStorage.getItem('mood');
    let m = ""
    if (mood)
        m = `You are ${mood}`
    HI_CONT.textContent = `Hello, ${user != null ? user : "User"}. ${m}.`;
}