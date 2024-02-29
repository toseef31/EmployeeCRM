<template>
  <GameMonster msg="Welcome to Vue Monster game" :gameReady="true" />

  <br />
  <p style="border: 1px solid black"></p>
  <br />

  <UsersManagement
    v-for="user in users"
    :key="user.id"
    :id="user.id"
    :name="user.name"
    :degree="user.degree"
    @user-updated="userUpdated"
  >
  </UsersManagement>

  <br />
  <p style="border: 1px solid black"></p>
  <br />

  <TaskManagement> </TaskManagement>
</template>

<script>
import GameMonster from "./components/GameMonster.vue";
import UsersManagement from "./components/UsersManagement.vue";
import TaskManagement from "./components/TaskManagement.vue";

export default {
  name: "App",
  components: {
    GameMonster,
    UsersManagement,
    TaskManagement,
  },
  data() {
    return {
      users: [
        {
          id: 0,
          name: "Ammar",
          degree: "BSCS",
        },
        {
          id: 1,
          name: "Ali",
          degree: "Civil",
        },
      ],
    };
  },
  methods: {
    userUpdated(val) {
      console.log("User updated: ", val);
    },

    deleteUser() {
      console.log("parent delete");
    },
  },

  // provide: {
  //   operations: ['Update', 'Delete', 'Edit', 'Add']
  // },

  provide() {
    return {
      operations: ["Update", "Delete", "Edit", "Add"],
      deleteUser: this.deleteUser,
    };
  },

  computed: {},

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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
