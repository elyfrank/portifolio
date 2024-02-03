<template>
    <v-layout class="rounded rounded-md">
        <v-navigation-drawer color="blue-grey-lighten-5" permanent>
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
            <v-list-item link title="Contato"></v-list-item>
        </v-navigation-drawer>
        <v-main>
            <slot />
        </v-main>
    </v-layout>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<style>
.v-application {
    background: #ddd;
}
</style>
