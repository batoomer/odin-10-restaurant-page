import ContactSection from "./sections/contact";

class ContactPage {
    #page;
    #contactSection = new ContactSection();

    constructor(){
        this.#page = document.createElement('main');
    }

    destroy(){
        this.#contactSection.destroy();
    }
    
    create(){
        this.#page.append(
            this.#contactSection.create(),
        );

        return this.#page;
    }
} 



export default ContactPage;