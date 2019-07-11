<template>

<div>

  <loading1  v-if ="loadingFlag"/>

  <div class="travel_body" ref="travelBody" v-if="!loadingFlag">
    <!-- <div v-if="loadingFlag"><i class="fa fa-spinner fa-pulse loading"></i></div> -->     
    <div>
      <div class="route-list" v-for="(item,index) in travelList1" :key="index">
        <div class="route-list-image">
          <img :src="item.img" />
          <div class="list-image-gather">
            <span class="jihedi__class">{{item.jihe}}</span>
          </div>
        </div>
        <div class="route-list-desc">
          <div class="list-desc-title manyLineText">{{item.sub_title}}</div>
          <div class="list-desc-type">
            <div class="desc-type-time">{{item.time}}</div>
            <div class="desc-type-label">邮轮</div>
            <div class="desc-type-label">休闲游</div>
          </div>
          <div class="list-desc-price">
            <div class="desc-price-container">
              <div class="price-fh">￥</div>
              <div class="price-jg">{{item.price}}</div>
              <div class="price-dw">起</div>
            </div>
            <div class="desc-price-num">{{item.num}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>

import { getTravelYoulun } from "api/travel.js";
import BScroll from "better-scroll";

export default {
  name: "travelYoulun",
  async created() {
    console.log(getTravelYoulun());
    let data = await getTravelYoulun();
    if(data){
      this.loadingFlag = false
    }else{
      this.loadingFlag = true
    }
    this.travelList1 = data.data.lines.data;
  },

  data() {
    return {
      travelList1: [],
      loadingFlag:true
    };
  },
  mounted(){
      this.scroll = new BScroll(this.$refs.travelBody)
      console.log(this.scroll);
      
    //   this.scroll.on("scroll"({x,y})=>{

    //   })
    //   
      

  }
};
</script>

<style >
.loading{
  font-size:.5rem;
  width:100%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
}
  
</style>

