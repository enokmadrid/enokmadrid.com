<template>
    <nav class="sticky-header fixed-bottom">
        <div class="flexbox-container mobile-menu d-flex d-lg-none">
            <NuxtLink to="/" exact class="flex-link">
                <i class="icon icon-toolbox">
                    <span>Work</span>
                </i>
            </NuxtLink>
            <NuxtLink to="/about" class="flex-link">
                <i class="icon icon-person">
                    <span>About</span>
                </i>
            </NuxtLink>
            <NuxtLink to="/process" class="flex-link">
                <i class="icon icon-process">
                    <span>Process</span>
                </i>
            </NuxtLink>
            <a href="https://goo.gl/forms/ipwbE95jv0x5FXbX2" target="_blank" class="flex-link">
                <i class="icon icon-email-send-1">
                    <span>Contact</span>
                </i>
            </a>
        </div>
    </nav>
</template>

<script>

</script>
