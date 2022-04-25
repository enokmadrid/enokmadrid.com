<template>
    <footer class="footer-page container-fluid text-center text-lg-left">
        <div class="container">
            <h5 class="display-1  text-decoration mb-4">Let's Work Together!</h5>
            <p>Talk to me about what I can do for your business.</p>
            <a href="https://goo.gl/forms/ipwbE95jv0x5FXbX2" target="_blank" class="btn btn-primary btn-lg rounded-pill brand-gradient hasArrow __right" role="button">Let's Connect</a>
        </div>
        <div class="footer--row">
            <div class="container d-none d-sm-flex justify-content-between align-items-center py-3">
                <small>Made with <fa :icon="['fas', 'heart']"/> in Las Vegas</small>
                <div class="social-media">
                    <a href="https://github.com/enokmadrid" target="_blank"><fa :icon="['fab', 'github']"/></a>
                    <a href="https://www.instagram.com/enokmadrid" target="_blank"><fa :icon="['fab', 'instagram']"/></a>
                    <a href="https://twitter.com/enokmadrid" target="_blank"><fa :icon="['fab', 'twitter']"/></a>
                    <a href="https://dribbble.com/enokmadrid" target="_blank"><fa :icon="['fab', 'dribbble']"/></a>
                    <a href="https://www.linkedin.com/in/enokmadrid" target="_blank"><fa :icon="['fab', 'linkedin']"/></a>
                </div>
            </div>
        </div>
    </footer>
</template>


<style lang="scss" scoped>
//********* Footer *********
.footer-page {
  margin:0;
  padding: 150px 0 0;

  &.dark {
    background: $brand-black;
  }

  .btn-lg {
    margin-bottom: 100px;
  }

  .footer--row {
    
    small, .svg-inline--fa {
      color: $gray-light;
    }

    .svg-inline--fa:not(.fa-heart) {
      $iconSize: 2rem;
      width: $iconSize;
      height: $iconSize;
      opacity: 0.7;
      &:hover {
        transition: all 0.15s ease-in-out;
        opacity: 1;
      }
    }

    .fa-heart {
      color: $primary;
    }
  }

  .social-media a {
      padding-left: 20px;
  }
}

</style>