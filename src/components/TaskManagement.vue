<template>
  <div class="tasks">
    <input
      type="text"
      placeholder="Enter your task"
      v-model="task"
      v-on:keypress.enter="addTask()"
    />
    <button type="button" @click="addTask()">Add Task</button>
    <ul v-for="(task, index) of tasks" v-bind:key="index">
      <p>
        {{ index }} <input type="text" :value="task" />
        <button type="button" @click="deleteTask(index)">Delete Task</button>
      </p>
    </ul>
    <br />

    <input type="text" placeholder="Enter your experience" ref="experience" />
    <button type="button" @click="setExp()">Check Exp</button>
  </div>

  <teleport to="body">
    <AlertDialog v-if="inputIsInvalid">
      <h3>No empty string allowed</h3>
    </AlertDialog>
  </teleport>
</template>

<script>
import AlertDialog from "./AlertDialog.vue";

export default {
  name: "TaskManagement",
  components: {
    AlertDialog,
  },
  data() {
    return {
      inputIsInvalid: false,
      tasks: [],
      task: "",
    };
  },

  props: [],

  methods: {
    addTask() {
      if (this.task === "") {
        this.inputIsInvalid = true;
        setTimeout(() => {
          this.inputIsInvalid = false;
        }, 3000);
        return;
      }
      this.tasks.push(this.task);
      this.task = "";
    },

    deleteTask(index) {
      this.tasks.splice(index, 1);
    },

    setExp() {
      console.dir(this.$refs.experience.value);
    },
  },

  computed: {},

  watch: {},
};
</script>

<style lang="scss" scoped>
</style>