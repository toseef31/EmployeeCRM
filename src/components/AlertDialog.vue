<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<script>
export default {
  name: "AlertDialog",
  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
dialog {
    position: fixed;
    top: 20vh;
    left: 30%;
    right: 40%;
    background-color: rgb(233, 230, 230);
    padding: 1rem;
}
</style>