<template>
    <div>
        <form class="todo-form">
             <UiInput v-model:input-model="title"/>
            <textarea  placeholder="Введите описание" v-model="description" type="text" rows="10" cols="4"></textarea>
            <p class="error-message">
                {{ errorMessage }}</p>
            <UiButton @click.prevent="emit('createTodo')">
                Создать
            </UiButton>
        </form>
    </div>
</template>

<script setup>
import UiButton from './ui/ui-button.vue';
import UiInput from './ui/ui-input.vue';

const title = defineModel('title')
const description = defineModel('description')

const emit = defineEmits(['createTodo'])
const {errorMessage} = defineProps(['errorMessage'])
</script>

<style scoped>
.todo-form {
    display: flex;
    width: 40%;
    flex-direction: column;
}
.error-message {
    color: red;
    font-size: 18px;
    font-family: sans-serif;
    font-weight: 700;
    
}

input, textarea {
    padding: 10px 15px;
    margin: 10px 0;
}
</style>