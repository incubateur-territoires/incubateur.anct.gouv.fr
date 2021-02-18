<template>
  <Layout>
    <div class="job">
      <PageTitle>
        {{$page.service.id}}
      </PageTitle>

      <div class="px-4">      
       
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  service(id: $id) {
    id
  }
}
</page-query>
