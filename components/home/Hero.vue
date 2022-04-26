<template>
    <div class="jumbotron jumbotron-fluid shift-up hero fullscreen">
        <div class="container position-relative z-5">
            <div class="d-flex flex-column-reverse flex-sm-row">
                <div class="copy-hero">
                    <span class="display-1 mb-4  text-decoration"
                          data-aos="fade-up" 
                          data-aos-duration="500"
                          data-aos-easing="ease-in-out-cubic"
                    >Hi, I'm Enok!</span>
                    <h1 class="display-2 text-hero-title"
                        data-aos="fade-up" 
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out-cubic"
                    >Design Engineer</h1>
                    <p class="mt-4 text-hero-description"
                      data-aos="fade-up" 
                      data-aos-duration="500"
                      data-aos-easing="ease-in-out-cubic"
                    >I <a href="https://www.youtube.com/enokmadrid" target="blank">create UX content</a> and help tech startups make profits by leading them into delighting their customers.</p>
                </div>
                <Gravatar
                      class="align-self-center large"
                      data-aos="fade-up-left" 
                      data-aos-duration="500"
                      data-aos-easing="ease-in-out-cubic"/>
            </div>
            <div class="mt-4 mb-1 ctas">
              <Button class="btn rounded-pill btn-lg btn-primary brand-gradient has-arrow __right" href="#solutions">Learn How I Can Help</Button>
              <Button class="btn rounded-pill btn-lg btn-light" href="#projects">View My Portfolio</Button>
            </div>
        </div>
        <div class="overflow-hidden d-none d-lg-block">
            <div class="angle-split">
                <div class="brand-pattern-bg"></div>
            </div>
        </div>
    </div>
</template>

<script>
import aosMixin from '~/mixins/aos'
export default {
    mixins: [aosMixin]
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';
@include breakpoint(lg-up) {
    .text-hero-description {
        padding-right: 30%;
    }
}

.jumbotron-fluid {
  &.shift-up {
    @include breakpoint(sm-up) {
      padding: 120px 0;
    }
    @include breakpoint(md-up) {
      padding: 250px 0 60px;
      margin-top: -88px;
    }
  }

  &.hero {
    .container {
      top: 40%;
    }
    @include breakpoint(xs) {
      text-align: center;
      height:100vh;
      
      .container {
        position: absolute;
        top: 15%;
      }
    }

  }

  .copy-hero {
    @include breakpoint(md-down) {
      width: 100%;
    }
    @include breakpoint(md-up) {
      width: 70%;
    }
    @include breakpoint(lg-up) {
      width: 60%;
    }
  }

  .scroll {
    margin-top: 0 !important;
    position: absolute;
    right: 0;
    left: 0;
    bottom: 5%;
    text-align: center;

    i {
      font-size: 36px;
      color: white;
      opacity: 0.3;
    }
  }

  &.hero {
    background-color: white;
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
  }
}

.overflow-hidden {
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  z-index: 0;
  display: block;
  overflow: hidden;
}


.angle-split {
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  overflow: hidden;
  height: 700px;
  margin-right: -40%;
  margin-left: 60%;
  border-left: 7px solid #e21955;
  background-color: #070710;
  -webkit-transform: skew(45deg, 0deg);
  -ms-transform: skew(45deg, 0deg);
  transform: skew(45deg, 0deg);
}


.brand-pattern-bg {
  left: -49%;
  top: 0%;
  bottom: auto;
  border-bottom: 5px solid #e21955;
}

.ctas {
  @include breakpoint(xs) {
    .btn {
      margin-top: 0;
      margin-bottom: 8px;
      width: 100%;
    }
  }
}
</style>