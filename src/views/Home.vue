<template>
<v-main>
    <p class="title_home title_home2" v-if="loader">TEST</p>
    <v-container id="home_block" pa-0 fluid>
        <section class="panel">
            <v-row no-gutters align="center" justify="center">
                <v-col col="md8" id="block_title_home">
                    <v-row align="center" justify="center">
                        <h2 class="title_home title_home2">Théo Basso Bondini</h2>
                    </v-row> <br>
                    <v-row align="center" justify="center">
                        <h1 style="font-size: 50px;" class="title_home">Développeur web</h1>
                    </v-row>
                    <v-row no-gutters align="center" justify="center">
                        <span id="line" style="color:#FD841A; width: 300px;"></span>
                    </v-row>
                </v-col>
                <v-col col="md4">
                    <v-row>
                        <v-img contain id="blue_circ1" class="blue_element" src="@/assets/blue_circ_1.png" lazy-src="@/assets/blue_circ_1.png"></v-img>
                        <v-img contain id="blue_circ2" class="blue_element" src="@/assets/blue_circ_2.png" lazy-src="@/assets/blue_circ_2.png"></v-img>
                        <v-img contain id="blue_circ3" class="blue_element" src="@/assets/blue_circ_1.png" lazy-src="@/assets/blue_circ_1.png"></v-img>
                    </v-row>
                </v-col>
            </v-row>
        </section>
        <section id="section1" class="panel panel2">
          <service-dev></service-dev>
        </section>
        <section id="section2" class="panel panel3">
          <portfolio></portfolio>
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
import ServiceDev from '../components/ServiceDev.vue';
import Portfolio from '../components/Portfolio.vue';
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

export default {
    data() {
        return {
            loader: true,
        }
    },
    components: {
        ServiceDev,
        Portfolio
    },
    methods: {
        scrollTrigger() {
            gsap.utils.toArray(".panel").forEach((panel) => {
                ScrollTrigger.create({
                    trigger: panel,
                    start: "top top",
                    pin: true,
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
            const tl1 = gsap.timeline({
                repeat: -1,
                repeatDelay: 0,
                yoyo: true
            });
            const tl2 = gsap.timeline({
                repeat: -1,
                repeatDelay: 0,
                yoyo: true
            });
            tl.to("#blue_circ1", {
                y: -8,
                duration: 2
            });
            tl1.to("#blue_circ2", {
                y: -10,
                duration: 4,
            });
            tl2.to("#blue_circ3", {
                y: -7,
                duration: 2,
            });
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
.title_home {
    font-family: 'Karla', sans-serif;
}

.title_home2 {
    font-size: 30px;
}

#block_title_home {
    max-height: 1000px;
}

#home_block {
    margin-top: 13%;
}

.blue_element {
    padding-top: 100px;
    max-height: 700px;
    max-width: 200px;
    border-radius: 30%;
    margin: 0 !important;
}

#line {
    border-top: 2px solid;
    margin: 20px;
}

section {
    height: 100vh;
    width: 100vw;
}

.panel2 {
    background-color: #FFAC41;
}

.panel3 {
    background-color: #111516;
}
</style>
