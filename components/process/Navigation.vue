<template>
    <div class="flexbox-container mobile-menu process">
        <NuxtLink v-for="step in steps" :key="step.id" :to="`/process/${step.slug}`" class="flex-link {% if this.page.id == 'process-discovery' %}active{% endif %}">
            <i :class="['icon', step.navIcon]">
                <span>{{step.title}}</span>
            </i>
        </NuxtLink>
    </div>
</template>

<script>
export default {
    data: () => ({
        steps: []
    }),
    async created() {
        this.steps = await this.$content('process').sortBy('id').fetch();
    }
}
</script>
