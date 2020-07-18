<template>
    <div class="v-photo">
        <!-- 头部 -->
        <HeaderCom/>
        <!-- banner -->
        <div class="v-photo-banner">
            <img src="http://gallery.youxiake.com/Public/Data/upload/201902/22/64361550823365.png" alt="">
        </div>
        <!-- 导航 -->
        <div class="v-photo-nav">
            <ul>
                <li v-for="(item,index) in photonav" :key="index" @click="handleClick(index)" :class="status == index?'v-photo-nav-active':'' ">{{item}}</li>

            </ul>
        </div>
        <!-- 内容 -->
        <div class="v-photo-container">
            <!-- 杭州旅拍 -->
            <div class="v-photo-container-list" v-if="status==0">
                <a href="" v-for="(item,index) in data" :key="index">
                    <div class="v-photo-container-img">
                        <img :src="item.image" alt="">
                    </div>
                    <div class="v-photo-container-text">
                        <h5>{{item.title}}</h5>
                        <p><i>{{item.class_type}}</i> {{item.sub_name}}</p>
                    </div>
                    <div class="v-photo-container-txera">
                        <span>{{item.class_type}}</span>
                        <span> | </span>
                        <span>{{item.jihedi+'集合'}}</span>
                    </div>
                    <div class="v-photo-container-price">
                        <div>{{'￥'+item.adultprice+'元'}}</div>
                        <div>{{item.days+'天'}}</div>
                    </div>
                </a>
            </div>

            <!-- 成都旅拍 -->
            <div class="v-photo-container-list" v-if="status==1">
                <a href="" v-for="(item,index) in dataC" :key="index">
                    <div class="v-photo-container-img">
                        <img :src="item.image" alt="">
                    </div>
                    <div class="v-photo-container-text">
                        <h5>{{item.title}}</h5>
                        <p><i>{{item.class_type}}</i> {{item.sub_name}}</p>
                    </div>
                    <div class="v-photo-container-txera">
                        <span>{{item.class_type}}</span>
                        <span> | </span>
                        <span>{{item.jihedi+'集合'}}</span>
                    </div>
                    <div class="v-photo-container-price">
                        <div>{{'￥'+item.adultprice+'元'}}</div>
                        <div>{{item.days+'天'}}</div>
                    </div>
                </a>
            </div>

            <!-- 出境旅拍 -->
            <div class="v-photo-container-list" v-if="status==2">
                <a href="" v-for="(item,index) in dataO" :key="index">
                    <div class="v-photo-container-img">
                        <img :src="item.image" alt="">
                    </div>
                    <div class="v-photo-container-text">
                        <h5>{{item.title}}</h5>
                        <p><i>{{item.class_type}}</i> {{item.sub_name}}</p>
                    </div>
                    <div class="v-photo-container-txera">
                        <span>{{item.class_type}}</span>
                        <span> | </span>
                        <span>{{item.jihedi+'集合'}}</span>
                    </div>
                    <div class="v-photo-container-price">
                        <div><i v-if="Number(item.adultprice)">￥</i>{{item.adultprice}}<i v-if="Number(item.adultprice)">起</i></div>
                        <div>{{item.days+'天'}}</div>
                    </div>
                </a>
            </div>


        </div>
        <!-- 固定区 -->
        <div class="v-photo-nochange">
            <div class="v-photo-team">
                <a href="">
                    <img src="http://static.youxiake.com/new/yixing/images/custome01.png" alt="">
                </a>
            </div>
            <h3>专题推荐</h3>
            <!-- 轮播图 -->
        <div class="swiper-container v-photo-swiper" ref="banner">
            <div class="swiper-wrapper">
                <div class="swiper-slide slide_show">
                <a href="">
                    <img src="http://gallery.youxiake.com/Public/Data/upload/201901/07/46141546857568.png "/>
                    </a> 
                </div>
                <div class="swiper-slide slide_show">
                <a href="">
                    <img src="http://gallery.youxiake.com/Public/Data/upload/201901/07/95461546858582.png"/>
                    </a> 
                </div>
                <div class="swiper-slide slide_show">
                <a href="">
                    <img src="http://gallery.youxiake.com/Public/Data/upload/201804/08/45421523169603.jpg"/>
                    </a> 
                </div>
                <div class="swiper-slide slide_show">
                <a href="">
                    <img src="http://gallery.youxiake.com/Public/Data/upload/201803/08/89051520497553.jpg"/>
                    </a> 
                </div>

            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>

        <!-- 底部 -->
        <div class="v-photo-footer">
            <div>
                <i></i>
                <a href="">400-670-6300</a>|
                <a href="">返回首页</a>
            </div>
            <p>ICP经营许可证：浙 ICP 备 09011712 号-1</p>
            <p> © 2019 youxiake.com 版权所有</p>
        </div>
    </div>
</div>
</template>

<script>
import "swiper/dist/css/swiper.css"
import Swiper from "swiper"
import {getPhotoH,getPhotoC,getPhotoO} from "api/photo";
export default {
    name:"photo",
    async created(){
        this.data = await getPhotoH();
        this.dataC = await getPhotoC();
        this.dataO = await getPhotoO();
        console.log(this.data);
    },
    data(){
        return {
            data:[],
            dataC:[],
            dataO:[],
            photonav:['杭州旅拍','成都旅拍','出境旅拍'],
            status:0,  
        }
    },
    methods:{
        handleClick(index){
            this.status = index;
        }
    },
    updated(){
        if(!this.swiper){
            this.swiper = new Swiper(this.$refs.banner,{
            direction:'horizontal',
            loop:true,
            
            autoplay:{
                delay:3000,
                stopOnLastSlide:false,
                disableOnInteraction: false
            },
            pagination: {
                el: '.swiper-pagination',
            },
        });
        }
        
    }
}
</script>

