<template>
    <span :class="[
        'inline-block font-[proxima-nova] text-[9px] font-bold uppercase tracking-wider leading-[22px] h-5 px-2 mb-4 rounded-md',
        {
            'text-primary bg-primary/15': theme === 'red',
            'text-[#4540C2] bg-[#4540C2]/15': theme === 'burple',
            'text-[#2F7D89] bg-[#2F7D89]/15': theme === 'mint',
            'text-[#335EAD] bg-[#335EAD]/15': theme === 'blue',
            'text-[#FF4F00] bg-[#FF4F00]/15': theme === 'orange',
            'text-[#E91E63] bg-[#E91E63]/15': theme === 'raspberry'
        }
    ]">{{ title }}</span>
</template>

<script>
export default {
    name: 'Tag',
    props: {
        title: {
            type: String,
            required: true
        },
        theme: {
            type: String,
            required: true,
            validator: (value) => ['red', 'burple', 'mint', 'blue', 'orange', 'raspberry'].includes(value)
        }
    }
}
</script>