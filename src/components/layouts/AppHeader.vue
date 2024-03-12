<template>
  <AppContactBar></AppContactBar>

  <header class="main-div d-flex align-items-center">
    <router-link to="">
      <h1 class="title ms-2" @click="func1">
        <span class="title-color1">Peek</span>
        <span class="ms-3 title-color2">Management</span> 
      </h1>
    </router-link>
    <nav id="navbar" class="navbar order-last order-lg-0 links">
      <ul>
        <li>
          <router-link to="/">
            Home
          </router-link>
        </li>
        <li>
          <router-link to="users">
            Users
          </router-link>
        </li>
        <li>
          <router-link to="tasks">
            Tasks
          </router-link>
        </li>
        <li>
          <router-link to="companies">
            Partners
          </router-link>
        </li>
        <li>
          <router-link to="courses">
            Courses
          </router-link>
        </li>
      </ul>
    </nav>
  </header>

</template>

<script>
import AppContactBar from './AppContactBar.vue';

export default {
  name: "AppHeader",
  components: {
    AppContactBar
  },
  props: ['modelValue'],
  emits: ['update:modelValue'],

  methods: {
    func1() {
      console.log("here");
      this.$emit('update:modelValue', 'some v-model data')
    }
  }
};
</script>

<style lang="scss" scoped>
.main-div {
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;

  box-shadow: 0px 2px 28px -22px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 2px 28px -22px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 2px 28px -22px rgba(0, 0, 0, 0.75);

  h1 {
    cursor: pointer;
  }

  nav {
    ul {
      li {
        cursor: pointer;

        :hover {
          background-color: #2f4c72;
          color: white;
        }
      }
    }
  }
}

.title-color1 {
  color: #36557d;
}
.title-color2 {
  color: #597395;
}

.links {
  a {
    &.active {
      background-color: #2f4c72;
      color: white;
    }
  }
}

a {
  text-decoration: none;
}
</style>