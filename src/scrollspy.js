
const navLinks = document.getElementsByClassName('nav-link');
const sections = document.getElementsByClassName('main-section');
const sectionsHeaders = document.querySelectorAll('.main-section header');

let currentScrollPos = 0;
let currentSection = 0;

window.addEventListener('scroll', function() {
    currentScrollPos = window.pageYOffset;

    if (sections[currentSection + 1]?.offsetTop <= currentScrollPos) {
        processScrollHighlight();
        currentSection += 1;
        processScrollHighlight();

    } else if (sections[currentSection].offsetTop > currentScrollPos) {
        processScrollHighlight();
        currentSection -= 1;
        processScrollHighlight();

    } else if (document.documentElement.scrollHeight - document.documentElement.clientHeight
         == currentScrollPos) {
        processScrollHighlight();
        currentSection += 1;
        processScrollHighlight();
    }

    function processScrollHighlight() {
        navLinks[currentSection].classList.toggle('active');
        sectionsHeaders[currentSection].classList.toggle('active');
    }
});
