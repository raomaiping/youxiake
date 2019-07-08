<template>
    <div class="v-competition">
        <!-- 头部 -->
        <div class="v-competition-header">
            <ul class="v-competition-nav">
                <li v-for="(item,index) in nav_info" :key="index" @click="handleClick(index)">{{item.nav}}</li>
            </ul>
        </div>
        <!-- 内容区 -->
        <div class="v-competition-container">
            <!-- 城市活动标题 -->
            <div class="v-competition-titleimg">
                <img :src="this.competitionTitle[0].data.count[0]" alt="">
            </div>
            <!-- 城市活动 -->
            <div class="v-competition-sports">
                <div class="v-competition-sport" v-for="(item,index) in competitionList" :key="index">
                    <span>{{item.data.count[0].jihedi}}</span>
                    <img class="v-competition-sportimg" :src="item.data.count[0].image">
                    <div class="v-competition-text">
                        <p>{{item.data.count[0].product_name}}</p>
                        <div class="v-competition-detial">
                            <div class="v-competition-money">￥
                                <span>{{item.data.count[0].price}}</span>
                                <span>起</span>
                            </div>
                            <div class="v-competition-day"><span v-if="item.data.count[0].days">{{item.data.count[0].days+'天'}}</span><span v-if="item.data.count[0].nights">{{item.data.count[0].nights+'晚'}}</span></div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 丈量地球标题 -->
            <div class="v-competition-titleimg">
                <img :src="this.competitionTitle[1].data.count[0]" alt="">
            </div>
            <!-- 丈量地球 -->
            <div class="v-competition-sports">
                <div class="v-competition-sport" v-for="(item,index) in competitiondiqiu" :key="index">
                    <span>{{item.data.count[0].jihedi}}</span>
                    <img class="v-competition-sportimg" :src="item.data.count[0].image">
                    <div class="v-competition-text">
                        <p>{{item.data.count[0].product_name}}</p>
                        <div class="v-competition-detial">
                            <div class="v-competition-money">￥
                                <span>{{item.data.count[0].price}}</span>
                                <span>起</span>
                            </div>
                            <div class="v-competition-day"><span v-if="item.data.count[0].days">{{item.data.count[0].days+'天'}}</span><span v-if="item.data.count[0].nights">{{item.data.count[0].nights+'晚'}}</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 活动回顾标题 -->
            <div class="v-competition-titleimg">
                <img :src="this.competitionTitle[2].data.count[0]" alt="">
            </div>
            <!-- 活动回顾 -->
            <div class="v-competition-sports">
                <div class="v-competition-sport" v-for="(item,index) in competitionHuigu" :key="index">
                    <span>{{item.data.count[0].jihedi}}</span>
                    <img class="v-competition-sportimg" :src="item.data.count[0].image">
                    <div class="v-competition-text">
                        <p>{{item.data.count[0].product_name}}</p>
                        <div class="v-competition-detial">
                            <div class="v-competition-money">￥
                                <span>{{item.data.count[0].price}}</span>
                                <span>起</span>
                            </div>
                            <div class="v-competition-day"><span v-if="item.data.count[0].days">{{item.data.count[0].days+'天'}}</span><span v-if="item.data.count[0].nights">{{item.data.count[0].nights+'晚'}}</span></div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
</template>

<script>
import {getCompetition,getCompetitionList} from "api/competition"
export default {
    name:"competition",
    async created(){
       let nav_info = await getCompetition();
       let competitionList = await getCompetitionList();
        this.nav_info = nav_info.data.nav_info;
        this.competition = competitionList.data.data;
        for(var i = 0; i<this.competition.length;i++){
            if(this.competition[i].flag == 0){
                this.competitionTitle.push(this.competition[i]);
            }else if((this.competition[i].sort >= 1) && (this.competition[i].sort <= 10) ){
                this.competitionList.push(this.competition[i]);
            }else if((this.competition[i].sort >= 12) && (this.competition[i].sort <= 15)){
                this.competitiondiqiu.push(this.competition[i]);
            }else{
                this.competitionHuigu.push(this.competition[i]);
            }
        }
    },
    data(){
        return {
            nav_info:[],
            competition:[],
            competitionList:[],
            competitiondiqiu:[],
            competitionHuigu:[],
            competitionTitle:[],
            competitionTitleSelect:'http://img4.youxiake.com/yxk_1d5dvabhn1v3c1j37jjovni1ja92.png',
        }
    },
    methods:{
        handleClick(index){
            this.competitionTitleSelect = this.competitionTitle[index].data.count[0];
        }
    }
}
</script>

<style>
.v-competition{
    width: 100%;
    height: 100%;
    overflow-y:auto;
}

/* 头部 */
.v-competition-header{
    width: 100%;
    height: .88rem;
    background: rgba(242, 220, 0, 0.9);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
}
.v-competition-nav{
    width: 100%;
    height: .88rem;
    display: flex;
    align-items: center;
}
.v-competition-nav>li{
    height: 100%;
    padding: 0 .2rem;
    font-size: .3rem;
    margin-right: .1rem;
    line-height: .88rem;
    font-family:  Microsoft YaHei;
    color: rgb(93, 93, 93);
}
/* 导航点击时的样式 */
.v-competition-nav .headernav{
    border-bottom: .1rem solid #fff;
    color: #fff;
}
/* 内容区 */
.v-competition-container{
    width: 100%;
    padding-top: .7rem;
}
/* 标题图片 */
.v-competition-titleimg>img{
    display: block;
    width: 100%;
}

/* 城市活动 */
.v-competition-sports{
    width: 100%;
}
.v-competition-sport{
    width: 100%;
    padding: 0 .2rem;
    position: relative;
    margin-top:.1rem;
    box-sizing: border-box; 
    background: #fff;
}
.v-competition-sport>span{
    position: absolute;
    top:.1rem;
    left: .3rem;
    display: block;
    height: .39rem;
    line-height: .39rem;
    padding:0 .15rem;
    font-size: .24rem;
    color: #fff;
    padding: 0 .2rem;
    background: rgba(0, 0, 0, .5);
    border-radius: .2rem;
}
.v-competition-sportimg{
    width: 100%;
    height: 4rem;
    border-top-right-radius: .3rem;
    border-top-left-radius: .3rem;
    background-size:cover; 
}
.v-competition-text{
    width: 100%;
    height: 1.94rem;
    padding: .2rem;
    box-sizing: border-box;
}
.v-competition-text>p{
    font-size: .3rem;
    color: #555;
    line-height: .4rem;
    font-family: Microsoft YaHei;
    margin-bottom: .35rem;
    overflow:hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient: vertical; 
}
.v-competition-detial{
    overflow: hidden;
}
.v-competition-money{
    font-size: .24rem;
    color: #f60;
    float: left;
}
.v-competition-money span:nth-of-type(1){
    font-size: .45rem;
}
.v-competition-day{
    font-size: .28rem;
    color: #888;
    float: right;
    font-family: Microsoft YaHei;
    margin-top: .1rem;
}
</style>
