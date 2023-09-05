<script setup>
import {reactive, ref} from "vue";
import AftButton from '@/UI/ui-library/Button.vue'

let dialogVisible = ref(false);
let showPass = ref(false);
const login = reactive({ mail: '', post: '', name: '', company: '', surname: '', specialization: '', tel: '', country: '' });

const open = () => dialogVisible.value = true;

defineExpose({
    open
});
</script>

<template>
    <el-dialog
        v-model="dialogVisible"
        width="90%"
        class="memberDialog"
    >
        <div class="memberDialog__container">
            <div class="memberDialog__left">
                <h2>Стать членом</h2>
                <p class="memberDialog__benefits">Клиенты получают круглосуточный доступ к проверенным управленческим и технологическим исследованиям, экспертным советам</p>
                <p class="memberDialog__call-us">Или позвоните нам</p>
                <a class="memberDialog__phone" href=":tel+79910900000">+7 991 090 00 00</a>
                <ul class="memberDialog__list">
                    <li class="memberDialog__list-item">8 a.m. – 7 p.m. ET</li>
                    <li class="memberDialog__list-item">8 a.m. – 5 p.m. GMT</li>
                    <li class="memberDialog__list-item">Monday through Friday</li>
                </ul>
            </div>
            <div class="memberDialog__right">
                <div class="form-item">
                    <el-input v-model="login.mail" placeholder="Почта"/>
                </div>
                <div class="form-item">
                    <el-input v-model="login.post" placeholder="Должность"/>
                </div>
                <div class="form-item">
                    <el-input v-model="login.name" placeholder="Имя"/>
                </div>
                <div class="form-item">
                    <el-input v-model="login.company" placeholder="Компания"/>
                </div>
                <div class="form-item">
                    <el-input v-model="login.surname" placeholder="Фамилия"/>
                </div>
                <div class="form-item">
                    <el-input v-model="login.specialization" placeholder="Специальность"/>
                </div>
                <div class="form-item">
                    <el-input v-model="login.tel" placeholder="Телефон"/>
                </div>
                <div class="form-item">
                    <el-input v-model="login.country" placeholder="Страна"/>
                </div>
                <div class="btn-group">
                    <AftButton @click="() => dialogVisible = false">Отправить</AftButton>
                </div>
            </div>
        </div>
    </el-dialog>
</template>

<style lang="scss">
.memberDialog {
    max-width: 900px;
    --el-bg-color: #e2e2e5;

    &__left {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h2 {
        font: var(--font-h1);
        margin-bottom: 20px;
        color: #0E3365;
        text-align: center;
    }

    &__benefits {
        font: var(--font-h4);
        text-align: center;
        color: #000;
    }

    &__call-us {
        font: var(--font-h2);
        text-align: center;
        color: #0E3365;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    &__phone {
        font: var(--font-h2);
        text-align: center;
        color: #58C4A9;
        margin-bottom: 10px;
        text-decoration: none;
    }

    &__container {
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 20px;

        @media screen and (max-width: 780px) {
            grid-template-columns: 1fr;
            gap: 36px;
        }
    }

    &__list {
        font: var(--font-h3-secondary);
        text-align: center;
        color: #000;
    }

    &__right {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: max-content;
        gap: 36px;

        @media screen and (max-width: 780px) {
            grid-template-columns: 1fr;
        }

        .form-item {
            .el-input__inner {
                --el-input-inner-height: 59px;

            }

            .el-input__wrapper {
                padding: 1px 24px;
                border-radius: 10px;
            }
        }
    }

    .btn-group {
        @media screen and (max-width: 780px) {
            text-align: center;
        }
    }


}
</style>