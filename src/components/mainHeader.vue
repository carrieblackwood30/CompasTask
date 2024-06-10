<template>
    <div class="flex text-white justify-around items-center text-[18px] max-sm:flex-col">
        <div class="flex gap-6">
            <div class="flex justify-around w-full">
                <RouterLink to="/">
                    <img src="@/assets/icons/logo.svg" alt="logo">
                </RouterLink>
                <div class="hidden max-sm:block absolute right-0 m-2 top-0"  @click="burgerToggle = !burgerToggle">
                   <img src="@/assets/icons/burger-icon.svg" alt="burger" width="30">
                </div>
            </div>
            <div class="flex gap-6" :class="`${burgerToggle ? 'max-sm:flex absolute right-0 flex-col gap-0 top-10 bg-[#0584FE] border-cyan-800 text-white p-2' : 'max-sm:hidden block'}`">
                <RouterLink to="tariffs/" class=" hover:text-[#0584FE]">Тарифы</RouterLink>
                <RouterLink to="Contacts/" class=" hover:text-[#0584FE]">Контакты</RouterLink>
            </div>
        </div>

        <div class="flex gap-6 items-center max-sm:mt-4">
            <a href="tel:+4951184422" class="hover:text-[#0584FE] max-sm:text-[16px]">+7 495 118-44-22</a>
            <button class=" hover:text-[#0584FE] max-sm:text-[16px]">Вход</button>
            <button class=" bg-[#0584FE] px-4 py-2 rounded-xl max-sm:text-[16px]">Регистрация</button>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';

    const burgerToggle = ref(false)
</script>