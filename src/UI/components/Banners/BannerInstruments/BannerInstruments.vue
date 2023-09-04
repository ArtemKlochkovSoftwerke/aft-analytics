
<script setup>
import Section from '@/UI/components/Section/Section.vue';
import IconPDF from '@/assets/icons/pdf.svg';


defineProps({
    items: {
        type: Array,
        default: [],
    }
})

</script>
<template>
    <div class="aft-instruments">
        <Section class="aft-instruments__container" container-class="small">
            <div class="aft-instruments__column">
                <h2 class="aft-instruments__title">Инструменты для принятия более разумных и быстрых решений</h2>
                <p class="aft-instruments__content">От эталонных показателей до фреймворков и рейтингов — мы предлагаем практические решения, необходимые для преобразования ваших критически важных приоритетов в измеримые бизнес-результаты.</p>
            </div>
            <div class="aft-instruments__column">
                <div class="aft-instruments__item">
                    <div class="aft-instruments__icon"><IconPDF /></div>
                    <div class="aft-instruments__text">Анализ операционной эффективности ИТ</div>
                </div>
                <div class="aft-instruments__item">
                    <div class="aft-instruments__icon"><IconPDF /></div>
                    <div class="aft-instruments__text">Оценка распределения ресурсов ИТ</div>
                </div>
                <div class="aft-instruments__item">
                    <div class="aft-instruments__icon"><IconPDF /></div>
                    <div class="aft-instruments__text">Оценка цифровой зрелости</div>
                </div>
            </div>
        </Section>
    </div>
</template>

<style lang="scss">
.aft-instruments {
    background-color: var(--aft-bg-light-blue);

    &__container {
        //padding: 55px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 24px;

        @media screen and (min-width: 780px){
            grid-template-columns: 1fr 1fr;
        }
    }

    &__column {
        display: flex;
        flex-direction: column;
        gap: 30px;

        @media screen and (min-width: 780px){
            gap: 50px;
        }
    }

    &__row {
        display: grid;
        gap: 100px;
        align-items: center;

        @media screen and (min-width: 780px){
            grid-template-columns: 1fr 1fr;
        }

        &.-reversed {
            .aft-banner__content {
                order: -1;
            }
        }
    }

    &__title {
        font: var(--font-h1);

        @media screen and (max-width: 780px) {
            font: var(--font-h1-mobile);
        }
    }

    &__content {
        font: var(--font-h2);
        margin-top: 20px;

        @media screen and (max-width: 780px) {
            font: var(--font-h2-mobile);
        }
    }

    &__btn-group {
        display: flex;
        align-items: center;
        gap: var(--aft-space-5);
    }

    &__item {
        background: rgba(228, 229, 239, 1);
        padding: var(--aft-space-3) var(--aft-space-5);
        display: flex;
        align-items: center;
        gap: 30px;
        border-radius: 10px;
    }

    &__text {
        width: 100%;
        font: var(--font-h3);

        @media screen and (min-width: 780px) {
            text-align: center;
        }
    }

    &__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 82px;
        height: 82px;
        border-radius: 50%;
        background: #023E8A;

        svg {
            width: 50px;
        }
    }
}
</style>