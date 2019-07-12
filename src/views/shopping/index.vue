<template>
    <div id="v-shopping">

        <!-- 头部 -->
        <Header :title="title"/>

        <!-- 轮播图 -->
        
            <Swiper :slide_show="slide_show"/>
            <Loading v-if="loaflag" />
        <!-- 小标题 -->
        <!-- <div class="v-shopping-goods-title">
            <i></i>
            <span>限时秒杀</span>
            <div class="v-shopping-timego">
                <span>距结束</span>
                <i>4天</i>
                <p>13</p>：
                <p>07</p>：
                <p>59</p>
            </div>
        </div> -->

        <!-- 马上抢 -->
        <!-- <div class="v-shopping-fast">
            <div class="v-shopping-fastbuy" v-if="SecKilllist.length == 0">
                
                    <img class="v-shopping-fastbuy-img" >
                    <div class="v-shopping-fastbuy-text">
                        <p>{{SecKilllist[0].goods_name}}</p>
                        <div class="v-shopping-fastbuy-price">
                            <strong><span>￥</span>{{SecKilllist[0].goods_price}}</strong>
                            <b>原价<span>￥{{SecKilllist[0].market_price}}</span></b>
                        </div>
                        <div class="v-shopping-fastbuy-link">
                            <span>仅剩{{SecKilllist[0].goods_stock}}件</span>
                            <p>马上抢</p>
                        </div>
                    </div>
                    <a href=""></a>
            </div>
        </div> -->

        <!-- 小标题 -->
        <div class="v-shopping-goods-title">
            <i></i>
            <span>精品推荐</span>
        </div>
        <!-- 精品推荐 -->
        <ul class="v-shopping-bestgoods">
            <li class="v-shopping-bestgood" v-for="(item,index) in recomlist" :key="index">
                <img class="v-shopping-bestgood-img" :src="item.img_json">
                <div class="v-shopping-bestgood-text">
                    <p>{{item.goods_name}}</p>
                    <div class="v-shopping-bestgood-price">
                        <p>￥<span>{{item.goods_price}}</span></p>
                        <b>已售<span>{{item.sale_num}}</span></b>
                    </div>
                </div>
            </li>  
        </ul>

        <!-- 小标题 -->
        <div>
            <div v-for="(item,index) in goodslist" :key="index">
                <div class="v-shopping-goods-title">
                    <i></i>
                    <span>{{item.name}}</span>
                </div>
                <div class="v-shopping-parks">
                    <ul>
                        <li v-for="(goods,index) in item.goodslist" :key="index">
                            <img class="v-shopping-parks-img" :src="JSON.parse(goods.img_json)[0]">
                            <div class="v-shopping-parks-text">
                                <p>{{goods.goods_name}}</p>
                                <div class="v-shopping-parks-price">
                                    <p>￥{{goods.goods_price}}</p>
                                    <b>已售<span>{{goods.sale_num}}</span></b>
                                </div>
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>   
    </div>
</template>
<script>
import Header from "components/around/header";
import Swiper from "components/shopping/swiper";

import {getShopping} from "api/shopping";
import { loadavg } from 'os';

export default {
    name:"shopping",
    components:{
        Header,
        Swiper,
        loaflag:true
    },
    async created(){
        let data = await getShopping();
        this.goodslist = data.taglist;  //商品
        this.SecKilllist = data.SecKilllist;  //限时秒杀
        this.recomlist = data.recomlist; //
        this.slide_show = data.banners
    },
    data(){
        return {
            title:"游侠集市",
            SecKilllist:[],  //限时秒杀
            goodslist:[]  , //商品
            recomlist:[]  ,  //精品推荐
            slide_show:[]  //轮播图
        }
    },
    
}
</script>
<style>


body,html{
    width: 100%;
    height: 100%;
    background: #f4f4f4;
    overflow: hidden;
}
/* 整个滑动内容块 */
#v-around{
    position: relative;
    width: 100%;
    height: 100%;
    overflow-y:auto; 
}
/* 周边游头部 */
.v-header{
    width: 100%;
    height: 0.9rem;
    background: #f7f7f7;
    position: relative;
}
.v-header .v-back{
    display: block;
    height: 0.9rem;
    position: absolute;
    top: 0;
    left: 0.3rem;
}
.v-header .v-mine{
    display: block;
    height: 0.9rem;
    position: absolute;
    top: 0;
    right: 0.3rem;
}
.icon-arrowLeft ,.icon-gerenzhongxin{
    font-size: 0.35rem;
    line-height: 0.9rem;
}
.v-header>h1{
    text-align: center;
    line-height: 0.9rem;
    font-size: 0.32rem;
    columns: #333333;
    font-weight: normal;
    font-family:  Microsoft YaHei;
}

#v-shopping{
    width: 100%;
    height: 100%;
    overflow-y: auto;
}
/* 轮播图 */
.v-shopping-swiper{
    width: 100%;
    height: 4.22rem;
    overflow: hidden;
    margin-bottom:.2rem; 
}

