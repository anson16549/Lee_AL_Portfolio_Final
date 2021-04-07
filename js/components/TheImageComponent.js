export default {
    name: "ImageComponent",

    props: ["work"],

    template: `<section class="image-player">
    <h4>{{work.title}}</h4>
    <img class="lb-thumb" :src="'img/' + work.image2" alt="portfolio thubmnail">
    <h2>{{work.Heading}}</h2>
    <div v-if="work.Process !=''" class="solid"></div>
    <p>{{work.Description}}</p>
    
    <video class="lb-video" :src="'img/' + work.video" controls></video>
    
    <h2>{{work.Duration}}</h2>
    <div v-if="work.Process !=''" class="solid"></div>
    

    <div v-if="work.Process !=''" class="Duration">
    <h3>{{work.Duration_time}}</h3>
    <p>{{work.Duration_weeks}}</p>
    
    </div>

    <div v-if="work.Process !=''" class="Frames">
    <h3>{{work.Duration_numbers}}</h3>
    <p>{{work.Duration_frames}}</p>
    </div>
    <h5>{{work.Project_Duration_Description}}</h5>

    <h2>{{work.Process}}</h2>
    <div v-if="work.Process !=''" class="solid"></div>
    <img v-if="work.Process !=''" class="pattern" :src="'img/' + work.Process_Image" alt="process thubmnail">
    
    <h6 v-if="work.Process !=''" class="Design_Description">{{work.Design_Process_Description}}</h6>
    
    </section>`
}