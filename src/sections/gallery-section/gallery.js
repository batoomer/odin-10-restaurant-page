import galleryStyle from './gallery.module.css';



class GallerySection{
    #gallerySection;
    #currentImageIndex = 0;
    #images;
    
    constructor(content){
        this.#gallerySection = document.createElement('section');
        this.#gallerySection.classList.add(galleryStyle.gallerySection);
        this.#images = content
    }

    #createSectionTitle () {
        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = 'Gallery';

        return sectionTitle;
    };

    #createSectionBody() {
        const galleryBody = document.createElement('ul');
        this.#images.forEach(element => {
            const galleryImageContainer = document.createElement('li');
            const galleryImage = document.createElement('img');
            galleryImage.src = element;

            galleryImage.addEventListener('click', (e) => {
                this.#currentImageIndex = this.#images.indexOf(e.currentTarget.src);
                this.#createImageModal(element);
            });

            galleryImageContainer.appendChild(galleryImage);
            galleryBody.appendChild(galleryImageContainer);
        });
        return galleryBody;
    }

    #removeImageModal(modal){
        this.#gallerySection.removeChild(modal);
    };

    #navigateModal(type) {
        if (type === 'prev'){
            if (this.#currentImageIndex > 0){
                this.#currentImageIndex -=1;
            }else{
                this.#currentImageIndex = this.#images.length -1;
            };
        }else{
            if (this.#currentImageIndex < this.#images.length-1){
                this.#currentImageIndex +=1;
            }else{
                this.#currentImageIndex = 0;
            };
        };

        const modalImage = document.querySelector(`.${galleryStyle.modal} > img`);
        modalImage.src = this.#images[this.#currentImageIndex];
        if (type === 'prev'){
            modalImage.classList.add(galleryStyle.imageSlideInAnimation);
            setTimeout(function () {   
                modalImage.classList.remove(galleryStyle.imageSlideInAnimation);
            }, 300); 
        }else {
            modalImage.classList.add(galleryStyle.imageSlideOutAnimation);
            setTimeout(function () {   
                modalImage.classList.remove(galleryStyle.imageSlideOutAnimation);
            }, 300); 
        }

        
    };

    #createImageModal(src) {
        const modal = document.createElement('div');
        modal.classList.add(galleryStyle.modal);
        const closeButton = document.createElement('button');
        closeButton.classList.add(galleryStyle.modalClose);
        closeButton.innerHTML = '&#x2715';
        modal.appendChild(closeButton);
        closeButton.addEventListener('click',()=>{
            modal.classList.add(galleryStyle.modalCloseAnimation);
            let self = this;
            setTimeout(function () { 
                self.#removeImageModal(modal);
            }, 300); 

            

        })

        const prevButton = document.createElement('button');
        prevButton.classList.add(galleryStyle.modalNavigation);
        prevButton.innerHTML = '&#10094;';
        modal.appendChild(prevButton);
        prevButton.addEventListener('click', () => this.#navigateModal('prev'));

        const img = document.createElement('img');
        img.src = src;
        modal.appendChild(img);

        const nextButton = document.createElement('button');
        nextButton.classList.add(galleryStyle.modalNavigation);
        nextButton.innerHTML = '&#10095;';
        modal.appendChild(nextButton);
        nextButton.addEventListener('click', () => this.#navigateModal('next'));

        this.#gallerySection.appendChild(modal);
    };


    create(){
        this.#gallerySection.appendChild(this.#createSectionTitle());
        this.#gallerySection.appendChild(this.#createSectionBody());
        
        return this.#gallerySection;
    }
}


export default GallerySection;