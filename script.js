// ========================================
// ALIMENTACIÓN JOVEN
// ========================================

console.log("Alimentación Joven - Web cargada correctamente");


// ========================================
// EFECTO AL HACER SCROLL
// ========================================

window.addEventListener("scroll", function () {

    const header = document.querySelector(".header");

    if (!header) {
        return;
    }

    if (window.scrollY > 30) {
        header.style.boxShadow = "0 5px 25px rgba(0,0,0,0.08)";
    } else {
        header.style.boxShadow = "none";
    }

});


// ========================================
// MENÚ MÓVIL
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.getElementById("mobile-menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");

    if (!menuButton || !mobileNav) {
        return;
    }


    // Abrir / cerrar menú

    menuButton.addEventListener("click", function () {

        const isOpen = mobileNav.classList.toggle("active");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Cerrar menú" : "Abrir menú"
        );

        menuButton.innerHTML = isOpen ? "✕" : "☰";

    });


    // Cerrar el menú al pulsar una sección

    const mobileLinks = mobileNav.querySelectorAll("a");

    mobileLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileNav.classList.remove("active");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Abrir menú"
            );

            menuButton.innerHTML = "☰";

        });

    });

});
