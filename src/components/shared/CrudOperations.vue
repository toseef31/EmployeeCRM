<template>
    <div>
        <button type="button" class="btn btn-primary" @click="updateUser(user.id)">
            {{ operations[0] }}
        </button>
        &nbsp;
        <button type="button" class="btn btn-danger" @click="deleteUser(user.id)">
            {{ operations[1] }}
        </button>
        &nbsp;
        <button type="button" class="btn btn-warning" @click="editUser(user.id)">
            {{ operations[2] }}
        </button>
    </div>
</template>

<script>
export default {
    name: "CrudOperations",

    data() {
        return {};
    },

    props: ['user'],

    inject: ["operations", "addUser"],

    emits: {
        "handle-update": function (id) {
            console.log(id)
            if (!id || id <= -1) return false;
            else return true;
        },
    },

    methods: {
        updateUser(id) {
            console.log("Updating user number: ", id);
            this.$emit("handle-update", id);
        },

        deleteUser(id) {
            console.log("Deleting user number: ", id);
            this.$emit("handle-delete", id);
        },

        editUser(id) {
            console.log("Editing user number: ", id);
            this.$emit("handle-edit", id);
        },
    }
}
</script>

<style lang="scss" scoped></style>