// footer.js

// Create footer element
var footer = document.createElement("footer");
footer.innerHTML = `<footer class="footer">
<!-- Clickable brand button, event listener added by class "brand"-->
<a class="brand" href="/">
    <img class="logo" src="./images/logofooter.png" alt="logofooter" />
    <div class="footer__name">Nicole Bermeo</div>
</a>
<div class="footer__contact">
    <a class="footer__email" href="mailto:bermeo.nicole@gmail.com">
        <img src="./images/email.svg" alt="email" />
    </a>
    <a class="footer__linkedin" href="https://www.linkedin.com/in/nbermeo/" target="_blank">
        <img src="./images/linkedin.svg" alt="linkedin" />
    </a>
</div>
</footer>
`;

// Find the body element and append footer
document.addEventListener("DOMContentLoaded", function () {
    var body = document.querySelector("body");
    body.appendChild(footer);
});
