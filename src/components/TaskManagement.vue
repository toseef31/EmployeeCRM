<template>
  <div class="tasks">
    <section class="addTask">
      <input type="text" placeholder="Enter your task" v-model="task" v-on:keypress.enter="addTask()" />
      <button type="button" class="btn btn-primary" @click="addTask()">Assign Task</button>
    </section>

    <section class="task-padding" v-if="tasks && tasks.length > 0">
      <div class="flex-align-center" v-for="(task, index) of tasks" v-bind:key="index">
        <p>{{ task }}</p>
        <button type="button" class="btn btn-danger" @click="deleteTask(index)">Delete Task</button>
      </div>
    </section>
  </div>

  <div class="addExp">
    <input type="text" placeholder="Enter your experience" ref="experience" v-model.lazy="experience"
      @blur="validateInput" />
    <button type="button" class="btn btn-secondary" @click="setExp()">Check Exp</button>
    <p v-if="experienceValidation === 'invalid'">Invalid Experience</p>
  </div>

  <teleport to="body">
    <AlertDialog v-if="inputIsInvalid">
      <h3>No empty string allowed</h3>
    </AlertDialog>
  </teleport>
</template>

<script>
import AlertDialog from "./AlertDialog.vue";
import axios from 'axios';

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
      experience: "",
      experienceValidation: 'pending',
    };
  },
  inject: ["operations", "deleteUser"],

  props: [
    "parentData"
  ],

  emits: {
    "handle-update": function (id) {
      if (!id || id <= -1) return false;
      else return true;
    },
  },

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


      axios.post('https://peekemployeemanagement.firebasedatabase.app/tasks.json', JSON.stringify(this.task))
        .then(function (response) {
          // handle success
          this.task = "";
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    },

    deleteTask(index) {
      this.tasks.splice(index, 1);
    },

    setExp() {
      console.dir(this.$refs.experience.value);
    },

    validateInput() {
      if (this.experience.trim() === '') {
        this.experienceValidation = 'invalid'
      }
      else this.experienceValidation = 'valid'
    },

  },

  computed: {},

  watch: {},
};
</script>

<style lang="scss" scoped>
.addTask,
.addExp {
  display: flex;
  align-items: center;
  padding: 10px;

  button {
    height: 30px;
    font-size: 11px;
    margin-left: 10px;
  }
}

.flex-align-center {
  display: flex;
  align-items: center;

  button {
    height: 30px;
    font-size: 11px;
    margin-left: 10px;
  }
}

.task-padding {
  padding: 10px 10px;
}
</style>