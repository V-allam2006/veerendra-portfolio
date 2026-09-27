const container = document.getElementById("cards-container");
const staticHeading = document.querySelector(".heading");
const homeHeading = document.getElementById("description");

function clearContainer() {
    container.innerHTML = "";
}

function createCard(imageSrc, title, dataKey) {
    const colDiv = document.createElement("div");
    colDiv.className = "col-12 col-sm-6 col-md-4 col-lg-3";

    const cardDiv = document.createElement("div");
    cardDiv.className = "icon-card shadow card";

    cardDiv.innerHTML = `
        <img src="${imageSrc}" class="w-100" alt="${title}">
        <h1 class="menu-card-title">${title}</h1>
        <a href="javascript:void(0)" class="menu-item-link">
            View All
            <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right" fill="#d0b200"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 
                    .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1
                    -.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
            </svg>
        </a>
    `;

    // Add click event on the link
    cardDiv.querySelector(".menu-item-link").addEventListener("click", () => display(dataKey));

    colDiv.appendChild(cardDiv);
    return colDiv;
}

function renderCards(cards, parentKey) {
    clearContainer();
    cards.forEach(card => {
        container.appendChild(createCard(card.img, card.title, card.key));
    });

    // Show back button on all non-home pages
    if (parentKey && parentKey !== "home") {
        addBackButton(parentKey);
    } else if (parentKey === "home") {
        addBackButton("home");
    }
}

function addBackButton(parentKey) {
    const backDiv = document.createElement("div");
    backDiv.className = "col-12 d-flex justify-content-start mt-3";

    backDiv.innerHTML = `
        <button class="btn btn-success m-3 custom-back-link">Back</button>
    `;

    backDiv.querySelector(".custom-back-link").addEventListener("click", () => {
        if (parentKey === "" || parentKey === undefined) {
            display("home");
        } else {
            display(parentKey);
        }
    });
    container.appendChild(backDiv);
}

// Headings for each section
const headings = {
    home: "WELCOME TO RAJAHMUNDRY",
    accommodation: "Accommodation in Rajahmundry",
    hotels: "Hotels in Rajahmundry",
    lodges: "Lodges in Rajahmundry",
    food: "Food in Rajahmundry",
    restaurants: "Restaurants in Rajahmundry",
    bakeries: "Bakeries in Rajahmundry",
    transportation: "Transportation Services in Rajahmundry",
    roadwaytransport: "Bus Services in Rajahmundry",
    railwaytransport: "Auto Stands in Rajahmundry",
    airwaytransport: "AirWay Transportation in Rajahmundry",
    waterwaytransport: "WaterWay Transportation in Rajahmundry",
    theatres: "Theatres in Rajahmundry",
    singlescreentheatres: "Single Screen Theatres in Rajahmundry",
    multiplextheatres: "Multiplex Theatres in Rajahmundry",
    attractions: "Explore the Attractions in Rajahmundry",
    shoppingmalls: "Explore the Shopping Malls in Rajahmundry",
    govtsector: "Government Administration in Rajahmundry",
    rmc: "Rajahmundry Municipal Corporation",
    govtoffices: "Government Offices in Rajahmundry",
    education: "Educational Institutions in Rajahmundry",
    schools: "Schools in Rajahmundry",
    collegesanduniversities: "Colleges and Universities in Rajahmundry",
    stationary: "Stationary Services in Rajahmundry",
    health: "Healthcare Services in Rajahmundry",
    govthospitals: "Government Hospitals in Rajahmundry",
    privatehospitalsandclinics: "Private Hospitals and Clinics in Rajahmundry",
    festivals: "Festivals in Rajahmundry",
    religiousplaces: "Religious Places in Rajahmundry",
    churches: "Churches in Rajahmundry",
    temples: "Temples in Rajahmundry",
    mosque: "Mosques in Rajahmundry",
    derasar: "Jain temples in Rajahmundry",
};

