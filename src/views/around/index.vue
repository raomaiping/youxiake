<template>
  <div id="v-around">
    <Header :title="title"></Header>
    <div class="v-container">
      <Banner :lines="lines" />
      <!-- 活动日历 -->
      <div class="v-datetable">
        <a href></a>
      </div>
      <Gooutnumber :Gtheme_lines="Gtheme_lines" :Gtheme_tag="Gtheme_tag" />
      <Maintitle :theme_lines="theme_lines" :theme_tag="theme_tag" />
    </div>
  </div>
</template>
 
<script>
import Header from "components/around/header";
import Banner from "components/around/banner";
import Gooutnumber from "components/around/gooutnumber";
import Maintitle from "components/around/maintitle";
import { getAroundMessage } from "api/around";
export default {
  name: "around",
  components: {
    Header,
    Banner,
    Gooutnumber,
    Maintitle
  },
  async created() {
    let aroundData = await getAroundMessage();
    this.theme_lines = aroundData.data.theme_lines.lines.theme_lines;
    this.theme_tag = aroundData.data.theme_lines.lines.theme_tag;
    this.Gtheme_lines = aroundData.data.days.lines.theme_lines;
    this.Gtheme_tag = aroundData.data.days.lines.theme_tag;
    this.lines = aroundData.data.hot_lines.lines;
  },
  data() {
    return {
      title: "周边游",
      theme_lines: [],
      theme_tag: [],
      Gtheme_lines: [],
      Gtheme_tag: [],
      lines: []
    };
  },
  mounted() {
    let scroll = new BScroll(".wrapper", {
      scrollY: true,
      click: true
    });
  }
};
</script>
<style>
body,
html {
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: #f4f4f4;
}
/* 整个滑动内容块 */
#v-around {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

/* 出游天数 主题旅游*/
.v-around-titleall {
  width: 100%;
  background: #fff;
  margin-top: 0.15rem;
  position: relative;
}
.v-around-titleall > h2 {
  font-size: 0.38rem;
  font-weight: bolder;
  color: #353535;
  line-height: 1.1rem;
  height: 1.1rem;
  position: relative;
  padding-left: 0.2rem;
}
.v-around-titleall > h2::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0.4rem;
  width: 0.08rem;
  height: 0.34rem;
  background-color: #ffd800;
}

.v-around-listall {
  width: 100%;
  overflow: hidden;
}
.v-around-listall > li {
  float: left;
  margin: 0 0 0.2rem 0.2rem;
  width: 1.62rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  font-size: 0.32rem;
  font-weight: 700;
  overflow: hidden;
  color: #999;
  background: #f3f3f3;
}

/* 动态点击天数的样式 */
.v-around-listall .active {
  color: #333;
  background-color: #fee880;
}

/* 活动地点信息 */
.v-locationList {
  width: 100%;
  max-height: 14.7rem;
  overflow: hidden;
  padding-left: 0.2rem;
  margin-bottom: 0.1rem;
  box-sizing: border-box;
}
.v-locationList > li {
  float: left;
  position: relative;
  margin-right: 0.2rem;
  width: 3.45rem;
  height: 3.6rem;
  margin-top: 0.1rem;
}
.v-locationList > li > a {
  display: block;
  width: 3.45rem;
  height: 3.6rem;
}
.v-locationList > li > a .v-locationListTab {
  position: absolute;
  left: 0;
  top: 0.1rem;
  padding: 0.07rem 0.12rem;
  font-size: 0.2rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.68);
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
}
.v-locationList > li > a .v-locationListImg {
  display: block;
  width: 100%;
  height: 1.94rem;
  background-size: cover;
}

.v-locationList-detial > p {
  padding-top: 0.1rem;
  height: 0.7rem;
  line-height: 0.36rem;
  font-size: 0.3rem;
  color: #353535;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.v-locationList-text {
  margin-top: 0.26rem;
  line-height: 0.4rem;
  overflow: hidden;
}
.v-locationList-money {
  float: left;
  font-size: 0.26rem;
  color: #ff7100;
}
.v-locationList-money span:nth-of-type(1) {
  font-weight: 900;
  font-size: 0.34rem;
  line-height: 0.34rem;
  margin: 0 0.06rem;
}
.v-locationList-money span:nth-of-type(2) {
  color: #888;
}
.v-locationList-day {
  float: right;
}
.v-locationList-more {
  height: 1.5rem;
  margin: 0 0.2rem;
  border-top: 4px solid #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
}
.v-locationList-more .v-locationList-morelink {
  display: block;
  width: 2.4rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  font-size: 0.26rem;
  color: #333;
  background-color: #ffd800;
  border-radius: 0.35rem;
}

/* 内容部分 */
.v-container {
  width: 100%;
  height: 5.2rem;
  margin-bottom: 0.2rem;
}
.v-datetable {
  padding: 0.2rem 0 0.3rem;
  width: 100%;
  height: 1.4rem;
  background-color: #fff;
}
.v-datetable > a {
  display: block;
  margin: 0 auto;
  width: 7.1rem;
  height: 100%;
  background-size: contain;
  background: url("https://m.youxiake.com/static/img/activity_calendar.de8d6fa.png")
    no-repeat;
}
</style>
