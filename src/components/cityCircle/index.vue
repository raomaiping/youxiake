<template>
    <div>
         <HeaderCom/>
         <div class="u-banner">
            <img :src="bj" class="banner">
            <div class="join_info">
                <h3>{{city}}</h3>
                <p class="decs">{{introduce}}</p>
            </div>
        </div>

         <div class="u-author_card"></div>
        <div class="u-new_join ">
            <h3>{{title}}</h3>
            <ul>
                <li v-for="(item,index) in listId" :key="index">
                    <img :src="item.authorAvatar">
                    <span>{{item.author}}</span>
                </li>
            </ul>
            <div class="btn_Join">{{qz}}</div>
        </div>

         <div class="mobile_qz_notes">
            <h3 class="tit">{{bqyj}}</h3>
            <div class="home_article_list">
                <div class="mobile_article_item" v-for="(item,index) in listQz" :key="index">
                    <div class="f_pic">
                        <a href="javascript:;" class="link">
                            <img alt="" :src="item.cover" lazy="loaded">
                        </a>
                        <a href="javascript:;" class="auth">
                            <img class="auth_tx" :src="item.authorAvatar" lazy="loaded">
                            {{item.author}}
                        </a>
                    </div>
                    <div class="f_right">
                        <h3>
                            <a href="javascript:;"><span>{{item.title}}</span></a>
                        </h3>
                        <div class="article_item_info">
                            <span class="tz_adrs"><i></i>{{item.mddName}}</span>
                            <span class="tz_look"><i></i>{{item.views}}</span>
                            <span class="tz_reply"><i></i>{{item.replies}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import {QzId} from "api/circle";
import {cityQ} from "api/circle";
export default {
    name:"cityCircle",
    async created() {
    let data = await QzId();
    let list = await cityQ();
    this.listId =data.data.members;
    this.listQz = list.data.articles;
  },
  data() {
    return {
      listQz:[],
      listId:[],
      bj:"https://gallery.youxiake.com/Public/Data/upload/201805/02/74691525242116.jpg?imageMogr2/thumbnail/!412x233r/gravity/Center/crop/!412x233/quality/90",
      city:"杭州圈",
      introduce:"杭州圈，成立于2018年，温文尔雅的浪漫之都，用文字记录你的生活和旅程。",
      title:"最新加入",
      qz:"+加入圈子",
      bqyj:"本圈游记",
    };
  }
}
</script>

<style>
    .u-banner{
    position: relative;
    height: 4.22rem;
}
.u-banner .banner{
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    height: 4.22rem;
    width: 100%;
}
.u-banner .join_info{
    position: absolute;
    left: 0;
    bottom: .28rem;
    z-index: 2;
    width: 90%;
    padding: 0 .2rem;
    color: #fff;
}
.u-banner .join_info h3{
    font-size: .36rem;
    margin-bottom: .18rem;
    text-shadow: 0 0 0.1rem #000;
}
.u-banner .join_info p.decs {
    width: 5.1rem;
    font-size: .24rem;
    text-shadow: 0 0 0.1rem #000;
}

.u-author_card{
    width: 100%;
    height: 2.17rem;
    background: #f8f8f8;
    margin-top: 1.04rem;
    padding: 0 .2rem;
}
.u-new_join{
    margin: .3rem .2rem 0;
    position: relative;
}
.u-new_join h3 {
    font-size: .32rem;
    color: #444;
    padding-bottom: .15rem;
    font-weight: 400;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: .22rem;
}
.u-new_join h3 {
    font-size: .32rem;
    color: #444;
    padding-bottom: .15rem;
    font-weight: 400;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: .22rem;
}
.u-new_join ul{
    display: flex;
    justify-content: space-between;
    height: 1.4rem;
    overflow: hidden;
    width: 100%;
}
.u-new_join ul li {
    width: 1.43rem;
    text-align: center;
}
.u-new_join ul li img {
    width: .94rem;
    height: .94rem;
    border-radius: 50%;
    margin: 0 auto;
    display: block;
}
.u-new_join .btn_Join {
    width: 2.95rem;
    height: .62rem;
    line-height: .62rem;
    color: #fff;
    background: #ff9a00;
    font-size: .32rem;
    text-align: center;
    border-radius: 5px;
    position: absolute;
    right: .2rem;
    top: -1.64rem;
}
.mobile_qz_notes {
    margin: .5rem .2rem 0;
}
.mobile_qz_notes h3.tit {
    font-size: .32rem;
    color: #444;
    padding-bottom: .15rem;
    font-weight: 400;
    border-bottom: 1px solid #e5e5e5;
}
.mobile_article_item {
    padding: .4rem 0 .3rem;
    border-bottom: 1px solid #e5e5e5;
    overflow: hidden;
}
.mobile_article_item .f_pic {
    width: 2.58rem;
    float: left;
}
.mobile_article_item .f_pic .link {
    height: 1.45rem;
    overflow: hidden;
    width: 100%;
    background: #f5e2c4;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}
.mobile_article_item .f_pic .auth {
    height: .52rem;
    line-height: .52rem;
    display: block;
    margin-top: .25rem;
    width: 100%;
    overflow: hidden;
    font-size: .24rem;
    color: #888;
}
.mobile_article_item .f_pic .link img {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    margin: 0 auto;
    display: block;
}
.mobile_article_item .f_pic .auth img {
    width: .52rem;
    height: .52rem;
    border: 1px solid #e5e5e5;
    border-radius: 50%;
    display: inline-block;
    vertical-align: -.15rem;
    margin-right: .13rem;
}
.mobile_qz_notes .f_right {
    width: 4.1rem;
}
.mobile_article_item .f_right {
    width: 3.65rem;
    float: right;
}
.mobile_article_item .f_right h3 {
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: .28rem;
    height: 1.45rem;
    font-weight: 400;
}
.mobile_article_item .f_right .article_item_info {
    height: .52rem;
    line-height: .52rem;
    display: block;
    margin-top: .25rem;
    width: 100%;
    overflow: hidden;
    font-size: .24rem;
    color: #444;
}
.mobile_article_item .f_right .article_item_info .tz_adrs i {
    background: url(../../assets/u-dw.png) no-repeat;
    height: .28rem;
    width: .22rem;
    background-size: 100% auto;
    display: inline-block;
    vertical-align: -.03rem;
    margin-right: .13rem;
}
.mobile_article_item .f_right .article_item_info .tz_look {
    margin-right: 0;
}
.mobile_article_item .f_right .article_item_info .tz_look i {
    background: url(../../assets/u-icon03.png) no-repeat;
    height: .23rem;
    width: .35rem;
    background-size: 100% auto;
    display: inline-block;
    vertical-align: -.03rem;
    margin-right: .13rem;
}
.mobile_article_item .f_right .article_item_info .tz_reply i {
    background: url(../../assets/u-icon04.png) no-repeat;
    height: .29rem;
    width: .31rem;
    background-size: 100% auto;
    display: inline-block;
    vertical-align: -.07rem;
    margin-right: .13rem;
}
.mobile_qz_notes .f_right .article_item_info span {
    display: inline-block;
    width: 1.16rem;
}
</style>