const data = {
    home: [
        { img: "assets/accommodation.jpg", title: "Accommodation", key: "accommodation" },
        { img: "assets/food.jpg", title: "Food & Dining", key: "food" },
        { img: "assets/transportation.jpg", title: "Transportation", key: "transportation" },
        { img: "assets/theatres.jpg", title: "Theatres", key: "theatres" },
        { img: "assets/attractions.jpg", title: "Attractions", key: "attractions" },
        { img: "assets/mall.jpg", title: "Shopping Malls", key: "shoppingmalls" },
        { img: "assets/govt.jpg", title: "Government Administration", key: "govtsector" },
        { img: "assets/education.jpg", title: "Education", key: "education" },
        { img: "assets/stationary.jpg", title: "Stationary", key: "stationary" },
        { img: "assets/health.jpg", title: "Healthcare Services", key: "health" },
        { img: "assets/festivals.jpg", title: "Festival Events", key: "festivals" },
        { img: "assets/temples.jpg", title: "Religious Places", key: "religiousplaces" },
    ],
    accommodation: [
        { img: "assets/hotel.jpg", title: "Hotels", key: "hotels", parent: "home" },
        { img: "assets/lodge.jpg", title: "Lodges", key: "lodges", parent: "home" },
    ],
    hotels: [
        { img: "assets/hotel1.jpg", title: "Hotel Shelton", key: "home", parent: "accommodation" },
        { img: "assets/hotel2.jpg", title: "River Bay", key: "home", parent: "accommodation" },
        { img: "assets/hotel3.jpg", title: "Anand Regency", key: "home", parent: "accommodation" },
        { img: "assets/hotel4.jpg", title: "La Hospin", key: "home", parent: "accommodation" },
    ],
    lodges: [
        { img: "assets/lodge1.jpg", title: "Sri Krishna Lodge", key: "home", parent: "accommodation" },
        { img: "assets/lodge2.jpg", title: "Srinivasa Lodge", key: "home", parent: "accommodation" },
    ],
    food: [
        { img: "assets/restaurant.jpg", title: "Restaurants", key: "restaurants", parent: "home" },
        { img: "assets/bakery.jpg", title: "Bakeries", key: "bakeries", parent: "home" },
    ],
    restaurants: [
        { img: "assets/restaurant1.jpg", title: "Tandoori Hut", key: "food", parent: "food" },
        { img: "assets/restaurant2.jpg", title: "Sri Kanya", key: "food", parent: "food" },
    ],
    bakeries: [
        { img: "assets/bakery1.jpg", title: "Karachi Bakery", key: "food", parent: "food" },
        { img: "assets/bakery2.jpg", title: "Vijaya Bakery", key: "food", parent: "food" },
    ],
    transportation: [
        { img: "assets/transportation1.jpg", title: "Road-Way Transportation", key: "roadwaytransport", parent: "home" },
        { img: "assets/transportation2.jpg", title: "Rail-Way Transportation", key: "railwaytransport", parent: "home" },
        { img: "assets/transportation3.jpg", title: "Air-Way Transportation", key: "airwaytransport", parent: "home" },
        { img: "assets/transportation4.jpg", title: "Water-Way Transportation", key: "waterwaytransport", parent: "home" },
    ],
    roadwaytransport: [
        { img: "assets/bus1.jpg", title: "APSRTC Bus Station", key: "transportation", parent: "transportation" },
        { img: "assets/bus2.jpg", title: "City Bus Services", key: "transportation", parent: "transportation" },
    ],
    railwaytransport: [
        { img: "assets/railway1.jpg", title: "Rajahmundry Railway Station", key: "transportation", parent: "transportation" },
        { img: "assets/railway2.jpg", title: "Express Trains", key: "transportation", parent: "transportation" },
    ],
    airwaytransport: [
        { img: "assets/airway1.jpg", title: "Rajahmundry Airport", key: "transportation", parent: "transportation" },
        { img: "assets/airway2.jpg", title: "Flight Services", key: "transportation", parent: "transportation" },
    ],
    waterwaytransport: [
        { img: "assets/waterway1.jpg", title: "Godavari Boat Services", key: "transportation", parent: "transportation" },
        { img: "assets/waterway2.jpg", title: "Papikondalu Tours", key: "transportation", parent: "transportation" },
    ],
    theatres: [
        { img: "assets/theatres1.jpg", title: "Single-Screen", key: "singlescreentheatres", parent: "home" },
        { img: "assets/theatres2.jpg", title: "Multiplex", key: "multiplextheatres", parent: "home" },
    ],
    singlescreentheatres: [
        { img: "assets/single1.jpg", title: "Sri Krishna Theatre", key: "theatres", parent: "theatres" },
        { img: "assets/single2.jpg", title: "Venkatadri Theatre", key: "theatres", parent: "theatres" },
    ],
    multiplextheatres: [
        { img: "assets/multiplex1.jpg", title: "INOX", key: "theatres", parent: "theatres" },
        { img: "assets/multiplex2.jpg", title: "PVR Cinemas", key: "theatres", parent: "theatres" },
    ],
    attractions: [
        { img: "assets/attraction1.jpg", title: "Godavari Bridge", key: "home", parent: "home" },
        { img: "assets/attraction2.jpg", title: "Papikondalu", key: "home", parent: "home" },
    ],
    shoppingmalls: [
        { img: "assets/mall1.jpg", title: "Leela Mahal", key: "home", parent: "home" },
        { img: "assets/mall2.jpg", title: "Vijetha Super Market", key: "home", parent: "home" },
    ],
    govtsector: [
        { img: "assets/rmc.jpg", title: "Municipal Corporation", key: "rmc", parent: "home" },
        { img: "assets/govtoffices.jpg", title: "Government Offices", key: "govtoffices", parent: "home" },
    ],
    rmc: [
        { img: "assets/rmc1.jpg", title: "Main Office", key: "govtsector", parent: "govtsector" },
        { img: "assets/rmc2.jpg", title: "Water Department", key: "govtsector", parent: "govtsector" },
    ],
    govtoffices: [
        { img: "assets/office1.jpg", title: "Collector Office", key: "govtsector", parent: "govtsector" },
        { img: "assets/office2.jpg", title: "Revenue Office", key: "govtsector", parent: "govtsector" },
    ],
    education: [
        { img: "assets/school.jpg", title: "Schools", key: "schools", parent: "home" },
        { img: "assets/college.jpg", title: "Colleges & Universities", key: "collegesanduniversities", parent: "home" },
    ],
    schools: [
        { img: "assets/school1.jpg", title: "Aditya School", key: "education", parent: "education" },
        { img: "assets/school2.jpg", title: "Sri Chaitanya", key: "education", parent: "education" },
    ],
    collegesanduniversities: [
        { img: "assets/college1.jpg", title: "Adikavi Nannaya University", key: "education", parent: "education" },
        { img: "assets/college2.jpg", title: "Godavari Institute of Engineering", key: "education", parent: "education" },
    ],
    stationary: [
        { img: "assets/stationary1.jpg", title: "Book Stores", key: "home", parent: "home" },
        { img: "assets/stationary2.jpg", title: "Printing Shops", key: "home", parent: "home" },
    ],
    health: [
        { img: "assets/hospital1.jpg", title: "Government Hospitals", key: "govthospitals", parent: "home" },
        { img: "assets/hospital2.jpg", title: "Private Hospitals", key: "privatehospitalsandclinics", parent: "home" },
    ],
    govthospitals: [
        { img: "assets/govthospital1.jpg", title: "Government General Hospital", key: "health", parent: "health" },
        { img: "assets/govthospital2.jpg", title: "Area Hospital", key: "health", parent: "health" },
    ],
    privatehospitalsandclinics: [
        { img: "assets/privatehospital1.jpg", title: "Apollo Hospital", key: "health", parent: "health" },
        { img: "assets/privatehospital2.jpg", title: "Lalitha Hospital", key: "health", parent: "health" },
    ],
    festivals: [
        { img: "assets/festival1.jpg", title: "Godavari Pushkaralu", key: "home", parent: "home" },
        { img: "assets/festival2.jpg", title: "Diwali Celebrations", key: "home", parent: "home" },
    ],
    religiousplaces: [
        { img: "assets/Churches.jpg", title: "Churches", key: "churches", parent: "home" },
        { img: "assets/Temples1.jpg", title: "Temples", key: "temples", parent: "home" },
        { img: "assets/Mosque.jpg", title: "Mosques", key: "mosque", parent: "home" },
        { img: "assets/Derasar.jpg", title: "Jain Temples", key: "derasar", parent: "home" },
    ],
    churches: [
        { img: "assets/church1.jpg", title: "St. Peter's Church", key: "religiousplaces", parent: "religiousplaces" },
        { img: "assets/church2.jpg", title: "CSI Church", key: "religiousplaces", parent: "religiousplaces" },
    ],
    temples: [
        { img: "assets/temple1.jpg", title: "Iskcon Temple", key: "religiousplaces", parent: "religiousplaces" },
        { img: "assets/temple2.jpg", title: "Kotilingeshwara Temple", key: "religiousplaces", parent: "religiousplaces" },
    ],
    mosque: [
        { img: "assets/mosque1.jpg", title: "Jama Masjid", key: "religiousplaces", parent: "religiousplaces" },
        { img: "assets/mosque2.jpg", title: "Rajahmundry Mosque", key: "religiousplaces", parent: "religiousplaces" },
    ],
    derasar: [
        { img: "assets/derasar1.jpg", title: "Rajahmundry Jain Derasar", key: "religiousplaces", parent: "religiousplaces" },
        { img: "assets/derasar2.jpg", title: "Jain Mandir", key: "religiousplaces", parent: "religiousplaces" },
    ],
};


// Displays cards and updates heading
function display(key) {
    if (key === "home") {
        homeHeading.style.display = "block";
    } else {
        homeHeading.style.display = "none";
    }

    if (headings[key]) {
        staticHeading.style.fontFamily = key === "home" ? "Bree Serif" : "Lobster";
        staticHeading.style.fontSize = key === "home" ? "35px" : "38px";
        staticHeading.textContent = headings[key];
    } else {
        staticHeading.textContent = "Explore Rajahmundry";
    }

    if (data[key]) {
        const parentKey = data[key][0]?.parent || "home";
        renderCards(data[key], parentKey);
    } else {
        console.warn(`No data found for key: ${key}`);
    }
}

// Initialize home cards on load
document.addEventListener("DOMContentLoaded", () => {
    display("home");
});
