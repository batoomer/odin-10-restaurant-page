import HomePage from './home-page/homePage';
import AboutPage from './about-page/aboutPage';
import MenuPage from './menu-page/MenuPage';
import ReservationPage from './reservation-page/reservationPage';
import ContactPage from './contact-page/contactPage';




let activePage = new HomePage();

export function loadPage(){
    const main = document.querySelector('main');
    main.replaceWith(activePage.create());
}

export function handleNavigation(event){
        activePage.destroy();
        const navTarget = event.currentTarget.dataset.navType.trim().toLowerCase();
        console.log(navTarget);
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

    };

export default {loadPage, handleNavigation};