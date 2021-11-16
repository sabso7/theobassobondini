<template>
<v-main>
    <v-container class="block_contact" no-gutter>
        <v-row align="center" justify="center">
            <v-col sm="6" cols="12" md="6" lg="6">
                <v-row align="center" justify="center">
                    <h4 class="title_section title_contact" :class="$mq">Disponible pour tous vos projets</h4>
                </v-row>
                <v-row class="block_coord fade_in_right" :class="$mq" align="center" justify="center">
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="subtitle font_karla" :class="$mq" >+33 (0)6 87 81 67 97</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="subtitle font_karla" :class="$mq" >t.bassobondini(@)gmail.com</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title class="subtitle font_karla" :class="$mq" >Saint-Pierre, 97410 Réunion</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-row class="block_coord" align="center" justify="center">
                            <v-btn class="logo_contact" :class="$mq" rel="noopener" aria-label="go to github" icon href="https://github.com/sabso7" target="_blank">
                                <v-img class="logo_contact" :class="$mq" src="@/assets/github.png"></v-img>
                            </v-btn>
                            <v-btn class="logo_contact" :class="$mq" rel="noopener" aria-label="go to linkedin" icon href="https://www.linkedin.com/in/th%C3%A9o-basso-bondini/" target="_blank">
                                <v-img class="logo_contact" :class="$mq" src="@/assets/linkedin.png"></v-img>
                            </v-btn>
                    </v-row>    
                </v-row>
            </v-col>
            <v-col sm="6" cols="12" md="6" lg="6">
                <v-row id="block_img_face" align="center" justify="center">
                    <v-img :class="$mq" id="face1" class="face fade_face" src="@/assets/face1.png" lazy-src="@/assets/face1.png"></v-img>
                    <v-img :class="$mq" id="face2" class="face fade_face fade_down" src="@/assets/face2.png" lazy-src="@/assets/face2.png"></v-img>
                    <v-img :class="$mq" id="face3" class="face fade_face" src="@/assets/face3.png" lazy-src="@/assets/face3.png"></v-img>
                </v-row>
                <v-row class="block_btn_cv" align="center" justify="center">
                    <v-btn href="tbassobondini.pdf" target="_blank">Curriculum vitae</v-btn>
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
            publicPath: process.env.BASE_URL
        }
    },
    methods: {
        fadeFace() {
            document.addEventListener("DOMContentLoaded", function () {
                gsap.utils.toArray(".fade_face").forEach(function (elem) {
                    ScrollTrigger.create({
                        trigger: elem,
                        onEnter: function () {
                            let x = 0;
                            let y = (elem.id == "face2") ? -100:100;
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
    },
    mounted() {
        this.fadeFace();
    }
}
</script>

<style scoped>

.block_contact{
    margin-top: 10%;
}

.logo_contact {
    max-height: 35px;
    max-width: 35px;
    border-radius: 10%;
    margin: 5%;
}

.title_contact.sm{
    margin-top: 3%;
}

.logo_contact.sm {
    max-height: 20px;
    max-width: 20px;
}

#photo_theo {
    border-radius: 50%;
    max-width: 200px;
    max-height: 200px;
}

.face{
    max-height: 800px;
    max-width: 100px;
    border-radius: 3%;
    margin: 0 !important;
}

.face.sm{
    max-width: 50px;
    max-height: 400px;
}

.face.md{
    max-width: 50px;
    max-height: 400px;
}

.block_btn_cv{
    margin: 5%;
}

.icon_contact{
    max-width: 1px;
    max-height: 1px;
}

.block_coord{
    margin: 5%;
    margin-left: 3%;
}

.block_coord.sm{
    margin-left: 6%;
}

.block_coord.md{
    margin-left: 23%;
}
</style>
