<script setup>
import Section from '@/UI/components/Section/Section.vue';
import TelegramIcon from '@/assets/icons/telegram.svg';
import LinkedINIcon from '@/assets/icons/LinkedIN.svg';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import { RouterLink } from 'vue-router'
import { onMounted } from 'vue'

defineProps({
    items: {
        type: Array,
        default: [],
    }
})

const toggleAccordion = (e, listItems) => {
    listItems?.forEach(list => {
        const target = e.currentTarget;
        const expandedItem = list.nextElementSibling;

        const force = target === list ? !target.classList.contains('active') : false;
        expandedItem?.classList.add('is-transitioning');
        expandedItem?.style.setProperty('--max-height', expandedItem.scrollHeight + 'px');
        const onTransitionend = event => {
            expandedItem?.style.removeProperty('--max-height');
            expandedItem?.classList.remove('is-transitioning');
        }
        expandedItem.addEventListener('transitionend', onTransitionend, { once: true, composed: true });

        window.requestAnimationFrame(() => {
            list?.classList.toggle('active', force);
            expandedItem?.classList.toggle('active', force);
        })
    })
}

onMounted(() => {
    const titles = document.querySelectorAll('.aft-footer-nav__group-title')


    titles?.forEach(
        list => list?.addEventListener('click', (e) =>
            toggleAccordion(e, [...titles])
        )
    );
})

const handleToggleList = ({target}) => {
    console.log(target)
}

</script>

<template>
    <footer class="aft-footer">
        <Section class="aft-footer__container">
            <nav class="aft-footer-nav">
                <div class="aft-footer-nav__item" v-for="group in items">
                    <p class="aft-footer-nav__group-title" @click="handleToggleList">{{group.group}} <ArrowDown /></p>
                    <div class="aft-footer-nav__box">
                        <div v-for="nav in group.items" class="aft-footer-nav__wrapper">
                            <p class="aft-footer-nav__title">{{nav.title}}</p>
                            <ul class="aft-footer-list" >
                                <li class="aft-footer-list__item" v-for="subItem in nav.nav"><RouterLink to="/" class="aft-footer-list__link">
                                    {{ subItem.title }}</RouterLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="aft-footer-bottom">
                <RouterLink to="/" class="aft-footer-list__link">АФТ Все права защищены</RouterLink>
                <div class="aft-footer-bottom__social">
                    <a><TelegramIcon /></a>
                    <a><LinkedINIcon /></a>
                </div>
            </div>
        </Section>
    </footer>
</template>

<style lang="scss">
@import "src/styles/mixins";
    .aft-footer {
        background: #FAFAFA;
        &__container {
            padding: 55px 55px 25px;

            @include devices(tablet-big-max){
                padding: 16px;
            }
        }

        &-nav {
            @include devices(tablet-big-min){
                display: flex;
            }

            &__box {
                display: flex;

                @include devices(tablet-big-max) {
                    gap: 10px;
                    transition: all 0.5s;

                    &:not(.active) {
                        max-height: 0 !important;
                        opacity: 0;
                    }
                    &.active {
                        max-height: var(--max-height);
                        opacity: 1;
                    }
                    &.is-transitioning {
                        -moz-transition-property: max-height, opacity;
                        transition-property: max-height, opacity;
                        overflow: hidden !important;
                    }
                    &.active:not(.is-transitioning) {
                        overflow: visible;
                    }
                    &:not(.active):not(.is-transitioning) {
                        display: none;
                    }

                    .aft-footer-nav__wrapper + .aft-footer-nav__wrapper {
                        flex: 1 0 50%;
                        gap: 10px;
                    }
                    .aft-footer-nav__title {
                        display: none;
                    }
                }

                @include devices(tablet-big-min) {
                    display: flex;
                    width: 100%;
                    justify-content: space-around;
                }
            }

            &__item {
                padding-bottom: 10px;
                @include devices(tablet-big-min) {
                    display: flex;
                    justify-content: space-around;
                    padding-bottom: 0;
                    &:nth-child(1) {
                        li {
                            max-width: 220px;
                        }
                    }

                    &:nth-child(1), &:nth-child(2) {
                        width: 33%;
                    }

                    &:nth-child(3), &:nth-child(4) {
                        width: 16.5%;
                    }
                }

            }

            &__title, &__group-title {
                font: var(--font-footer);
                padding-bottom: 20px;
                color: #252B42;
            }

            &__group-title {
                border-bottom: 2px solid #58C4A9;
                margin-bottom: 20px;
                display: flex;
                align-items: center;
                justify-content: space-between;

                svg {
                    transition: all 0.3s;
                }

                &.active {
                    svg {
                        transform: rotateZ(180deg);
                    }
                }
                @include devices(tablet-big-min){
                    display: none;
                }
            }
        }

        &-list {
            display: flex;
            flex-direction: column;
            gap: 10px;

            &__link {
                text-decoration: none;
                font: var(--font-footer);
                color: #737373;

                @include devices(tablet-big-min){
                    font: var(--font-footer);
                }
            }
        }

        &-bottom {
            margin-top: 10px;
            padding: 55px 55px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;

            @include devices(tablet-big-max){
                padding: 16px;
            }

            &__social {
                display: flex;
                align-items: center;
                gap: 20px;
            }
        }
    }
</style>