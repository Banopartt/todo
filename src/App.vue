<template>
  <div>
    <TodoForm :error-message="errorMessage" v-model:title="title" v-model:description="description"
      @create-todo="CreateTodo" />
    <div class="wrapper" v-if="todoCards.length">
      <TodoCard v-for="(todo, id) in todoCards" :todo="todo" :key="id" @removeTodo="removeTodo" />
    </div>
    <p v-else>
      No todos found. Please add a new one.
    </p>

  </div>
</template>

<script setup>
import TodoCard from './components/todo-card.vue';
import TodoForm from './components/todo-form.vue';
import { todoCards } from './const/mock-data';
import { ref } from 'vue';

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

  todoCards.value.push(newTodo)
  title.value = ""
  description.value = ""
  errorMessage.value = ""
}

const removeTodo = (id) => {
  todoCards.value = todoCards.value.filter((todo) => todo.id !== id)
}


</script>

<style scoped>
.wrapper {
  margin-top: 60px;
}
</style>