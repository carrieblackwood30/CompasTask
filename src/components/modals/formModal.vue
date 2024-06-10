<template>
    <div class="fixed top-0 bottom-0 left-0 right-0" v-if="$props.switch">
        <div class="bg-[rgba(0,0,0,0.8)] w-full h-full flex justify-center items-center z-20">
            <div class="relative">
                <slot/>
                <iframe width="981" height="552" class="max-sm:max-w-[350px] max-sm:max-h-[240px]"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Rick Astley - Never Gonna Give You Up (Official Music Video)" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
                </iframe>
            </div>
        </div>
    </div>
</template>

<script setup>

    const props = defineProps({
        switch: Boolean
    })

    const emit = defineEmits(['cloneBtn'])

</script>