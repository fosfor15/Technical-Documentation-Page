
const navbar = document.getElementById('navbar');
const chevron = document.getElementById('chevron');

function openNavbar() {
    navbar.style.width = '300px';
    chevron.style.display = 'none';

    document.body.addEventListener('click', closeNavbar);
}

function closeNavbar(event) {
    if (event.target.closest('#navbar a') || !event.target.closest('#navbar')) {
        navbar.style.width = '';
        chevron.style.display = '';

        document.body.removeEventListener('click', closeNavbar);
    }
}

chevron.addEventListener('click', openNavbar);
