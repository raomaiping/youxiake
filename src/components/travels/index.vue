<template>
  <div class="box">
    <BetterScroll ref="bscroll">
      <template>
        <div>
          <div class="loading" v-if="scrollLoading">
            <i class="fa fa-refresh fa-spin"></i>
          </div>
          <HeaderCom />
          <Loading v-if="loadingFlag" />
          <div v-if="!loadingFlag">
            <div class="swiper-container" ref="banner">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
                  <img :src="item.headerImageUrl" alt class="image" />
                </div>
              </div>
              <!-- 如果需要滚动条 -->
              <div class="swiper-scrollbar"></div>
            </div>

            <div class="u-main">
              <div class="u-nav">
                
                <ul class="u-nav_big">
                  <li
                    v-for="(title,index) in tabTitle"
                    @click="handleClick(index)"
                    :class="{active:cur==index}"
                    :key="index"
                  >{{title}}</li>
                </ul>
              </div>
              <div class="u-list">
                <div class="u-mobile clearfix" v-for="(item,index) in titleList" :key="index">
                  <div class="u-pic">
                    <a href="javascript:;" class="link">
                      <img :src="item.cover" />
                    </a>
                    <a href="javascript:;" class="auth">
                      <img :src="item.authorAvatar" />
                      {{item.author}}
                    </a>
                  </div>
                  <div class="u-right">
                    <h3>{{item.title}}</h3>
                    <div class="u-info">
                      <span class="tz_look">
                        <i></i>
                        {{item.views}}
                      </span>
                      <span class="tz_reply">
                        <i></i>
                        {{item.replies}}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
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
import { articles } from "api/circle";
import { topArticle } from "api/circle";
export default {
  name: "travels",
  async created() {
    let list = await topArticle();
     let data = await articles(this.p);
    if ( list) {
      this.loadingFlag = false;
    } else {
      this.loadingFlag = true;
    }
     this.titleList = data.data.articles;
      this.handleList(this.page)
    this.banner = list.data.articles;

  },
  data() {
    return {
      banner: [],
      titleList: [],
      loadingFlag: true,
      scrollLoading: false,
      tabTitle: ["热门游记", "精华游记", "最新游记"],
      cur: 0,
      p:1,
      page:1,
      b:1
    };
  },
  methods:{
    async  handleClick(index){
      this.page = 1
      this.cur = index
      this.b = index + this.p
       let data = await articles(index + this.p);
       this.titleList = data.data.articles;
    },
    async handleList(page){
      
          let data = await articles(this.b,page);
        this.titleList = [...this.titleList,...data.data.articles];
          this.$refs.bscroll.scroll.finishPullUp();
          this.$refs.bscroll.scroll.refresh();
        this.page++
      }
  }
  ,
  mounted() {
    this.$refs.bscroll.handleScrollStart(() => {
      this.scrollLoading = true;
    });
    this.$refs.bscroll.handleScrollEnd(() => {
      this.scrollLoading = false;
    });
    this.$refs.bscroll.handleUp(() => {
       this.handleList(this.page)
    });
  },
  updated() {
    if (!this.swiper) {
      this.swiper = new Swiper(this.$refs.t_banner, {
        loop: true,
        scrollbar: {
          el: ".swiper-scrollbar"
        },
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        }
      });
    }
  }
};
</script>

<style scoped>
.loading {
  width: 100%;
  height: 0.4rem;
  display: flex;
  justify-content: center;
  font-size: 0.4rem;
}
.box {
  height: 13.34rem;
}
.swiper-container {
  height: 4.22rem;
  width: 100%;
}
.image {
  width: 100%;
  height: 100%;
}
.u-main {
  margin: 0 0.4rem;
}
.u-nav .u-none {
  height: 0.48rem;
  display: none;
}
.u-nav .u-nav_big {
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  height: 0.55rem;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.u-nav .u-nav_big li {
  font-size: 0.32rem;
  color: #888;
  padding-bottom: 0.05rem;
}
.u-nav .u-nav_big .active {
  color: #444;
  border-bottom: 4px solid #ffd800;
}
.u-mobile {
  padding: 0.4rem 0 0.3rem;
  border-bottom: 1px solid #e5e5e5;
  overflow: hidden;
}
.u-mobile .u-pic {
  width: 2.58rem;
  float: left;
}
.u-mobile .u-pic .link {
  height: 1.45rem;
  overflow: hidden;
  width: 100%;
  display: block;
  background: #f5e2c4;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
}
.u-mobile .u-pic .link img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  margin: 0 auto;
  display: block;
}

.u-mobile .u-pic .auth {
  height: 0.52rem;
  line-height: 0.52rem;
  display: block;
  margin-top: 0.25rem;
  width: 100%;
  overflow: hidden;
  font-size: 0.24rem;
  color: #888;
}
.u-mobile .u-pic .auth img {
  width: 0.52rem;
  height: 0.52rem;
  border: 1px solid #e5e5e5;
  border-radius: 50%;
  display: inline-block;
  vertical-align: -0.15rem;
  margin-right: 0.13rem;
}
.u-right {
  width: 3.65rem;
  float: right;
}
.u-right h3 {
  font-size: 0.26rem;
  height: 1.45rem;
  font-weight: 400;
  color: #444;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  max-height: 1.33rem;
}
.u-right .u-info {
  height: 0.52rem;
  line-height: 0.52rem;
  display: block;
  margin-top: 0.25rem;
  width: 100%;
  overflow: hidden;
  font-size: 0.24rem;
  color: #444;
}
.u-right .u-info .tz_look {
  margin-right: 0;
}
.u-right .u-info .tz_look i {
  background: url(../../assets/u-icon03.png) no-repeat;
  height: 0.23rem;
  width: 0.35rem;
  background-size: 100% auto;
  display: inline-block;
  vertical-align: -0.03rem;
  margin-right: 0.13rem;
}
.u-right .u-info .tz_reply i {
  background: url(../../assets/u-icon04.png) no-repeat;
  height: 0.29rem;
  width: 0.31rem;
  background-size: 100% auto;
  display: inline-block;
  vertical-align: -0.07rem;
  margin-right: 0.13rem;
}
.u-right .u-info span {
  display: inline-block;
  width: 1.3rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
