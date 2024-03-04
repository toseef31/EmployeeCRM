<template>
    <div>
        <button :type="type" :class="mode">
          <slot></slot>
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },

    props: ['type', 'mode'],
}
</script>

<style lang="sss" scoped>

</style>