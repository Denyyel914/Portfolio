const navbar = document.querySelector('header');
window.onscroll = () => {
    if (window.scrollY > 200) {
        navbar.classList.add('header-color');
    } else {
        navbar.classList.remove('header-color');
    }
};