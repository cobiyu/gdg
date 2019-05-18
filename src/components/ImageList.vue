<template>
    <div>
        <img v-for="img in images" :src="img.images.downsized.url" :key="img.id">
    </div>
</template>

<script>
    export default {
        name: "ImageList",
        props:{
            images: Array
        }
    }
</script>

<style scoped>

</style>
