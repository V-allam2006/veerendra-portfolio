document.addEventListener("DOMContentLoaded", function () {
    const navbar = `
    <nav class="navbar bg-info navbar-expand-lg fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand d-flex align-items-center" href="index.html">
                <img src="assets/logo.png" alt="Rajahmundry Logo" class="image me-2">
            </a>
            <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#" data-key="home">Home</a>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="accommodationDropdown" data-bs-toggle="dropdown" data-key="accommodation">Accommodation</a>
                        <ul class="dropdown-menu bg-info">
                            <li><a class="dropdown-item" href="#" data-key="hotels">Hotels</a></li>
                            <li><a class="dropdown-item" href="#" data-key="lodges">Lodges</a></li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-key="food">Food</a>
                        <ul class="dropdown-menu bg-info">
                            <li><a class="dropdown-item" href="#" data-key="restaurants">Restaurants</a></li>
                            <li><a class="dropdown-item" href="#" data-key="bakeries">Bakeries</a></li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-key="transportation">Transportation</a>
                        <ul class="dropdown-menu bg-info">
                            <li><a class="dropdown-item" href="#" data-key="roadwaytransport">Road-Way</a></li>
                            <li><a class="dropdown-item" href="#" data-key="railwaytransport">Rail-Way</a></li>
                            <li><a class="dropdown-item" href="#" data-key="airwaytransport">Air-Way</a></li>
                            <li><a class="dropdown-item" href="#" data-key="waterwaytransport">Water-Way</a></li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-key="theatres">Theatres</a>
                        <ul class="dropdown-menu bg-info">
                            <li><a class="dropdown-item" href="#" data-key="singlescreentheatres">Single Screen</a></li>
                            <li><a class="dropdown-item" href="#" data-key="multiplextheatres">Multiplex</a></li>
                        </ul>
                    </li>

                    <li class="nav-item"><a class="nav-link" href="#" data-key="attractions">Attractions</a></li>
                    <li class="nav-item"><a class="nav-link" href="#" data-key="shoppingmalls">Shopping Malls</a></li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-key="govtsector">Government Sector</a>
                        <ul class="dropdown-menu bg-info">
                            <li><a class="dropdown-item" href="#" data-key="rmc">Municipal Corporation</a></li>
                            <li><a class="dropdown-item" href="#" data-key="govtoffices">Government Offices</a></li>
                        </ul>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-key="education">Education</a>
                        <ul class="dropdown-menu bg-info">
                            <li><a class="dropdown-item" href="#" data-key="schools">Schools</a></li>
                            <li><a class="dropdown-item" href="#" data-key="collegesanduniversities">Colleges & Universities</a></li>
                        </ul>
                    </li>

                    <li class="nav-item"><a class="nav-link" href="#" data-key="stationary">Stationary</a></li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-key="health">Healthcare</a>
                        <ul class="dropdown-menu bg-info">
                            <li><a class="dropdown-item" href="#" data-key="govthospitals">Government Hospitals</a></li>
                            <li><a class="dropdown-item" href="#" data-key="privatehospitalsandclinics">Private Hospitals & Clinics</a></li>
                        </ul>
                    </li>

                    <li class="nav-item"><a class="nav-link" href="#" data-key="festivals">Festivals</a></li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-key="religiousplaces">Religious Places</a>
                        <ul class="dropdown-menu bg-info">
                            <li><a class="dropdown-item" href="#" data-key="churches">Churches</a></li>
                            <li><a class="dropdown-item" href="#" data-key="temples">Temples</a></li>
                            <li><a class="dropdown-item" href="#" data-key="mosque">Mosques</a></li>
                            <li><a class="dropdown-item" href="#" data-key="derasar">Jain Temples</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `;
    document.getElementById("navbar-container").innerHTML = navbar;

    // Enable dropdown on hover
    const dropdownElements = document.querySelectorAll('.navbar .dropdown');
    dropdownElements.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function () {
            this.classList.add('show');
            const menu = this.querySelector('.dropdown-menu');
            if (menu) menu.classList.add('show');
        });
        dropdown.addEventListener('mouseleave', function () {
            this.classList.remove('show');
            const menu = this.querySelector('.dropdown-menu');
            if (menu) menu.classList.remove('show');
        });
    });

    // Handle navigation for all clickable items
    document.querySelectorAll('[data-key]').forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const key = this.getAttribute('data-key');
            if (typeof display === "function") {
                display(key);
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        });
    });
});
