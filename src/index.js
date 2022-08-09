import './styles/global.css';
import HeroSection from './components/hero-component/hero';

const body = document.querySelector('body');

const heroSection = new HeroSection().create();

body.append(heroSection);

