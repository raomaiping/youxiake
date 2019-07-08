<template>
  <div class="u-qz-list">
    <ul>
      <li v-for="(item,index) in cityList" :key="index">
        <div class="img">
          <img :src="item.cover" alt />
        </div>
        <div class="u-tag">{{item.name}}</div>
        <div class="u-info">
          <span class="qz_hot">
            <i></i>{{item.hot_value}}
          </span>
          <span class="qz_rs">
            <i></i>{{item.member_num}}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { cityCircle } from "api/circle";
export default {
  name: "cityBody",
  async created() {
    let data = await cityCircle();
    this.cityList = data.data;
  },
  data() {
    return {
      cityList: []
    };
  }
};
</script>
<style>
</style>
