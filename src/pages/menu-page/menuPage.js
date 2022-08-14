import MenuSection from "./sections/menu-section/menu";
import menuItems from "./sections/menu-section/menu.settings";

class MenuPage {
    #page;
    #menuSection = new MenuSection(menuItems);

    constructor(){
        this.#page = document.createElement('main');

    };

    destroy(){
        this.#menuSection.destroy();
    };
    
    create(){
        this.#page.append(
            this.#menuSection.create(),

        );
        return this.#page;
    };
} 



export default MenuPage;