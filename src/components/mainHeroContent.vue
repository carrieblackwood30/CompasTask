<template>
    <div class="flex items-center w-[1135px] max-sm:w-[340px] max-sm:flex-col">
        <form @submit.prevent="formSubmit" class="max-sm:max-w-[340px]">
            <h3 class="text-[41px] font-bold ml-4 max-sm:text-[20px]">Проверьте штрафы и зарегестрируйтесь в 1 клик</h3>
            <div class="max-w-[563px] max-sm:max-w-[380px]">
                <div class="flex gap-4">
                    <div>
                        <label for="autoNumber" class="block ml-4">Номер автомобиля</label>
                        <input type="text" id="autoNumber" class="border border-[#BCBCBC] m-4 mt-0 w-fit p-1 max-sm:max-w-[150px]" required>
                    </div>
                    <div>
                        <label for="region" class="block">Регион</label>
                        <input type="text" id="region" class="border border-[#BCBCBC] p-1 max-sm:max-w-[150px]" required>
                    </div>
                </div>
                <label for="registration" class="ml-4">Свидетельство о регистрации ТС</label>
                <input type="text" id="registration" class="border border-[#BCBCBC] block w-full ml-4 p-1 max-sm:max-w-[340px]" required>
            </div>
            <div class="flex items-center mt-2 max-sm:text-[12px]">
                <button class="bg-[#0584FE] flex items-center gap-2 p-2 rounded-lg m-4 text-white">
                    Проверить штрафы
                    <img src="@/assets/icons/arrow-right.svg" alt="">
                </button>
                <button class="border border-[#0584FE] flex items-center p-2 rounded-lg gap-2 px-4 max-sm:max-w-[180px]" 
                type="button"
                @click="modalToggle = !modalToggle"
                >
                    <img src="@/assets/icons/youtube-icon.svg" alt="">
                    О сервисе (1мин. 20сек)
                </button>
            </div>
            <p class="ml-4 text-gray-500 text-[13px] max-sm:max-w-[300px]">
                Нажимая «Проверить штрафы» вы соглашаетесь с 
                политикой обработки персональных данных и принимаете оферту
            </p>
        </form>
        <div>
            <img src="@/assets/icons/hero-laptop.svg" alt="laptopAndMobile" class="max-sm:max-w-[350px]">
        </div>
        <formModal :switch="modalToggle">
            <button class="absolute top-0 right-0 z-40 mt-[-20px] text-white"
                @click="modalToggle = !modalToggle"
            >X</button>
        </formModal>
    </div>
</template>


<script setup>
    import formModal from '@/components/modals/formModal.vue'
    import { ref } from 'vue';

    const modalToggle = ref(false)

    function formSubmit(){
        alert("данные были отправлены")
    }

</script>