import ReservationSection from './sections/reservation-section/reservation';

class ReservationPage {
    #page;
    #reservationSection = new ReservationSection();

    constructor(){
        this.#page = document.createElement('main');
    };

    destroy(){
        this.#reservationSection.destroy();
    };
    
    create(){
        this.#page.append(
            this.#reservationSection.create(),
        );
        return this.#page;
    };
} 



export default ReservationPage;