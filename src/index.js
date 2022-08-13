import './styles/global.css';
import {handleNavigation, loadPage} from './pages/navigation';


loadPage();

const navigationLinks = document.querySelectorAll('.nav-link');
navigationLinks.forEach(navigationLink =>{
    navigationLink.addEventListener('click', handleNavigation);
});

















