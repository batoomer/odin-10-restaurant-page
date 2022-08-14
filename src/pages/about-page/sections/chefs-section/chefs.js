import chefsStyle from './chefs.module.css';

class ChefsSection{
    #chefsSection;
    #content;

    constructor(content){
        this.#content = content;
        this.#chefsSection = document.createElement('section');
        this.#chefsSection.classList.add(chefsStyle.chefsSection);
    }


    #createSectionTitle () {
        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = 'Meet Our Chefs';
        return sectionTitle;
    };

    #createCard(element){
        const cardContainer = document.createElement('div');
        cardContainer.classList.add(chefsStyle.itemCard);
        cardContainer.innerHTML = `
            <img src="${element.image}">
            <p>${element.name}</p>
            <p>${element.title}</p>
            <div>
                <a href="${element.socialMedia.facebook}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" style=" fill:currentColor">
                        <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                    </svg>
                </a>
                <a href="${element.socialMedia.instagram}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" style=" fill:currentColor">    
                        <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
                    </svg>
                </a>
                <a href="${element.socialMedia.twitter}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" style=" fill:currentColor">    
                        <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M36.237,20.524 c0.01,0.236,0.016,0.476,0.016,0.717C36.253,28.559,30.68,37,20.491,37c-3.128,0-6.041-0.917-8.491-2.489 c0.433,0.052,0.872,0.077,1.321,0.077c2.596,0,4.985-0.884,6.879-2.37c-2.424-0.044-4.468-1.649-5.175-3.847 c0.339,0.065,0.686,0.1,1.044,0.1c0.505,0,0.995-0.067,1.458-0.195c-2.532-0.511-4.441-2.747-4.441-5.432c0-0.024,0-0.047,0-0.07 c0.747,0.415,1.6,0.665,2.509,0.694c-1.488-0.995-2.464-2.689-2.464-4.611c0-1.015,0.272-1.966,0.749-2.786 c2.733,3.351,6.815,5.556,11.418,5.788c-0.095-0.406-0.145-0.828-0.145-1.262c0-3.059,2.48-5.539,5.54-5.539 c1.593,0,3.032,0.672,4.042,1.749c1.261-0.248,2.448-0.709,3.518-1.343c-0.413,1.292-1.292,2.378-2.437,3.064 c1.122-0.136,2.188-0.432,3.183-0.873C38.257,18.766,37.318,19.743,36.237,20.524z"></path>
                    </svg>
                </a>
            </div>
        `
        return cardContainer;
    }

    #createSectionBody(){
        const sectionBody = document.createElement('div');
        this.#content.forEach(element => {
            sectionBody.appendChild(this.#createCard(element));
        });

        return sectionBody;
    }


    destroy(){
        return undefined;
    }

    create(){
        this.#chefsSection.appendChild(this.#createSectionTitle());
        this.#chefsSection.appendChild(this.#createSectionBody());
        return this.#chefsSection;
    }
}

export default ChefsSection;

