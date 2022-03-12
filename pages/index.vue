<template>
  <div>
    <SectionHero 
      data-aos="fade-left" 
      data-aos-duration="500"
      data-aos-easing="ease-in-out-cubic"
    />
    <SectionProjects 
      data-aos="fade-up" 
      data-aos-duration="500"
      data-aos-easing="ease-in-out-cubic"
    />
    <SectionPageBox 
      data-aos="fade-right" 
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
