<template>
    <div class="todo_card">
        <p>
            {{ todo?.title }}
        </p>
        <span>
            {{ todo?.description }}
        </span>
        <div>
            <UiButton>
                Изменить
            </UiButton>
            <UiButton @click.prevent="emits('removeTodo', todo?.id)">
                Удалить
            </UiButton>
        </div>
    </div>
</template>

<script setup>
import UiButton from './ui/ui-button.vue';

const { todo } = defineProps(['todo']);

const emits = defineEmits(['removeTodo'])
</script>

<style scoped>
.todo_card {
    width: 50%;
    border: 1px solid gray;
    border-radius: 10px;
    padding: 5px 10px;
    color: white;
    background: slategray;
    font-family: Inter, sans-serif;
    margin-bottom: 10px;
}

.todo_card p {
    font-size: 24px;
    font-weight: 700;
}

.todo_card span {
    color: lightgray;
    font-size: 14px;
    display: block;
}

.todo_card button {
    margin-top: 12px;
}
</style>