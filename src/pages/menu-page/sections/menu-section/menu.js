import menuStyle from './menu.module.css';

class MenuSection{
    #section;

    constructor(){
        this.#section = document.createElement('div');
        this.#section.classList.add(menuStyle.reservationSection);
    };

    #createSectionTitle() {
        const container = document.createElement('div');
        const title = document.createElement('h2');
        title.textContent = 'Menu';

        container.append(title);
        return container
    }

    #createSectionBody() {

    };

    destroy(){
        return undefined
    };

    create(){
        this.#section.append(
            this.#createSectionTitle(),
            //this.#createSectionBody()
        );
        return this.#section;
    };
};

export default MenuSection;