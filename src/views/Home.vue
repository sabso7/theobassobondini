<template>
<v-main>
    <v-container app pa-0 fluid>
        <section class="panel panel0">
            <v-row no-gutters align="center" justify="center" id="home_block" :class="$mq">
                <v-col sm="12" cols="12" md="6" lg="6" id="block_title_home">
                    <v-row align="center" justify="center">
                        <h2 class="font_karla title_home2" :class="$mq">Théo Basso Bondini</h2>
                    </v-row>
                    <v-row align="center" justify="center">
                        <h1 class="title_home1" :class="$mq">Développeur web</h1>
                    </v-row>
                    <v-row no-gutters align="center" justify="center">
                        <span id="line"></span>
                    </v-row>
                </v-col>
                <v-col sm="6" cols="12" md="6" lg="6">
                    <v-row align="center" justify="center">
                        <v-img contain id="blue_circ1" class="blue_element" :class="$mq" src="@/assets/blue_circ_1.png" lazy-src="@/assets/blue_circ_1.png"></v-img>
                        <v-img contain id="blue_circ2" class="blue_element" :class="$mq" src="@/assets/blue_circ_2.png" lazy-src="@/assets/blue_circ_2.png"></v-img>
                        <v-img contain id="blue_circ3" class="blue_element" :class="$mq" src="@/assets/blue_circ_1.png" lazy-src="@/assets/blue_circ_1.png"></v-img>
                    </v-row>
                </v-col>
            </v-row>
        </section>
        <section id="section1" class="panel panel1">
            <prestations></prestations>
        </section>
        <section id="section2" class="panel panel2">
            <portfolio></portfolio>
        </section>
        <section id="section3" class="panel panel3">
            <contact></contact>
            <v-row justify="center">
                <v-icon v-on:click="scrollToTop" class="icon">mdi-arrow-expand-up</v-icon>
            </v-row>
        </section>
    </v-container>
</v-main>
</template>

<script>
import {
    gsap
} from 'gsap';
import {
    TextPlugin
} from 'gsap/TextPlugin';
import {
    ScrollTrigger
} from 'gsap/ScrollTrigger';
import Prestations from '../components/Prestations.vue';
import Portfolio from '../components/Portfolio.vue';
import Contact from '../components/Contact.vue';
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

export default {
    data() {
        return {
            loader: true,
        }
    },
    components: {
        Prestations,
        Portfolio,
        Contact
    },
    methods: {
        scroll: function (id) {
            setTimeout(document.getElementById(id).scrollIntoView({
                behavior: "smooth",
            }), 1000);
        },
        scrollToTop: function () {
            window.scrollTo(0, 0);
        },
        scrollTrigger() {
            gsap.utils.toArray(".panel").forEach((panel) => {
                ScrollTrigger.create({
                    trigger: panel,
                    start: "top top",
                    pin: false,
                    pinSpacing: false
                });
            });
        },
        simpleFade() {
            const tl = gsap.timeline({
                repeat: -1,
                repeatDelay: 0,
                yoyo: true
            });
            tl.to("#blue_circ1", {
                y: -8,
                duration: 2
            });
            tl.to("#blue_circ2", {
                y: -10,
                duration: 4,
            }, "<0");
            tl.to("#blue_circ3", {
                y: -15,
                duration: 2,
            }, "<0");
        }
    },
    mounted() {
        this.loader = false;
        this.simpleFade();
        this.scrollTrigger();
    },
    beforeMount() {}
}
</script>

<style>

html {
    scroll-behavior: smooth;
}

.font_karla {
    font-family: 'Karla', sans-serif;
}

.title_home1 {
    font-size: 50px;
}

.title_home1.sm {
    font-size: 30px;
}

.title_home2 {
    font-size: 30px;
}

.title_home2.sm {
    font-size: 20px;
}

#block_title_home {
    max-height: 1000px;
}

#home_block {
    margin-top: 13%;
}

#home_block.sm {
    margin-top: 6%;
    padding-top: 35%;
}

#home_block.md {
    margin-top: 13%;
}

.blue_element {
    padding-top: 8%;
    max-height: 700px;
    max-width: 200px;
    border-radius: 30%;
    margin: 0 !important;
}

.blue_element.sm {
    max-height: 400px;
    max-width: 100px;
}

.blue_element.md {
    max-height: 400px;
    max-width: 100px;
}

section {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
}

#line {
    border-top: 2px solid;
    margin: 20px;
    color: #FD5A1E;
    width: 300px;
}

.panel0 {
    background-color: #111516;
}

.panel1 {
    background-color: #FFAC41;
}

.panel2 {
    background-color: #111516;
}

.panel2.md {
    height: fit-content;
}

.panel3 {
    background-color: #FFAC41;
}
</style>
