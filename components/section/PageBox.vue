<template>
    <section class="container-fluid background-gradient section-space mb-5">
        <SectionTitle 
            :title="`What I do`"
            :subtitle="`I Design Interfaces for Digital Product Experiences`"
        />
        
        <div class="container page-box">
            <ul class="row text-xs-center no-gutters pl-0">
                <sectionIconCard v-for="card in cards" :key="card.id"
                    :icon="require(`~/assets/images/svg/illustration-icons/${card.icon}`)"
                    :title="card.title"
                    :description="card.description"
                />
            </ul>
        </div>

        <SectionListIcons/>
    </section>
</template>

<script>
export default {
    data: () => ({
        cards: []
    }),
    async created() {
        this.cards = await this.$content('iconCards')
        .sortBy('id')
        .limit(3)
        .fetch();
    }
}
</script>