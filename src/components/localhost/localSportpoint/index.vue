<template>
    <!-- 活动指南 -->
    <div class="v-localhost-sport">
        <div class="v-localhost-sportlist">
            <a href="" v-for="(item,index) in sportPoint" :key="index">
                <img class="v-localhost-icon" :src="item.icon"/>
                <span class="v-localhost-icontitle">{{item.name}}</span>
            </a>     
        </div>
    </div>
</template>

<script>
import {getlocalSport} from "api/localhost";
export default {
    name:"localSportpoint",
    async created(){
        let sportPoint = await getlocalSport();
        this.sportPoint = sportPoint.data.class;
    },
    data(){
        return{
            sportPoint:[],
        }
    }
}
</script>

<style>
/* 活动指南 */
    .v-localhost-sport{
    width: 100%;
    padding:.35rem 0;
    background: #fff;
}
.v-localhost-sportlist{
    width: 7.1rem;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.v-localhost-sportlist>a{
    flex-shrink: 0;
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .3rem;
    
}
.v-localhost-icon{
    display: block;
    width: .5rem;
    height: .45rem;
    /* background: url("../../img/v-localhost-icon1.png") no-repeat; */
    background-size:cover;
    margin: 0 auto .15rem;
}
.v-localhost-icontitle{
    font-size: .24rem;
    color: #666;
}
</style>
