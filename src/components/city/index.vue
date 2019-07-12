<template>
    <div>
  <div   class="mIndexCity__body"
        style="transform-origin: 0px 0px; transform: translate(0px, 0px) scale(1) translateZ(0px);">
        <div class="body__title">定位/附近城市</div>
        <div class="body__list body__list--location">深圳市</div>
        <div class="body__title">城市列表</div>
        
        <div class="body__list" v-for="(item,index) in cityList" :key="index">{{item.nm}}</div>

      </div>

        
    </div>
</template>

<script>
import {mapActions,mapState} from "vuex";
import { stat } from 'fs';
export default {
    name:"city",
  created(){
      this.getCityList()
  },
  computed:{
      ...mapState({
          cityList:state=>state.city.cityList

      })
  },    
   methods:{
       ...mapActions({
           getCityList:"city/getCityList"
       })
   }


    // data(){
    //     return{
    //       cityList:[]  
    //     }
     
    // },

    
}

</script>

<style >
.mIndexCity__body{
	widows: 100%;
	height:100%;
	margin-bottom:12rem;
}
.body__title{
     height: .7rem;
    line-height: .7rem;
    font-size: .28rem;
    color: #888;
}
.body__list{
	display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: .22rem;
    margin-bottom: .2rem;
    width: 2.16rem;
    height: .76rem;
    font-size: .28rem;
    color: #353535;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: .38rem;
    background: #f4f4f4;
}
    
</style>