const navbar = document.getElementById('navbar');
const snapHeight = navbar.offsetHeight; // Height of the navbar

window.addEventListener('scroll', () => {
    if (window.scrollY > snapHeight) {
        navbar.classList.add('fixed', 'top-0', 'w-full', 'shadow-lg');
    } else {
        navbar.classList.remove('shadow-lg');
    }
});