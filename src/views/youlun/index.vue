<template>
    <div>
            <div class="mSearchResult__container">

        <div class="mSearchResult__fixed__container">
            <div class="e-SearchHeader">
                <div class="SearchLeft">
                    <i class="iconfont icon-arrowLeft"></i>
                    
                </div>
                <div class="headerSearch">
                    <input placeholder="游轮" type="search" class="search__input">
                    <i class="iconfont icon-fangdajing"></i>
                    <i class="iconfont icon-shanchu"></i>
                </div>
                <div class="e-headerHome">
                    <i class="iconfont icon-home-g"></i>
                </div>


            </div>
            <div class="navSlider__list">
                <li class="active" v-for="(item,index) in travelList2" :key ="index">{{item.name}}</li>
                <!-- <li class="">跟团游</li>
                <li class="">当地玩乐</li>
                <li class="">自由行</li>
                <li class="">邮轮</li>
                <li class="">大型活动</li>
                <li class="">体育赛事</li>
                <li class="">分享会</li> -->
            </div>
            <div class="filter-container">

                <div class="filterDefault active">
                    <span>默认排序</span>
                    <i class="iconfont icon-arrowBottom-fill"></i>
                </div>

                <div class="filterDate">
                    <span>默认排序</span>
                    <i class="iconfont icon-arrowBottom-fill"></i>
                </div>

                <div class="filter">
                    <span>默认排序3</span>
                    <i class="iconfont icon-arrowBottom-fill"></i>
                </div>
            </div>

        </div>

        <div class="route-container-scroller">
<!-- ------------------ -->

    <travelYoulun/>
<!-- ---------------------- -->
  
        </div>
    </div>

    </div>
</template>
<script>
import {getTravelList} from "api/travel.js";
import TravelYoulun from "components/travelYoulun"

export default {
    name:"youlun",
    components:{
        TravelYoulun
        },
    async created(){
   let data = await getTravelList()
   console.log(data);
   
    //  console.log(data.data.class);
    // this.travelList2 =data.data.class
    },
    data(){
        return{
       travelList2:[]
      }
    }
  
}
</script>

<style scope >
.mSearchResult__container{
  height: 100%;
  padding-top: 2.6rem;
}

.mSearchResult__fixed__container{
    height: 2.6rem;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    width: 100%;
    background: #fff;
    z-index: 999;
}
.e-SearchHeader{
    width: 100%;
    height: .9rem;
    line-height: .9rem;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    display: -webkit-inline-flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: #f4f4f4;
    padding: 0 .19rem 0 .31rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
.SearchLeft i{
    font-size: 0.3rem;
}
.headerSearch {
    position: relative;
    width: 5.76rem;
    height: 0.9rem;
}

.search__input{
    width: 5.5rem;
    height: 0.6rem;
    border: none;
    outline: none;
    -webkit-appearance: none;
    padding: .1rem 0 .1rem .2rem;
    font-size: .28rem;
}
.headerSearch i{
    font-size: 0.3rem;
}
.e-headerHome i{
    font-size: 0.5rem;
}
.icon-fangdajing{
    position: absolute;
    top: 0;
    right: .5rem;
}
.icon-shanchu{
    position: absolute;
    top: 0;
    right: 1rem;
}
.navSlider__list{
    width: 100%;
    height: .81rem;
    line-height: 0.81rem;
	display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    background-color: #fff;
    z-index: 1000;
    overflow: -moz-scrollbars-none; 
}
.navSlider__list li{
    display: block;
    flex-shrink: 0;
    width: 0.96rem;
    height: 0.82rem;
    padding: 0 0.4rem 0 0.2rem;
    float: left;
    position: relative;
    float: left;
    margin-right: .4rem;
    line-height: .82rem;
    font-size: .32rem;
    color: #353535;
}
.navSlider__list .active{
  border-bottom: solid 0.2rem orange;
} 
.filter-container{
    width: 100%;
    height: .81rem;
    line-height: 0.81rem;
    display: flex;
    justify-content: space-around;

}
.filter-container .active{
    color: orange;
}

.route-container-scroller{
    position: absolute;
    
}
.route-list{
    width: 100%;
    box-sizing: border-box;
    padding :0.1rem;
    height: 2.5rem;
    border-bottom: solid 0.01rem #ccc;

}

.route-list-image{
position: relative;
float: left;
width: 2.56rem;
height: 1.43rem;
background-color: #fff9db;
margin-right: .2rem;

}
.route-list-image img{
    width: 100%
    }
.list-image-gather {
    position: absolute;
	color: #fff;
	background-color:rgba(77, 63, 63, 0.5);
	border-radius: 0.05rem;
	top:0.1rem;
	left:0.1rem;
}
.route-list-desc{
    float: right;
    width: 4.35rem;
}
.list-desc-title{
    font-size: .28rem;
    color: #353535;
    font-weight: 700;
}
.list-desc-type{
    display: flex;
}
.desc-type-time{
    font-size: .24rem;
    color: #ff7100;
    background: #fff6c6;
    padding: .04rem .14rem;
}
.desc-type-label{
    font-size: .24rem;
    color: #888 ;
    border: .01rem solid #888;
    border-radius: .05rem;
    margin-left: .12rem;
    padding: .04rem .14rem;
}
.list-desc-price{
    display: flex;
    justify-content: space-between;
    
}
.desc-price-container{
    display: flex;
}  
.price-fh{
    font-size: .24rem;
    color: #ff7100; 
}
.price-jg{
    font-size: .32rem;
    color: #ff7100;
    font-weight: 700;
    position: relative;
    top: -.02rem;
}

.price-dw{
    font-size: .24rem;
    color: #888;
    padding-left: .1rem;
}
.desc-price-num{
    font-size: .24rem;
    color: #888;
}


</style>