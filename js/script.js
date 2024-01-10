let wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animate__animated',
    offset: 200,
    mobile: true,
    live: true
})
wow.init();

document.getElementById('burger').onclick = function () {
    document.getElementById('menu').classList.add('open');
}

document.querySelectorAll('#menu *').forEach((item) => {
    item.onclick = () => {
        document.getElementById('menu').classList.remove('open');
    }
})