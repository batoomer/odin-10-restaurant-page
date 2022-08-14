

class FillerSection{
    #fillerSection;
    #content;

    constructor(content){
        this.#content = content;
        this.#fillerSection = document.createElement('section');
    }

    destroy(){
        return undefined;
    }

    create(){


        this.#fillerSection.style.background = `url(${this.#content}) no-repeat center / cover`;
        this.#fillerSection.style.minHeight = `75vh`;
        return this.#fillerSection;
    }
}

export default FillerSection;

