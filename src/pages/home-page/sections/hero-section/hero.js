import { handleNavigation } from '../../../navigation';
import heroStyle from './hero.module.css';

class HeroSection{
    #heroAction;

    constructor(title, content, actions){
        this.title = title;
        this.content = content;
        this.actions = actions;
    }

    #createHeroTitle(){
        const heroTitle = document.createElement('h1');
        heroTitle.textContent = this.title;
        return heroTitle;
    };

    #createHeroText(){
        const heroText = document.createElement('p');
        heroText.textContent = this.content;
        return heroText;
    }


    #createHeroAction(){
        this.#heroAction = document.createElement('div');
        this.actions.forEach(action=>{
            const heroButton = document.createElement('button');
            heroButton.textContent = action.text;
            heroButton.addEventListener('click', handleNavigation);
            heroButton.setAttribute('data-nav-type', action.text.trim().toLowerCase());
            this.#heroAction.append(heroButton);
        })

        
        return this.#heroAction;
    }

    destroy(){
        this.#heroAction.childNodes.forEach(child => {
            child.removeEventListener('click', handleNavigation)
        })
    }

    create(){
        const heroSection = document.createElement('section');
        heroSection.classList.add(heroStyle.heroSection);

        
        const heroTitle = this.#createHeroTitle();
        heroSection.appendChild(heroTitle)

        const heroText = this.#createHeroText();
        heroSection.appendChild(heroText);

        const heroAction = this.#createHeroAction();
        heroSection.appendChild(heroAction);
        
        
        return heroSection;
    }
}


export default HeroSection;


