<template>
  <div class="u-qz-list">
    <ul>
      <li v-for="(item,index) in ListCity" :key="index">
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
import {InterestCircle} from "api/circle";
export default {
  name: "InterestCircle",
  async created() {
    let data = await InterestCircle();
    this.ListCity = data.data;
  },
  data() {
    return {
      ListCity: []
    };
  }
};
</script>
<style>
</style>
