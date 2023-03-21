function toogleMenu() {
    const nav = document.getElementById('nav');
    const btt = document.getElementById('btn-mobile');
    nav.classList.toggle('active');
    btt.innerHTML('CLOSE');
}
