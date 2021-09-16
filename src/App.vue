<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

    <!-- *** interpolation *** -->
    <div id="app-1">
      <h1>{{ headerText }}</h1>
    </div>

    <!-- *** directives *** -->
    <!-- <div id="app-2">
      <h1>{{ modelText }}</h1>
      <input v-model="modelText" class="form-control" />
    </div>

    <div id="app-3">
      <button @click="counter += 1">Add 1</button>
      <p>The button above has been clicked {{ counter }} times.</p>
    </div>

    <div id="app-4">
      <h1 v-bind:style="styleObject">{{ headerText }}</h1>
    </div>

    <div id="app-4">
      <p v-html="strongHeaderText"></p>
    </div> -->

    <!-- *** computed *** -->
    <!-- <div id="app-5">
      <p>Original message: "{{ headerText }}"</p>
      <p>Computed reversed message: "{{ reversedMessage }}"</p>
    </div> -->

    <!-- *** Conditioning *** -->
    <!-- <div id="app-6">
      <p v-if="isShow">{{ truthyText }}</p>
      <p v-else>{{ falsyText }}</p>
    </div> -->

    <!-- *** Looping *** -->
    <!-- <div id="app-7">
      <li v-for="(todo, index) in todos" v-bind:key="index">
        {{ todo.text }}
      </li>
    </div> -->

    <!-- *** component rendering  *** -->
    <div id="app-8">
      <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
      <router-link to="/categories"> Categories</router-link>
      <!-- <listOfCategories :categoryList="categoryList" /> -->
    <router-link to="/products"> Products</router-link>
      <!-- <listOfProducts :categoryList="categoryList" /> -->
      <router-view/>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import listOfCategories from "./components/listOfCategories";
// import listOfProducts from './components/listOfProducts.vue';

export default {
  name: "App",
  data() {
    return {
      headerText: "eComerce Website",
      strongHeaderText: "<strong>Vue.js Workshop</strong>",
      modelText: "Please Update",
      truthyText: "Now you see me",
      falsyText: "Now you can't see me",
      isShow: false,
      counter: 0,
      todos: [
        { text: "Learn JavaScript" },
        { text: "Learn Vue" },
        { text: "Learn React" },
      ],
      categoryList: [
        {
          category: "Electronics",
          id: 1,
          products: [
            {
              id: 1,
              name: "Laptop",
              manufacturer: "Apple",
              picture:
                "https://appleshop.com.pk/wp-content/uploads/2020/11/MYD82LL.jpg",
            },
            {
              id: 2,
              name: "Air Fryer",
              manufacturer: "Samsung",
              picture:
                "https://image-us.samsung.com/SamsungUS/home/home-appliances/ranges/slide-in/pdp/nx60t8711/nx60t8711sg-aa/gallery/NX60T8711SG_01_Black_SCOM.jpg?$product-details-jpg$",
            },
          ],
        },
        {
          category: "AutoMobile",
          id: 1,
          products: [
            {
              id: 1,
              name: "Car",
              manufacturer: "Ford",
              picture: "https://i.ytimg.com/vi/wha2ymqizVk/maxresdefault.jpg",
            },
            {
              id: 2,
              name: "Excavator",
              manufacturer: "BobCat",
              picture:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Ilcg-o1D8XkVOaHgL82W_I4oqQSF_kGN-cnrDT2vby7E8bRG7iDnP_dyiz8utsL0HME&usqp=CAU",
            },
          ],
        },
        {
          category: "Foot Wear",
          id: 1,
          products: [
            {
              id: 1,
              name: "Safety Shoes",
              manufacturer: "Puma",
              picture:
                "https://m.media-amazon.com/images/I/719O9SyRtAL._AC_UL1500_.jpg",
            },
            {
              id: 2,
              name: "Socks",
              manufacturer: "Nike",
              picture:
                "https://m.media-amazon.com/images/I/81cHu8Y3-wL._AC_UX385_.jpg",
            },
          ],
        },
        {
          category: "Beauty Products",
          id: 1,
          products: [
            {
              id: 1,
              name: "Lipstick",
              manufacturer: "Mac",
              picture:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGBSxwFbaiJS3klRhmFRKuZTI71BGpa5jATQ&usqp=CAU",
            },
            {
              id: 2,
              name: "Hair Dryer",
              manufacturer: "Remington",
              picture:
                "https://cdn.shopify.com/s/files/1/0522/2357/4165/products/71f324c2a0e05355cd59fc5bf49eed7d.jpg?v=1624015630",
            },
          ],
        },
      ],
      styleObject: {
        color: "yellow",
        fontSize: "1rem",
      },
    };
  },
  computed: {
    reversedMessage: function() {
      return this.headerText
        .split("")
        .reverse()
        .join("");
    },
  },
  components: {
    // HelloWorld,
    // listOfCategories,
    // listOfProducts,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
