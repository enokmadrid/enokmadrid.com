<template>
    <nav class="navbar navbar-expand-lg py-3 navbar-dark {% if islight %}navbar-light{% endif %} navbar-split z-10 fixed-top">
        <div class="container">
            <NuxtLink class="navbar-brand text-uppercase" to="/">
                <img class="logo" src="~/assets/images/enok-logo.svg" alt="Enok Madrid Logo">
                Enok Madrid
            </NuxtLink>

            <div class="navbar-collapse collapse">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/">Work</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/about">About</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/process/discovery">Process</NuxtLink>
                </li>
                <li class="nav-item">
                    <NuxtLink class="nav-link" to="/learn">Training</NuxtLink>
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
