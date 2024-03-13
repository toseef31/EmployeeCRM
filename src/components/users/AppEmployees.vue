<template>
    <div class="col-lg-5 col-md-6 d-flex align-items-stretch">
        <div class="member">
            <img :src="userData.profile" class="img-fluid" alt="">
            <div class="member-content">
                <h4>{{ userData.name }}</h4>
                <span>{{ userData.level }}</span>
                <p>
                    {{ userData.designation }}
                </p>
                <div>

                    <CrudOperations @handle-update="userUpdate" @handle-edit="userEdit" @handle-delete="userDelete"
                        :user="userData"> </CrudOperations>

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


</template>

<script>
import CrudOperations from '../shared/CrudOperations.vue';

export default {
    name: "AppEmployees",

    components: {
        CrudOperations,
    },

    data() {
        return {};
    },

    provide() {
        return {
            operations: ["Update", "Delete", "Edit", "Add"],
            addUser: this.addUser,
        };
    },

    props: ['userData'],

    emits: {
        "handle-update": function (id) {
            console.log(id)
            if (!id || id <= -1) return false;
            else return true;
        },
    },

    methods: {
        userDelete(userId) {
            console.log("parent delete: ", userId);
        },

        userUpdate(userId) {
            console.log("user ", userId, " updated")
        },

        userEdit(userId) {
            console.log("user ", userId, " edited")
        },

        addUser() {
            console.log("User added");
        }
    },
}
</script>

<style lang="scss" scoped></style>