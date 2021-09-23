<template>
  <div>
    <p>Product</p>
    <div id="categoryDiv">
      <div>
        <p>{{ $store.state.selectedProduct[0].name }}</p>
        <p>{{ $store.state.selectedProduct[0].manufacturer }}</p>
        <img
          v-bind:src="$store.state.selectedProduct[0].picture"
          id="imageTag"
        />
      </div>
      <!-- <p>product id is {{ $route.params.productID }}</p> -->
      <button
        @click="addCart"
        :id="$store.state.selectedProduct[0].id"
        class="addToCart"
      >
        Add to cart
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {},
  data() {
    return {};
  },
  beforeMount: function() {
    // console.log(this.$store.state.selectedProduct);
  },
  methods: {
    addCart(e) {
      console.log(e.currentTarget.id);
      debugger; // eslint-disable-line no-debugger
      this.$store.dispatch(
        "addProductToCart",
        this.$store.state.selectedProduct[0]
      );
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
.addToCart {
  height: 40px;
  width: auto;
  background-color: white;
  border-radius: 3px;
  margin-top: 8%;
}
</style>
