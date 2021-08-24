<template>
<v-main>
    <v-container id="service_block" fluid>
        <v-row align="center" justify="center">
            <v-col col="md6">
                <v-row id="block_img_serv" align="center" justify="center">
                    <v-img contain id="blueline1" class="blue_element2" src="@/assets/blue_element_2.png" lazy-src="@/assets/blue_element_2.png"></v-img>
                    <v-img contain id="blueline2" class="blue_element2" src="@/assets/blue_element_1.png" lazy-src="@/assets/blue_element_1.png"></v-img>
                    <v-img contain id="blueline3" class="blue_element2" src="@/assets/blue_element_3.png" lazy-src="@/assets/blue_element_2.png"></v-img>
                </v-row>
            </v-col>
            <v-col col="md6" style="margin-bottom:3%">
                <v-row>
                    <h4 class="fade_in_right subtitle_service">Création de site sur mesure</h4>
                </v-row>
                <v-row class="fade_in_right">
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title><span id="fonct" class="subsubtitle">Fonctionnel</span></v-list-item-title>
                            <v-list-item-subtitle>Adapté à vos besoins</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-row>
                <v-row class="fade_in_right">
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title><span id="resp" class="subsubtitle">Responsive</span></v-list-item-title>
                            <v-list-item-subtitle>Visible sur tous les formats</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-row>
                <v-row class="fade_in_right">
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title><span id="dyn" class="fade_in_right subsubtitle">Dynamique</span></v-list-item-title>
                            <v-list-item-subtitle>Animations sur mesure</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-row>
                <br><br><br>
                <v-row>
                    Php - Symfony - Javascript - Vue.js
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</v-main>
</template>

<script>
import {
    gsap
} from 'gsap';
import {
    ScrollTrigger
} from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export default {
    data() {
        return {
            loader: true,
            fonc: false,
            def: true,
            dyn: false,
            resp: false,
            imgResp: null
        }
    },
    methods: {
        fadeServiceImg() {
            document.addEventListener("DOMContentLoaded", function () {
                gsap.utils.toArray(".fade_in_right").forEach(function (elem) {
                    ScrollTrigger.create({
                        trigger: elem,
                        onEnter: function () {
                            let x = -100;
                            let y = 0;
                            elem.style.transform = "translate(" + x + "px, " + y + "px)";
                            elem.style.opacity = "0";
                            gsap.fromTo(elem, {
                                x: x,
                                y: y,
                                autoAlpha: 0
                            }, {
                                duration: 3,
                                x: 0,
                                y: 0,
                                autoAlpha: 1,
                                ease: "expo",
                                overwrite: "auto"
                            });
                        },

                        onEnterBack: function () {
                            let direction = -1 || 1;
                            let x = 100;
                            let y = direction * 100;
                            elem.style.transform = "translate(" + x + "px, " + y + "px)";
                            elem.style.opacity = "0";
                            gsap.fromTo(elem, {
                                x: x,
                                y: y,
                                autoAlpha: 0
                            }, {
                                duration: 3,
                                x: 0,
                                y: 0,
                                autoAlpha: 1,
                                ease: "expo",
                                overwrite: "auto"
                            });
                        },
                        onLeave: function () {
                            gsap.set(elem, {
                                autoAlpha: 0
                            });
                        } // assure that the element is hidden when scrolled into view
                    });
                });
            });
        },
        anim_fonctionel() {
            let fonct = document.querySelector("#fonct");
            fonct.addEventListener("mouseleave", mouseLeave);
            fonct.addEventListener("mouseenter", mouseEnter);
            
            const tl = gsap.timeline({
                pause: true
            });
            var animation = tl.to("#block_img_serv", {
               rotation:90,
            });

            this.leave(animation);

            function mouseLeave() {
                animation.reverse();
            }
            function mouseEnter() {
                animation.play();
            }
        },
        anim_responsive() {
            let fonct = document.querySelector("#resp");
            fonct.addEventListener("mouseleave", mouseLeave);
            fonct.addEventListener("mouseenter", mouseEnter);
            
            const tl = gsap.timeline({
                pause: true
            });
            var animation = tl.to("#block_img_serv", {
                scale: 0.3
            });

            this.leave(animation);

            function mouseLeave() {
                animation.reverse();
            }
            function mouseEnter() {
                animation.play();
            }
        },
        anim_dynamique() {
            let fonct = document.querySelector("#dyn");
            fonct.addEventListener("mouseleave", mouseLeave);
            fonct.addEventListener("mouseenter", mouseEnter);
            
            const tl = gsap.timeline({
                repeat: -1,
                repeatDelay: 0,
                yoyo: true,
                pause: true
            });
            const tl1 = gsap.timeline({
                repeat: -1,
                repeatDelay: 0,
                yoyo: true,
                pause: true
            });
            const tl2 = gsap.timeline({
                repeat: -1,
                repeatDelay: 0,
                yoyo: true,
                pause: true
            });
            var animation = tl.to("#blueline1", {
                y: 80,
                duration: 1,
            });
            var animation1 = tl1.to("#blueline2", {
                y: 30,
                duration: 1,
            });
            var animation2 = tl2.to("#blueline3", {
                y: -80,
                duration: 1,
            });

            this.leave(animation);
            this.leave(animation1);
            this.leave(animation2);

            function mouseLeave() {
                animation.reverse();
                animation1.reverse();
                animation2.reverse();
            }
            function mouseEnter() {
                animation.play();
                animation1.play();
                animation2.play();
            }
        },
        leave(animation){
            animation.reversed(false).pause(0); 
        }
    },
    mounted() {
        this.fadeServiceImg();
        this.anim_responsive();
        this.anim_fonctionel();
        this.anim_dynamique();
    }
};
</script>

<style>
.title_service {
    font-size: 1.8em;
    padding-top: 4%;
    font-family: 'Karla', sans-serif;
}

.subtitle_service {
    font-size: 2.5em;
    margin-top: 5%;
    font-family: 'Karla', sans-serif;
}

.subsubtitle {
    font-size: 2.5em;
}

.img_service {
    max-width: 300px;
    max-height: 300px;
    padding-top: 80px;
}

span:hover {
    color: black;
}

section {
    height: 100vh;
    width: 100vw;
}

.blue_element2 {
    max-height: 500px;
    max-width: 100px;
}

#service_block {
    margin-top: 13%;
}
</style>