<style>
body{
    background: #ededed;
}

/* 游侠拍头部 */
.v-photo-header{
    width: 100%;
    height: .86rem;
    background: #333333;
    position: relative;
    border-bottom:1px solid #cccccc; 
}
.v-photo-header>a{
    display: inline-block;
    width: .54rem;
    height: .50rem;
    background: url("http://static.youxiake.com/new/zt/images/common/home.png") no-repeat;
    background-size:cover; 
    position: absolute;
    top: .18rem;
    left: .44rem;
}
.v-photo-header>h1{
    font-weight: normal;
    font-size: 1.8rem;
    margin-top: .04rem;
    height: .86rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.v-photo-header>h1>img{
    width: 1.4rem;
    height: .5rem;
    border: 0;
    vertical-align: middle;
}
/* banner图 */
.v-photo-banner>img{
    display: block;
    width: 100%;
}
/* 导航 */
.v-photo-nav{
    width: 100%;
    height: .8rem;
    background: #f5f5f5;
    margin: 0 auto;
    position: relative;
}

.v-photo-nav>ul{
    overflow: hidden;  
}

/* 二级导航滑动后的样式 */
.v-photo-nav .v-photo-nav-scroll{
    position: fixed;
    top: 0;
    left: 0;

}
.v-photo-nav>ul>li{
    float: left;
    height: 100%;
    padding: 0 .24rem;
    height: 100%;
    font-size: .28rem;
    line-height: .8rem;
    font-family: Microsoft YaHei;
}
.v-photo-nav>ul>li>a{
    display: block;
    padding: 0 .24rem;
    height: 100%;
    font-size: .28rem;
    line-height: .8rem;
    font-family: Microsoft YaHei;
}
/* 点击后的样式 */
.v-photo-nav>ul .v-photo-nav-active{
    color: #f59000;
}

/* 内容区 */
.v-photo-container{
    width: 100%;
    background: #ededed;
}
.v-photo-container-list{
    width: 100%;
    margin-bottom: .2rem;
    background: #fff;
    
}
.v-photo-container-list>a{
    display: block;
    width: 100%;
    position: relative;
}
.v-photo-container-img>img{
    width: 100%;
    height: auto;
}
.v-photo-container-text{
    padding-bottom: .1rem;
}
.v-photo-container-text>h5{
    font-size: .30rem;
    line-height: .60rem;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: normal;
    font-family: Microsoft YaHei;
}
.v-photo-container-text>p{
    font-size: .28rem;
    line-height: .5rem;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: normal;
    font-family: Microsoft YaHei;
   
}
.v-photo-container-text>p>i{
    background: #f68b6e;
    color: #fff;
    font-style: normal;
}
.v-photo-container-txera{
    position: absolute;
    top: .2rem;
    left: .2rem;
    background: rgba(0, 0, 0, .5);
    color: #fff;
    height: .4rem;
    padding: 0 .2rem;
    line-height: .4rem;
    border-radius: .2rem;
}
.v-photo-container-price{
    position: absolute;
    right: .3rem;
    bottom: 1.5rem;
    font-size: .28rem;
    text-align: center;
}
.v-photo-container-price div:nth-child(1){
    padding:0 .1rem;
    height: .35rem;
    line-height: .35rem;
    background: #ffc31a;
    color: #fff;
}
.v-photo-container-price div:nth-child(2){
    padding:0 .1rem;
    height: .35rem;
    line-height: .35rem;
    color: #ffc31a;
    background: #fff;
}


/* 定制团建 */
.v-photo-nochange{
    width: 100%;
    /* margin:.4rem .2rem .2rem; */
    box-sizing: border-box;
}
.v-photo-team{
    width: 7.1rem;
    height: 3.28rem;
    margin: 0 auto;
}
.v-photo-team>a{
    width: 100%;
    height: 3.28rem;
    background: url("http://static.youxiake.com/new/yixing/images/custome02.png");
    background-size:cover; 
    margin:0 auto;
    display: block;
}
.v-photo-team>a>img{
    width: 100%;
    height: auto;
}
.v-photo-nochange>h3{
    font-size: .52rem;
    font-weight: normal;
    line-height: 1rem;
}
/* 轮播图 */
.v-photo-swiper{
    width:7.1rem ;
    height: 2rem;
    overflow: hidden;
    margin: 0 auto;
}
.v-photo-swiper a {
    display: block;
    width: 100%;
    height: 100%;
}
.v-photo-swiper a img{
    display: block;
    width: 100%;
    height: 100%;
}
/* 底部 */
.v-photo-footer{
    padding: .4rem 0 .2rem;
    text-align: center;
    background: #333;
    font-size: .24rem;
}
.v-photo-footer a{
    color: #ff8400;
    line-height: .4rem;
}
.v-photo-footer p{
    color: #bdbdbd;
    line-height: .4rem;
}
</style>
