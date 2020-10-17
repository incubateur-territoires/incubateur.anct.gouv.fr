<template>
  <nav class="nav md:my-6 md:flex md:items-center space-x-6 text-lg font-marianne max-w-screen-md mx-auto">
    <g-link to="/a-propos/">
      <button type="button">
        À propos
      </button>
    </g-link>
    <g-link to="/actualites/">
      <button type="button">
        Actualités
      </button>
    </g-link>
    
    <div class="relative">        
      <button 
        type="button"
        class="space-x-2"
        @click="offresIsOpen = !offresIsOpen"
      >
        <span>Nos offres</span>
      
        <svg class="text-gray-500 h-5 w-5 group-hover:text-gray-600 group-focus:text-gray-600 transition ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>

      <transition
        enter-active-class="transition ease-out duration-200"
        enter-class="opacity-0 translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-1"
      >
        <div
          v-if="offresIsOpen"
          v-click-outside="onClickOutsideOffres"
          class="absolute -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
        >
          <div class="rounded-lg shadow-lg">
            <div class="rounded-lg shadow-xs overflow-hidden">
              <div class="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                <g-link to="/offre/collectivites/" class="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-200 transition ease-in-out duration-150">
                  <!-- Heroicon name: library -->
                  <svg class="flex-shrink-0 h-6 w-6 text-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
                  </svg>
                  <div class="space-y-1">
                    <p class="text-base leading-6 font-medium text-gray-900">
                      Aux collectivités territoriales
                    </p>
                    <p class="text-sm leading-5 text-gray-500">
                      Get a better understanding of where your traffic is coming from.
                    </p>
                  </div>
                </g-link>
                <g-link to="/offre/partenaires/" class="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-200 transition ease-in-out duration-150">
                  <!-- Heroicon name: user-group -->
                  <svg class="flex-shrink-0 h-6 w-6 text-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  <div class="space-y-1">
                    <p class="text-base leading-6 font-medium text-gray-900">
                      Aux acteurs publics et partenaires des collectivités
                    </p>
                    <p class="text-sm leading-5 text-gray-500">
                      Speak directly to your customers in a more meaningful way.
                    </p>
                  </div>
                </g-link>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <div class="relative">        
      <button 
        type="button"
        class="space-x-2"
        @click="actionsIsOpen = !actionsIsOpen"
      >
        <span>Nos actions</span>
      
        <svg class="text-gray-500 h-5 w-5 group-hover:text-gray-600 group-focus:text-gray-600 transition ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>

      <transition
        enter-active-class="transition ease-out duration-200"
        enter-class="opacity-0 translate-y-1"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-in duration-150"
        leave-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-1"
      >
        <div 
          v-if="actionsIsOpen"
          v-click-outside="onClickOutsideActions"
          class="absolute -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
        >
          <div class="rounded-lg shadow-lg">
            <div class="rounded-lg shadow-xs overflow-hidden">
              <div class="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                <g-link to="/actions/programme-investigation/" class="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-200 transition ease-in-out duration-150">
                  <!-- Heroicon name: light-bulb -->
                  <svg class="flex-shrink-0 h-6 w-6 text-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                  <div class="space-y-1">
                    <p class="text-base leading-6 font-medium text-gray-900">
                      Programme d'Investigation
                    </p>
                    <p class="text-sm leading-5 text-gray-500">
                      Get a better understanding of where your traffic is coming from.
                    </p>
                  </div>
                </g-link>
                <g-link to="/actions/startups-territoires/" class="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-200 transition ease-in-out duration-150">
                  <!-- Heroicon name: user-group -->
                  <svg class="flex-shrink-0 h-6 w-6 text-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                  <div class="space-y-1">
                    <p class="text-base leading-6 font-medium text-gray-900">
                      Startups de Territoires
                    </p>
                    <p class="text-sm leading-5 text-gray-500">
                      Speak directly to your customers in a more meaningful way.
                    </p>
                  </div>
                </g-link>
                <g-link to="https://territoires.store" class="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-200 transition ease-in-out duration-150">
                  <!-- Heroicon name: user-group -->
                  <svg class="flex-shrink-0 h-6 w-6 text-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                  <div class="space-y-1">
                    <p class="text-base leading-6 font-medium text-gray-900 flex space-x-1 items-center">
                      <span>Territoires Store</span>
                      <svg class="text-gray-500 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </p>
                    <p class="text-sm leading-5 text-gray-500">
                      Le catalogue des services publics numériques
                    </p>
                  </div>
                </g-link>
                <g-link to="/actions/collaborations/" class="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-200 transition ease-in-out duration-150">
                  <!-- Heroicon name: user-group -->
                  <svg class="flex-shrink-0 h-6 w-6 text-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div class="space-y-1">
                    <p class="text-base leading-6 font-medium text-gray-900">
                      Collaborations
                    </p>
                    <p class="text-sm leading-5 text-gray-500">
                      Nos engagements avec des communs numériques, des Startups d'État, et d'autres projets de l'ANCT
                    </p>
                  </div>
                </g-link>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>

    <g-link to="/recrutements/">
      <button class="button space-x-2">
        <span>Recrutements</span>
        <div class="bg-green text-sm text-white h-6 w-6 text-center font-bold rounded-full">{{$static.jobs.totalCount}}</div>
      </button>
    </g-link>
  </nav>
</template>

<static-query>
query {
	jobs: allJob(filter: { status: { nin: ["draft", "closed"] } }) {
    totalCount
  }
}
</static-query>

<script>
import vClickOutside from 'v-click-outside'

export default {
  directives: {
    clickOutside: vClickOutside.directive
  },
  data() {
    return {
      offresIsOpen: false,
      actionsIsOpen: false
    }
  },
  methods: {
    onClickOutsideOffres() {
      this.offresIsOpen = false
    },
    onClickOutsideActions() {
      this.actionsIsOpen = false
    }
  }
}
</script>

<style lang="scss">
nav {
  @apply text-base pb-2;

  @screen md {
    @apply text-sm pb-0;
  }

  @screen lg {
    @apply text-base;
  }

  // class="text-gray-500 group inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
  button {
    @apply text-gray-900 inline-flex items-center text-lg leading-6 font-medium transition ease-in-out duration-150 px-2 py-1 rounded-lg;
  
    &:hover {
      @apply bg-gray-200;

    }

    &:focus {
      @apply outline-none;
    }
  }
}
</style>
