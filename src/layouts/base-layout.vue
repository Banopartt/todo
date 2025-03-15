<template>
    <div>
        <TodoNavbar />
        <WidgetSidebar />
        <main class="container">
            <slot></slot>
        </main>
        <TodoFooter/>
        
    </div>
</template>

<script setup>
import TodoFooter from '@/components/todo-footer.vue';
import TodoNavbar from '@/components/todo-navbar.vue';
import WidgetSidebar from '@/components/widget-sidebar.vue';
import { provide, ref } from 'vue';

const isOpenSidebar = ref(false)
provide("isOpenSidebar", isOpenSidebar)
</script>

<style scoped>
.container {
    width: 80%;
    margin: 0 auto;
    padding: 0 20px;
}
</style>