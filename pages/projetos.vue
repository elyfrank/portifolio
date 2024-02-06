<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="8">
                <v-sheet class="my-2" border rounded v-for="(project, key) in projectsFiltred" :key="key">
                    <v-row align="center" class="pa-5">
                        <v-col cols="12" sm="2">
                            <v-img :src="project.img" :alt="project.name"></v-img>
                        </v-col>
                        <v-col cols="12" sm="10">
                            <div class="text-h5 font-weith-bold" v-text="project.name"></div>
                            <p v-text="project.description"></p>
                        </v-col>
                    </v-row>
                    <v-toolbar color="blue-grey-lighten-5" density="compact">
                        <v-spacer />
                        <v-chip v-for="(tag) in project.tags" :key="tag" variant="outlined" class="ma-1" size="x-small"
                            :text="tag"></v-chip>
                        <v-divider vertical class="mx-2"></v-divider>
                        <v-btn v-if="project.link" rounded="0" variant="outlined" size="small" append-icon="mdi-link"
                            :href="project.link" target="_blank">
                            link
                        </v-btn>
                    </v-toolbar>
                </v-sheet>
            </v-col>
            <v-col cols="12" md="4">
                <v-sheet border class="mt-2">
                    <v-list bg-color="blue-grey-lighten-5">
                        <v-list-item title="Habilidades" subtitle="Selecione para filtrar os projetos"></v-list-item>
                        <template v-for="(tecnology, key) in technologies" :key="key">
                            <v-list-subheader :title="key"></v-list-subheader>
                            <v-list-item>
                                <v-chip v-for="tag in tecnology" density="compact" :key="tag" :color="filterTags === tag ? 'primary' : null" class="ma-1" label @click="toggleFilterTags(tag)" :text="tag" />                                    
                            </v-list-item>
                        </template>
                    </v-list>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup>

useHead({
  title: 'Projetos'
})

const projects = [
   {
        name: 'Clubvida - Websis Tecnologia e Sistemas',
        description: 'Desenvolvendo novas funcionalidades e atualizando funcionalidades existentes.',
        img: '/img/clubvida.png',
        tags: [
            'PHP 7.3',
            'Metronic 4',
            'Bootstrap 3',
            'jQuery',
            'JavaScript',
            'PostgreSQL 11',
            'Docker',
            'Git',
        ],
        link: 'https://clubvida.com.br/'
    },
    {
        name: 'Avalienap - Websis Tecnologia e Sistemas - ENAP',
        description: 'Realização de correções de erros e implementação de novas funcionalidades conforme as solicitações do cliente.',
        img: '/img/logotipo_avalia.png',
        tags: [
            'PHP 5.3.3',
            'Symfony 2',
            'Bootstrap',
            'AngulaJS',
            'Doctrine (ORM)',
            'PostgreSQL',
            'Docker',
            'Git',
        ],
        link: 'https://avalienap.enap.gov.br/login/#/autenticacao'
    },
    {
        name: 'Portal de Competências - Websis Tecnologia e Sistemas - ENAP',
        description: 'Arquiteto e desenvolvedor, criei um sistema para atender às necessidades do cliente ao mapear recursos.',
        img: '/img/cer.png',
        tags: [
            'PHP 7',
            'jQuery',
            'JavaScript',
            'PostgreSQL',
            'Docker',
            'Git',
        ],
        link: 'https://cer.enap.gov.br/index.php/pt/item-03'
    },
    {
        name: 'Trampay - Freelancer',
        description: 'Desenvolvendo novas funcionalidades e atualizando funcionalidades existentes.',
        img: '/img/trampay-vertical.png',
        tags: [
            'Node.js',
            'React',
            'NestJS',
            'Git',
        ],
        link: 'https://trampay.com/'
    },
    {
        name: 'Banco Afro - Freelancer',
        description: 'Desenvolvendo novas funcionalidades e atualizando funcionalidades existentes.',
        img: '/img/bancoafro_logo.webp',
        tags: [
            'Node.js',
            'Vue.js',
            'Vuetify',
            'Nuxt.js',
            'PostgreSQL',
            'Git',
        ],
        link: 'https://www.bancoafro.com.br/'
    }
]

const technologies = {
    'Frontend': [
        'Metronic 4',
        'Bootstrap 3',
        'jQuery',
        'JavaScript',
        'React',
        'NestJS',
        'Vue.js',
        'Vuetify',
        'Nuxt.js',
    ],
    'Backend': [
        'PHP 7',
        'PHP 7.3',
        'PHP 5.3.3',
        'Symfony 2',
        'Doctrine (ORM)',
        'Node.js',
    ],
    'Database': [
        'PostgreSQL 11',
        'PostgreSQL',
    ]
}

const filterTags = ref(null)

const projectsFiltred = computed(() => projects.filter(project => !filterTags.value ? true : project.tags.includes(filterTags.value)))

const toggleFilterTags = (value) => {
    if (filterTags.value === value) {
        filterTags.value = null
    } else {
        filterTags.value = value
    }
}

</script>
  