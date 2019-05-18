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
        <el-row style="overflow:scroll; width:100%; height:500px">
          <el-col :span="24">
            <div style="text-align: right; display: block; clear: both;">
              <div style="text-align: left;">
                <user-chat user-name="testName"
                           image-path="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                           time-stamp="12:45:12">

                </user-chat>
              </div>
            </div>

            <div class="grid-content">
              <div style="text-align: right; display: block; clear: both;">
                <my-chat user-name="testName"
                         image-path="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                         time-stamp="12:45:12">

                </my-chat>
              </div>
            </div>

            <div class="grid-content">
              <div style="text-align: left;">
                <user-chat user-name="testName"
                           image-path="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                           time-stamp="12:45:12">

                </user-chat>
              </div>
            </div>

            <div class="grid-content">
              <div style="text-align: right; display: block; clear: both;">
                <my-chat user-name="testName"
                         image-path="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                         time-stamp="12:45:12">

                </my-chat>
              </div>
            </div>

            <div class="grid-content">
              <div style="text-align: right; display: block; clear: both;">
                <my-chat user-name="testName"
                         image-path="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                         time-stamp="12:45:12">

                </my-chat>
              </div>
            </div>

          </el-col>
        </el-row>
      </el-col>

      <el-col :span="12" class="chat">
        <el-row>
          <el-col :span="24">
            <div class="grid-content">search</div>
          </el-col>
          <el-col :span="24">
            <div class="grid-content">input</div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import UserChat from './components/UserChat'
import MyChat from './components/MyChat'

export default {
    name: 'app',
    components: {
      'user-chat' : UserChat,
      'my-chat' : MyChat,
    },
    data(){
      return {

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
