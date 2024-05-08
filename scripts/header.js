document.addEventListener("DOMContentLoaded", function () {
    // Select the existing header element, and add in the header content
    var header = document.querySelector("header");

    header.outerHTML = `
        <header class="header">
            <a class="brand" href="/">
                <img class="logo" src="./images/logo.png" alt="logo" />
                <div class="header__name">Nicole Bermeo</div>
            </a>
            <button class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
            <nav class="header__nav">
                <button class="works__dropdown-btn"><svg class="svg-hover-purple-stroke" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.2" d="M16.875 5.625H3.125C2.77982 5.625 2.5 5.90482 2.5 6.25V16.25C2.5 16.5952 2.77982 16.875 3.125 16.875H16.875C17.2202 16.875 17.5 16.5952 17.5 16.25V6.25C17.5 5.90482 17.2202 5.625 16.875 5.625Z" fill="#1C1F33"/>
                <path d="M16.875 5.625H3.125C2.77982 5.625 2.5 5.90482 2.5 6.25V16.25C2.5 16.5952 2.77982 16.875 3.125 16.875H16.875C17.2202 16.875 17.5 16.5952 17.5 16.25V6.25C17.5 5.90482 17.2202 5.625 16.875 5.625Z" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.875 8.125V5.625C6.875 4.7962 7.20424 4.00134 7.79029 3.41529C8.37634 2.82924 9.1712 2.5 10 2.5C10.8288 2.5 11.6237 2.82924 12.2097 3.41529C12.7958 4.00134 13.125 4.7962 13.125 5.625V8.125" stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>Works<svg class="svg-hover-purple-fill" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.8135 7.99625L10.4502 13.8289C10.3911 13.8832 10.3209 13.9262 10.2437 13.9555C10.1664 13.9849 10.0836 14 10 14C9.91638 14 9.83357 13.9849 9.75632 13.9555C9.67907 13.9262 9.60889 13.8832 9.54979 13.8289L3.18648 7.99625C3.06708 7.88681 3 7.73837 3 7.58359C3 7.42881 3.06708 7.28037 3.18648 7.17093C3.30588 7.06149 3.46783 7 3.63669 7C3.80554 7 3.96749 7.06149 4.08689 7.17093L10 12.5917L15.9131 7.17093C15.9722 7.11674 16.0424 7.07375 16.1197 7.04442C16.1969 7.01509 16.2797 7 16.3633 7C16.4469 7 16.5297 7.01509 16.607 7.04442C16.6842 7.07375 16.7544 7.11674 16.8135 7.17093C16.8726 7.22512 16.9195 7.28946 16.9515 7.36026C16.9835 7.43107 17 7.50695 17 7.58359C17 7.66023 16.9835 7.73612 16.9515 7.80692C16.9195 7.87773 16.8726 7.94206 16.8135 7.99625Z" fill="#1C1F33"/>
                </svg>

                </button>
                <div class="works__dropdown-content">
                    <a class="works__dropdown-link" href="./buildathon.html">Buildathon</a>
                    <a class="works__dropdown-link" href="./subtrac.html">Subtrac</a>
                    <a class="works__dropdown-link" href="./prepper.html">Prepper</a>
                </div>

                <a class="header__about" href="./about.html"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.2" d="M10.0002 2.5C8.48265 2.49956 7.00064 2.9595 5.74996 3.81908C4.49928 4.67866 3.53879 5.89743 2.99537 7.31439C2.45195 8.73134 2.35117 10.2798 2.70634 11.7553C3.0615 13.2307 3.85591 14.5637 4.98462 15.5781C5.45492 14.652 6.17249 13.8741 7.05778 13.3308C7.94308 12.7875 8.96152 12.5 10.0002 12.5C9.38217 12.5 8.77799 12.3167 8.26408 11.9733C7.75018 11.63 7.34964 11.1419 7.11312 10.5709C6.87659 9.99987 6.81471 9.37153 6.93529 8.76534C7.05586 8.15915 7.35349 7.60233 7.79053 7.16529C8.22757 6.72825 8.78439 6.43062 9.39058 6.31005C9.99677 6.18947 10.6251 6.25135 11.1961 6.48788C11.7671 6.7244 12.2552 7.12494 12.5986 7.63884C12.942 8.15275 13.1252 8.75693 13.1252 9.375C13.1252 10.2038 12.796 10.9987 12.2099 11.5847C11.6239 12.1708 10.829 12.5 10.0002 12.5C11.039 12.5 12.0574 12.7875 12.9427 13.3308C13.828 13.8741 14.5456 14.652 15.0159 15.5781C16.1446 14.5637 16.939 13.2307 17.2941 11.7553C17.6493 10.2798 17.5485 8.73134 17.0051 7.31439C16.4617 5.89743 15.5012 4.67866 14.2505 3.81908C12.9998 2.9595 11.5178 2.49956 10.0002 2.5Z" fill="#1C1F33"/>
                <path class="svg-hover-purple-stroke" d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z" stroke="#1C1F33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path class="svg-hover-purple-stroke" d="M10 12.5C11.7259 12.5 13.125 11.1009 13.125 9.375C13.125 7.64911 11.7259 6.25 10 6.25C8.27411 6.25 6.875 7.64911 6.875 9.375C6.875 11.1009 8.27411 12.5 10 12.5Z" stroke="#1C1F33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path class="svg-hover-purple-stroke" d="M4.98438 15.5781C5.45462 14.6519 6.17216 13.874 7.05745 13.3306C7.94275 12.7872 8.96123 12.4995 10 12.4995C11.0388 12.4995 12.0572 12.7872 12.9425 13.3306C13.8278 13.874 14.5454 14.6519 15.0156 15.5781" stroke="#1C1F33" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                About</a>
                <div class="header__contact">
                    <button class="contact__dropdown-btn"><img src="./images/envelope.svg" alt="envelope" />Contact<img src="./images/caretdownpurple.svg" alt="caretdownpurple" /></button>
                    <div class="contact__dropdown-content">
                        <a class="contact__list-item-middle" href="mailto:bermeo.nicole@gmail.com">Email</a>
                        <a class="contact__list-item-last" target="_blank" href="https://www.linkedin.com/in/nbermeo/">LinkedIn</a>
                    </div>
                </div>
                <a class="button__purple resume__btn" href="./documents/resume.pdf" target="_blank"><img src="./images/scroll.svg" alt="scroll" />View Resume</a>
            </nav>
        </header>`;

    // "Works" dropdown button, and "Works" dropdown content
    let worksToggle = document.getElementsByClassName("works__dropdown-btn")[0];
    let worksDropdownContent = document.getElementsByClassName("works__dropdown-content")[0];

    // Toggle visbility of "Works" dropdown content when "Works" button is clicked
    worksToggle.addEventListener("click", function (event) {
        collapseContactDropdown();
        worksDropdownContent.style.display = worksDropdownContent.style.display === "block" ? "none" : "block";
        event.stopPropagation();
    });

    // "Contact" button and "Contact" dropdown content
    let contactButton = document.getElementsByClassName("contact__dropdown-btn")[0];
    let contactDropdownContent = document.getElementsByClassName("contact__dropdown-content")[0];

    // Toggle visibility of "Contact" dropdown content
    contactButton.addEventListener("click", function (event) {
        collapseWorksDropdown();
        contactDropdownContent.style.overflow = contactDropdownContent.style.overflow === "" ? "visible" : "";
        contactDropdownContent.style.height = contactDropdownContent.style.height === "" ? "129px" : "";
        contactDropdownContent.style.opacity = contactDropdownContent.style.opacity === "" ? "100%" : "";
        contactButton.style.borderBottomWidth = contactButton.style.borderBottomWidth === "" ? "0px" : "";
        contactButton.style.borderRadius = contactButton.style.borderRadius === "" ? "20px 20px 0px 0px" : "";
        event.stopPropagation();
    });

    // Collapse "Works" dropdown content and "Contact" dropdown content
    // whenever a click is made to the page
    document.addEventListener("click", function (event) {
        collapseWorksDropdown();
        collapseContactDropdown();
        closeHamburger();
        event.stopPropagation();
    });

    let navToggle = document.getElementsByClassName("hamburger")[0];
    let bars = document.getElementsByClassName("bar");
    let navDropdown = document.getElementsByClassName("header__nav")[0];

    navToggle.addEventListener("click", function (event) {
        toggleHamburger();
        event.stopPropagation();
    });

    function toggleHamburger() {
        // TODO: Fix this, bars is a single element since we're not using querySelector
        bars.forEach((bar) => bar.classList.toggle("x"));
        navDropdown.style.opacity = contactButton.style.borderBottomWidth === "" ? "100%" : "";
    }

    function closeHamburger() {
        bars.forEach((bar) => bar.classList.remove("x"));
        navDropdown.style.opacity = "";
    }

    function collapseWorksDropdown() {
        worksDropdownContent.style.display = "none";
    }

    function collapseContactDropdown() {
        contactDropdownContent.style.overflow = "";
        contactDropdownContent.style.height = "";
        contactDropdownContent.style.opacity = "";
        contactButton.style.borderBottomWidth = "";
        contactButton.style.borderRadius = "";
    }
});
