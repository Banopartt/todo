<template>
    <div>
        <TodoNavbar/>
        <slot></slot>
        <TodoFooter/>
        
    </div>
</template>

<script setup>
import TodoFooter from '@/components/todo-footer.vue';
import TodoNavbar from '@/components/todo-navbar.vue';


</script>

<style scoped>

</style>