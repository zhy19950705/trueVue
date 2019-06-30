<template>
    <div>
        <audio :src="path" controls="controls"></audio>
    </div>
</template>

<script>
    export default {
        name: 'BaseAudio',
        props: ['path'],
    }
</script>

<style lang="scss" scoped>

</style>