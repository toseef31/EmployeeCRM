<template>
    <div class="subscribe-main-div">
        <section>
            <p>
                SUBSCRIBE NOW
            </p>
            <p>
                Stay connect and keep yourself alert with latest vaccanies and courses
            </p>
        </section>

        <section class="input-section">
            <input type="text" placeholder="Enter mobile number">
            <button type="button">SUBMIT</button>

        </section>

    </div>
</template>

<script>
export default {
    name: "AppSubscribe"
}
</script>

<style lang="scss" scoped>
.subscribe-main-div {
    background: rgba(13, 47, 93, 0.8);
    padding: 20px;

    p {
        color: white
    }

    .input-section {
        position: relative;

        input {
            width: 60%;
            height: 63px;
            border: 0;
            padding-left: 33px;
            border-radius: 30px;
            color: #333;
        }



        button {
            width: 14%;
            height: 44px;
            border: 0;
            background: #293d56 none repeat scroll 0 0;
            color: #fff;
            -webkit-transition: .5s;
            -o-transition: .5s;
            transition: .5s;
            text-transform: uppercase;
            font-weight: 500;
            position: absolute;
            font-size: 15px;
            right: 21%;
            top: 10px;
            border-radius: 30px;
            letter-spacing: 2px;
        }
    }


}
</style>