<template>
    <h3 class="font-bold text-[34px] justify-center text-center mt-20 mb-16">Документы</h3>
    
    <div class="flex gap-12 flex-wrap">
        <div class="max-w-[340px] h-[450px] p-4 rounded-lg" id="cards">
            <h3 class="text-[31px] font-bold text-[#1253A2] mb-2">Лицензионный договор</h3>
            <p class="text-[18px] mb-16">
                Механизм разбрасывания веерного типа 
                приводится в действие от колес тележки, 
                отличается простой и надежной конструкцией, 
                не нуждается в смазке. 
            </p>
            <RouterLink to="agreement/">
                <button class="bg-[#0584FE] w-full p-2 rounded-lg text-white mt-16">
                    перейти
                </button>
            </RouterLink>
        </div>

        <div class="max-w-[340px] h-[450px] p-4 rounded-lg" id="cards">
            <h3 class="text-[31px] font-bold text-[#1253A2] mb-2">Политика обработки персональных данных</h3>
            <p class="text-[18px] mb-16">
                Радиус разброса ПГМ составляет до 3 метров и может регулироваться. 
            </p>
            <RouterLink to="agreement/">
                <button class="bg-[#0584FE] w-full p-2 rounded-lg text-white mt-16">
                    перейти
                </button>
            </RouterLink>
        </div>

        <div class="max-w-[340px] h-[450px] p-4 rounded-lg" id="cards">
            <h3 class="text-[31px] font-bold text-[#1253A2] mb-2">Политика обработки персональных данных</h3>
            <p class="text-[18px] mb-16">
                Радиус разброса ПГМ составляет до 3 метров и может регулироваться. 
            </p>
            <RouterLink to="agreement/">
                <button class="bg-[#0584FE] w-full p-2 rounded-lg text-white mt-16">
                    перейти
                </button>
            </RouterLink>
        </div>

    </div>

</template>

<script setup>

</script>

<style scoped>
#cards{
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2)
}
</style>