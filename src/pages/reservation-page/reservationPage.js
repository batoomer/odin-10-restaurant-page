class ReservationPage {
    #page;

    #heading = document.createElement('h1');

    constructor(){
        this.#page = document.createElement('main');
    }

    destroy(){
    }
    
    create(){
        this.#heading.textContent = 'ReservationPage';
        this.#page.append(
            this.#heading
        );
        return this.#page;
    }
} 



export default ReservationPage;