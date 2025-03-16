<template>
	<section id="solutions" class="w-full px-4 bg-gradient-to-r from-primary to-secondary min-h-screen">
		<div class="relative z-5">
			<Title class="py-5"
				:title="`Design & Code`"
				:subtitle="`I can help you with designing and building experiences with simple content structure, clean UI patterns with a slight touch of wow.`"
			/>
			<canvas id="canvas" width="100" height="100"></canvas>
			<div class="container mx-auto px-4"
				data-aos="fade-up" 
				data-aos-duration="500"
				data-aos-easing="ease-in-out-cubic">
				<div v-if="loading" class="text-center text-white py-8">
					Loading...
				</div>
				<div v-else-if="error" class="text-center text-white py-8">
					{{ error.message }}
				</div>
				<div v-else>
					<ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center p-0"
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
			</div>
			<HomeListIcons
				data-aos="fade-up" 
				data-aos-duration="500"
				data-aos-easing="ease-in-out-cubic"/>
			<HomeProcessCTA class="mt-5"/>
		</div>

		<div class="hidden lg:block relative">
			<div class="absolute overflow-hidden h-[100vh] -ml-[80%] mr-[47%] border-r-[7px] border-[#e21955] bg-[#070710] transform skew-x-45">
				<div class="absolute left-[730px] border-t-[5px] border-primary"></div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
interface Card {
	id: string;
	icon: string;
	title: string;
	description: string;
}

interface GraphQLResponse {
	cards: Card[];
}

declare module '@nuxt/types' {
	interface Context {
		$graphql: {
			default: {
				request<T>(query: string): Promise<T>;
			};
		};
	}
}

export default {
	data() {
		return {
			loading: true,
			error: null as Error | null,
			cards: [] as Card[]
		}
	},
	async fetch() {
		try {
			const query = `
				query {
					cards(orderBy: order_ASC) {
						id
						icon
						title
						description
					}
				}
			`
			const response = await this.$graphql.default.request<GraphQLResponse>(query)
			this.cards = response.cards
		} catch (error) {
			this.error = error as Error
		} finally {
			this.loading = false
		}
	}
}
</script>

<style lang="postcss" scoped>
#canvas {
	@apply absolute top-0 left-0 w-full h-full opacity-20;
}
</style>