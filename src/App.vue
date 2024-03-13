<template>
  <AppHeader v-model="loggedIn" @update:modelValue="handleLoggedStatus"></AppHeader>

  <router-view></router-view>

  <AppSubscribe></AppSubscribe>
  <AppFooter></AppFooter>

</template>

<script>
import AppHeader from "./components/layouts/AppHeader.vue";
import AppSubscribe from "./components/layouts/AppSubscribe.vue"
import AppFooter from "./components/layouts/AppFooter.vue"

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    AppSubscribe
  },
  data() {
    return {
      selectedUserIndex: null,
      loggedIn: false,
      users: [
        {
          id: 0,
          name: "Ammar",
          degree: "BSCS",
          bio: "",
          profile: "/img/trainers/trainer-1.jpg",
        },
        {
          id: 1,
          name: "Ali",
          degree: "Civil",
          bio: "",
          profile: "/img/trainers/trainer-3.jpg",
        },
      ],
    };
  },
  methods: {
    handleUpdate(val) {
      console.log("User updated: ", val);
    },

    handleLoggedStatus(loggedIn) {
      console.log('Is logged in: ', loggedIn)
    }
  },

  computed: {
  },

  watch: {},

  beforeCreate() {
    console.log("beforeCreate");
  },

  created() {
    console.log("created");
  },

  beforeMount() {
    console.log("beforeMount");
  },

  mounted() {
    console.log("mounted");
  },

  beforeUpdate() {
    console.log("beforeUpdate");
  },

  updated() {
    console.log("updated");
  },

  beforeUnmounted() {
    console.log("beforeUnmounted");
  },

  unmounted() {
    console.log("unmounted");
  },
};
</script>

<style lang="scss">
@import '~bootstrap/dist/css/bootstrap.min.css';
@import 'boxicons/css/boxicons.min.css';
@import "~bootstrap-icons/font/bootstrap-icons.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
