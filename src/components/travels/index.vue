<template>
  <div>
    <HeaderCom />
    <Loading  v-if="loadingFlag"/>
    <div  v-if="!loadingFlag">
      <div class="u-banner">
      <img src="../../assets/u-banner02.jpeg" alt />
    </div>

    <div class="u-main">
      <div class="u-nav">
        <div class="u-none"></div>
        <ul class="u-nav_big">
          <li class="nav_li">热门游记</li>
          <li class="nav_li">精华游记</li>
          <li class="nav_li active">最新游记</li>
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
                <i></i>{{item.views}}
              </span>
              <span class="tz_reply">
                <i></i>{{item.replies}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import {articles} from "api/circle";
export default {
    name:"travels",
    async created() {
    let data = await articles();
    if(data){
      this.loadingFlag = false;
    }else{
        this.loadingFlag = true;
    }
    this.titleList = data.data.articles;
    },
    data() {
    return {
      titleList:[],
      loadingFlag:true
    };
  }
};
</script>

<style>
.u-banner {
  height: 4.22rem;
  width: 100%;
  background-size: 100% auto;
}

.u-main{
    margin: 0 .4rem;
}
.u-nav .u-none{
    height: .48rem;
    display: none;
}
.u-nav .u-nav_big{
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    height: .55rem;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
}
.u-nav .u-nav_big .nav_li {
    font-size: .32rem;
    color: #888;
    padding-bottom: .05rem;
}
.u-nav .u-nav_big .nav_li:hover{
    color: #444;
    border-bottom: 4px solid #ffd800;
}
.u-mobile{
    padding: .4rem 0 .3rem;
    border-bottom: 1px solid #e5e5e5;
    overflow: hidden;
}
.u-mobile .u-pic{
    width: 2.58rem;
    float: left;
}
.u-mobile .u-pic .link{
    height: 1.45rem;
    overflow: hidden;
    width: 100%;
    display: block;
    background: #f5e2c4;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
}
.u-mobile .u-pic .link img{
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    margin: 0 auto;
    display: block;
}

.u-mobile .u-pic .auth{
    height: .52rem;
    line-height: .52rem;
    display: block;
    margin-top: .25rem;
    width: 100%;
    overflow: hidden;
    font-size: .24rem;
    color: #888;
}
.u-mobile .u-pic .auth img{
    width: .52rem;
    height: .52rem;
    border: 1px solid #e5e5e5;
    border-radius: 50%;
    display: inline-block;
    vertical-align: -.15rem;
    margin-right: .13rem;
}
.u-right{
    width: 3.65rem;
    float: right;
}
.u-right h3{
    font-size: .32rem;
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
.u-right .u-info{
    height: .52rem;
    line-height: .52rem;
    display: block;
    margin-top: .25rem;
    width: 100%;
    overflow: hidden;
    font-size: .24rem;
    color: #444;
}
.u-right .u-info .tz_look{
    margin-right: 0;
}
.u-right .u-info .tz_look i{
    background: url(../../assets/u-icon03.png) no-repeat;
    height: .23rem;
    width: .35rem;
    background-size: 100% auto;
    display: inline-block;
    vertical-align: -.03rem;
    margin-right: .13rem;
}
.u-right .u-info .tz_reply i{
    background: url(../../assets/u-icon04.png) no-repeat;
    height: .29rem;
    width: .31rem;
    background-size: 100% auto;
    display: inline-block;
    vertical-align: -.07rem;
    margin-right: .13rem;
}
.u-right .u-info span{
    display: inline-block;
    width: 1.3rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
</style>
