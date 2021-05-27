<template>
  <div>
    <div>
      <ul>
        <li v-for="item in items " :key="item.id">
          <span v-text="item.id"></span>
          <span v-text="item.title"></span>
        </li>
      </ul>
    </div>
    <div>
      <input type="text" v-model="newItem">
      <button @click="addNewItem">添加</button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'AddComponent',
  data () {
    return {
      items: [
        {
          id: 0,
          title: '条目1'
        },
        {
          id: 1,
          title: '条目2'
        },
        {
          id: 2,
          title: '条目3'
        }
      ]
    }
  },
  methods: {
    addNewItem () {
      this.items.push({
        id: this.id,
        title: this.newItem
      })
      this.newItem = ''
    }
  }
}
</script>

<style scoped>

</style>
