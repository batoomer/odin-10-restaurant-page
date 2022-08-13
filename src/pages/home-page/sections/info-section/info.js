import { handleNavigation } from '../../../navigation';
import infoStyle from './info.module.css';

class InfoSection{
    #infoSection;
    #content;
    #sectionBody;


    constructor(content){
        this.#content = content;
        this.#infoSection = document.createElement('section');
        this.#infoSection.classList.add(infoStyle.infoSection);
    }

    #createSectionTitle () {
        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = 'What We Offer';
        return sectionTitle;
    };

    #createCard(element){
        const cardContainer = document.createElement('figure');
        cardContainer.classList.add(infoStyle.infoCard);
        cardContainer.setAttribute('data-nav-type', 'menu');
        cardContainer.addEventListener('click', handleNavigation);

        const cardImage = document.createElement('img');
        cardImage.src = element.image;

        const cardTextContainer = document.createElement('figcaption');
        const cardTitle = document.createElement('h3');
        cardTitle.textContent = element.title;
        cardTextContainer.appendChild(cardTitle);

        const cardDescription = document.createElement('p');
        cardDescription.textContent = element.description;
        cardTextContainer.appendChild(cardDescription);
        
        cardContainer.append(cardImage, cardTextContainer)

        return cardContainer;
    }

    #createSectionBody(){
        this.#sectionBody = document.createElement('div');
        this.#content.forEach(element => {
            this.#sectionBody.appendChild(this.#createCard(element));
        });


        return this.#sectionBody;
    }

    destroy(){
        this.#sectionBody.childNodes.forEach(child=>{
            child.removeEventListener('click', handleNavigation);
        });
    }

    create(){
        this.#infoSection.appendChild(this.#createSectionTitle());
        this.#infoSection.appendChild(this.#createSectionBody());
        return this.#infoSection;
    }
}


export default InfoSection;
