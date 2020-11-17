/* Barra de navegación*/
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("nav").style.backgroundColor = "white";
    } else {
        document.getElementById("nav").style.backgroundColor = "rgba(0,0,0,0.0)";
    }
}