import reservationStyle from './reservation.module.css';

class ReservationSection {
    #section;

    constructor(){
        this.#section = document.createElement('div');
        this.#section.classList.add(reservationStyle.reservationSection);
    };

    #createSectionTitle() {
        const container = document.createElement('div');
        const title = document.createElement('h2');
        title.textContent = 'Reservation';

        container.append(title);
        return container
    }

    #createSectionBody() {
        const container = document.createElement('div');
        const form = document.createElement('form');
        form.innerHTML = `
            <div>
                <h3>Book Your Table</h3>
                <p>Fields marked with (<span>*</span>) are required</p>
            </div>
            <div>
                <label for="name"><span>*</span>Name</label>
                <input id="name" type="text" placeholder="name">
            </div>
            <div>
                <label for="email"><span>*</span>Email</label>
                <input id="email" type="email" placeholder="example@gmail.com">
            </div>
            <div>
                <label for="phone"><span>*</span>Phone Number</label>
                <input id="phone" type="tel" placeholder="phone number">
            </div>
            <div>
                <label for="date"><span>*</span>Date</label>
                <input id="date" type="date">
            </div>
            <div>
                <label for="time"><span>*</span>Time</label>
                <input id="time" type="time">
            </div>
            <div>
                <label for="people"><span>*</span>People</label>
                <input id="people" type="number" placeholder="+1">
            </div>
            <div>
                <label for="name">Comments</label>
                <textarea id="name" type="text" placeholder="Comments"></textarea>
            </div>

            <div>
                <button type="submit">Book Now</button>
            </div>
        `
        const infoContainer = document.createElement('div');
        infoContainer.classList.add(reservationStyle.infoContainer);
        infoContainer.innerHTML = `
            <p>
                Reservations for <strong>more than 15 people</strong> are accepted only via a phone call.
            </p>
            <p>
                To make a reservation for an <strong>event</strong>, please call us. Additional pricing might
                be applied. 
            </p>
            <p>
                <strong>
                    <svg viewBox="0 0 24 24">
                        <path fill="currentColor" d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                    </svg>
                    Call us:
                </strong>
                253-1##-#### 
            </p>
        `
        container.append(form, infoContainer);
        return container
    };

    destroy(){
        return undefined
    };

    create(){
        this.#section.append(
            this.#createSectionTitle(),
            this.#createSectionBody()
        );
        return this.#section;
    };
};

export default ReservationSection;