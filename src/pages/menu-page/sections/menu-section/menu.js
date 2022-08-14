import menuStyle from './menu.module.css';

class MenuSection{
    #content;
    #section;
    #btnContainer;

    constructor(content){
        this.#content = content;
        this.#section = document.createElement('div');
        this.#section.classList.add(menuStyle.menuSection);
    };

    #createSectionTitle() {
        const container = document.createElement('div');
        const title = document.createElement('h2');
        title.textContent = 'Menu';
        const info = document.createElement('p');
        info.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aspernatur ipsam quibusdam quas magni sit error. Neque consequuntur vel tenetur.`
        
        container.append(title, info);
        return container
    }

    #filterByMenuType(type){
        return this.#content.filter(item => item.type === type);
    };

    #createMenuItem(item){
        const menuItemContainer = document.createElement('div');
        menuItemContainer.classList.add(menuStyle.menuItem);
        menuItemContainer.innerHTML = `
            <h3>${item.name}<span></span>${item.price}€</h3>
            <small>${item.description}</small>
        `;

        return menuItemContainer;
    }

    #handleMenuClick(event){
        const menuType = event.currentTarget.dataset.menuType;

        document.querySelector(`.${menuStyle.selected}`).classList.toggle(menuStyle.selected);
        event.currentTarget.classList.toggle(menuStyle.selected);
        
        const oldContent = document.querySelector(`.${menuStyle.listContainer}`)
        
        const newContent = document.createElement('div');
        newContent.classList.add(menuStyle.listContainer);
        const menuTitle = document.createElement('h2');
        menuTitle.innerHTML = event.currentTarget.textContent;
        newContent.appendChild(menuTitle);
        
        this.#filterByMenuType(menuType).forEach(item => {
            newContent.appendChild(this.#createMenuItem(item));
        });
        
        oldContent.replaceWith(newContent);
    }


    #createMenuButtons() {
        this.#btnContainer = document.createElement('div');
        this.#btnContainer.innerHTML = `
            <button class="${menuStyle.selected}" data-menu-type="appetizer">Appetizers</button>
            <button data-menu-type="salads">Salads</button>
            <button data-menu-type="main">Main Course</button>
            <button data-menu-type="dessert">Desserts</button>
            <button data-menu-type="drinks">Drinks</button>
        `;

        this.#btnContainer.childNodes.forEach(child => child.addEventListener('click', this.#handleMenuClick.bind(this)));

        return this.#btnContainer
    }


    #createSectionBody() {
        const container = document.createElement('div');
    
        const contentContainer = document.createElement('div');
        contentContainer.classList.add(menuStyle.listContainer);

        const menuTitle = document.createElement('h2');
        menuTitle.innerHTML = 'Appetizers';
        contentContainer.appendChild(menuTitle);
        
        this.#filterByMenuType('appetizer').forEach(item => {
            contentContainer.appendChild(this.#createMenuItem(item));
        });
  
        container.appendChild(contentContainer);
        return container
    };

    destroy(){
        this.#btnContainer.childNodes.forEach(child =>
            child.removeEventListener('click', this.#handleMenuClick)
        )
    };

    create(){
        this.#section.append(
            this.#createSectionTitle(),
            this.#createMenuButtons(),
            this.#createSectionBody()
        );
        return this.#section;
    };
};

export default MenuSection;