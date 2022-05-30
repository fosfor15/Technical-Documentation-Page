
const navLinks = document.getElementsByClassName('nav-link');
const sections = document.getElementsByClassName('main-section');
const sectionsHeaders = document.querySelectorAll('.main-section header a');
const buttonToUp = document.getElementById('button-to-up');

let currentScrollPos = 0;
let currentSection = 0;


function scrollHandler() {
    currentScrollPos = window.pageYOffset;

    if (currentSection < 4 &&
        sections[currentSection + 1].offsetTop - 2 <= currentScrollPos) {
            processScrollHighlight(true);

    } else if (currentSection == 4 &&
        document.documentElement.scrollHeight - document.documentElement.clientHeight - 10 <= currentScrollPos) {
            processScrollHighlight(true);

    } else if (currentSection > 0 && currentSection < 5 &&
        sections[currentSection].offsetTop - 2 > currentScrollPos) {
            processScrollHighlight(false);

    } else if (currentSection == 5 &&
        sections[currentSection].offsetTop - document.documentElement.clientHeight > currentScrollPos) {
            processScrollHighlight(false);
    }

    if (document.documentElement.clientHeight <= currentScrollPos) {
        buttonToUp.style.display = 'flex';
    } else {
        buttonToUp.style.display = '';
    }
}

function processScrollHighlight(dir) {
    for (let i = 1; i <= 2; i++) {
        navLinks[currentSection].classList.toggle('active');
        sectionsHeaders[currentSection].classList.toggle('active');
        
        if (i == 1) {
            if (dir) {
                currentSection += 1;
            } else {
                currentSection -= 1;
            }
        }
    }
}


window.addEventListener('scroll', scrollHandler);

buttonToUp.addEventListener('click', function() {
    window.scrollTo(0, 0);
    location.pathname = '';
});
