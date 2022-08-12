import './styles/global.css';

import HeroSection from './sections/hero-section/hero';
import heroContent from './sections/hero-section/hero.settings';

import InfoSection from './sections/info-section/info';
import infoContent from './sections/info-section/info.settings';

import GallerySection from './sections/gallery-section/gallery';
import galleryContent from './sections/gallery-section/gallery.settings';

import FaqSection from './sections/faq-section/faq';
import faqContent from './sections/faq-section/faq.settings';

import TestimonialSection from './sections/testimonial-section/testimonial';
import testimonialContent from './sections/testimonial-section/testimonial.settings';

const body = document.querySelector('body');


const heroSection = new HeroSection(...heroContent).create();
body.append(heroSection);

const infoSection = new InfoSection(infoContent).create();
body.append(infoSection);

const gallerySection = new GallerySection(galleryContent).create();
body.append(gallerySection);

const testimonalSection = new TestimonialSection(testimonialContent).create();
body.append(testimonalSection);

const faqSection = new FaqSection(faqContent).create();
body.append(faqSection);









