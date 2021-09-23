import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    productsList: [
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

      {
        id: 3,
        name: "Car",
        manufacturer: "Ford",
        picture: "https://i.ytimg.com/vi/wha2ymqizVk/maxresdefault.jpg",
      },
      {
        id: 4,
        name: "Excavator",
        manufacturer: "BobCat",
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Ilcg-o1D8XkVOaHgL82W_I4oqQSF_kGN-cnrDT2vby7E8bRG7iDnP_dyiz8utsL0HME&usqp=CAU",
      },

      {
        id: 5,
        name: "Safety Shoes",
        manufacturer: "Puma",
        picture:
          "https://m.media-amazon.com/images/I/719O9SyRtAL._AC_UL1500_.jpg",
      },
      {
        id: 6,
        name: "Socks",
        manufacturer: "Nike",
        picture:
          "https://m.media-amazon.com/images/I/81cHu8Y3-wL._AC_UX385_.jpg",
      },

      {
        id: 7,
        name: "Lipstick",
        manufacturer: "Mac",
        picture:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGBSxwFbaiJS3klRhmFRKuZTI71BGpa5jATQ&usqp=CAU",
      },
      {
        id: 8,
        name: "Hair Dryer",
        manufacturer: "Remington",
        picture:
          "https://cdn.shopify.com/s/files/1/0522/2357/4165/products/71f324c2a0e05355cd59fc5bf49eed7d.jpg?v=1624015630",
      },
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
    cart: [],
    selectedProduct: null,
  },
  mutations: {
    addToCart(state, productToAdd) {
      state.cart.push(productToAdd);
      debugger;  // eslint-disable-line no-debugger
    },
    selectProduct(state, prductID) {
      state.selectedProduct = state.productsList.filter((product) => {
        return product.id == prductID;
      });
    },
  },
  actions: {
    addProductToCart(context, productToAdd) {
      context.commit("addToCart", productToAdd);
    },
    productView(context, productToSelect) {
      context.commit("selectProduct", productToSelect);
    },
  },
  modules: {},
});
