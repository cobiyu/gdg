<template>
  <div id="app">
    <el-row>
      <el-col :span="24"><div class="grid-content bg-purple-dark">header</div></el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              <div style="text-align: left;">
                user
              </div>
            </div>
            <div class="grid-content bg-purple-dark">
              <div style="text-align: right;">
                my
              </div>
            </div>
            <div class="grid-content bg-purple-dark">
              <div style="text-align: right;">
                my
              </div>
            </div>
            <div class="grid-content bg-purple-dark">
              <div style="text-align: right;">
                my
              </div>
            </div>
            <div class="grid-content bg-purple-dark">
              <div style="text-align: right;">
                my
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>

      <el-col :span="12">
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">

              <ImageList :images="searchResults"></ImageList>
            </div>
          </el-col>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">GIF 검색
                <SearchBar @update="updateSearchResults"></SearchBar>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>


import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
export default {
  name: 'app',
  components: {
      ImageList,
      SearchBar
  },
  data () {
    return {
        'searchResults': []
    }
  },
  methods :{
      updateSearchResults(results) {
          this.searchResults = results
      }
  }

}
</script>

<style>
  .el-row {
    margin-bottom: 20px;

  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
