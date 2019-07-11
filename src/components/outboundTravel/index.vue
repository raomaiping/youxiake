<template>
    <div>
    <a href="#" class="body__line" v-for="(item ,index) in homeLinesList2" :key="index">
				<div class="line__pictrue">
					 <img :src="item.thumb" alt="">
					<div class="line__type">{{item.product_type}} | {{item.place_label}}</div>
					<div class="line__box">
						<div class="line__price">{{item.price_label}}</div>
						<div class="line__day">{{item.days}}</div>
					</div>
				</div>
				<div class="line__content">
					<div class="line__title">{{item.product_name}}</div>
					<div class="line__desc"><span>{{item.product_cat}}</span>{{item.sub_name}}</div>
				</div>
			</a>
    </div>
</template>



<script>
import {getHomeLines2} from "api/travel.js";
export default {
    name:"outboundTravel",
      async	created(){

    let data1 = await getHomeLines2()
		 this.homeLinesList2 = data1.data.products
    },
    	data (){
		return{
			homeLinesList2:[],
		}

	},
}
</script>

<style>

</style>



