<template>
     <!-- bannner图 -->
            <div class="v-banner">
                <div class="sports">
                    <ul>
                        <li v-for="(item,index) in lines" :key="index">
                            <a href="">
                                <img :src="item.img" alt="">

                                <div class="v-sport-detial">

                                    <p>{{item.title}}</p>
                                    <span>{{item.jihe}}</span>
                                    <div class="v-sport-money">￥
                                        <span>{{item.price}}</span>
                                        <span>起</span>
                                    </div>
                                </div>
                                <span class="v-outplay">{{item.class_theme_name}}</span>
                            </a>
                        </li>
                        
                    </ul>
                </div>
            </div>
</template>
<script>

export default {
    name:"banner",
    props:{
        lines:{
            type:Array,
            default:[],
            required:true
        }
    },
    data(){
        return {
            status:''
        }
    },
     methods:{
        handleclick(index){
            this.status = index;
        }
    }
}
</script>
<style>
    .v-container .v-banner{
    width: 100%;
    height: 5.2rem;
    background-size:cover;   
    background: url("https://m.youxiake.com/static/img/around_hot.1da6a56.png") no-repeat;
}
.v-container .v-banner .sports{
    width: 100%;
}
.v-container .v-banner .sports>ul{
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    padding: 0 .3rem;
}
.v-container .v-banner .sports>ul>li{
    position: relative;
    margin: 1.5rem .1rem 0 0;
    width:2.23rem;
    border-radius: .1rem;
    background: #fff;    
    float: left; 
    
}
.v-container .v-banner .sports>ul>li>a>img{
    width:100%;
    height: 1.52rem;
    border-top-left-radius: .1rem;
    border-top-right-radius: .1rem;
}
.v-sport-detial{
    padding: .05rem;
}
.v-sport-detial>p{
    display: -webkit-box;
    font-size: .28rem;
    line-height: .35rem;
    margin: .1rem .08rem .1rem;
    height: .66rem;
    color: #353535;
    -webkit-box-orient: vertical;
    -webkit-line-clamp:2;
    overflow: hidden;
}
.v-outplay{
    position: absolute;
    background: #333333;
    color: #fff;
    font-size: 0.2rem;
    padding: .07rem .12rem .03rem;
    border-top-right-radius: .2rem;
    border-bottom-right-radius: .2rem;
    top:.1rem;
    left: 0;
}
.v-sport-money{
    color: #ff7100;
}
.v-sport-money span:nth-child(1){
    font-size: .3rem;
    font-weight: bold;
}
.v-sport-money span:nth-child(2){
    font-size: .26rem;
    line-height: .3rem;
    color: #666;
}
.v-sport-detial>span{
    display: inline-block;
    background: #eaeaea;
    padding: .05rem;
    margin: .05rem 0;
    color: #888;
}
</style>
