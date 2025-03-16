<template>
	<div class="flex justify-between items-center">
		<Button
			v-if="prev" 
			:to="prev.path" 
			class="flex items-center text-gray-700 hover:text-primary transition-colors">
				<fa :icon="['fas', 'arrow-left']" class="mr-2"/>
				<span>{{ prev.title }}</span>
		</Button>
		<Button
			v-if="next" 
			:to="next.path" 
			class="flex items-center text-gray-700 hover:text-primary transition-colors">
				<span>{{ next.title }}</span>
				<fa :icon="['fas', 'arrow-right']" class="ml-2"/>
		</Button>
	</div>
</template>

<script>
export default {
    name: 'PrevNext',
    props: {
        prev: {
            type: Object,
            required: false,
            default: null,
            validator: (value) => !value || (value.path && value.title)
        },
        next: {
            type: Object,
            required: false,
            default: null,
            validator: (value) => !value || (value.path && value.title)
        }
    }
}
</script>