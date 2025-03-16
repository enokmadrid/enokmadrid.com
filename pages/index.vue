<template>
  <div>
    <HomeHero 
      data-aos="fade-in" 
      data-aos-duration="500"
      data-aos-easing="ease-in-out-cubic"
    />
    <Projects 
      data-aos="fade-up" 
      data-aos-duration="500"
      data-aos-easing="ease-in-out-cubic"
    />
    <HomePageBox 
      data-aos="fade-up" 
      data-aos-duration="500"
      data-aos-easing="ease-in-out-cubic"
    />
  </div>
</template>

<script setup lang="ts">
import { useAos } from '~/composables/useAos'

useAos({
  duration: 500,
  easing: 'ease-in-out-cubic'
})
</script>
