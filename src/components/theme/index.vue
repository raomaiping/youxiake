<template>
  <div>
    <HeaderCom />
     <Loading  v-if="loadingFlag"/>
    <div v-if="!loadingFlag">
      <div class="u-banner">
      <img src="../../assets/u-banner02.jpeg" alt="111" />
    </div>

    <div class="list-img">
      <li v-for="(item,index) in listTitle.ad" :key="index">
        <img :src="item.pic" />
      </li>
    </div>

    <div>
      <ul>
        <li class="image" v-for="(item,index) in listTitle.banner" :key="index">
          <img :src="item.pic" alt />
        </li>
      </ul>
    </div>
  </div>
    </div>
</template>

<script>
import { Zty } from "api/circle";

export default {
  name: "theme",
  async created() {
    let data = await Zty();
    if(data){
      this.loadingFlag = false;
    }else{
        this.loadingFlag = true;
    }
    this.listTitle = data.data;
    
  },
   data() {
    return {
      listTitle:[],
      loadingFlag:true
    };
  }
};
</script>

<style>
.u-banner {
  height: 4.22rem;
  width: 100%;
  background-size: 100% auto;
}
.image {
  width: 100%;
  border-top: 0.2rem solid #eee;
  height: 4.22rem;
}
.list-img {
  width: 100%;
  height: 1.6rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.list-img > img {
  width: 3.45rem;
  height: 1.3rem;
}
</style>
