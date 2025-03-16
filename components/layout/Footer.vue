<template>
	<footer class="container-fluid lg:pt-[150px]">
		<div class="container mx-auto px-4 text-center">
			<h5 class="text-5xl font-bold mb-4">Let's Work Together!</h5>
			<p class="text-lg mb-6">Talk to me about what I can do for your business.</p>
			<Button class="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-primary to-primary-dark rounded-full mb-[100px] hover:opacity-90 transition-opacity" href="https://goo.gl/forms/ipwbE95jv0x5FXbX2" target="_blank">
				Let's Connect
				<fa :icon="['fas', 'arrow-right']" class="ml-2"/>
			</Button>
		</div>
		<div class="border-t border-gray-100">
			<div class="container mx-auto px-4">
				<div class="hidden sm:flex justify-between items-center py-3">
					<small class="text-gray-500">
						Designed and 
						<a href="https://github.com/enokmadrid/enokmadrid.com" target="_blank" class="text-primary hover:text-primary-dark">Handcrafted</a> 
						with <fa :icon="['fas', 'heart']" class="text-primary"/> in Las Vegas
					</small>
					<div class="flex items-center space-x-4">
						<a href="https://github.com/enokmadrid" target="_blank" class="text-gray-500 hover:text-primary transition-colors"><fa :icon="['fab', 'github']" class="w-8 h-8"/></a>
						<a href="https://www.instagram.com/enokmadrid" target="_blank" class="text-gray-500 hover:text-primary transition-colors"><fa :icon="['fab', 'instagram']" class="w-8 h-8"/></a>
						<a href="https://twitter.com/enokmadrid" target="_blank" class="text-gray-500 hover:text-primary transition-colors"><fa :icon="['fab', 'twitter']" class="w-8 h-8"/></a>
						<a href="https://dribbble.com/enokmadrid" target="_blank" class="text-gray-500 hover:text-primary transition-colors"><fa :icon="['fab', 'dribbble']" class="w-8 h-8"/></a>
						<a href="https://www.linkedin.com/in/enokmadrid" target="_blank" class="text-gray-500 hover:text-primary transition-colors"><fa :icon="['fab', 'linkedin']" class="w-8 h-8"/></a>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer'
}
</script>