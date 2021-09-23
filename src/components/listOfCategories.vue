<template>
  <div>
    <p>Category List</p>
    <div id="categoryDiv">
      
      <div v-for="category in $store.state.categoryList" :key="category.id">
        <p>{{ category.category }}</p>
        <img v-bind:src="category.products[0].picture" id="imageCTag" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "listOfCategories",
  props: {},
  data() {
    return {
    };
  },
  methods: {
    messageRecieved(arg1, arg2) {
      console.log("message from child", arg1, arg2);
    },
  },
};
</script>

<style>
#categoryDiv {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
#imageCTag {
  height: 150px;
  width: 150px;
}
</style>
