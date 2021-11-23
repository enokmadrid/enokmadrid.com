<template>
    <nav class="navbar navbar-expand-lg py-3 {% if isDark %}navbar-dark{% endif %} {% if islight %}navbar-light{% endif %} {% if isSplit %}navbar-split{% endif %} z-10 fixed-top">
        <div class="container">
            <a class="navbar-brand text-uppercase" href="#">
                <img class="logo" src="~/assets/images/enok-logo.svg" alt="Enok Madrid Logo">
                Enok Madrid
            </a>

            <div class="navbar-collapse collapse">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item {% if this.page.id == 'homepage' %}active{% endif %}">
                    <a class="nav-link" href="#">Work</a>
                </li>
                <li class="nav-item {% if this.page.id == 'about' %}active{% endif %}">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item {% if this.page.id == 'process-discovery' %}active{% endif %}">
                    <a class="nav-link" href="#">Process</a>
                </li>
                <li class="nav-item {% if this.page.id == 'learn' %}active{% endif %}">
                    <a class="nav-link" href="#">Training</a>
                </li>
            </ul>
            
            <div class="my-2 my-md-0">
                <a href="https://goo.gl/forms/ipwbE95jv0x5FXbX2" target="_blank" class="btn btn-primary rounded-pill btn-sm">
                    <i class="fa fa-phone text-sm-center"></i> Contact me
                </a>
            </div>
            </div>
        </div>
    </nav>
</template>

<script>

</script>
