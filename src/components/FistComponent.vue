<template>

  <div>
    <h1 v-text="title">vue的第一个组件</h1>
  </div>
</template>

<script>
export default {
  name: 'FistComponent',
  data () {
    return {
      title: 'ToDoList Update'
    }
  }
}
</script>

<style scoped>

</style>
