import faqStyle from './faq.module.css';

class FaqSection{
    #faqSection;
    #content;
    
    constructor(content){
        this.#content = content;
        this.#faqSection = document.createElement('section');
        this.#faqSection.classList.add(faqStyle.faqSection);
    }

    #createSectionTitle () {
        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = 'FAQ';
        return sectionTitle;
    };

    #createAccordion(qa){
        const listItem = document.createElement('li');
        listItem.classList.add(faqStyle.accordion);
        
        //Accordion Header
        const accordionHeader = document.createElement('div');
        //Header Title
        const accordionHeaderTitle = document.createElement('h3');
        accordionHeaderTitle.textContent = qa.question;
        accordionHeader.append(accordionHeaderTitle);
        //Header Arrow
        const accordionHeaderArrow = document.createElement('h3');
        accordionHeaderArrow.innerHTML='&#5167;';
        accordionHeaderArrow.classList.add(faqStyle.accordionArrow);
        accordionHeader.append(accordionHeaderArrow);
        listItem.appendChild(accordionHeader);
        
        //Accordion Body
        const accordionBody = document.createElement('p');
        const accordionBodyText = document.createElement('span');
        accordionBodyText.innerHTML = qa.answer;
        accordionBody.appendChild(accordionBodyText);
        listItem.appendChild(accordionBody);
        
        //Event Listener
        listItem.addEventListener('click', (e) => {
           
            //CLose if open accordion
            const openAccordion = document.querySelector(`.${faqStyle.open}`);
            if (openAccordion && openAccordion !== e.currentTarget.firstElementChild.lastElementChild){
                openAccordion.classList.toggle(faqStyle.open);
                openAccordion.parentElement.nextSibling.style.maxHeight = null;
            };

            accordionHeaderArrow.classList.toggle(faqStyle.open);

            if (accordionBody.style.maxHeight) {
                accordionBody.style.maxHeight = null;
            } else {
                accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
            };
        });
        
        return listItem;
    }


    #createSectionBody(){
        const faqList = document.createElement('ul');

        this.#content.forEach(qa => {
            const accordion = this.#createAccordion(qa);   
            faqList.appendChild(accordion);
        });
        return faqList;
    }

    destroy(){
        return undefined;
    }

    create(){
        this.#faqSection.appendChild(this.#createSectionTitle());
        this.#faqSection.appendChild(this.#createSectionBody());
        
        return this.#faqSection;
    }
}


export default FaqSection;