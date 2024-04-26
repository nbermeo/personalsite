// Event listener to listen for clicks on every element that has a class of "brand" (header.html and footer.html brand buttons have it)
// When clicked, remove the event listener as cleanup, and redirect to "/" which is the home page.

/* TODO: REMOVE THESE, USING ANCHOR INSTEAD */
/*
document.querySelectorAll(".brand").forEach((btn) =>
    btn.addEventListener("click", function (e) {
        e.target.removeEventListener(e.type, arguments.callee);
        window.location.href = "/";
    })
);

document.querySelectorAll(".footer__email").forEach((btn) =>
    btn.addEventListener("click", function (e) {
        e.target.removeEventListener(e.type, arguments.callee);
        window.location.href = "mailto:bermeo.nicole@gmail.com";
    })
);

document.querySelectorAll(".footer__linkedin").forEach((btn) =>
    btn.addEventListener("click", function (e) {
        e.target.removeEventListener(e.type, arguments.callee);
        window.location.href = "https://www.linkedin.com/in/nbermeo/";
    })
);
*/
/* END TODO */
