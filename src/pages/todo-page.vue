<template>
    <div>
      <TodoEdit v-model:selectedTodo="selectedTodo"
       @update-todo="handleUpdateTodo"
       v-model:is-open-modal="isOpenModal" 
       />
      <TodoForm :error-message="errorMessage" v-model:title="title" v-model:description="description"
        @create-todo="createTodo" />
      <div v-if="isLoading">
        <p>Идет загрузка данных</p>
      </div>
  
      <div class="wrapper" v-else-if="todoCards?.length && !isLoading">
        <TodoCard v-for="(todo, id) in todoCards" :todo="todo" :key="id" class="list" @removeTodo="removeTodo"
          @toggleEditModal="toggleEditModal" />
      </div>
      <template v-else>
        <p>
          Список пуст
        </p>
        <p style="color: red;" v-if="errorResponse">
          {{ errorResponse }}
        </p>
      </template>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from "vue";
  import TodoCard from "@/components/todo-card.vue";
  import TodoForm from "@/components/todo-form.vue";
  import TodoEdit from "@/components/todo-edit.vue";
  import axios from "axios";
  const todoCards = ref([])
  const title = ref("")
  const description = ref("")
  const isLoading = ref("")
  const errorMessage = ref("")
  const errorResponse = ref("")
  const selectedTodo = ref(null)


  
  const createTodo = () => {
    if (!title.value.length || !description.value.length) {
      errorMessage.value = "Заполните все поля"
      return;
    }
    todoCards.value.push({
      id: crypto.randomUUID(),
      title: title.value,
      body: body.value,
    })
    title.value = "";
    body.value = "";
    errorMessage.value = "";
  }
  
  const removeTodo = (id) => {
    todoCards.value = todoCards.value.filter((todo) => todo.id !== id)
  }
  
  const isOpenModal = ref(false);
  const toggleEditModal = (todo) => {
    
    selectedTodo.value = todo;
    isOpenModal.value = !isOpenModal.value;
  }
  async function getTodos() {
    try {
      isLoading.value = true
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {})
      todoCards.value = response.data
      isLoading.value = false
    } catch (err) {
      errorResponse.value = "Ошибка при загрузке данных"
      console.error(err)    
    } finally {
      isLoading.value = false
    }
  }
  
  onMounted(() => {
    console.log("Компонент монтирован")
    getTodos()
  })

  const handleUpdateTodo = (updateTodo) => {
    const idx = todoCards.value.findIndex((todo) => todo.id === updateTodo.id)
    if (idx !== -1 ) {
      todoCards.value[idx] = updateTodo
      isOpenModal.value = false
    }
  }

  </script>
  
  <style scoped>
  .wrapper {
    margin-top: 60px;
  }
  </style>