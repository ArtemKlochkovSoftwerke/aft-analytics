
<script setup>
import Section from '@/UI/components/Section/Section.vue';
import AftButton from '@/UI/ui-library/Button.vue'



defineProps({
    items: {
        type: Array,
        default: [],
    }
})
</script>
<template>
    <div class="aft-history">
        <Section class="aft-history__container" container-class="large">
            <h2 class="aft-history__title-main">
                Истории клиентов
            </h2>
            <div class="aft-history__row" v-for="(item, idx) in items" :key="idx" :class="{'-reversed': (idx % 2) === 1}">
                <div class="aft-history__img-container">
                    <img :src="item.img"/>
                </div>
                <div class="aft-history__content">
                    <h2 class="aft-history__title">Как в партнерстве с АФТ повысила эффективность, расстановку приоритетов и совершенство управления цепочками поставок</h2>
                    <p class="aft-history__text">Многомиллиардная промышленная производственная компания, работала с Gartner над оценкой зрелости, а также выявлением и устранением пробелов в производительности в процессе планирования продаж и операций. процесс планирования операций</p>

                </div>
            </div>
            <div class="aft-history__btn-group">
                <AftButton type="secondary">Читать все</AftButton>
            </div>
        </Section>
    </div>
</template>

<style lang="scss">
.aft-history {
    background-color: var(--aft-bg-light-blue);

    &__container {
        display: flex;
        flex-direction: column;
        gap: 55px;

        @media screen and (max-width: 780px){
            gap: 16px;
        }
    }

    img {
        width: 100%;
        height: 100%;
        max-width: 100%;
        object-fit: cover;
    }

    &__row {
        display: grid;

        gap: 72px;

        @media screen and (max-width: 780px){
            text-align: center;
            gap: 30px;
            padding: 20px;

            border-top: 2px solid #58C4A9;

            & + & {
                border-bottom: 2px solid #58C4A9;
            }
        }

        @media screen and (min-width: 780px){
            grid-template-columns: 1fr 2fr;
            &.-reversed {
                grid-template-columns: 2fr 1fr;
                .aft-history__content {
                    order: -1;


                    &:after {
                        content: '';
                        position: absolute;
                        height: 100%;
                        width: 2px;
                        background: #00bd7e;
                        left: auto;
                        right: -36px;
                        top: 0;
                    }

                }
            }
        }


    }

    &__title {
        font: var(--font-h2);
    }

    &__title-main {
        font: var(--font-h1-mobile);
        text-align: center;

        @media screen and (min-width: 780px){
            display: none;
        }
    }

    &__text {
        font: var(--font-h3-secondary);
        margin-top: 20px;
    }

    &__img-container {
        @media screen and (max-width: 781px){
            display: none;
        }
    }

    &__content {
        padding: var(--aft-space-4);
        background: #E4E5EF;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;

        @media screen and (min-width: 780px){
            padding: var(--aft-space-6);
            &:after {
                content: '';
                position: absolute;
                height: 100%;
                width: 2px;
                background: #00bd7e;
                left: -36px;
                top: 0;
            }
        }
    }

    &__btn-group {
        text-align: center;
    }
}
</style>