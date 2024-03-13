<template>
  <div class="user-manage-div">
    <section>
      <button type="button" :class="{ 'activeTab': selectedComponent === 'app-employees' }" @click="loadComponent('app-employees')">Employees</button>
      <button type="button" :class="{ 'activeTab': selectedComponent === 'app-managers' }" @click="loadComponent('app-managers')">Managers</button>
    </section>

    <keep-alive>
      <section id="trainers" class="trainers section-padding">
        <div class="container">
          <div class="row">
            <template v-for="user in users" :key="user.id">
              <component :is="selectedComponent" :userData="user"></component>
            </template>
          </div>
        </div>
      </section>
    </keep-alive>
  </div>
</template>

<script>
import AppEmployees from './AppEmployees.vue';
import AppManagers from './AppManagers.vue';

export default {
  name: "UsersManagement",
  components: {
    AppEmployees,
    AppManagers
  },

  data() {
    return {
      selectedComponent: "app-employees",
      users: [],
      employees: [
        {
          id: 0,
          name: "Wali",
          level: "Employee",
          designation: "Senior React Developer",
          profile: "/img/trainers/trainer-1.jpg",
        },
        {
          id: 1,
          name: "Sarfraz",
          level: "Employee",
          designation: "Senior Frontend Developer",
          profile: "/img/trainers/trainer-3.jpg",
        },
        {
          id: 2,
          name: "Ali",
          level: "Project Coordinator",
          designation: "Project Bidder/Coordinator",
          profile: "/img/trainers/trainer-3.jpg",
        },
      ],
      managers: [
        {
          id: 0,
          name: "Tauseef",
          level: "Owner",
          designation: "CEO",
          profile: "/img/trainers/trainer-1.jpg",
        },
        {
          id: 1,
          name: "Waheed",
          level: "COO",
          designation: "Partner",
          profile: "/img/trainers/trainer-3.jpg",
        },
      ],
    };
  },

  mounted() {
    this.loadComponent("app-employees")
  },

  methods: {
    loadComponent(componentName) {
      this.selectedComponent = componentName;
      if (componentName === 'app-employees') this.users = this.employees;
      else if (componentName === 'app-managers') this.users = this.managers;
    },
  },

  computed: {},

  watch: {},
};
</script>

<style lang="scss" scoped>
.user-manage-div {
  section {
    display: flex;

    button {
      background-color: #98b3d6;
      width: 50%;
      color: white;
      border: 0;
      padding: 15px;

      &:hover {
        background-color: #4977b4;
      }
    }
  }

  .activeTab {
    background-color: #4977b4;
  }
}
</style>