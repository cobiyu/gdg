<template>
    <div style="display: block; clear: both;">
        <ul style="padding-right: 250px;">
            <li style="  display:inline-block;">
                <img alt="Vue logo" src="../assets/gdg_profile.png" style="border-radius: 50%; width: 30px;">
            </li>
            <li style="  display:inline-block;">
                <div style="padding-left:10px">{{userName}}</div>
            </li>
        </ul>
        <ul>
            <li style="  display:inline-block;">
                <time class="time" style="float:left; margin: 70% 0 0px 0px;padding-right: 10px;">
                    {{timeStamp}}
                </time>
            </li>
            <li style="  display:inline-block;">
                <img :src="imagePath"
                     class="image"
                     style="float:left; width:300px;">
            </li>
        </ul>
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