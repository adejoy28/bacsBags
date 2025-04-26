
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("navLinks");

menuBtn.addEventListener('click', () => {
    // alert(1);
    menuBtn.classList.toggle('open');
    nav.classList.toggle('open');
})