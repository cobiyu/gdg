<template>
    <div>
        <el-input v-model="query" @:keyup.enter="search"></el-input>
        <el-button v-on:click="search">검색</el-button>
    </div>
</template>

<script>
    import { searchGIFs } from '@/helper/GiphyService';

    export default {
        name: "SearchBar",
        data() {
            return {
                query: ''
            }
        },
        methods : {
            search() {
                searchGIFs(this.query).then((response) =>{
                    this.$emit('update', response.data.data);
                })
            }
        }
    }
</script>

<style scoped>

</style>
