//=============================== header scroll start
window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.classList.toggle("active", window.scrollY > 0)
});
//=============================== header scroll end
