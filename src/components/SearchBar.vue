<template>
    <div>
        <el-input v-model="query" @keyup.enter.native="search"></el-input>
        <el-button v-on:click="search">검색</el-button>
    </div>
</template>

<script>
    import { searchGIFs } from '@/helper/GiphyService';
    import { Loading } from 'element-ui';

    export default {
        name: "SearchBar",
        data() {
            return {
                query: ''
            }
        },
        methods : {

            search() {
                let loadingInstance = Loading.service({fullscreen: true});
                searchGIFs(this.query).then((response) =>{
                    this.$emit('update', response.data.data);
                    loadingInstance.close();
                })
            }
        }
    }
</script>

<style scoped>

</style>
