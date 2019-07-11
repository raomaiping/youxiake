<template>
  <div class="u-box">
      <BetterScroll>
    <template>
      <div>
        <HeaderCom />
        <div class="u-banner"></div>
        <div class="u-main">
          <ul class="u-list">
            <router-link to="/circle/citybody" tag="li">
              <span>城市圈</span>
            </router-link>
            <router-link to="/circle/InterestCircle" tag="li">
              <span>兴趣圈</span>
            </router-link>
          </ul>
          <keep-alive include="cityBody,InterestCircle">
            <router-view></router-view>
          </keep-alive>
        </div>
      </div>
    </template>
  </BetterScroll>
  </div>
</template>

<script>
export default {
  name: "CircleQz"
};
</script>

<style >
.u-box{
  height: 13.34rem;
}
.u-banner {
  background: url(https://bbs.youxiake.com/images/qz_banner.png?5cf18f2e147891f0b7e1622bd9271132)
    no-repeat;
  height: 4.22rem;
  width: 100%;
  background-size: 100% auto;
}
/* 主体内容 */
.u-main {
  padding: 0.2rem;
}
.u-list {
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  width: 4.4rem;
  margin: 0.2rem auto 0.45rem;
}
.u-list li {
  font-size: 0.32rem;
  color: #888;
  width: 50%;
  text-align: center;
}
.router-link-active {
  color: #444;
  border-bottom: 4px solid #ffd800;
  padding-bottom: 3px;
}
.u-qz-list ul {
  margin-right: -0.18rem;
  overflow: hidden;
  height: 100%;
}
.u-qz-list ul li {
  width: 3.45rem;
  height: 2.95rem;
  position: relative;
  margin: 0 0.18rem 0.3rem 0;
  float: left;
}
.u-qz-list ul li .img {
  height: 1.94rem;
  overflow: hidden;
  width: 100%;
}
.u-qz-list ul li .img img {
  max-width: 100%;
  height: 100%;
}
.u-qz-list ul li .u-tag {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAAA1CAMAAACOawIeAAAAmVBMVEUAAAD/2AAAAAD/2AAAAAD/2AAAAAD/2AD/2AAAAAD/2AAAAAD/2AAAAAD/2AD/2AAAAAD/2AAAAAD/2AAAAAD/2AAAAAD/2AAAAACXgABVSAD/2AAAAAD/2AAAAADMrQAyKgDSsgAtJgA0LAAbFwAEAwD71ADrxwDFpwB7aADxzADhvwDQsACWfgASDwDWtgCRewBcTQBIPADstRSwAAAAHXRSTlMA8Pj58K2ta0NCJyb08+jk5NbWxMS9vVBQQD86OYYMBuwAAADoSURBVGje7c7HjgIxEIThHljS5l1yaJOHHN//4bCN8AUZzWEkCqn+i606tD7xDVoFA9Vb+UN8NTCYx11t/wawsti6BrEvkfbP2H4milNSEWeTqioaTbXiaXVE2renFRFp6mlKGmn3kYYQaaTFIg0h0kiLRRpCpJEWizSESCMtFmkIkUZaLNIQegHaxr77UU7prfXufNump22Ys12xooKjpTOTX8GwWIWz8+kyzCZrDVHbDpA2r4m6jnvzqCfQfjsiibrS7TCngiHdjMN4WIc525We2EoK2J+43hOFq1iVq60Ehvts9sV1AeLXoAmWEpmFAAAAAElFTkSuQmCC)
    no-repeat;
  height: 0.53rem;
  width: 1.54rem;
  background-size: 100% auto;
  font-size: 0.26rem;
  text-align: center;
  line-height: 0.53rem;
  color: #333;
  overflow: hidden;
  position: absolute;
  left: 0.09rem;
  top: 1.68rem;
}
.u-qz-list ul li .u-info {
  border: 1px solid #e9e9e9;
  border-top: none;
  height: 0.4rem;
  padding-top: 0.55rem;
  padding-right: 0.2rem;
  color: #999;
  text-align: right;
  font-size: 0.24rem;
}
.u-qz-list ul li .u-info span {
  padding-left: 0.38rem;
}
.u-qz-list ul li .u-info .qz_hot i {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAVCAMAAAB8FU7dAAAAWlBMVEUAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmb09q6AAAAHXRSTlMAN1oVEvr47+fXuKuifjvKmZONdWJTTyZrYC8LBVIuIy8AAACHSURBVBjTZdBZDoQgEEXRJ6IoaDu3Pb39b7NTgAng/TxQqaQQU2ZGlnbklknVkVxTeVCy8jYGqVtPjQasCWQZGvFrWYexWAtNLkKOV/OblG9f2RZr/Dgq5vXAk0UfqJLU/dcLZ0k7MBVUAfttI9BndAidTSJDPE6Xi1QvxsN0pHfdBrcqDekPYnAaO9d+iWIAAAAASUVORK5CYII=)
    no-repeat;
  height: 0.21rem;
  width: 0.18rem;
  background-size: 100% auto;
  display: inline-block;
  vertical-align: -1px;
  margin-right: 0.1rem;
}
.u-qz-list ul li .u-info .qz_rs i {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAUCAMAAACknt2MAAAAclBMVEUAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZkjQ/XgAAAAJXRSTlMAuy4E3G57ZEYoIxsT9ubOxcG9t6uik1VMNwjq07KKXT0Pm5qFKtQfMAAAAMZJREFUKM9tkFkOgzAMBV+SUvbSAmUrWxff/4q1MIgEMR+2lHFix1hpK6V+IaD94A0HnxZmaKKXb5uEhIuBx6m1VE0rGiHHr6W8TQWIOarzW5pjaanrpmokF6Lc7Crb1BMoOCUnvRqEKVFhsPMQUwE9J+fTjagIWl61uUsnw/kWuypJ+QyYuOAKl5l4eTFiHj0LsGN8GSMdAqNLXqVnIExcuqEitD3LBkxXksMIjNKxy+jAIIvzZGqXalnBDUWuDuQfoIui8A8eIiJAI4WbcwAAAABJRU5ErkJggg==)
    no-repeat;
  height: 0.2rem;
  width: 0.26rem;
  background-size: 100% auto;
  display: inline-block;
  vertical-align: -1px;
  margin-right: 0.1rem;
}
</style>
