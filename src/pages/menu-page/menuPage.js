import MenuSection from "./sections/menu-section/menu";

class MenuPage {
    #page;
    #menuSection = new MenuSection();

    constructor(){
        this.#page = document.createElement('main');

    };

    destroy(){
        this.#menuSection.destroy();
    };
    
    create(){
        console.log(this.#menuSection)
        this.#page.append(
            this.#menuSection.create(),

        );
        return this.#page;
    };
} 



export default MenuPage;