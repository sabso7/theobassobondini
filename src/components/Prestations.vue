<template>
<v-main>
    <v-container id="service_block" :class="$mq">
        <v-row align="center" justify="center">
            <v-col sm="9" cols="12" md="9" lg="6" class="block_img_presta">
                <v-row id="block_img_serv" align="center" justify="center" :class="$mq">
                    <v-img contain id="blueline1" class="blue_element2" :class="$mq" src="@/assets/blue_element_2.png" lazy-src="@/assets/blue_element_2.png"></v-img>
                    <v-img contain id="blueline2" class="blue_element2" :class="$mq" src="@/assets/blue_element_1.png" lazy-src="@/assets/blue_element_1.png"></v-img>
                    <v-img contain id="blueline3" class="blue_element2" :class="$mq" src="@/assets/blue_element_2.png" lazy-src="@/assets/blue_element_2.png"></v-img>
                </v-row>
            </v-col>
            <v-col sm="9" cols="9" md="9" lg="6" class="block_text_presta" :class="$mq">
               
                    <v-row class="fade_in_right" align="center" justify="center">
                        <h4 class="title_section" :class="$mq">Création de site sur mesure</h4>
                    </v-row>
                    <v-row class="fade_in_right" align="center" justify="center">
                        <span id="fonct" class="subtitle font_karla" :class="$mq">Fonctionnel</span>
                    </v-row>
                    <v-row class="fade_in_right" align="center" justify="center">
                        <p class="description_presta">Adapté à vos besoins</p>
                    </v-row>
                    <v-row class="fade_in_right" align="center" justify="center">
                        <span id="resp" class="subtitle font_karla" :class="$mq">Responsive</span>
                    </v-row>
                    <v-row class="fade_in_right" align="center" justify="center">
                        <p class="description_presta">Visible sur tous les formats</p>
                    </v-row>
                    <v-row class="fade_in_right" align="center" justify="center">
                        <span id="dyn" class="subtitle font_karla" :class="$mq">Dynamique</span>
                    </v-row>
                    <v-row class="fade_in_right" align="center" justify="center">
                        <p class="description_presta">Entièrement modulable</p>
                    </v-row>
                
                <div id="langage" :class="$mq">
                    <v-row align="center" justify="center">
                        <v-img contain class="logo_vue" :class="$mq" src="@/assets/vue_logo.png"></v-img>
                        <v-img contain class="logo_symfo" :class="$mq" src="@/assets/symfony_logo.png"></v-img>
                        <v-img contain class="logo_php" :class="$mq" src="@/assets/php_logo.png"></v-img>
                        <v-img contain class="logo_javascript" :class="$mq" src="@/assets/javascript_logo.png"></v-img>
                        <v-img contain class="logo_html" :class="$mq" src="@/assets/html_logo.png"></v-img>
                    </v-row>
                </div>
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
        return {}
    },
    methods: {
        fadeServiceImg() {
            function scrollerEv(elem) {
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
            }
            document.addEventListener("DOMContentLoaded", function () {
                gsap.utils.toArray(".fade_in_right").forEach(function (elem) {
                    scrollerEv(elem);
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
                rotation: 90,
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
            var animation = tl.to("#blueline1", {
                y: 80,
                duration: 1,
            });
            var animation1 = tl.to("#blueline2", {
                y: 30,
                duration: 1,
            }, "<0");
            var animation2 = tl.to("#blueline3", {
                y: -80,
                duration: 1,
            }, "<0");

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
        leave(animation) {
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
.title_section {
    font-size: 2.5em;
    cursor: crosshair;
    margin: 2%;
}

.title_section.sm {
    font-size: 1.3em;
}

.title_section.md {
    font-size: 1.3em;
}

.sousblock_text_presta {
    margin-left: 15%;
}

.subtitle {
    font-size: 2em;
    cursor: crosshair;
}

.subtitle.sm {
    font-size: 1.2em;
}

.subtitle.md {
    font-size: 1.2em;
}

.description_presta {
    font-size: 1.1em;
    cursor: crosshair;
}

span:hover {
    color: #FD5A1E;
}

.blue_element2 {
    max-height: 500px;
    max-width: 100px;
}

.blue_element2.sm {
    max-height: 150px;
    max-width: 30px;
}

.blue_element2.md {
    max-height: 150px;
    max-width: 30px;
}

#service_block {
    margin-top: 10%;
}

#service_block.sm {
    margin-top: 15%;
}

#service_block.md {
    margin-top: 15%;
}

.block_text_presta {
    margin-top: 0%;
}

.block_text_presta.sm {
    margin-top: 10%;
}

.block_text_presta.md {
    margin-top: 10%;
}

#langage {
    margin-top: 8%;
}

.logo_php {
    max-height: 50px;
    max-width: 60px;
    margin: 2%;
}

.logo_php.sm {
    max-height: 30px;
    max-width: 40px;
}

.logo_html {
    max-height: 40px;
    max-width: 40px;
    margin: 2%;
}

.logo_html.sm {
    max-height: 30px;
    max-width: 30px;
}

.logo_javascript {
    max-height: 40px;
    max-width: 50px;
    margin: 2%;
}

.logo_javascript.sm {
    max-height: 30px;
    max-width: 40px;
}

.logo_vue {
    max-height: 70px;
    max-width: 40px;
    margin: 2%;
}

.logo_vue.sm {
    max-height: 50px;
    max-width: 20px;
}

.logo_symfo {
    max-height: 80px;
    max-width: 90px;
    margin: 2%;
}

.logo_symfo.sm {
    max-height: 60px;
    max-width: 70px;
}
</style>
