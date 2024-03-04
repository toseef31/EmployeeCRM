<template>
  <div class="users">
    <base-card>
      <template v-slot:second>
        <section id="trainers" class="trainers">
      <div class="container">

        <div class="row">
          <div class="col-lg-5 col-md-6 d-flex align-items-stretch" v-for="user in parentData" :key="user.id">
            <div class="member">
              <img :src="user.profile" class="img-fluid" alt="">
              <div class="member-content">
                <h4>{{user.name}}</h4>
                <span>{{ user.degree }}</span>
                <p>
                  {{ user.bio }}
                </p>
                <div>
                  
      
        <button type="button" class="btn btn-primary" @click="updateUser(user.id)">
          {{ operations[0] }}
        </button>
        &nbsp;
        <button type="button" class="btn btn-danger" @click="deleteUser(user.id)">
          {{ operations[1] }}
        </button>

        <TaskManagement> </TaskManagement>
                </div>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section><!-- End Trainers Section -->


        
      </template>
    </base-card>
  </div>
</template>

<script>
import TaskManagement from "./TaskManagement.vue";

export default {
  name: "UsersManagement",
  components: {
    TaskManagement
  },

  data() {
    return {};
  },

  inject: ["operations", "deleteUser"],

  props: ['parentData'],
  // props: ["id", "name", "degree"],

  emits: {
    "handle-update": function (id) {
      console.log(id)
      if (!id || id <= -1) return false;
      else return true;
    },
  },

  methods: {
    updateUser(val) {
      console.log("Updating user number: ", val);
      this.$emit("handle-update", val);
    },
  },

  computed: {},

  watch: {},
};
</script>

<style lang="scss" scoped>
</style>