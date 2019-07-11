<template>
  <div>
    <div class="mVisaIndex">
      <div class="mVisaSearch">
        <div class="SearchLeft">
          <i class="iconfont icon-arrowLeft"></i>
        </div>
        <div class="headerSearch">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAAAjCAYAAAA33kzeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjMmNlOWZhMi05NzgxLTRjNmUtYjllNS04M2Y4YWZmYWM5MTciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDE0QTc2MDY1NzQxMTFFOEEwNjg4OThGOUREQzM5NEMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDE0QTc2MDU1NzQxMTFFOEEwNjg4OThGOUREQzM5NEMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpkZDkwM2ZlYy02OWMxLTRiZjgtYjBkNy1hODQ5NzBkZDczYTAiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6YzJjZTlmYTItOTc4MS00YzZlLWI5ZTUtODNmOGFmZmFjOTE3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9SeVMwAABVFJREFUeNrEWW2IFVUYnt22z6WsQFhT17YotytXpVumlqA/IjUxyU201jCCwoL8ZYkFUaGi/ZIoVBCxD8sU+rFK6Z8WXFOhrL2rbn5tq6kYZnrd8it1e994Bs6O57znPTN39YGHO3fOmbn3PHPez6koFApRIG4gjiM2EucSTwReX0EcQ5xJXEDsjNKjlvgs8TnwWFRmVAXMHUp8kTiDeA+xJVCceojSiIW1pRTnPuJUYgPxUQh+pDfE0QjUz1hUPjG2RnH/vsQXcH0hxfUx+uPhsCgPW8Zbol6CT6D1xNGW8/8S1ynuv4r4tOV8N/HLgP85B+bswnZ8Dia+VEZ9LkkC3U8c5Rg7CD/kApvOIeJTjvHfiSNAG44SfzC+5z0L2YbPJ4lvlVGgPZJAM2HfLn/ytXDt+8STwg6t9Vy/NECgs8SdSiFD0VYlRJrGDDf+hfh2lj9mHN8NH+TCj2wKOH6XuNgTQfnetzrGjxMfN76XXAKNhonZ8Bme1HDL2AHidGKlxSnH+BZ/dLxl7G/iWNzHjJ4a84oXKKFOECd+MB3miUrBvFz4GAux4RzxJ+QmLiwn/uUYu4zrS8a5YZ5Fbw3YmfmAneuMYjcj6bLhV+IOz49UIrTb8Cd2kCvSnLec6/CYzTUXaBLs3mVePrCJDHSMfUW8KDjvC5ZzTWA54DPXokagycRTjtzlcxx3OeacIU5xjDFWG77GNqeUiGSTPAtqJr4cIJBkruzod1/l1VPUYoxbUG6E4LARbTQoKkziQ+KbRpK4zeHXBsD0u1BLWnMe4pAstVgMVvRTYi7wug3EaXDkkcKPHcFickqfwVH1LsucvTDdgiCO1f9IUcxVlryDp5RLISybyybinYq5V4gTiWsDnKprt7WmddAhAj1A3EL8gHijJ6uVMAZ+o0b5u8M9PqNdIVBRKVAxjUCc0L1K/Jk4UpjHW3gebP17haNsQdsiS1jel4h6ec/O8OVTdUZfKa8RqB/8xjJitaeseAS5CkemCegCRJ5CuMUTdqs9IppP/HbivR6BfCF+KepD5hM+gRrwByZ6tvhC4mPEXYndxOXGJ4peU3Oi9jExxPMAWxO7x1ZYd6GzUIPeVHAtWJVobg0ivuEpNeKMepaQVXNofZ34B/E94T4cdTYTX4EZ70mZ9brMZxfyN9+9Nho5WmR0B3oINEdZge8nLkLLotYztx2lxQRhzm1IQL9LzBsaIFBWB80CrXOFbu0TMyPa6qj8aAvIektIPHs1xCcFYn/ykWPe/EjuIGqxAH4nciR02gjWppyrjWAqgaQq/ZQjSw0FN7dOK+b1FwrmpINmM+8jLLzKk9h2JmpAsdQYISRnh5AJx12+BuFHVyS+z0AotoXtTbh3SFuiqPBVh7HwHFo4QQmiSyBudLma3msMgXJofGkE4uTxC0cYvoxwn6VvM8wzJ7X/seVBdyhNpUIY67LkVBVCu+JEYFuiO5F39ZqDDi1W/1EKecUikAvrUzS2OhMPIWuIDxKo2pM5a3bQmYSzHSUkk99YznMxXK9cEPuWBzNEsAuo6dQCSf2hi8od1G0cTxV2aTMy7STqPR0D06k+5PjP8cL7oDqIhEz7UohANwlzzylNs5TRvHwm0aowxXYsPJN52XbMWuQqNmw3jnejvWFD7HS5e9eENL5c/ueaRrD/fUmhUJhdpiw5LTh1WGl859ptvDCf5y4hvoai2pZQ8gvEo/CBUnPut6jnO7pncF2PHfS82f+4DtgaaGL8FoNfMU8Wsu2aSNe1rANjF3LcZmIcuTquo0CmSfvew0d44vwC8mTkfkObBnsRWXvgPwEGACm4KE79jb3zAAAAAElFTkSuQmCC"
            alt
          />

          <div class="mVisaSearch__select">
            选择国家
            <i class="iconfont icon-arrowBottom-fill"></i>
          </div>
        </div>
      </div>
      <div class="mVisaIndex__underHead">材料清晰-进度可查-安全专业-出签率高-专属管家</div>
      <div class="mVisaIndex__recommend">
        <div class="mVisaIndex__box__head">
          <i class="iconfont icon-tubiaozhizuo-"></i>
          特别推荐
        </div>
        <div class="mScrollX">
          <a :href="item.url"   v-for="(item,index) in recommendVisasList" :key = "index">
            <div class="box_pic">
              <img :src="item.pic" alt />
            </div>
            <div class="box__title">{{item.name}}</div>
            <div class="box__price">
              <span>¥</span>{{item.price}}
              <span>起</span>
            </div>
          </a>

        </div>
      </div>
      <div class="mVisaIndex__country">
        <div class="mVisaIndex__box__head">
          <i class="iconfont icon-tubiaozhizuo-"></i>
          热门国家
        </div>
        <div class="country__container">
 
          <a :href="item.url" v-for="(item,index) in hotVisasList" :key = "index">
            <div class="box_pic">
            <img :src="item.pic" alt="">
            </div>
            <div class="box__title">{{item.name}}</div>
            <div class="box__price">
              <span>¥</span>{{item.price}}
              <span>起</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {getVisaIndex} from  "api/travel.js";
