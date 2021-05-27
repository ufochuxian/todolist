<template>
  <div class="TodoList">
    <h1 v-text="title"></h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        <span v-text="item.id"></span>
        <span v-text="item.title"></span>
        <button v-on:click="toogleFinish(item)">完成</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ListComponent',
  data () {
    return {
      title: 'ToDoList',
      items: [
        {
          id: 1,
          title: '吃饭'
        },
        {
          id: 2,
          title: '睡觉'
        },
        {
          id: 3,
          title: '打豆豆'
        }
      ]
    }
  },
  methods: {
    toogleFinish (recyclerItem) {
      this.items.map((item, index) => {
        if (recyclerItem.id === item.id) {
          this.items.splice(index, 1)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
