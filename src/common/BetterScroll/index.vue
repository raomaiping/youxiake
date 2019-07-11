<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BetterScroll from "better-scroll"
export default {
    name:"BetterScroll",
    mounted(){
        this.scroll = new BetterScroll(this.$refs.wrapper,{
             scrollY: true,
            click: true,
             scrollX: true,
             probeType:1,
             pullUpLoad:true
        })
    },
    methods:{
        handleScrollStart(cb){
            this.scroll.on("scroll",({x,y})=>{
                if(y>15){
                    cb()
                }
            })
        },
        handleScrollEnd(cb){
            this.scroll.on("scrollEnd",()=>{
              setTimeout(()=>{
                  cb();
              },1000)
            })
        },
        handleUp(cb){
            this.scroll.on("pullingUp",()=>{
                cb()
            })
        }
    }
}
</script>
<style  scoped>
.wrapper{
    width: 100%;
    height: 100%;
}
</style>

