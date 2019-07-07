<template>
    <div class="swiper-container v-localhost-autoplay" ref="banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide slide_show" v-for="(item,index) in slide_show" :key="index">
               <a href="">
                   <img :src="item.pic"/>
                </a> 
            </div>
            

        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import "swiper/dist/css/swiper.css"
import Swiper from "swiper"
import {getlocalSport} from "api/localhost";
export default {
    name:"swiper",
    async created(){
        let swiper = await getlocalSport();
        this.slide_show = swiper.data.slide_show;
        
    },
    data(){
        return{
            slide_show:[]
        }
    },
    updated(){
        if(!this.swiper){
            this.swiper = new Swiper(this.$refs.banner,{
            direction:'horizontal',
            loop:true,
            
            autoplay:{
                delay:3000,
                stopOnLastSlide:false,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination',
            },
        });
        }
        
    }
}
</script>

<style>
    .slide_show>a{
        width: 100%;
        height: 100%;
        display: block;
    }
    .slide_show>a>img{
         width: 100%;
        height: 100%;
        display: block;
    }
</style>
