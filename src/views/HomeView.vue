<template>
    <header id="header" class="p-4">
        <mainHeader />
    </header>
    <main class="mx-56 my-20 max-sm:m-0">
        <mainHeroContent />
        <advantages />
        <documents />
    </main>
</template>

<script setup>
    import mainHeader from "@/components/mainHeader.vue"
    import mainHeroContent from "@/components/mainHeroContent.vue"
    import advantages from "@/components/advantages.vue"
    import documents from "@/components/documents.vue"
</script>

<style scoped>
#header{
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(28,39,52,1) 83%);
}
</style>