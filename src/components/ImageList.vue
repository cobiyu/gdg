<template>
    <div>
        <img
                v-for="img in images" :src="img.images.downsized.url" :key="img.id"
                @click="clickImage(img)"
                style="cursor: pointer;">
    </div>
</template>

<script>
    export default {
        name: "ImageList",
        props:{
            images: Array
        },
        methods : {
            clickImage (img){
                this.$emit('selectImage', img);
            }
        }
    }
</script>

<style scoped>

</style>
