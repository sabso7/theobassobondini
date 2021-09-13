<template>
<v-main>
    <v-container id="block_portfolio">
        <div v-if="$mq == 'sm' || $mq == 'md'">
            <v-row align="center" justify="center" class="title_portfolio">
                <h4 class="title_section" :class="$mq">Portfolio</h4>
            </v-row>
            <v-row no-gutters align="center" justify="center">
                <span id="line_portfolio"></span>
            </v-row>
        </div>
        <div v-else>
            <v-row class="title_portfolio">
                <h4 class="title_section" :class="$mq">Portfolio</h4>
            </v-row>
        </div>
        <v-row class="ma-0 pa-0" align="center" justify="center">
            <v-col col="md6">
                <v-row align="center" justify="center">
                    <v-card class="screen_portfolio" id="card_portfolio" outlined :class="$mq">
                        <v-img class="portfolio_img" :class="$mq" src="@/assets/screen_monsite.png" lazy-src="@/assets/screen_monsite.png">
                        </v-img>
                        <div class="overlay" :class="$mq">
                            <v-row class="elem_overlay" align="center" justify="center">
                                <v-btn class="font_karla" :class="$mq" href="https://sabso7.github.io/theobassobondini/">visiter</v-btn>
                            </v-row>
                        </div>
                        <v-card-text class="card_screen">
                            <v-row>
                                <v-img contain class="logo_vue" src="@/assets/vue_logo.png"></v-img>
                                <v-spacer></v-spacer>
                                <div class="date_projet">Septembre, 2021</div>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-row>
            </v-col>
            <v-col col="md6">
                <v-row class="ma-0 pa-0" align="center" justify="center">
                    <v-card class="screen_portfolio" id="card_portfolio" outlined :class="$mq">
                        <v-img class="portfolio_img" :class="$mq" src="@/assets/screen_bolatto.png" lazy-src="@/assets/screen_bolatto.png">
                        </v-img>
                        <div class="overlay" :class="$mq">
                            <v-row class="elem_overlay" align="center" justify="space-around">
                                <v-btn class="font_karla" href="https://elodiebolatto.fr/" target="blank">visiter</v-btn>
                            </v-row>
                        </div>
                        <v-card-text class="card_screen">
                            <v-row>
                                <v-img contain class="logo_vue" src="@/assets/vue_logo.png"></v-img>
                                <v-img contain class="logo_symfo" src="@/assets/symfony_logo.png"></v-img>
                                <v-spacer></v-spacer>
                                <div class="date_projet">Avril, 2021</div>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-row>
            </v-col>
        </v-row>
        <v-row>
            <v-col col="md6">
                <v-row align="center" justify="center">
                </v-row>
            </v-col>
            <v-col col="md6">
                <v-row align="center" justify="center">
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</v-main>
</template>

<script>
export default {
    data() {
        return {
            transparent: 'rgba(0, 0, 0, 0)',
        }
    },
}
</script>

<style>
.date_projet {
    margin: 6%;
    color: black;
}

.overlay {
    display: none;
}

.overlay.sm {
    display: none;
}

#card_portfolio {
    background-color: #F1F1F1 !important;
    max-width: 500px;
    max-height: 700px;
    margin-top:5%;
}

.title_portfolio {
    margin: 4%;
}

#card_portfolio.md {
    max-width: 300px;
    max-height: 400px;
}

#card_portfolio.sm {
    max-width: 300px;
    max-height: 400px;
}

.screen_portfolio:hover .portfolio_img {
    filter: brightness(50%);
}

.screen_portfolio:hover .overlay {
    display: block;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
}

.show-btns {
    color: black !important;
}

.content_img {
    margin-top: 20%;
    opacity: 1.0;
}

.portfolio_img {
    display: block;
    max-height: 250px;
    margin: 0 auto;
}

.portfolio_img.sm {
    max-height: 150px;
}

.portfolio_img.md {
    max-height: 150px;
}

.elem_overlay {
    margin: 3%;
}

#block_portfolio {
    margin-top: 2%;
}
</style>
