<template>
    <div>
        <ProcessHero />
        <ProcessNavigation />
    
        <h1>All Steps</h1>
        <ul>
            <li v-for="step in steps" :key="step.id">
                <NuxtLink :to="`/process/${step.slug}`"> {{step.title}} </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data: () => ({
        steps: []
    }),
    async created() {
        this.steps = await this.$content('steps').sortBy('id').fetch();
    }
}
</script>