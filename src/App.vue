<template>
  <div>
    <TodoForm :error-message="errorMessage" v-model:title="title" v-model:description="description" @create-todo="CreateTodo" />
    <div class="wrapper">
      <TodoCard v-for="(todo, id) in todoCards" :title="todo.title" :description="todo.description" :key="id" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TodoCard from './components/todo-card.vue';
import TodoForm from './components/todo-form.vue';
import { todoCards } from './const/mock-data';

const title = ref("")
const description = ref("")

const errorMessage = ref("")

const CreateTodo = () => {
  if (title.value === "" || description.value === "") {
    errorMessage.value = "Please fill in both title and description."
    return
  }

  const newTodo = {
    title: title.value,
    description: description.value,
    id: Date.now(),
  }

  todoCards.push(newTodo)
  title.value = ""
  description.value = ""
  errorMessage.value = ""
}
</script>

<style scoped>
.wrapper {
  margin-top: 60px;
}
</style>