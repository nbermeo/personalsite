document.addEventListener("DOMContentLoaded", function () {
    // Select the existing header element, and add in the header content
    var header = document.querySelector("header");

    header.outerHTML = `<!-- Reusable navigation bar that is added to the top of every page on this site via pure JS -->
        <header class="header">
            <a class="brand" href="/">
                <img class="logo" src="./images/logo.png" alt="logo" />
                <div class="header__name">Nicole Bermeo</div>
            </a>
            <nav class="header__nav">
                <button id="menu-toggle" class="dropbtn"><img src="./images/bag.svg" alt="bag" />Works<img src="./images/caretdown.svg" alt="caretdown" />
                </button>
                <div id="dropdown-content" class="dropdown-content">
                    <a class="header__buildathon dropdown__link" href="./buildathon.html">Buildathon</a>
                    <a class="header__subtrac dropdown__link" href="./subtrac.html">Subtrac</a>
                    <a class="header__prepper dropdown__link" href="./prepper.html">Prepper</a>
                </div>

                <!-- TODO: Add purple on:hover version-->
                <a class="header__about" href="./about.html"><img src="./images/usercircle.svg" alt="usercircle" />About</a>
                <button class="header__contact" onclick=""><img src="./images/envelope.svg" alt="envelope" />Contact<img src="./images/caretdownpurple.svg" alt="caretdownpurple" /></button>
                <a class="button__purple" href="./documents/resume.pdf" target="_blank"><img src="./images/scroll.svg" alt="scroll" />View Resume</a>
            </nav>
        </header>`;

    // on click listeners to handle "Works" and "Contact" dropdown menu clicks
    var menuToggle = document.getElementsByClassName("dropbtn")[0];
    var dropdownContent = document.getElementsByClassName("dropdown-content")[0];

    menuToggle.addEventListener("click", function (event) {
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
        event.stopPropagation();
    });

    document.addEventListener("click", function (event) {
        if (!dropdownContent.contains(event.target) && dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        }
    });
});
