import Graphic from "./TheImageComponent.js";

export default {
    props: ["item", "mediatype"],

    template: `
    <section class="lightbox">
    <span class="lb-close" @click="closelb">x</span>
    
    
    <!-- audio, video or graphic component get rendered here-->
    <component :is="currentComponent" :work="item"></component>
    <div class="Button_lightbox"> <a href="contact.html ">Contact me</a></div>
    <span class="lb-close" @click="closelb">x</span>
    </section>
    `,
    computed: {
        currentComponent: function() {
            //debugger;
            return this.mediatype;
        }
    },
    components: {
        Graphic
    },
    methods: {

        // let Lightbox = document.querySelector('.lightbox');

        closelb() {
            document.querySelector('.lightbox').classList.remove('show-lightbox');
        },
        //window.scrollTo(0, 0);
    }
}