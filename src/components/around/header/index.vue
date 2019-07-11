<template>
    <!-- 头部 -->
    <div class="v-header">
        <a href="" class="v-back" @click="handleBack()"><span class="iconfont icon-arrowLeft"></span></a>
        <h1>{{title}}</h1>
        <a href="" class="v-mine" @click="handlehome()"><span class="iconfont icon-gerenzhongxin"></span></a>
    </div>
</template>
<script>
export default {
    name:"header",
    props:{
        title:{
            type:String,
            default:"周边游",
            require:true
        }
        
    },
    data(){
        return{

        }
    },
    methods:{
        handleBack(){
            this.$router.back();
        },
        handlehome(){
            this.$router.push("/home");
        }
    }
}
</script>
<style>
    /* 周边游头部 */
.v-header{
    width: 100%;
    height: 0.9rem;
    background: #f7f7f7;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
}
.v-header .v-back{
    display: block;
    height: 0.9rem;
    position: absolute;
    top: 0;
    left: 0.3rem;
}
.v-header .v-mine{
    display: block;
    height: 0.9rem;
    position: absolute;
    top: 0;
    right: 0.3rem;
}
.icon-arrowLeft {
    font-size: 0.50rem;
    line-height: 0.9rem;
}
.icon-gerenzhongxin{
    font-size: .40rem;
    line-height: 0.9rem;
}
.v-header>h1{
    text-align: center;
    line-height: 0.9rem;
    font-size: 0.32rem;
    columns: #333333;
    font-weight: normal;
    font-family:  Microsoft YaHei;
}

</style>
