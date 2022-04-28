<template>
	<section id="solutions" class="container-fluid background-gradient section-height">
		<div class="p-relative z-5">
			<Title class="py-5"
				data-aos="fade-up" 
				data-aos-duration="500"
				data-aos-easing="ease-in-out-cubic"
				:title="`Design & Code`"
				:subtitle="`I can help you with designing and building experiences with simple content structure, clean UI patterns with a slight touch of wow.`"
			/>
			<div class="container"
				data-aos="fade-up" 
				data-aos-duration="500"
				data-aos-easing="ease-in-out-cubic">
				<ul class="page-box row text-xs-center no-gutters pl-0"
					data-aos="fade-up" 
					data-aos-duration="500"
					data-aos-easing="ease-in-out-cubic">
					<HomeIconCard v-for="card in cards" :key="card.id"
						:icon="require(`~/assets/images/svg/illustration-icons/${card.icon}`)"
						:title="card.title"
						:description="card.description"
					/>
				</ul>
			</div>
			<HomeListIcons
				data-aos="fade-up" 
				data-aos-duration="500"
				data-aos-easing="ease-in-out-cubic"/>
			<HomeProcessCTA class="mt-5"/>
		</div>

		<div class="angle-bg d-none d-lg-block p-relative">
			<div class="angle-split-2 p-absoulte">
				<div class="brand-pattern-bg"></div>
			</div>
		</div>
		
	</section>
</template>

<script>
import aosMixin from '~/mixins/aos'
export default {
	data: () => ({
		cards: []
	}),
	async created() {
		this.cards = await this.$content('iconCards')
		.sortBy('id')
		.limit(3)
		.fetch();
	},
	mixins: [aosMixin]
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_mixins.scss';
.section-height {
	height: auto;
	overflow: hidden;
}
$section-height: 1150px;
@include breakpoint(lg-up) {
	.section-height {
		height: $section-height;
	}
}

.p-absolute {
	position: absolute;
}
.p-relative {
	position: relative;
}
.angle-bg {
	z-index: 0;
	top: -$section-height;
}
.angle-split-2 {
  overflow: hidden;
  height: $section-height;
  margin-left: -80%;
  margin-right: 47%;
  border-right: 7px solid #e21955;
  background-color: #070710;
  -webkit-transform: skew(45deg, 0deg);
  -ms-transform: skew(45deg, 0deg);
  transform: skew(45deg, 0deg);
}
.brand-pattern-bg {
	left: 730px;
	border-top: 5px solid $primary;
}
</style>