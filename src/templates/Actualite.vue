<template>
  <Layout>
    <div class="actualite">
      <PageTitle>
        {{$page.actualite.title}}
      </PageTitle>

      <PageContent v-html="$page.actualite.content" />
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  actualite(id: $id) {
    title
    content
  }
}
</page-query>
