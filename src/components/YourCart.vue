<template>
  <div>
    <p>Your Cart</p>
    <div 
    
    >
      <div
        :id="product.id"
        v-for="product in $store.state.cart"
        :key="product.id"
      >
        <p>{{ product.name }}</p>
        <p>{{ product.manufacturer }}</p>
        <img v-bind:src="product.picture" id="imageTag" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "YourCart",
  props: {},
  data() {
    return {};
  },
  methods: {},
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
#imageTag {
  height: 150px;
  width: 150px;
}
</style>
