<template>
    <div>

    </div>
</template>

<script setup>
const { name, age, aboutMe, hobbies } = defineProps({
    name: String,
    age: Number,
    aboutMe: String,
    isShowHoddies: Boolean
})

const emits = defineEmits(['handleShowHobbies'])

</script>

<style scoped></style>