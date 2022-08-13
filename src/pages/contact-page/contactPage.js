class ContactPage {
    #page;

    #heading = document.createElement('h1');

    constructor(){
        this.#page = document.createElement('main');
    }

    destroy(){
    }
    
    create(){
        this.#heading.textContent = 'ContactPage';
        this.#page.append(
            this.#heading
        );
        return this.#page;
    }
} 



export default ContactPage;