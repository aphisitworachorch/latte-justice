<template>
  <div class="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
    <img class="image-full items-center dark:invert w-72" :src="imageFile"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { createSEOMeta } from '~/constants/seo'

export default Vue.extend({
  name: 'ArsanandhaSoon',
  data: () => {
    return {
      imageFile: require('assets/svg/APLOGO.svg')
    }
  }
})
</script>

<style scoped>

</style>
