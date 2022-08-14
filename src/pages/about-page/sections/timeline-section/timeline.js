import timelineStyle from './timeline.module.css'
class TimelineSection{
    #section;
    #content;

    constructor(content){
        this.#content = content;
        this.#section = document.createElement('section');
        this.#section.classList.add(timelineStyle.timelineSection);
    };

    #createSectionTitle () {
        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = 'Our Success Story';
        return sectionTitle;
    };

    #createTimelineItem(item){
        const container = document.createElement('div');
        container.classList.add(timelineStyle.timelineItem);
        container.innerHTML = `
            <small>${item.date}</small>
            <h3>${item.title}</h2>
            <p>${item.text}</p>
        `

        return container;
    };

    #createSectionBody(){
        const container = document.createElement('div');

        this.#content.forEach(element => {
            container.appendChild(this.#createTimelineItem(element))
        });

        return container
    };


    destroy(){
        return undefined
    };

    create(){
        this.#section.append(
            this.#createSectionTitle(),
            this.#createSectionBody(),

        )
        return this.#section
    };
}

export default TimelineSection;