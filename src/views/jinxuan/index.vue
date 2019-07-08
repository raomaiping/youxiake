<template>
    <div>
           <div class="header">
        <img src="http://img4.youxiake.com/yxk_1dd5h79t23eaacmhjb13ojedg0.png" alt="">
    </div>
    <div class="tuijian">
        <div>
            <div>
                <div data-id="0">
                    <div class="h5_line line_editbox" style="background-color: rgb(255, 255, 255);">
                        <div class="h5_line_box h5_line_one">
                            <div class="h5_line_img">
                                <img src="http://gallery.youxiake.com/Public/Data/upload/productimg/201906/11/5cff64f915f11.jpg" alt="">
                                <p>西安出发</p>
                            </div>
                            <div class="h5_line_content">
                                <div class="line_title">
                                    【游侠少年·秦岭科考】7.21批次确定成行！亲密接触大熊猫，金丝猴，朱鹮，体验国宝饲养员的生活，保护秦岭珍稀动物，自然探索6天5晚爆款亲子营！（全程含餐）</div>
                                <!---->
                                <div class="line_detail">
                                    <p class="line_big"><span class="small">￥</span> <span class="big">4520</span> <span
                                            class="normal">起</span></p>
                                    <!---->
                                    <p class="days">6天5晚</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!---->
                </div>
            </div>
        </div>

    </div>
    <div class="otherrecommend">
            <a href="#"
            class="mUserCenterRecommend__line" v-for="(item,index) in jinxuanList2" :key="index">
            <div class="line__pic">
                <img :src="item.image" alt="">
                <div class="line__type">{{item.jihedi}}</div>
            </div>
            <div class="line__title">{{item.product_name}}</div>
            <div class="line__msg">
                <div class="line__price"><span>￥</span><b>{{item.price}}</b>起</div>
                <div class="line__days">{{item.days}}天7{{item.nights}}晚 </div>
            </div>
        </a>


     </div>

    </div>
</template>
<script>
import {getjinxuan} from "api/travel.js"
import {getTravelYoulun} from "api/travel.js"
export default {
    name:"jinxuan",
   async created(){
       console.log(getTravelYoulun());
       
    let data = await getjinxuan();
     console.log(data.data.data[1].data.count);
     console.log(data.data.data[2].data.count);
     this.jinxuanList1 =data.data.data[1].data.count;
     this.jinxuanList2 =data.data.data[2].data.count;

         
    },
    data(){
        return{
            jinxuanList1:[],
            jinxuanList2:[],
            
        }
    }
}
</script>

<style>
.header img{
    width: 100%;
    height: 1.8rem;

}

.tuijian{
    box-sizing: border-box;
    padding:0.2rem;
    width:100%;
    height: 6.24rem;
    
}
.h5_line_img {
    position: relative;
    width: 100%
}
.h5_line_img img {
    width: 100%
}
.h5_line_img  p {
    position: absolute;
	color: #fff;
	background-color:rgba(77, 63, 63, 0.5);
	border-radius: 0.05rem;
	top:.1rem;
	left:.2rem;
}
.line_title{
    font-size: 0.3rem;
    line-height: 1.4;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.line_detail{
    display: flex;
    justify-content: space-between;
    margin: 0.3rem 0;
}
.line_big{
    float: left;
    color: #f60;
    font-size: .17rem;
}
.line_big .big {
    font-size: 0.5rem;
}

.otherrecommend{
    display: flex;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 6.9rem;
    margin: 0.3rem;
}
.otherrecommend a{
    width: 45%;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 3.35rem;
    height: 3.69rem;
    overflow: hidden;
}
.otherrecommend .line__pic {
    width: 100%;
}
.otherrecommend .line__pic  img{
    width: 100%;
}

.line__type{
	position: absolute;
	color: #fff;
	background-color:rgba(77, 63, 63, 0.5);
	border-radius: 0.05rem;
	top:.1rem;
	left:.2rem;
}
.line__title{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    margin-top: .1rem;
    padding: 0 .1rem;
    height: .67rem;
    line-height: .34rem;
    font-size: .28rem;
    color: #333;
    overflow: hidden;
}
.line__msg{
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
    margin-top: .2rem;
    padding: 0 .1rem;
    width: 3.15rem
}
.line__price{
    display: flex;
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
    font-size: .24rem;
    color: #999;
}
.line__price span,.line__price b{
    font-size: .3rem;
    color: #ff7100;
}
.line__days{
    padding: .03rem .1rem;
    font-size: .24rem;
    color: #999;
    background: #eee;
}

</style>

