<script setup>
import Section from '@/UI/components/Section/Section.vue';
import AFT from '@/assets/icons/aft.svg';
import AftButton from '@/UI/ui-library/Button.vue';
import LoginDialog from '@/UI/components/Dialog/LoginDialog.vue';
import Member from '@/UI/components/Dialog/Member.vue';
import { RouterLink } from 'vue-router';
import { ref, onMounted, reactive, onUnmounted } from 'vue';


let isShown = ref(false);
let loginDialog = ref(null);
let member = ref(null);
const scroll = reactive({ isHidden: false, lastPosition: 0 });



const toggleVisibility = () => {
    isShown.value = !isShown.value;
}



const handleScroll = () => {
    isShown.value = false;
    if (window.scrollY <= 200) {
        scroll.isHidden = false;
    } else scroll.isHidden = scroll.lastPosition < window.scrollY;
    

    scroll.lastPosition = window.scrollY;
}

const handleMenuClick = ({target}) => {
    if (!isShown.value || target.closest('.hamburger-lines')) {
        return
    }


    if (target.tagName !== 'a' && !target.closest('.mobile-navigation')) {
        isShown.value = false;
    }
}

const openDialog = () => {
    loginDialog.value.open();
}

const openDialog2 = () => {
    member.value.open();
}



onUnmounted(() => { 
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('click', handleMenuClick)
})
onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('click', handleMenuClick)
})
</script>
<template>
    <header class="aft-header" :class="{isHidden: scroll.isHidden}">
        <nav class="aft-header-top">
            <Section class="aft-header-top__wrapper">
                <div class="aft-header-top__logo">
                    <RouterLink to="/"><AFT /></RouterLink>
                </div>
                <ul class="aft-header-top__list">
                    <li class="aft-header-top__item">
                        <RouterLink to="/" class="aft-header-top__link">Вебинары</RouterLink>
                    </li>
                    <li class="aft-header-top__item">
                        <RouterLink to="/" class="aft-header-top__link">Отчеты</RouterLink>
                    </li>
                    <li class="aft-header-top__item">
                        <RouterLink to="/" class="aft-header-top__link">Об АФТ</RouterLink>
                    </li>
                    <li class="aft-header-top__item">
                        <RouterLink to="/" class="aft-header-top__link">Новости</RouterLink>
                    </li>
                    <li class="aft-header-top__item">
                        <RouterLink to="/" class="aft-header-top__link">Карьера</RouterLink>
                    </li>
                </ul>
                <span @click="openDialog">Личный кабинет</span>
            </Section>
        </nav>
        <Section class="fixed-height">
            <div class="aft-header-main">
                <div class="aft-header-main__mobile">
                    <div class="hamburger-lines" @click="toggleVisibility" :class="{ active: isShown }">
                        <span class="line line1"></span>
                        <span class="line line2"></span>
                        <span class="line line3"></span>
                    </div>
                    <div class="mobile-navigation" :class="{ active: isShown }">
                        <ul class="mobile-navigation__section">
                            <li><RouterLink to="/" class="aft-header-main__link">Инсайты</RouterLink></li>
                            <li><RouterLink to="/" class="aft-header-main__link">Интервью и подкасты</RouterLink></li>
                            <li><RouterLink to="/" class="aft-header-main__link">Инструменты</RouterLink></li>
                            <li><RouterLink to="/" class="aft-header-main__link">Профессиональное сообщество</RouterLink></li>
                        </ul>
                        <ul class="mobile-navigation__section">
                            <li><RouterLink to="/" class="aft-header-main__link">Вебинары</RouterLink></li>
                            <li><RouterLink to="/" class="aft-header-main__link">Отчеты</RouterLink></li>
                            <li><RouterLink to="/" class="aft-header-main__link">Об АФТ</RouterLink></li>
                            <li><RouterLink to="/" class="aft-header-main__link">Новости</RouterLink></li>
                        </ul>
                    </div>
                </div>
                <div class="aft-header-main__logo">
                    <RouterLink to="/"><AFT /></RouterLink>
                </div>
                <div class="aft-header-main__nav">
                    <RouterLink to="/" class="aft-header-main__link">Инсайты</RouterLink>
                    <RouterLink to="/" class="aft-header-main__link">Интервью и подкасты</RouterLink>
                    <RouterLink to="/" class="aft-header-main__link">Инструменты</RouterLink>
                    <RouterLink to="/" class="aft-header-main__link">Профессиональное сообщество</RouterLink>
                </div>
                <div class="aft-header-main__contact">
                    <div>
                        <el-icon size="20" :color="color">
                            <Search />
                        </el-icon>
                        <AftButton @click="openDialog2">Стать членом</AftButton>
                    </div>
                    <span class="aft-header-main__phone">or call  +7 991 090 00 00</span>
                </div>

                <div class="aft-header-main__contact-mobile">
                    <div><AftButton @click="openDialog2">Стать членом</AftButton></div>
                    <el-icon size="20" :color="color">
                        <Search />
                    </el-icon>
                </div>
            </div>
        </Section>
    </header>
    <LoginDialog ref="loginDialog"/>
    <Member ref="member"/>
