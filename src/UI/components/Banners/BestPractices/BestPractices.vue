
<script setup>
import Section from '@/UI/components/Section/Section.vue';
import AftButton from '@/UI/ui-library/Button.vue'
import IconPDF from '@/assets/icons/pdf.svg';
import IconAnalytics from '@/assets/icons/analytics.svg';
import IconExcel from '@/assets/icons/excel.svg';
import IconReport from '@/assets/icons/report.svg';
import IconMetric from '@/assets/icons/metric.svg';


defineProps({
    items: {
        type: Array,
        default: [],
    }
})

</script>
<template>
    <div class="aft-practices">
        <Section class="aft-practices__container" container-class="small">
            <h2 class="aft-practices__title">АФТ предоставляет действенные и удобные инструменты руководителям и их командам</h2>
            <div class="aft-practices__items">
                <div class="aft-practices__item" v-for="item in items">
                    <div class="aft-practices__icon"><component :is="item.icon"/></div>
                    <p class="aft-practices__text">{{ item.text }}</p>
                </div>
            </div>
        </Section>
    </div>
</template>

<style lang="scss">
.aft-practices {
    background-image: url("src/assets/img/banner/bannerBG.svg");
    background-size: cover;


    &__title {
        font: var(--font-h1);
        color: #023E8A;
        margin-bottom: 55px;

        @media screen and (max-width: 780px) {
            font: var(--font-h1-mobile);
            margin-bottom: var(--aft-space-7);
        }
    }

    &__items {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 26px;

    }

    &__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        background: #E4E5EF;
        flex: 1;
        padding: var(--aft-space-2);
        border-radius: 10px;
        position: relative;

        @media screen and (max-width: 781px){
            flex: 1 0 calc(50% - 20px);
        }

        @media screen and (min-width: 780px){
            &:not(:nth-child(6)):after {
                content: '';
                position: absolute;
                height: 100%;
                width: 2px;
                background: #00bd7e;
                right: -14px;
                top: 0;
            }
        }
    }

    &__text {
        font: var(--font-h3-secondary)
    }

    &__icon {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 55px;
        width: 55px;
        height: 55px;
        border-radius: 50%;
        background: #023E8A;

        svg {
            width: 30px;
        }
    }
}
</style>