document.addEventListener("DOMContentLoaded", function () {
    var footer = document.querySelector("footer");
    footer.outerHTML = `<footer class="footer">
    <a class="brand" href="/">
        <img class="logo" src="./images/logofooter.svg" width="68" height="68" loading="lazy" alt="logofooter" />
        <div class="footer__name">Nicole Bermeo</div>
    </a>
    <div class="footer__contact">
        <a class="footer__email" href="mailto:bermeo.nicole@gmail.com">
            <img src="./images/email.svg" width="32" height="32" loading="lazy" alt="email" />
        </a>
        <a class="footer__linkedin" href="https://www.linkedin.com/in/nbermeo/" target="_blank">
            <img src="./images/linkedin.svg" width="32" height="32" loading="lazy" alt="linkedin" />
        </a>
    </div>
</footer> `;
});
