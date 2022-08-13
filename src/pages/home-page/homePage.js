import HeroSection from './sections/hero-section/hero';
import heroContent from './sections/hero-section/hero.settings';

import AboutSection from './sections/about-section/about';

import InfoSection from './sections/info-section/info';
import infoContent from './sections/info-section/info.settings';

import GallerySection from './sections/gallery-section/gallery';
import galleryContent from './sections/gallery-section/gallery.settings';

import FaqSection from './sections/faq-section/faq';
import faqContent from './sections/faq-section/faq.settings';

import TestimonialSection from './sections/testimonial-section/testimonial';
import testimonialContent from './sections/testimonial-section/testimonial.settings';

import ActionSection from './sections/action-section/action';
import actionContent from './sections/action-section/action.settings';

class HomePage {
    #page;
    #heroSection;
    #aboutSection;
    #infoSection;
    #gallerySection;
    #testimonalSection;
    #actionSection;
    #faqSection;


    constructor(){
        this.#page = document.createElement('main');
        this.#heroSection = new HeroSection(...heroContent);
        this.#aboutSection = new AboutSection();
        this.#infoSection = new InfoSection(infoContent);
        this.#gallerySection = new GallerySection(galleryContent);
        this.#testimonalSection = new TestimonialSection(testimonialContent);
        this.#actionSection = new ActionSection(actionContent);
        this.#faqSection = new FaqSection(faqContent);
    }

    destroy(){
        this.#heroSection.destroy();
        this.#aboutSection.destory();
        this.#infoSection.destroy();
        this.#gallerySection.destoy();
        this.#testimonalSection.destroy();
        this.#actionSection.destroy();
        this.#faqSection.destroy();
    }
    
    create(){
        this.#page.append(
            this.#heroSection.create(),
            this.#aboutSection.create(),
            this.#infoSection.create(),
            this.#gallerySection.create(),
            this.#testimonalSection.create(),
            this.#actionSection.create(),
            this.#faqSection.create(),
        );
        return this.#page;
    }
} 



export default HomePage;