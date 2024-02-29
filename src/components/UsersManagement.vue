<template>
  <div class="users">
    <p>{{ id }}</p>
    <p>{{ name }}</p>
    <p>{{ degree }}</p>
    <button type="button" @click="updateUser(id)">{{ operations[0] }}</button> &nbsp;
    <button type="button" @click="deleteUser(id)">{{ operations[1] }}</button>
  </div>
</template>

<script>
export default {
  name: "UsersManagement",
  data() {
    return {};
  },

  inject: [
    'operations',
    'deleteUser'
  ],

  props: ["id", "name", "degree"],

  emits: {
    'user-updated': function (id) {
         if (!id || id <= -1) return false;
         else return true;
    }
  },

  methods: {
    updateUser(val) {
      console.log("Updating user number: ", val);
      this.$emit("user-updated", val);
    },

    // deleteUser(val) {
    //     console.log("Deleting user number: ", val);
    // }
  },

  computed: {},

  watch: {},
};
</script>

<style lang="scss" scoped>
.users {
  background-color: #ededed;
  width: 30%;
  margin: 0 auto;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 12px;
}
</style>