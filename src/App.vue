<template>
  <AppHeader v-model="loggedIn" @update:modelValue="handleLoggedStatus"></AppHeader>

  <router-view></router-view>

  <AppSubscribe></AppSubscribe>
  <AppFooter></AppFooter>

  <!-- <UsersManagement
    v-for="user in users"
    :key="user.id"
    :id="user.id"
    :name="user.name"
    :degree="user.degree"
    @user-updated="userUpdated"
  >
  </UsersManagement> -->

  <!-- <CompanyProfile>
    <template #default="slotProfile">
              <div class="card-img">
                <img src="/img/events-2.jpg" alt="...">
              </div>
              <div class="card-body">
                <h5 class="card-title"><a href="">{{ slotProfile.item.name }}</a></h5>
                <p class="fst-italic text-center">{{ slotProfile.item.partner_time }}</p>
                <p class="card-text">{{ slotProfile.item.partner }}</p>
              </div>
    </template>
  </CompanyProfile>

  <CompanyCourses></CompanyCourses> -->
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
      selectedComponent: "task-management",
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

    deleteUser(userId) {
      console.log("parent delete: ", userId);
    },

    loadComponent(componentName) {
      this.selectedComponent = componentName;
    },

    handleLoggedStatus(loggedIn) {
      console.log('Is logged in: ', loggedIn)
    }
  },

  provide() {
    return {
      operations: ["Update", "Delete", "Edit", "Add"],
      deleteUser: this.deleteUser,
    };
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
