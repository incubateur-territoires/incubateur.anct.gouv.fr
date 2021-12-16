<template>
  <div>
    <Header />
    <main class="fr-container fr-py-6w">
      <div class="fr-grid-row">
        <div class="fr-col-12">
          <CallOut />

          <div class="fr-grid-row fr-grid-row--gutters fr-py-6w">
            <div class="fr-col">
              <h4>Type de collectivité</h4>
              <Checkbox @change="filter('types', 'region', $event)" label="Région" />
              <Checkbox @change="filter('types', 'departement', $event)" label="Département" />
              <Checkbox @change="filter('types', 'epci', $event)" label="EPCI" />
              <Checkbox @change="filter('types', 'commune', $event)" label="Commune" />
            </div>

            <div class="fr-col">
              <h4>Taille de collectivité</h4>
              <Checkbox @change="filter('populations', '3500', $event)" label="< 3500 habitants" />
              <Checkbox @change="filter('populations', '10000', $event)" label="< 10.000 habitants" />
              <Checkbox @change="filter('populations', '100000', $event)" label="< 100.000 habitants" />
            </div>
          </div>

          <h3>{{ services.length }} services sont susceptibles de vous intéresser</h3>
          <div class="fr-grid-row fr-grid-row--gutters">
            <div class="fr-col-lg-3 fr-col-md-4 fr-col-sm-12" v-for="service in services">
              <Card
                :title="service.nom"
                :description="service.type"
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WXUbigVrd4W8p067r5e6ggAAAA%26pid%3DApi&f=1"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
  export default {

    computed: {
      services() {
        return this.$store.state.services.list
      }
    },

    methods: {
      filter(name, value, active) {
        this.$store.commit('services/filter', name, value, active)
      }
    }
  }
</script>
