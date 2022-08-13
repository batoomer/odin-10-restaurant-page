import HomePage from './home-page/homePage';
import AboutPage from './about-page/aboutPage';
import MenuPage from './menu-page/MenuPage';
import ReservationPage from './reservation-page/reservationPage';
import ContactPage from './contact-page/contactPage';

let activePage = new HomePage();

const navBurger = document.querySelector('header > svg');
navBurger.addEventListener('click', handleBurgerClick);

export function loadPage(){
    const main = document.querySelector('main');
    main.replaceWith(activePage.create());
}

export function handleBurgerClick(){
    const navMenu = document.querySelector('nav');
    navMenu.classList.toggle('active');
    if (navMenu.classList.contains('active')){
        navBurger.innerHTML = `<path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />`;
    }else{
        navBurger.innerHTML = `<path fill="currentColor" d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />`
    }
};

export function handleNavigation(event){
        activePage.destroy();
        const navTarget = event.currentTarget.dataset.navType.trim().toLowerCase();

        const header = document.querySelector('header');
        if (navTarget === 'home' && !header.classList.contains('homeActive')) {
            header.classList.add('homeActive');
        }else {
            if (header.classList.contains('homeActive')){
                header.classList.remove('homeActive');
            }
        }
        switch (navTarget){
            case 'home': 
                activePage = new HomePage();
                break;
            case 'about us':
                activePage = new AboutPage();
                break;
            case 'menu':
                activePage = new MenuPage();
                break;
            case 'reservation':
                activePage = new ReservationPage();
                break;
            case 'contact us':
                activePage = new ContactPage();
                break;
        };


        loadPage();
        handleBurgerClick();

    };

export default {loadPage, handleBurgerClick, handleNavigation};