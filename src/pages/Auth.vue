<template>
    <div class="auth d-flex flex-column align-items-center">
        <h1 class="m-5">Auth Page</h1>
    <form @submit.prevent="Auth" novalidate>
        <div class="mb-3">
            <label for="mail" class="form-label">Эл. почта🐕</label>
            <input 
            v-model="mail" 
            type="email" 
            class="form-control" 
            :class="{'is-invalid': v$.mail.$error }"
            id="mail">
            <!-- <div id="emailHelp" class="form-text"></div> -->
                <div class="invalid-feedback">
                    Не правильно, это не почта!
                </div>
        </div>
        <div class="mb-3">
            <label for="pass" class="form-label">Пароль</label>
            <input 
                v-model="pass"
                type="password"
                class="form-control"
                :class="{'is-invalid': v$.pass.$error }"
                id="pass"
                @input="passwordIsValid">
            <!-- <div id="passwordHelp" class="form-text">Ваш пароль пока что не защищен</div> -->
                <div v-if="v$.pass.passwordIsValid.$invalid" class="invalid-feedback">
                    Пароль должен содержать буквы и цифры
                </div>
                <div v-if="v$.pass.minLength.$invalid" class="invalid-feedback">
                    Длина пароля должна быть не менее 8 символов
                </div>
        </div>
        <div class="mb-3">
            <input 
            id="check" 
            v-model="agreement" 
            type="checkbox" 
            class="form-check-input me-2"> 
                <label for="check">
                    Согласие на обработку данных
                </label>
        </div>
        <button 
            :disabled="!fieldsNotEmpty"
            type="submit" 
            class="btn btn-success">
                Авторизоваться
        </button>
    </form>
    </div>
  
</template>
<script>
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, helpers } from '@vuelidate/validators'

const passwordIsValid = helpers.regex(/^(?=.*[a-zA-Z])(?=.*\d).*$/)

    export default{
        mixins: ['validationMixin'],
        data(){
            return{
                v$: useVuelidate(),
                mail: '',
                pass: '',
                agreement: false,
                //подстроить под бэкенд
                isLoading: false,
                //isAuth поместить потом в стейт менеджер что бы когда пользователь авторизован скрывать меню авторизация/регистрация
                isAuth: false
            }
        },
        methods: {
            async Auth(){ 
                this.v$.$touch();
                if(!this.v$.$error && this.v$.$silentErrors){
                    //заменить потом на адрес с личным кабинетом
                    this.$router.push('/')
                    console.log('isAuth')
                    // 
                }
            },
 
        },
        computed: {
            fieldsNotEmpty(){
                if(this.mail != '' && this.pass != '' && this.agreement){
                    return true
                }
                else{
                    return false
                }

            }
        },
        validations () {
            return {
                mail: 
                { 
                    required, 
                    email,
                },
                pass: 
                { 
                    required, 
                    minLength: minLength(8), 
                    passwordIsValid
            }
        }
    }
}
</script>

<style scoped>
    h1{
        color: white;
    }
    form{
        width: 300px;
        color: white;
    }
</style>