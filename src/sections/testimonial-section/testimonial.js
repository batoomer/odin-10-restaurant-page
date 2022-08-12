import testimonialStyle from './testimonial.module.css';

class TestimonialSection{
    #testimonialSection;
    #content;
    #activeIndex = 0;
    #sliderTimer;
    #slideSeconds = 6000;
    
    constructor(content){
        this.#content = content;
        this.#testimonialSection = document.createElement('section');
        this.#testimonialSection.classList.add(testimonialStyle.testimonialSection);
    }

    #createSectionTitle () {
        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = 'Testimonials';
        return sectionTitle;
    };

    #createSlideShowItem(contentItem){
        const item = document.createElement('div');
        const itemImage = document.createElement('img');
        itemImage.src = contentItem.profileImage
        const itemName = document.createElement('p');
        itemName.innerHTML = contentItem.profileName;
        const itemComment = document.createElement('q');
        itemComment.textContent = contentItem.testimonial;

        item.append(itemImage, itemName, itemComment);

        return item;
    }

    #navigateTestimonials(direction){
        if (direction === 'next'){
            this.#activeIndex += 1;
            this.#activeIndex = (this.#content.length <= this.#activeIndex) ? 0 : this.#activeIndex;
        } else{
            this.#activeIndex -= 1;
            this.#activeIndex = (0 > this.#activeIndex) ? this.#content.length - 1 : this.#activeIndex;
        }

           
        const oldSlideItem = document.querySelector(`.${testimonialStyle.testimonialItem}`);
        document.querySelector(`span.${testimonialStyle.active}`).classList.toggle(testimonialStyle.active);
        oldSlideItem.nextSibling.childNodes[this.#activeIndex].classList.toggle(testimonialStyle.active);
        
        const newSlideItem = this.#createSlideShowItem(this.#content[this.#activeIndex]);
        newSlideItem.classList.add(testimonialStyle.testimonialItem);
        newSlideItem.classList.add(testimonialStyle.animate);
        oldSlideItem.replaceWith(newSlideItem);
        
        this.#resetSliderTimer();
    }


    #createSectionBody(){
        const sectionBody = document.createElement('div');

        const prevButton = document.createElement('button');
        prevButton.classList.add(testimonialStyle.prevBtn);
        prevButton.innerHTML = '&#10094;';
        prevButton.addEventListener('click', ()=> {
            this.#navigateTestimonials('prev');
        })

        const nextButton = document.createElement('button');
        nextButton.innerHTML = '&#10095;';
        nextButton.classList.add(testimonialStyle.nextBtn);
        nextButton.addEventListener('click', ()=> {
            this.#navigateTestimonials('next');
        })

        const slideItem = this.#createSlideShowItem(this.#content[this.#activeIndex]);
        slideItem.classList.add(testimonialStyle.testimonialItem);
        slideItem.classList.add(testimonialStyle.animate);

        const slideFooter = document.createElement('div');
        slideFooter.classList.add(testimonialStyle.testimonialFooter);
        for(let i=0; i<this.#content.length; i++){
            let sliderDot = document.createElement('span');
            sliderDot.innerHTML = '&#9679;';
            if (i===this.#activeIndex){sliderDot.classList.toggle(testimonialStyle.active)}
            slideFooter.appendChild(sliderDot);
        }
        
        
        sectionBody.append(prevButton, nextButton, slideItem, slideFooter);

        return sectionBody;
    }

    #startSliderTimer(){
        this.#sliderTimer = setInterval(()=>this.#navigateTestimonials('next'), this.#slideSeconds);
    }

    #resetSliderTimer(){
        clearInterval(this.#sliderTimer);
        this.#startSliderTimer()
    }

    create(){
        this.#testimonialSection.appendChild(this.#createSectionTitle());
        this.#testimonialSection.appendChild(this.#createSectionBody());
        this.#startSliderTimer();
        return this.#testimonialSection;
    }
}


export default TestimonialSection;