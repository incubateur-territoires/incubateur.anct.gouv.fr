<template>
  <Layout>
    <div>
      <PageTitle />

      <div class="px-4">
        <div class="mx-auto max-w-screen-md">
          <div class="mb-8">
            <h1 class="text-5xl block font-marianne font-bold">
              Besoins identifiés
            </h1>
            <g-link to="/relance/solutions/liste" class="text-gray-800 hover:underline">
              voir les solutions proposées→
            </g-link>
          </div>
          
          <div v-if="loading">
            <svg class="mx-auto" 
             version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              width="120px" height="120px" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve">
              <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
                s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
                c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
              <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
                C22.32,8.481,24.301,9.057,26.013,10.047z">
                <animateTransform attributeType="xml"
                  attributeName="transform"
                  type="rotate"
                  from="0 20 20"
                  to="360 20 20"
                  dur="1s"
                  repeatCount="indefinite"/>
                </path>
            </svg>
          </div>
          <div v-if="!loading">
            <div class="flex flex-col space-y-4">
              <div v-for="(besoin, idx) in besoins" :key="idx" class="px-6 py-4 border-4 border-gray-200 rounded-lg flex-1">
                <h1 class="text-2xl font-medium mb-4 block">{{ besoin.Titre }}</h1>
                <p class="block whitespace-pre-wrap my-4">{{ besoin.Description }}</p>
                <div class="space-x-2 space-y-2">
                  <div v-for="(type, idx) in besoin.Typology" :key="idx" class="px-2 py-1 bg-navy text-white text-sm rounded-full uppercase font-medium text-center inline-block">
                    {{ type }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>


<script>
import PageTitle from '~/components/relance/PageTitle.vue'
import PageContent from '~/components/PageContent.vue'

export default {
  metaInfo: {
    title: 'France Relance: Solutions proposés'
  },
  components: {
    PageTitle
  },
  data () {
    return {
      loading: false,
      solutions: [],
      besoins: [],
      error: null
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.error = null
      this.besoins = []
      this.loading = true

      var besoins = [];

      this.$airtable('Besoins identifiés').select({ pageSize: 100, maxRecords: 100, offset: 0 }).eachPage(
        (records, fetchNextPage) => {
          // This function (`page`) will get called for each page of records.
          records.forEach(function(record) {
            besoins.push(record.fields)
          });

          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
        },
        (err) => {
          this.loading = false;
          this.besoins = besoins;

          if (err) { console.error(err); return; }
        }
      );      
    }
  }
}
</script>
