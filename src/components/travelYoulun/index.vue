<template>

  <BScrolling ref="bscroll">
    <template>

<div>
     <div v-if="scrollLoading">
      <i class="fa fa-spinner fa-pulse loading"></i>
     </div>

  <loading1  v-if ="loadingFlag"/>

  <div class="travel_body" ref="travelBody" >
       <div class="searchResult">
        <div  >
           <div class="route-list2" v-for="(item,index) in search" :key="index">
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

</div>
    </template>
  </BScrolling>
</template>

<script>

import { getTravelYoulun } from "api/travel.js";
import BScroll from "better-scroll";
export default {
  
  name: "travelYoulun",
      props:{
        search:{
            type:Array,
            default:[],
            required:true
        }
    },
  async created() {
    // console.log(getTravelYoulun());
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
      loadingFlag:true,
      scrollLoading:false
    };
  },
  mounted(){
    
      this.scroll = new BScroll(this.$refs.travelBody)   


      this.$refs.bscroll.handleScrollStart(()=>{
        console.log(123);
          
        this.scrollLoading = true;
      })

      this.$refs.bscroll.handleScrollEnd(()=>{
        this.scrollLoading = false;
      })
      

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

