<template>
    <component
        :is="to ? 'nuxt-link' : href ? 'a' : 'button'"
        :to="to"
        :href="href"
        @click="$emit('click')"
        data-aos="fade-right" 
        data-aos-duration="500"
        data-aos-easing="ease-in-out-cubic"
        role="button"
    >
        <slot></slot>
    </component>
</template>
<script>
export default {
    props: [
        "to",
        "href",
        "label",
    ]
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';

.c-primary {
  color: $brand-primary;
}

.btn:not(.btn-link){
  box-shadow: $shadow-small;
  @extend %transition-gradient;
  
  &:hover {
    box-shadow: $shadow-large;
  }
}

.has-arrow {
  &.__right::after, 
  &.__left::before {
    font-family: "streamline-icons-font" !important;
    opacity: 1;
    position: relative;
    top: 2px;
    line-height: 0.9;
    transition: all 0.15s ease-in-out;
  }
  &.__right {
    &::after {
      content: "\65";
      left: 8px;
      text-transform: none;
    }
    &:hover::after {
      left: 15px;
    }
  }
  &.__left {
    &::before {
      content: "\63";
      right: 8px;
      text-transform: none;
    }
    &:hover::before {
      right: 15px;
    }
  }
}

.btn {
  &.btn-sm {
    font-size: 0.7rem;
    letter-spacing: 0.02rem;
  }
  text-transform: uppercase;
  letter-spacing: 0.05rem;
}


.btn-space {
  margin-bottom: 6px;
  display: inline-block;
}

@include breakpoint(sm) {
    .btn {
        width: 100%;
    }
}
</style>