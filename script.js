// ========================================
// ALIMENTACIÓN JOVEN
// ========================================

console.log("Alimentación Joven - Web cargada correctamente");


// Efecto al hacer scroll
window.addEventListener("scroll", function () {

    const header = document.querySelector(".header");

    if (window.scrollY > 30) {
        header.style.boxShadow = "0 5px 25px rgba(0,0,0,0.08)";
    } else {
        header.style.boxShadow = "none";
    }

});