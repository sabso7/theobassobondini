<template>
<v-app id="block_app">
        <v-app-bar id="navbar_app" fixed flat dense color="transparent">
            <v-spacer></v-spacer>
            <p class="linkNavbar" @click="scroll('home_block')">Accueil</p>
            <p class="linkNavbar" @click="scroll('section1')">Prestations</p>
            <p class="linkNavbar">Portfolio</p>
            <p class="linkNavbar">Contact</p>
        </v-app-bar>
    <router-view :key="$route.fullPath"></router-view>
</v-app>
</template>
    
<script>
export default {
    data() {
        return {}
    },
    methods: {
        scroll: function (id) {
            setTimeout(document.getElementById(id).scrollIntoView({
                behavior: "smooth",
            }), 1000);
        }
    },
    mounted() {
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Heebo:wght@800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Karla&display=swap');

.active { background-color: #111516}
.linkNavbar {
    text-decoration: none;
    padding: 10px;
    font-family: 'Karla', sans-serif;
    font-size: 20px;
    color:white;
}

#block_app{
    background-color: #111516;
    background-size: auto 100%;
    overscroll-behavior: none;
}

#navbar_app{
    padding: 10px;
}

#logo{
    margin: 50px;
    max-width: 70px;
}
</style>
