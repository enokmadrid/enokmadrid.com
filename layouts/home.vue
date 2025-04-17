<template>
	<div class="min-h-screen">
		<LayoutNavigation />
		<LayoutNavigationMobile />
		<main class="relative z-10 pt-20">
			<NuxtPage />
		</main>
		<LayoutFooter />
	</div>
</template>

<script>
export default {
	name: 'HomeLayout'
}
</script> 