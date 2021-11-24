<template>
    <div class="flexbox-container mobile-menu process">
        <a href="#" class="flex-link {% if this.page.id == 'process-discovery' %}active{% endif %}">
            <i class="icon icon-binoculars">
                <span>Discovery</span>
            </i>
        </a>
        <a href="#" class="flex-link {% if this.page.id == 'process-exploration' %}active{% endif %}">
            <i class="icon icon-compass-3">
                <span>Exploration</span>
            </i>
        </a>
        <a href="#" class="flex-link {% if this.page.id == 'process-prototype' %}active{% endif %}">
            <i class="icon icon-app">
                <span>Prototype</span>
            </i>
        </a>
        <a href="#" class="flex-link {% if this.page.id == 'process-design' %}active{% endif %}">
            <i class="icon icon-vector-pen">
                <span>UI Design</span>
            </i>
        </a>
        <a href="#" class="flex-link {% if this.page.id == 'process-code' %}active{% endif %}">
            <i class="icon icon-html-five">
                <span>Code</span>
            </i>
        </a>
        <a href="#" class="flex-link {% if this.page.id == 'process-quality-assurance' %}active{% endif %}">
            <i class="icon icon-check-badge">
                <span>Quality Assurance</span>
            </i>
        </a>
    </div>
</template>