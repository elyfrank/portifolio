<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8">
        <v-card title="Olá!"
                text="Sou um desenvolvedor web com mais de 10 anos de experiência, apaixonado por criar, manter e evoluir sistemas web com qualidade e eficiência. Tenho competências em diversas tecnologias e ferramentas de desenvolvimento, tais como PHP, Laravel, Vue, Node, Docker, Git e Scrum, entre outras. Além disso, sou certificado em DevOps, o que me permite integrar práticas de entrega contínua e colaboração em equipe em todos os meus projetos. Meu objetivo é contribuir para o sucesso dos meus clientes, entregando soluções web que atendam às suas necessidades e expectativas."></v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-container>
    <v-row>
      <v-col cols="12" md="8">
        <v-card>
          <v-card-text>
            <div class="font-weight-bold ms-1 mb-2">
              Formação
            </div>

            <v-timeline density="comfortable" align="start">
              <v-timeline-item
                  v-for="training in formations"
                  :key="training.time"
                  :dot-color="training.color"
                  size="x-small"
              >
                <div class="mb-4">
                  <div class="font-weight-normal">
                    <strong>{{ training.from }}</strong>
                  </div>
                  <div>{{ training.description }}</div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    formations: [
      {
        from: 'Gran Faculdade - Análise e desenvolvimento de sistemas',
        description: `Curso em andamento, conclusão em Junho 2025. Nota máxima no MEC, referência em ensino e tecnologia, recomendada por mais de 2 milhões de alunos.`,
        color: 'red',
      },
      {
        from: 'DevOps Essentials Professional Certificate (DEPC)',
        description: 'CertiProf International. Verificação emitida em jan de 2019',
        color: 'green',
      },
      {
        from: 'Scrum Foundation Professional Certificate (SFPC)',
        description: 'CertiProf International. Verificação emitida em jan de 2019',
        color: 'green',
      },
    ],
  }),
}
</script>
