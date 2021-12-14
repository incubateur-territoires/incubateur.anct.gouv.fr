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
              <Checkbox @onchange="filter" label="Région" value="region" />
              <Checkbox @onchange="filter" label="Département" value="departement" />
              <Checkbox @onchange="filter" label="EPCI" value="epci" />
              <Checkbox @onchange="filter" label="Commune" value="commune" />
            </div>

            <div class="fr-col">
              <h4>Taille de collectivité</h4>
              <Checkbox label="< 3500 habitants" value="3500" />
              <Checkbox label="< 10.000 habitants" value="10000" />
              <Checkbox label="< 100.000 habitants" value="100.000" />
            </div>
          </div>

          <div class="fr-grid-row fr-grid-row--gutters fr-py-6w">
            <div class="fr-col">
              <DsfrCard
              title="Aides Territoires"
              description="Trouver des aides correspondant à votre territoire"
              />
            </div>
            <div class="fr-col">
              <DsfrCard
              title="Aides Territoires"
              description="Trouver des aides correspondant à votre territoire"
              />
            </div>
            <div class="fr-col">
              <DsfrCard
              title="Aides Territoires"
              description="Trouver des aides correspondant à votre territoire"
              />
            </div>
          </div>
          <div class="fr-grid-row fr-grid-row--gutters fr-py-6w">
            <div class="fr-col">
              <DsfrCard
              title="Aides Territoires"
              description="Trouver des aides correspondant à votre territoire"
              />
            </div>
            <div class="fr-col">
              <DsfrCard
              title="Aides Territoires"
              description="Trouver des aides correspondant à votre territoire"
              />
            </div>
            <div class="fr-col">
              <DsfrCard
              title="Aides Territoires"
              description="Trouver des aides correspondant à votre territoire"
              />
            </div>
          </div>
          <div class="fr-grid-row fr-grid-row--gutters">
            <div class="fr-col">
              <DsfrCard
              title="Aides Territoires"
              description="Trouver des aides correspondant à votre territoire"
              />
            </div>
            <div class="fr-col">
              <DsfrCard
              title="Aides Territoires"
              description="Trouver des aides correspondant à votre territoire"
              />
            </div>
            <div class="fr-col">
              <DsfrCard
              title="Aides Territoires"
              description="Trouver des aides correspondant à votre territoire"
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
    filter() {
      debugger
    }
  }
</script>
