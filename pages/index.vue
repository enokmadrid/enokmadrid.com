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

<script>
import aosMixin from '~/mixins/aos'
export default {
  mixins: [aosMixin]
}
</script>
