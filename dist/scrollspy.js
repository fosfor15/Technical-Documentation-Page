
const navLinks = document.getElementsByClassName('nav-link');
const sections = document.getElementsByClassName('main-section');
const sectionsHeaders = document.querySelectorAll('.main-section header a');
const buttonToUp = document.getElementById('button-to-up');

let currentScrollPos = 0;
let currentSection = 0;

window.addEventListener('scroll', function() {
    currentScrollPos = window.pageYOffset;

    if (sections[currentSection + 1]?.offsetTop - 2 <= currentScrollPos) {
        processScrollHighlight();
        currentSection += 1;
        processScrollHighlight();

    } else if (sections[currentSection]?.offsetTop - 2 > currentScrollPos) {
        processScrollHighlight();
        currentSection -= 1;
        processScrollHighlight();

    } else if (document.documentElement.scrollHeight - document.documentElement.clientHeight == currentScrollPos) {
        processScrollHighlight();
        currentSection += 1;
        processScrollHighlight();
    }

    function processScrollHighlight() {
        navLinks[currentSection].classList.toggle('active');
        sectionsHeaders[currentSection].classList.toggle('active');
    }

    if (document.documentElement.clientHeight <= currentScrollPos) {
        buttonToUp.style.display = 'flex';
    } else {
        buttonToUp.style.display = '';
    }
});

buttonToUp.addEventListener('click', function() {
    window.scrollTo(0, 0);
});
