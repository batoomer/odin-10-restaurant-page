import heroStyle from './hero.module.css';

class HeroSection{

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
        const heroAction = document.createElement('div');
        this.actions.forEach(action=>{
            const heroButton = document.createElement('button');
            heroButton.textContent = action.text;
            heroAction.append(heroButton);
        })

        return heroAction;
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


