<template>
  <div class="fr-card fr-enlarge-link">
    <div class="fr-card__body">
        <h4 class="fr-card__title">
            <a href="#" class="fr-card__link">{{ title }}</a>
        </h4>
        <p class="fr-card__desc">{{ description }}</p>
        <p class="fr-card__detail">Détail</p>
    </div>
    <div class="fr-card__img">
        <img :src="image" class="fr-responsive-img" :alt="title">
    </div>
  </div>
</template>

<script>
  export default {
    props: ['title', 'description', 'image']
  }
</script>