</template>

<style lang="scss">
    .aft-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #fff;
        z-index: 10;

        transition: transform 0.5s cubic-bezier(0.51, -0.01, 0.48, 0.99), -moz-transform 0.5s cubic-bezier(0.51, -0.01, 0.48, 0.99);
            &.isHidden {
                transform: translateY(-100%);
            }
        &-top {
            padding: var(--aft-space-4) var(--aft-space-5);
            background: #FAFAFA;

            @media screen and (max-width: 780px){
                padding: 0 var(--aft-space-4) 0 0;
            }

            &__wrapper {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                gap: var(--aft-space-5);

                @media screen and (max-width: 780px){
                    justify-content: space-between;
                }
            }

            &__logo {
                width: 150px;

                @media screen and (min-width: 780px){
                    display: none;
                }
            }

            &__list {
                display: flex;
                justify-content: flex-end;
                gap: var(--aft-space-5);

                @media screen and (max-width: 780px){
                    display: none;
                }
            }

            &__link {
                font: var(--font-h4);
                text-decoration: none;
                color: var(--aft-color-black);
            }
        }

        &-main {
            display: flex;
            align-items: center;
            gap: 20px;
            position: relative;
            background-color: #fff;
            

            @media screen and (max-width: 780px){
                padding: 16px 16px;
            }

            &__nav {
                display: flex;
                align-items: center;
                gap: 20px;
                @media screen and (max-width: 780px){
                    display: none;
                }

            }

            &__logo {
                width: 250px;

                @media screen and (max-width: 780px){
                    display: none;
                }
            }

            &__mobile {
                @media screen and (min-width: 780px){
                    display: none;
                }
                margin-right: auto;
                .mobile-navigation {
                    position: absolute;
                    top: 60px;
                    left: 30px;
                    background: #fff;
                    padding: 20px 0;
                    border-radius: 10px;
                    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                    max-width: 330px;

                    opacity: 0;
                    visibility: hidden;
                    pointer-events: none;

                    transition: all 0.3s;

                    &.active {
                        opacity: 1;
                        visibility: visible;
                        pointer-events: all;
                    }

                    &__section {
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                        padding: 0 20px;

                        & + .mobile-navigation__section {
                            margin-top: 10px;
                            padding-top: 10px;
                            border-top: 2px solid #58C4A9;
                        }
                    }
                }

            }


            &__link {
                font: var(--font-h4);
                text-decoration: none;
                color: #000;

                @media screen and (max-width: 780px){
                    font: var(--font-h3-mobile);
                }
            }

            &__contact {
                margin-left: auto;
                display: flex;
                flex-direction: column;
                gap: 10px;

                .aft-button {
                    margin-left: 16px;
                }

                @media screen and (max-width: 780px){
                    display: none;
                }

            }

            &__contact-mobile {
                display: flex;
                gap: 10px;
                align-items: center;
                @media screen and (min-width: 780px){
                    display: none;
                }
            }

            &__phone {
                font: var(--font-h4);
                text-align: center;
            }
        }


        .hamburger-lines {
            height: 26px;
            width: 32px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;



            & .line {
                display: block;
                height: 4px;
                width: 100%;
                border-radius: 10px;
                background: #58C4A9;
            }

            & .line1 {
                transform-origin: 0% 0%;
                transition: transform 0.4s ease-in-out;
            }

            & .line2 {
                transition: transform 0.2s ease-in-out;
            }

            & .line3 {
                transform-origin: 0% 100%;
                transition: transform 0.4s ease-in-out;
            }

            &.active .line1 {
                transform: rotate(45deg);
            }

            &.active .line2 {
                transform: scaleY(0);
            }

            &.active .line3 {
                transform: rotate(-45deg);
            }
        }


    }

    @keyframes appear{
    0%{top: -200px}
    100%{top: 0}
}


</style>

