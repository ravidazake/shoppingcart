import "bootstrap/dist/css/bootstrap.css";
import { createApp } from "vue";
import App from "./App.vue";
import { createStore } from "vuex";
import data from "./mock/products.json";
let json_datas = data;
const store = createStore({
  state: {
    products: json_datas,
    cart: [],
  },
  getters: {
    products: (state) => state.products,
    cart: (state) => state.cart,
  },
  actions: {
    addToCart({ commit }, payload) {
      commit("addProductToCart", payload);
    },
    incQty({ commit }, payload) {
      commit("incrementQty", payload);
    },
    decQty({ commit }, payload) {
      commit("decrementQty", payload);
    },
    delCart({ commit }, payload) {
      commit("deleteFromCart", payload);
    },
    checkout({ commit }) {
      commit("checkout");
    },
  },
  mutations: {
    addProductToCart(state, payload) {
      let data = {
        id: payload.id,
        title: payload.title,
        price: payload.price,
        imgUrl: payload.imgUrl,
        quantity: 1,
      };
      let check = state.cart.find((x) => {
        return x.id === payload.id;
      });
      if (check === undefined) {
        state.cart.push(data);
      } else {
        let data2 = {
          id: check.id,
          title: check.title,
          price: check.price,
          imgUrl: check.imgUrl,
          quantity: check.quantity + 1,
        };
        let newCart = state.cart.filter((x) => {
          return x.id !== payload.id;
        });
        state.cart = [data2, ...newCart];
      }
    },
    incrementQty(state, payload) {
      let check = state.cart.find((x) => {
        return x.id === payload.id;
      });
      if (check !== undefined) {
        let data = {
          id: payload.id,
          title: payload.title,
          price: payload.price,
          imgUrl: payload.imgUrl,
          quantity: payload.quantity + 1,
        };
        let index = state.cart.findIndex((x) => {
          return x.id === payload.id;
        });
        state.cart[index] = data;
      }
    },
    decrementQty(state, payload) {
      let check = state.cart.find((x) => {
        return x.id === payload.id;
      });
      if (check !== undefined) {
        if (payload.quantity > 1) {
          let data = {
            id: payload.id,
            title: payload.title,
            price: payload.price,
            imgUrl: payload.imgUrl,
            quantity: payload.quantity - 1,
          };
          let index = state.cart.findIndex((x) => {
            return x.id === payload.id;
          });
          state.cart[index] = data;
        } else {
          let data = state.cart.filter((x) => {
            return x.id !== payload.id;
          });
          state.cart = data;
        }
      }
    },
    deleteFromCart(state, payload) {
      let check = state.cart.find((x) => {
        return x.id === payload.id;
      });
      if (check !== undefined) {
        let data = state.cart.filter((x) => {
          return x.id !== payload.id;
        });
        state.cart = data;
      }
    },
    checkout(state) {
      if (state.cart.length > 0) {
        let price = 0;
        let cart = state.cart;
        cart.map((x) => {
          price += x.quantity * x.price;
        });
        alert(`Total bayar $${price}`);
      } else {
        alert("Belum tersedia barang di keranjang");
      }
    },
  },
});

createApp(App).use(store).mount("#app");
