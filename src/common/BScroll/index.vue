<template>
    <div class="wrapper" ref="wrapper" >
        <slot></slot>
    </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
    name:"BScroll",
    data(){
        return {

        }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper, {
            probeType: 1,
            tap:true,
            click:true,
            scrollY: true,
        });    
    }
}
</script>

<style>
.wrapper{
    height: 100%;
}
</style>
