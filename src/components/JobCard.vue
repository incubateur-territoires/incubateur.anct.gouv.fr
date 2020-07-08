<template>
  <div class="job-card-container">
    <g-link :to="job.path">
      <div class="job-card">
        <div class="equipe" v-html="job.equipe" />
        <h1 class="title" v-html="job.role" />
        <div class="details">
          <div class="date">
            il y a {{job.post_ouvert | moment('from', 'now', true)}}
          </div> 
          <div>•</div>
          <div class="contrat" v-html="job.contrat" />
        </div>
      </div>
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    job: Object,
  }
}
</script>

<style lang="scss">
.job-card-container {
  @apply mb-8;  

  .job-card {
    @apply p-4 border-4 rounded-lg leading-none transition ease-linear duration-100;

    .title {
      @apply font-marianne text-2xl font-bold my-4;
    }

    .equipe {
      @apply font-marianne text-gray-800;
    }

    .details {
      @apply flex text-gray-800 text-sm;

      > div {
        @apply mr-1;
      }
    }

    &:hover {
      @apply border-green;

      h1 {
        @apply text-green;
      }
    }
  }
}
</style>
