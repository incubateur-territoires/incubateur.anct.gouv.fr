<template>
  <Layout>
    <div class="offres">
      <PageTitle>
        Investigations
      </PageTitle>

      <div class="px-4">
        <PageContent v-html="$page.pageContent.content" />

        <InvestigationsList
          class="mt-8"
          :investigations=investigations
          :promotions=$page.directus.promotions
          :promotionId=promotionId
        />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  directus {
    investigations {
      id
      nom
      status
      mission
      promotion {
        id
      }
      communes {
        communes_id {
          nom
        }
      }
      departements {
        departements_id {
          nom
        }
      }
      regions {
        regions_id {
          nom
        }
      }
      epcis {
        epcis_id {
          nom
        }
      }
    }
    promotions {
      id
      nom
    }
  }
  pageContent(id: "programme-investigation") {
    title
    content
  }
}
</page-query>

<script>
import PageTitle from '~/components/PageTitle.vue'
import PageContent from '~/components/PageContent.vue'
import InvestigationsList from '~/components/investigations/InvestigationsList.vue'
import { collectivitesArray, collectivitesTypesArray } from '~/helpers/model-helpers.js'

export default {
  metaInfo: {
    title: `Programme d'Investigation`
  },
  components: {
    PageTitle,
    PageContent,
    InvestigationsList
  },
  computed: {
    promotionId: function() {
      return this.$route.query.promo || "all";
    },
    investigations: function() {
      const investigations = [];

      this.$page.directus.investigations.forEach(item => {
        item.collectivites = collectivitesArray(item)
        item.collectivitesTypes = collectivitesTypesArray(item)

        if (this.promotionId === 'all') {
          investigations.push(item);
        } else if (item.promotion && String(this.promotionId) === String(item.promotion.id)) {
          investigations.push(item)
        }
      })

      return investigations;
    }
  }
}
</script>
