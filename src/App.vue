<template>
  <div id="app">
    <el-row>
      <el-col :span="24" style="background-color:white;">
        <div class="grid-content">
          <img src="./assets/gdglogo.png" style="width:500px"/>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12" class="chat">
        <el-row style="overflow:scroll; width:100%; height:800px" id="chat-box">
          <el-col :span="24">

            <div class="grid-content" v-for="(chat, index) in chatList" :key="index">
              <div v-if="chat.mode==='my'" style="text-align: right; display: block; clear: both;">
                <my-chat user-name="testName"
                         :image-path="chat.img.images.downsized.url"
                         time-stamp="12:45:12">

                </my-chat>
              </div>

              <div v-else-if="chat.mode==='user'" style="text-align: left;">
                <user-chat user-name="testName"
                           :image-path="chat.img.images.downsized.url"
                           time-stamp="12:45:12">

                </user-chat>
              </div>
            </div>

          </el-col>
        </el-row>
      </el-col>

      <el-col :span="12" class="chat" style="height: 800px">
        <el-row>
          <el-col :span="24" style="height: 690px; overflow: scroll">
            <div class="grid-content bg-purple-dark">

              <ImageList :images="searchResults" @selectImage="selectImage"></ImageList>
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

    <select v-model="mode">
      <option value="my">my</option>
      <option value="user">user</option>
    </select>
  </div>
</template>

<script>
import UserChat from './components/UserChat'
import MyChat from './components/MyChat'

import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
export default {

    name: 'app',
    components: {
      'user-chat' : UserChat,
      'my-chat' : MyChat,
        SearchBar,
        ImageList
    },
    data(){
      return {
          'mode' : "my",
          'searchResults': [],
          'chatList' : [],
      }
    },
    methods :{
        selectImage (img){
            let chatObj = {
                mode : this.mode,
                img : img,
                timestamp : 'timestamp'
            };
            this.chatList.push(chatObj);
            setTimeout(function () { // ㅋㅋㅋㅌ 금단의 방법
              let chatBox = document.getElementById('chat-box');
              chatBox.scrollTop=chatBox.scrollHeight;
            }, 200);
        },
        updateSearchResults(results) {
            this.searchResults = results
        }
    }
}
</script>

<style>
  .chat {
    border-radius: 10px;
    background-color:#F0F1F2;
  }
  .grid-content {
    /*border : 1px solid;*/
    /*min-height: 36px;*/
    display: block; clear: both;
  }
  #app {
    font-family: 'Noto Sans KR', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
