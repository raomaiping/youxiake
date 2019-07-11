<template>
<div class="u-warp">
  <BetterScroll>
  <template>
 <div>
    <HeaderCom />
    <Loading v-if="loadingFlag" />
    <div v-if="!loadingFlag">
      <div class="u-hot">
        <div class="u-hot-title">当季热门</div>
        <div class="u-hot-warp">
          <BetterScroll>
            <template>
              <ul class="u-hot-month">
                <li v-for="(item,index) in tabName" :key="index" @click="handleClick(index)" :class="{active:cur==index}">{{item.tabName}}</li>
              </ul>
            </template>
          </BetterScroll>
        </div>

        <div class="u-mScoller">
          <BetterScroll>
            <ul class="u_article_list">
              <li v-for="(item,index) in mddName" :key="index">
                <div class="u-pic">
                  <div class="u-tag">{{item.mddName}}</div>
                  <img :src="item.cover" />
                </div>
              </li>
            </ul>
          </BetterScroll>
        </div>

        <div class="u-more">
          <a href="javascript:;">
            查看全部目的地
            <i></i>
          </a>
        </div>
      </div>

      <div class="u-hot">
        <div class="u-hot-title">主题推荐</div>
        <div class="u-hot-warp">
          <ul class="u-hot-month">
            <li v-for="(item,index) in isActive" :key="index" @click="handle(index,item.tabName)" :class="{active:b==index}">{{item.tabName}}</li>
          </ul>
        </div>
        <div class="u-mcoller">
          <ul>
            <li v-for="(item,index) in listName" :key="index">
              <div class="u-pic-2">
                <img :src="item.cover" />
              </div>
              <div class="u-tag-2">{{item.mddName}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  </template>
</BetterScroll>
</div>
 
</template>

<script>
import { month } from "api/circle";
import { themeList } from "api/circle";
import { Mdd } from "api/circle";
export default {
  name: "destination",
  async created() {
    let data = await month();
    let list = await themeList();
    if (data && list) {
      this.loadingFlag = false;
    } else {
      this.loadingFlag = true;
    }
    this.mddName = data.data.mddData;
    this.tabName = data.data.tabs;
    this.isActive = list.data.tabs;
    this.listName = list.data.mddData;
  },
  data() {
    return {
      mddName: [],
      tabName: [],
      listName: [],
      isActive: [],
      loadingFlag: true,
      cur:6,
      b:0
    };
  },
  methods:{
    async  handleClick(index){
      this.cur = index
       let month = await Mdd((index+1)+"月");
       this.mddName =month.data.mddData;
    },
    async  handle(index){
      this.b = index
      let a =  this.isActive[index].tabName;
      let b =  await Mdd(a);
      this.listName = b.data.mddData;
      //  let month = await Mdd((index+1)+"月");
      //  this.mddName =month.data.mddData;
    }
  }
};
</script>

<style>
.u-warp{
    height: 13.34rem;
}
.u-hot {
  overflow: hidden;
  width: 100%;
  padding: 0.4rem 0 0 0.2rem;
  box-sizing: border-box;
}
.u-hot .u-hot-title {
  color: #333;
  font-size: 0.32rem;
  border-left: 7px solid #ffd800;
  padding-left: 0.2rem;
  height: 0.35rem;
  line-height: 0.35rem;
  font-weight: 700;
}
.u-hot .u-hot-warp {
  margin: 0.3rem auto;
  position: relative;
  height: 0.42rem;
}
.u-hot-month {
  overflow: auto;
  position: absolute;
  height: 0.42rem;
  text-align: center;
  white-space: nowrap;
  font-size: 0;
  display: inline-block;
}
.u-hot-month li {
  overflow: auto;
  display: inline-block;
  width: 1.12rem;
  height: 0.42rem;
  line-height: 0.42rem;
  text-align: center;
  background: #f4f4f4;
  color: #999;
  font-size: 0.3rem;
  margin: 0 0.15rem 0 0;
}
.u-hot-month .active{
  background: #f5b902;
  color: #000;
}
.u-mScoller,
.u-mcoller {
  width: 100%;
  margin: 0.4rem auto 0;
  position: relative;
  height: 1.85rem;
}
.u-mScoller ul {
  position: absolute;
  height: 1.85rem;
  display: inline-block;
  overflow-y: hidden;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
}
.u-mScoller ul li {
  font-size: 0.3rem;
  display: inline-block;
  width: 3.28rem;
  margin-right: 0.15rem;
}
.u-pic {
  height: 1.85rem;
  position: relative;
}
.u-tag {
  min-width: 1.16rem;
  max-width: 3rem;
  height: 0.38rem;
  padding: 0 0.15rem;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 0.2rem;
  line-height: 0.38rem;
  text-align: center;
  color: #fff;
  font-size: 0.28rem;
  position: absolute;
  left: 0.08rem;
  bottom: 0.08rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.u-more {
  background: url(../../assets/u-bj.png) no-repeat;
  height: 1rem;
  width: 6.6rem;
  background-size: 100% auto;
  margin: 0.38rem 0;
  font-size: 0.28rem;
  color: #fff;
  line-height: 1rem;
  padding-left: 0.55rem;
  position: relative;
}
.u-more a {
  display: block;
  color: #fff;
}
.u-more a i {
  background: url(../../assets/u-jiantou.png) no-repeat;
  height: 0.44rem;
  width: 0.44rem;
  background-size: 100% auto;
  display: block;
  position: absolute;
  right: 0.26rem;
  top: 0.28rem;
  animation: moveIcon .8s linear 0s infinite;

}
.u-mcoller ul li {
  font-size: 0.3rem;
  float: left;
  width: 2.29rem;
  margin-right: 0.11rem;
  margin-bottom: 0.27rem;
}
.u-mcoller ul li .u-pic-2 {
  height: 1.29rem;
  position: relative;
}
.u-mcoller ul li .u-tag-2 {
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  color: #333;
  font-size: 0.28rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
@keyframes moveIcon {
	0% {
		right: .26rem
	}

	30% {
		right: 0
	}

	to {
		right: .26rem
	}
}
</style>
