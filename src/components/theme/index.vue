<template>
  <div class="u-box">
    <BetterScroll>
      <template>
        <div>
          <HeaderCom />
          <Loading v-if="loadingFlag" />
          <div v-if="!loadingFlag">
            <div class="swiper-container" ref="banner">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in listTitle.banner" :key="index">
                  <img :src="item.pic" alt />
                </div>
              </div>
              <!-- 如果需要滚动条 -->
              <div class="swiper-scrollbar"></div>
            </div>
            <div class="list-img">
              <li v-for="(item,index) in listTitle.ad" :key="index">
                <img :src="item.pic" />
              </li>
            </div>
            

             <div>
              <ul>
                <li class="image" v-for="(item,index) in tp" :key="index">
                  <img :src="item.pic" alt />
                </li>
              </ul>
            </div>






            <div>
              <ul>
                <li class="image" v-for="(item,index) in listTitle.banner" :key="index">
                  <img :src="item.pic" alt />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </template>
    </BetterScroll>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import Swiper from "swiper";
import { Zty } from "api/circle";
import { TP } from "api/circle";
export default {
  name: "theme",
  async created() {
    let data = await Zty();
    let list = await TP();
    
    
    if (data) {
      this.loadingFlag = false;
    } else {
      this.loadingFlag = true;
    }
    this.listTitle = data.data;
    this.tp = list.data.slide_show;
  },
  data() {
    return {
      listTitle: [],
      loadingFlag: true,
      tp:[]
    };
  },
  updated() {
    if (!this.swiper) {
      this.swiper = new Swiper(this.$refs.banner, {
        loop: true,
        scrollbar: {
          el: ".swiper-scrollbar"
        },
        autoplay:{
                delay:3000,
                stopOnLastSlide:false,
                disableOnInteraction: false
            },
      });
    }
  }
};
</script>

<style>
.u-box {
  height: 13.34rem;
}
swiper-container {
  height: 4.22rem;
  width: 100%;
  /* background-size: 100% auto; */
}
.image {
  width: 100%;
  border-top: 0.2rem solid #eee;
  height: 4.22rem;
}
.list-img {
  width: 100%;
  height: 1.6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.list-img > img {
  width: 3.45rem;
  height: 1.3rem;
}
</style>