export default {
  name: "visas",
 async created(){
      let data = await getVisaIndex();
      console.log(data.recommend);   
      console.log(data.hot);
     this.recommendVisasList = data.recommend
     this.hotVisasList = data.hot      
  },
  data(){
         return{
            recommendVisasList:[],
            hotVisasList:[]
        }
  }
  
  
};
</script>

<style scope>
.icon-arrowLeft {
  font-size: 0.3rem;
}

.mVisaSearch {
  display: flex;
  align-items: center;
  padding-left: 0.3rem;
  height: 0.9rem;
  background: #f7f7f7;
  border-bottom: 1px solid #ddd;
}
.headerSearch img {
  display: inline-block;
  margin-left: 2.07rem;
  width: 0.72rem;
  height: 0.35rem;
  vertical-align: middle;
}
.mVisaSearch__select {
  display: inline-block;
  margin-left: 0.16rem;
  padding-left: 0.1rem;
  padding-right: 0.3rem;
  width: 1.35rem;
  height: 0.45rem;
  line-height: 0.47rem;
  text-align: center;
  font-size: 0.26rem;
  color: #444;
  background: #feeea0;
  background-size: 0.18rem 0.1rem;
  border-radius: 0.2rem;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.mVisaIndex__underHead {
  height: 0.71rem;
  line-height: 0.71rem;
  background: #f7f7f7;
  text-align: center;
  font-size: 0.24rem;
  color: #999;
}
.mVisaIndex__box__head {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-left: 0.3rem;
  height: 0.9rem;
  line-height: 0.9rem;
  font-size: 0.32rem;
  color: #333;
  background: #fff;
}
.icon-tubiaozhizuo- {
  font-size: 0.5rem;
  color: orange;
}
.mScrollX {
  width: 100%;
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  padding-left: 0.2rem;
  background-color: #fff;
  z-index: 1000;
}
.mScrollX a {
  flex-shrink: 0;
  position: relative;
  display: inline-block;
  width: 2.8rem;
  height: 3.6rem;
  margin-right: 0.2rem;
  vertical-align: middle;
  -webkit-box-shadow: 0.03rem 0.03rem 0.12rem rgba(0, 0, 0, 0.14);
  box-shadow: 0.03rem 0.03rem 0.12rem rgba(0, 0, 0, 0.14);
}

.country__container a {
  display: inline-block;
  margin-left: 0.2rem;
  width: 2.17rem;
  height: 2.66rem;
  vertical-align: middle;
  -webkit-box-shadow: 0.03rem 0.03rem 0.12rem rgba(0, 0, 0, 0.14);
  box-shadow: 0.03rem 0.03rem 0.12rem rgba(0, 0, 0, 0.14);
}

.box_pic {
  width: 100%;
}
.box_pic img {
  width: 100%;
}
.box__title {
  text-align: center;
  padding: 0.15rem 0.2rem 0;
  font-size: 0.3rem;
  color: #333;
  white-space: normal;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.box__price {
  text-align: center;
  margin-top: 0.25rem;
  padding-left: 0.22rem;
  font-size: 0.28rem;
  color: #fd6000;
}
.mVisaIndex__country{
  overflow: auto;
}
</style>