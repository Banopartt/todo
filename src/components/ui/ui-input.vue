<template>
    <div>
     <input class="ui-input" type="text" v-model="inputModel" :placeholder="placeholder">
    </div>
</template>

<script setup>
     const inputModel = defineModel('inputModel')

     const {placeholder} = defineProps({
        placeholder: String
     })
</script>

<style scoped>
 .ui-input {
    padding: 5px;
    border-radius: 4px;
  }
</style>