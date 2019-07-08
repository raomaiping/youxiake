<template>
     <!-- 主题旅游 -->
            <div class="v-around-titleall v-around-main">
                <h2>主题旅游</h2>
                <ul class="v-around-listall v-around-main-list">
                    <li v-for="(item,index) in theme_tag" :key="index" @click="handleclick(index)" :class="status==index?'active':'' ">{{item.block_alias}}</li>
                </ul>
                <ul class="v-locationList">
                    <li v-for="(item,index) in theme_lines" :key="index">
                        <a href="">
                            <span class="v-locationListTab">{{item.class_type_name}}{{item.jihe}}</span>
                            <img  class="v-locationListImg" :src="item.img">
                            <div class="v-locationList-detial">
                                <p>{{item.title}}</p>
                                <div class="v-locationList-text">
                                    <div class="v-locationList-money">￥
                                        <span>{{item.price}}</span>
                                        <span>起</span>
                                    </div>
                                    <div class="v-locationList-day">{{item.time}}</div>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
                <div class="v-locationList-more">
                    <a href="" class="v-locationList-morelink">更多活动></a>
                </div>
            </div>
</template>
<script>
export default {
    name:"maintitle",
    props:{
        theme_lines:{

            type:Array,
            default:[],
            required:true
        },
        theme_tag:{
            
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

</style>
