import aboutStyle from './about.module.css';
import imageMain from './about-main.jpg';
import imageSec from './about-sec.jpg';
import { handleNavigation } from '../../../navigation';

class AboutSection{
    #aboutSection;
    #aboutButton;
    constructor(){
        this.#aboutSection = document.createElement('section');
        this.#aboutSection.classList.add(aboutStyle.aboutSection);
    }


    #createSectionBody(){
        const sectionBody = document.createElement('div');

        const aboutImageContainer = document.createElement('div');
        const aboutImageMain = document.createElement('img');
        aboutImageMain.src = imageMain;
        aboutImageMain.classList.add(aboutStyle.mainImage);
        const aboutImageSec = document.createElement('img');
        aboutImageSec.src = imageSec;
        aboutImageSec.classList.add(aboutStyle.secImage);
        aboutImageContainer.append(aboutImageMain, aboutImageSec);

        const aboutText = document.createElement('article');
        const aboutTitle = document.createElement('h2');
        aboutTitle.textContent = 'About Us'
        const aboutTextIntro = document.createElement('p');
        aboutTextIntro.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam culpa doloribus quae porro delectus, omnis quas nostrum odio possimus repellendus quis atque neque provident saepe cupiditate reiciendis officiis aut est?';
        const aboutTextMain = document.createElement('p');
        aboutTextMain.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident adipisci vero voluptatum eius, culpa ullam itaque, cupiditate amet aperiam laborum accusantium, reiciendis molestiae. Natus provident ea quas ullam. Animi minus porro autem architecto magnam quos error nobis facere. Dignissimos aliquam esse libero impedit itaque quo, incidunt explicabo accusantium id quae!';
        const aboutTextClosing = document.createElement('p');
        aboutTextClosing.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident adipisci vero voluptatum eius, culpa ullam itaque, cupiditate amet aperiam laborum accusantium, reiciendis molestiae. Natus provident ea quas ullam. Animi minus porro autem architecto magnam quos error';
        this.#aboutButton = document.createElement('button');
        this.#aboutButton.textContent = 'Read More'
        this.#aboutButton.setAttribute('data-nav-type', 'about us');
        this.#aboutButton.addEventListener('click', handleNavigation)
        aboutText.append(aboutTitle, aboutTextIntro, aboutTextMain, aboutTextClosing ,this.#aboutButton);

        sectionBody.append(aboutImageContainer, aboutText);
        return sectionBody;
    }

    destory(){
        this.#aboutButton.removeEventListener('click', handleNavigation);
    }

    create(){
        this.#aboutSection.appendChild(this.#createSectionBody());
        return this.#aboutSection;
    }
}


export default AboutSection;
