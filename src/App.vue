<template>
<v-app id="block_app">
    <div v-if="$mq == 'sm' || $mq == 'md'">
    <v-app-bar fixed flat dense color="transparent">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer floating class="littlenav" content-class="elevation-0" fixed app  v-model="drawer" color="transparent">
        <v-list nav dense>
            <v-list-item-group>
                <v-list-item>
                    <v-list-item-title class="linkNavbar" @click="scroll('block_app')">Accueil</v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title class="linkNavbar" @click="scroll('section1')">Prestations</v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title class="linkNavbar" @click="scroll('section2')">Portfolio</v-list-item-title>
                </v-list-item>
                <v-list-item>
                    <v-list-item-title class="linkNavbar" @click="scroll('section3')">Contact</v-list-item-title>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
    </div>
    <v-app-bar v-else id="navbar_app" fixed flat dense color="transparent">
        <v-spacer></v-spacer>
        <h5 class="linkNavbar" @click="scroll('block_app')">Accueil</h5>
        <h5 class="linkNavbar" @click="scroll('section1')">Prestations</h5>
        <h5 class="linkNavbar" @click="scroll('section2')">Portfolio</h5>
        <h5 class="linkNavbar" @click="scroll('section3')">Contact</h5>
    </v-app-bar>
    <router-view></router-view>
    <v-footer color="black" absolute>
        <span class="white--text font_karla">Théo Basso Bondini &copy; {{ new Date().getFullYear() }}</span>
        <v-spacer></v-spacer>
        <v-btn rel="noopener" aria-label="go to github" icon href="https://github.com/sabso7" target="_blank">
            <v-img style="max-width:20px" src="@/assets/github_light.png"></v-img>
        </v-btn>
        <v-btn rel="noopener" aria-label="go to linkedin" icon href="https://www.linkedin.com/in/th%C3%A9o-basso-bondini/" target="_blank">
            <v-img style="max-width:20px" src="@/assets/linkedin.png"></v-img>
        </v-btn>
    </v-footer>
</v-app>
</template>

<script>
export default {
    data() {
        return {
            loader: true,
            drawer: false,
        }
    },
    methods: {
        scroll: function (id) {
            this.drawer = false;
            setTimeout(document.getElementById(id).scrollIntoView({
                behavior: "smooth",
            }), 1000);
        },
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Heebo:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla&display=swap');

.linkNavbar {
    text-decoration: none;
    padding: 10px;
    font-family: 'Karla', sans-serif;
    font-size: 20px;
    color: white;
    cursor: pointer;
}

#navbar_app {
    padding: 10px;
}

#block_app {
    background-color: #111516;
}

h5:hover {
    color: #FD5A1E;
}

.littlenav {
    max-width: 150px;
    padding-top:10%;
}
</style>
