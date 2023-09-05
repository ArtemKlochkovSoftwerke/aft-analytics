<script setup>
import {reactive, ref} from "vue";
import AftButton from '@/UI/ui-library/Button.vue'

let dialogVisible = ref(false);
let showPass = ref(false);
const login = reactive({ mail: '', password: '', remember: false });

const open = () => dialogVisible.value = true;

defineExpose({
    open
});
</script>

<template>
    <el-dialog
        v-model="dialogVisible"
        width="90%"
        class="loginDialog"
    >
        <template #header>
            <div class="dialog-header">Добро пожаловать!</div>
        </template>
        <div class="loginDialog__container">
            <h2>Войти в личный кабинет</h2>

            <div class="form-field">
                <div class="form-field__label">Логин</div>
                <el-input v-model="login.mail" placeholder="Ведите имя или почту    " />
            </div>

            <div class="form-field">
                <div class="form-field__label">Пароль</div>
                <el-input :type="showPass ? 'text' : 'password'" v-model="login.password" placeholder="Введите пароль">
                    <template #append>
                        <el-icon size="20" @click="showPass = !showPass" color="#023E8A">
                            <View v-if="showPass"/>
                            <Hide v-else/>
                        </el-icon>
                    </template>
                </el-input>
            </div>
            <div class="form-forget">
                <el-checkbox v-model="login.remember" label="Запомнить меня" size="large" />
                <el-link>Забыли пароль?</el-link>
            </div>
            <AftButton @click="() => dialogVisible = false" size="full">Войти</AftButton>
            <div class="form-register">
                <span>Нет аккаунта?</span>
                <el-link type="">Зарегистрироваться?</el-link>
            </div>
        </div>
        <template #footer>
        </template>
    </el-dialog>
</template>

<style lang="scss">
.loginDialog {
    max-width: 505px;

    .dialog-header {
        font: var(--font-h2);
    }

    h2 {
        font: var(--font-h2);
        font-size: 31px;
        margin-bottom: 72px;
        color: #000;
    }

    &__container {

    }

    .el-input-group__append {
        background: #fff;
        border: none;
        box-shadow: none;
        position: absolute;
        right: 10px;
        width: 29px;
        height: 29px;
        padding: 0;
        min-height: auto;
        top: 14px;
        cursor: pointer;
    }

    .form-field {
        & + .form-field {
            margin-top: 40px;
        }
        &__label {
            font: var(--font-h4);
            color: #0E3365;
            padding: 0 0 8px 8px;
        }

        .el-input__inner {
            --el-input-inner-height: 59px;
        }

        .el-input__wrapper {
            padding: 1px 24px;
        }
    }

    .form-forget {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 16px 0 30px;
    }

    .form-register {
        font: var(--font-h4);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-top: 32px;

        a {
            font-weight: bold;
        }
    }
}
</style>