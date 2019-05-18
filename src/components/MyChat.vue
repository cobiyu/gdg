<template>
    <div style="display: block; clear: both;">
        <span style="float:right">
            <div :body-style="{ padding: '0px' }">
                    <div style="padding-bottom: 10px; padding-left:10px; text-align:left">
                        <span>{{userName}}</span>
                    </div>
                    <time class="time" style="float:left; margin: 70% 0 0px 0px;padding-right: 10px;">
                        {{timeStamp}}
                    </time>
                    <img :src="imagePath"
                         class="image"
                         style="float:left;">
                </div>
        </span>
        <span style="float:right">
            <img alt="Vue logo" src="../assets/gdg_profile.png" style="border-radius: 50%; width: 30px;">
        </span>
    </div>
</template>

<script>
    export default {
        name: "UserChat",
        props:{
            userName: {
                type: String,
                required: true
            },
            timeStamp : {
                type: String,
                required: true
            },
            imagePath : {
                type: String,
                required: true
            }
        }
    }
</script>

<style scoped>
.debug-border{
    /*border:2px solid;*/
}
.time {
    font-size: 13px;
    color: #999;
}
</style>