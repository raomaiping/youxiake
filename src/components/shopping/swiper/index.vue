<template>
    <div class="swiper-container v-localhost-autoplay" ref="v_banner">
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
            new Swiper(this.$refs.v_banner,{
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
    height: 4rem;
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
