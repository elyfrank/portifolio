<template>
  <div>
    <v-layout class="rounded rounded-md">
      <v-navigation-drawer v-model="drawer" color="blue-grey-lighten-5" :permanent="!mdAndDown">
        <v-card variant="text">
          <v-card-text class="text-center">
            <v-avatar size="xl">
              <v-img src="/img/profile.jpeg" alt="Ely Frank" width="100" />
            </v-avatar>
            <div class="text-h6 mt-5 font-weight-bold">Ely Frank</div>
          </v-card-text>
        </v-card>
        <v-divider class="my-5"></v-divider>
        <v-list-item link title="Sobre mim" exact to="/"></v-list-item>
        <v-list-item link title="Projetos" exact to="/projetos"></v-list-item>
        <v-list-item @click="downloadFile"> Download CV  <v-icon left>mdi-download</v-icon></v-list-item>
        <div class="social-icons">
          <a href="https://www.linkedin.com/in/ely-frank-12872431/" target="_blank">
            <v-icon color="primary">mdi-linkedin</v-icon>
          </a>
          <a href="https://github.com/elyfrank" target="_blank">
            <v-icon>mdi-github</v-icon>
          </a>
          <a href="mailto:elyfrankmo@gmail.com">
            <v-icon>mdi-email</v-icon>
          </a>
        </div>
      </v-navigation-drawer>
      <v-main>
        <v-app-bar v-if="smAndDown">
          <v-app-bar-nav-icon @click="toggleMenu"></v-app-bar-nav-icon>
        </v-app-bar>
        <slot />
      </v-main>
    </v-layout>
  </div>
</template>

<style scoped>

.social-icons {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  padding: 10px;
}

.social-icons a {
  color: #333333;
  font-size: 24px;
}


</style>
<script setup lang="ts">
import { ref } from 'vue'
import { useDisplay } from 'vuetify/lib/framework.mjs'

const drawer = ref(false)
const { mdAndDown, smAndDown } = useDisplay()

const toggleMenu = () => {
  drawer.value = !drawer.value
}

const miniVariant = ref(false)
const drawerMini = ref(false)

if (mdAndDown) {
  miniVariant.value = true
  drawerMini.value = true
}

const downloadFile = () => {

  const fileUrl = '/cv/cv.pdf';
  const anchor = document.createElement('a');
  anchor.href = fileUrl;
  anchor.download = 'curriculo_ely_frank.pdf';
  anchor.click();
}

</script>