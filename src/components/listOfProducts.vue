<template>
  <div>
    <p>Product List</p>
    <div id="categoryDiv">
      
      <div :id="product.id" v-for="product in $store.state.productsList" :key="product.id" @click="goProduct">
        <p>{{ product.name }}</p>
        <p>{{ product.manufacturer }}</p>
        <img v-bind:src="product.picture" id="imageTag" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "listOfProducts",
  props: {
  },
  data() {
    return {
    };
  },
  methods: {
    goProduct(e) {
      console.log(e.currentTarget.id);
      let productID = e.currentTarget.id;
      

      // debugger;  // eslint-disable-line no-debugger

      this.$store.dispatch("productView", productID);
      this.$router.push(`/products/${productID}`)
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
#imageTag {
  height: 150px;
  width: 150px;
}
</style>
