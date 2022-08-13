import actionStyle from './action.module.css';
import { handleNavigation } from '../../../navigation';

class ActionSection{
    #actionSection;
    #content;

    #actionButton;

    constructor(content){
        this.#content = content;
        this.#actionSection = document.createElement('section');
        this.#actionSection.classList.add(actionStyle.actionSection);
    }


    #createSectionBody(){
        const sectionBody = document.createElement('div');
        const actionTitle = document.createElement('h2');
        actionTitle.textContent = this.#content.title;

        this.#actionButton = document.createElement('button');
        this.#actionButton.textContent = this.#content.action;
        this.#actionButton.setAttribute('data-nav-type', 'reservation');
        this.#actionButton.addEventListener('click', handleNavigation);
        
        sectionBody.append(actionTitle, this.#actionButton);
        return sectionBody;
    }

    destroy(){
        this.#actionButton.removeEventListener('click', handleNavigation);
    }

    create(){
        this.#actionSection.appendChild(this.#createSectionBody());
        return this.#actionSection;
    }
}


export default ActionSection;
