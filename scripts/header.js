document.addEventListener("DOMContentLoaded", function () {
    // Select the existing header element, and add in the header content
    var header = document.querySelector("header");

    header.outerHTML = `
        <header class="header">
            <a class="brand" href="/">
                <img class="logo" src="./images/logo.png" alt="logo" />
                <div class="header__name">Nicole Bermeo</div>
            </a>
            <nav class="header__nav">
                <button class="works__dropdown-btn"><img src="./images/bag.svg" alt="bag" />Works<img src="./images/caretdown.svg" alt="caretdown" />
                </button>
                <div class="works__dropdown-content">
                    <a class="works__dropdown-link" href="./buildathon.html">Buildathon</a>
                    <a class="works__dropdown-link" href="./subtrac.html">Subtrac</a>
                    <a class="works__dropdown-link" href="./prepper.html">Prepper</a>
                </div>

                <a class="header__about" href="./about.html"><img src="./images/usercircle.svg" alt="usercircle" />About</a>
                <div class="header__contact">
                    <button class="contact__dropdown-btn"><img src="./images/envelope.svg" alt="envelope" />Contact<img src="./images/caretdownpurple.svg" alt="caretdownpurple" /></button>
                    <div class="contact__dropdown-content">
                        <a class="contact__dropdown-link" href="emailto:bermeo.nicole@gmail.com">Email</a>
                        <a class="contact__dropdown-link" href="https://www.linkedin.com/in/nbermeo/">LinkedIn</a>
                    </div>
                </div>
                <a class="button__purple" href="./documents/resume.pdf" target="_blank"><img src="./images/scroll.svg" alt="scroll" />View Resume</a>
            </nav>
        </header>`;

    // on click listeners to handle "Works" dropdown menu clicks
    let worksToggle = document.getElementsByClassName("works__dropdown-btn")[0];
    let worksDropdownContent = document.getElementsByClassName("works__dropdown-content")[0];

    // Handle clicks directly on the Works button, open / collapse the dropdown
    worksToggle.addEventListener("click", function (event) {
        worksDropdownContent.style.display = worksDropdownContent.style.display === "block" ? "none" : "block";
        event.stopPropagation();
    });

    // Handle clicks outside of the dropdown, collapse the dropdown
    document.addEventListener("click", function (event) {
        if (!worksDropdownContent.contains(event.target) && worksDropdownContent.style.display === "block") {
            worksDropdownContent.style.display = "none";
        }
    });

    // on click listeners to handle "Contact" dropdown menu clicks
    let contactButton = document.getElementsByClassName("contact__dropdown-btn")[0];
    let contactDropdownContent = document.getElementsByClassName("contact__dropdown-content")[0];

    // Handle clicks directly on the Contact button, open / collapse the dropdown
    contactButton.addEventListener("click", function (event) {
        contactDropdownContent.style.display = contactDropdownContent.style.display === "block" ? "none" : "block";
        contactButton.style.borderBottomWidth = contactButton.style.borderBottomWidth === "" ? "0px" : ""; // "" because we're overriding css style with an inline style, in css it does have a value, but code must care about inline style
        contactButton.style.borderRadius = contactButton.style.borderRadius === "" ? "20px 20px 0px 0px" : "";
        event.stopPropagation();
    });

    // Handle clicks outside of the dropdown, collapse the dropdown
    document.addEventListener("click", function (event) {
        if (!contactDropdownContent.contains(event.target) && contactDropdownContent.style.display === "block") {
            contactDropdownContent.style.display = "none";
        }
    });
});
