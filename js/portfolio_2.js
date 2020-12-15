const navbar = document.querySelector('header');
window.onscroll = () => {
    if (window.scrollY > 200) {
        navbar.classList.add('header-color');
    } else {
        navbar.classList.remove('header-color');
    }
};

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-list');
    const navList = document.querySelectorAll('.nav-list li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navList.forEach((links, index) => {
            if(links.style.animation) {
                links.style.animation = '';
            } else {
                links.style.animation = `navListFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
}

navSlide();