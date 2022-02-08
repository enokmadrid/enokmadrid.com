<template>
    <section class="container-fluid background-gradient section-space mb-5">
        <div class="container page-box">
            <div class="row text-xs-center no-gutters">
                <SectionTitle 
                    :title="`What I do`"
                    :subtitle="`I Design Interfaces for Digital Product Experiences`"
                />
                <div class="row">
                    <sectionIconCard v-for="card in cards" :key="card.id"
                        :icon="require(`~/assets/images/svg/illustration-icons/${card.icon}`)"
                        :title="card.title"
                        :description="card.description"
                    />
                </div>
            </div>
        </div>
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