<template>
  <div class="container d-flex align-items-center">

<h1 class="title me-auto"><a>Employee Management</a></h1>

<nav id="navbar" class="navbar order-last order-lg-0">
  <ul>
    <li><a >Home</a></li>
    <li><a >Users</a></li>
    <li><a >Tasks</a></li>
    <li><a >Companies</a></li>
    <li><a >Courses</a></li>
    <BaseButtons @click="func1()">Button1</BaseButtons>
    <!-- <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
      <ul>
        <li><a href="#">Drop Down 1</a></li>
        <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
          <ul>
            <li><a href="#">Deep Drop Down 1</a></li>
            <li><a href="\=#">Deep Drop Down 2</a></li>
            <li><a href="#">Deep Drop Down 3</a></li>
            <li><a href="#">Deep Drop Down 4</a></li>
            <li><a href="#">Deep Drop Down 5</a></li>
          </ul>
        </li>
        <li><a href="#">Drop Down 2</a></li>
        <li><a href="#">Drop Down 3</a></li>
        <li><a href="#">Drop Down 4</a></li>
      </ul>
    </li> -->
  </ul>
  <!-- <i class="bi bi-list mobile-nav-toggle"></i> -->
</nav>
</div>
</template>

<script>
export default {
  name: "AppHeader",

  props: ['modelValue'],
  emits: ['update:modelValue'],
  
  methods: {
      func1(){
        console.log("here");
        this.$emit('update:modelValue', 'some v-model data')
      }
  }
};
</script>

<style scoped>
.title {
  color: #00a000;
}
</style>