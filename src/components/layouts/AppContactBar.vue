<template>
    <div class="main-div">
        <div class="left-main-div flex-row">
            <section class="flex-row">
                <i class="bi bi-whatsapp"></i>
                <p class="ms-2 remove-margin">+92-331-5333899</p>
            </section>

            <p class="t-white op-4 mr-2 remove-margin">|</p>

            <section class="flex-row">
                <i class="bi bi-telephone-fill"></i>
                <p class="ms-2 remove-margin">+92-51-8737624</p>
            </section>
            <section class="flex-row">
                <i class="bi bi-envelope-fill"></i>
                <p class="ms-2 remove-margin">peekemployees@gmail.com</p>
            </section>
        </div>

        <div class="right-main-div">
            <i class="bi bi-facebook"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-pinterest"></i>
            <i class="bi bi-linkedin"></i>
            <i class="bi bi-instagram"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: "AppContactBar",
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
.main-div {
    display: flex;
    color: white;
    background-color: rgba(13, 47, 93, 0.8);
    padding: 10px;
    justify-content: space-between;

    .left-main-div {
        width: 40%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .right-main-div {
        width: 15%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
}

.flex-row {
    display: flex;
    font-size: 13px;
    transition: .3s;
}

.remove-margin {
  margin: 0
}
</style>