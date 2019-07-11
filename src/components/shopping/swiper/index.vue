<template>
    <div class="swiper-container v-localhost-autoplay" ref="banner_">
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
export default {
    name:"swiper",
    props:{
        slide_show:{
            type:Array,
            default:[],
            required:true
        }
    },
    data(){
        return{
        }
    },
    mounted(){
        console.log(this.$refs.banner_);
       new Swiper(this.$refs.banner_,{
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
    ,
   
}
</script>

<style>

.v-localhost-autoplay{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
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