/* 小标题 */
.v-shopping-goods-title{
    width: 100%;
    padding: .2rem .3rem 0;
    height: .87rem;
    border-bottom: 1px solid #ccc;
    background: #fff;
    box-sizing: border-box;
}
.v-shopping-goods-title>i{
    display: inline-block;
    margin-right: .2rem;
    width: .14rem;
    height: .44rem;
    border: 1px solid #444;
    border-radius: .07rem;
    background: #ffca00;
}
.v-shopping-goods-title>span{
    font-size: .3rem;
    color: #333;
    vertical-align: top;
}
.v-shopping-timego{
    float:right;
    display: flex;
    height: 100%;
    color: #ff9e00;
}
.v-shopping-timego>span{
    font-size: .24rem;
    color: #666;
    margin: 0 .1rem;
    line-height: .5rem;
}
.v-shopping-timego>i{
    font-size: .3rem;
    color: #ff9e00;
    margin:0 .2rem;
    font-style: normal;
    line-height: .5rem;
}
.v-shopping-timego p{
    width: .5rem;
    height: .5rem;
    border: 1px solid #ccc;
    font-size: .3rem;
    color: #ff9e00;
    text-align: center;
    line-height: .5rem;
}

/* 马上抢 */
.v-shopping-fast{
    width: 100%;
    margin-bottom:.2rem;
}
.v-shopping-fastbuy{
    width: 100%;
    height: 2.6rem;
    padding: .3rem .32rem;
    background: #fff;
    position: relative;
    box-sizing: border-box;
}
.v-shopping-fastbuy>a{
    display: block;
    width: 100%;
    height: 2.6rem;
    position: absolute;
    left: 0;
    top: 0;
}
.v-shopping-fastbuy-img{
    float: left;
    width: 2rem;
    height: 2rem;
    margin-right: .3rem;
    background-size:cover; 
}
.v-shopping-fastbuy-text{
    float: left;
    width: 4.0rem;
    height: 100%;
    position: relative;
}
.v-shopping-fastbuy-text>a{
    display: block;
}
.v-shopping-fastbuy-text>p{
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: .32rem;
    color: #444;
}
.v-shopping-fastbuy-price{
    width: 100%;
    margin-top: .2rem;
}
.v-shopping-fastbuy-price>strong{
    font-size: .38rem;
    color: #ff5f00;
}
.v-shopping-fastbuy-price>strong>span{
    font-size: .28rem;
    color: #ff5f00;
    font-weight: 100;
}
.v-shopping-fastbuy-price>b{
    font-size: .26rem;
    margin-left: .3rem;
    color: #999;
    font-weight: normal;
}
.v-shopping-fastbuy-price>b>span{
    font-size: .26rem;
    margin-left: .1rem;
    text-decoration: line-through;
}
.v-shopping-fastbuy-link{
    width: 100%;
    overflow: hidden;
}
.v-shopping-fastbuy-link>span{
    display: block;
    border: 2px solid #444;
    background: #fff;
    border-radius: .2rem;
    font-size: .22rem;
    padding: 0.03rem .2rem;
    text-align: center;
    position: absolute;
    left: 0;
    bottom: .12rem;
}
.v-shopping-fastbuy-link>p{
    display: block;
    width: 1.76rem;
    padding: .1rem 0 ;
    font-size: .3rem;
    color: #fff;
    text-align: center;
    background: #ff7000;
    position: absolute;
    border-radius:.1rem; 
    right: 0;
    bottom: 0;
}

/* 精品推荐 */
.v-shopping-bestgoods{
    width: 100%;
}
.v-shopping-bestgood{
    width: 100%;
    height: 2.6rem;
    padding: .3rem .32rem;
    background: #fff;
    position: relative;
    box-sizing: border-box;
}
.v-shopping-bestgood>a{
    display: block;
    width: 100%;
    height: 2.6rem;
    position: absolute;
    left: 0;
    top: 0;
}
.v-shopping-bestgood-img{
    display: block;
    float: left;
    width: 2rem;
    height: 2rem;
    margin-right: .3rem;
    background-size:cover; 
}
.v-shopping-bestgood-text{
    float: left;
    width: 4.3rem;
    height: 100%;
    position: relative;
}
.v-shopping-bestgood-text>p{
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: .32rem;
    color: #444;
}
.v-shopping-bestgood-price{
    width: 100%;
    overflow: hidden;
    margin-top:1.2rem; 
}
.v-shopping-bestgood-price>p{
    font-size: .26rem;
    color: #ff5f00;
    float: left;
    
}
.v-shopping-bestgood-price>p>span{
    font-size: .38rem;
}
.v-shopping-bestgood-price>b{
    font-weight: normal;
    float: right;
    font-size: .26rem;
    color: #999;
    padding-top: .1rem;
}
.v-shopping-bestgood-price>b>span{
    display: inline-block;
    margin-left: .2rem;
    
}

/* 游小侠乐园 */
.v-shopping-parks{
    width: 100%;
}
.v-shopping-parks>ul{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    justify-self: flex-start;
    background: #fff;
    padding: .2rem;
}
.v-shopping-parks>ul>li{
    width: 3.3rem;
    height: 4.31rem;
    margin-bottom: .2rem;
}
.v-shopping-parks-img{
    width: 3.3rem;
    height: 3.3rem;
    border: 1px solid #ccc;
}
.v-shopping-parks-text>p{
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: .32rem;
    color: #444;
    line-height: .6rem;
}
.v-shopping-parks-price>p{
    font-size: .26rem;
    color: #ff5f00;
    float: left;
}
.v-shopping-parks-price>b{
    font-weight: normal;
    float: right;
    font-size: .26rem;
    color: #999;
    padding-top: .1rem;
}
.v-shopping-parks-price>b>span{
    display: inline-block;
    margin-left: .2rem;
}
</style>

