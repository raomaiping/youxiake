<template>
  
        <div class="swiper-container">
        
        <slot name ="homeBanner" :content ="banners"></slot>
       </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import Swiper from "swiper"
export default {
    name:"homeBanner",
    data() {
        return {
            banners:[
           "https://qimg4.youxiake.com/upload/201906/25/14231561441367.jpg?imageslim",
           "https://qimg4.youxiake.com/upload/201906/26/22781561521153.jpg?imageslim",
           "https://qimg4.youxiake.com/upload/201906/25/29181561444744.jpg?imageslim"

            ]
        }
    },
}
</script>

<style>

</style>
