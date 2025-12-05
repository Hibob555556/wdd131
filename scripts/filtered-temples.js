const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Baton Rouge Louisiana Temple",
        location: "Baton Rouge, Louisiana",
        dedicated: "2000, July, 16",
        area: 10890,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/baton-rouge-louisiana/320x200/3-a75beca22300a3263bd47fba03b5b0d1b5ca0753.jpeg"
    },
    {
        templeName: "Perth Australia Temple",
        location: "Yokine, Western Australia",
        dedicated: "2001, May, 20",
        area: 10700,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/perth-australia/200x200/perth-australia-lds-temple-1143774-wallpaper.jpg"
    },
    {
        templeName: "Tokyo Japan Temple",
        location: "Minamiazabu, Tokyo Japan",
        dedicated: "1980, October, 27-29",
        area: 10700,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/200x320/tokyo_japan_temple-evening.jpeg"
    }
];

// create and populate temple cards
class Temple {
    constructor(name, location, dedicated, area, url) {
        this.name = name;
        this.location = location;
        this.dedicated = dedicated;
        this.area = area;
        this.url = url;
    }

    createCard() {
        let card = document.createElement('figure');

        // card head
        let card_head = document.createElement('h3');
        card_head.textContent = this.name;
        card_head.setAttribute('class', 'fg-black');

        // card info
        let info_container = document.createElement('div');

        let loc_label = document.createElement('p');
        loc_label.textContent = "Location:";
        let loc_val = document.createElement('p');
        loc_val.textContent = this.location;

        let ded_label = document.createElement('p');
        ded_label.textContent = "Dedicated:";
        let ded_val = document.createElement('p');
        ded_val.textContent = this.dedicated;

        let area_label = document.createElement('p');
        area_label.textContent = "Area:";
        let area_val = document.createElement('p');
        area_val.textContent = this.area;

        let loc = document.createElement('div');
        loc.setAttribute('class', 'row');
        loc.appendChild(loc_label);
        loc.appendChild(loc_val);

        let ded = document.createElement('div');
        ded.setAttribute('class', 'row');
        ded.appendChild(ded_label);
        ded.appendChild(ded_val);

        let area = document.createElement('div');
        area.setAttribute('class', 'row');
        area.appendChild(area_label);
        area.appendChild(area_val);

        info_container.appendChild(loc);
        info_container.appendChild(ded);
        info_container.appendChild(area);

        // image
        let img = document.createElement('img');
        img.setAttribute('src', this.url);
        img.setAttribute('alt', "Temple photo");
        img.setAttribute('loading', 'lazy');

        // create card
        card.appendChild(card_head);
        card.appendChild(info_container);
        card.appendChild(img);

        return card;
    }
}

function pop_temples(filter) {
    const container = document.querySelector('#container');
    container.innerHTML = "";

    let templesArray = [];
    const OLD = 1900;
    const NEW = 2000;
    const LARGE = 90000;
    const SMALL = 10000;

    switch (filter) {
        case "old":
            templesArray = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) < OLD);
            break;

        case "new":
            templesArray = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) > NEW);
            break;

        case "large":
            templesArray = temples.filter(temple => temple.area > LARGE);
            break;

        case "small":
            templesArray = temples.filter(temple => temple.area < SMALL);
            break;

        // assume "home" filter if no valid filter is applied
        default:
            templesArray = temples;
            break;
    }

    templesArray.forEach(element => {
        let t = new Temple(element["templeName"], element["location"], element["dedicated"],
            element["area"], element["imageUrl"]);
        let card = t.createCard();
        container.appendChild(card);
    });
}

const qry = window.location.search;
const prms = new URLSearchParams(qry);
const filter = prms.get('filter');

pop_temples(filter);