import AboutSection from "../home-page/sections/about-section/about";
import ChefsSection from "./sections/chefs-section/chefs";
import chefsContent from "./sections/chefs-section/chefs.settings";
import fillerImage01 from "./sections/filler-section/filler-images/filler-01.jpg"
import FillerSection from "./sections/filler-section/filler-section";
import TimelineSection from "./sections/timeline-section/timeline";
import timelineContent from "./sections/timeline-section/timelineContent";



class AboutPage {
    #page;
    #menuSection = new AboutSection();
    #chefsSection = new ChefsSection(chefsContent);
    #fillerSection01 = new FillerSection(fillerImage01);
    #timelineSection = new TimelineSection(timelineContent);


    constructor(){
        this.#page = document.createElement('main');
    }

    destroy(){
        this.#menuSection.destory();
        this.#chefsSection.destroy();
        this.#fillerSection01.destroy();
        this.#timelineSection.destroy();
    }
    
    create(){
        this.#page.append(
            this.#menuSection.create(true),
            this.#timelineSection.create(),
            this.#chefsSection.create(),
            this.#fillerSection01.create(),
        );
        return this.#page;
    }
} 



export default AboutPage;