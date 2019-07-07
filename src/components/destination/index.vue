<template>
    <div>
        <HeaderCom/>

        <div class="u-hot">
			<div class="u-hot-title">当季热门</div>
			<div class="u-hot-warp">
				<ul class="u-hot-month">
					<li>1月</li>
					<li>1月</li>
					<li>1月</li>
					<li>1月</li>
					<li>1月</li>
					<li>1月</li>
					<li>1月</li>
					<li>1月</li>
				</ul>
			</div>

			<div class="u-mScoller">
				<ul class="u_article_list">
					<li>
						<div class="u-pic">
							<div class="u-tag">德天瀑布</div>
							<img src="">
						</div>
					</li>
					<li>
						<div class="u-pic">
							<div class="u-tag">德天瀑布</div>
							<img src="">
						</div>
					</li>
					<li>
						<div class="u-pic">
							<div class="u-tag">德天瀑布</div>
							<img src="">
						</div>
					</li>
				</ul>
			</div>

			<div class="u-more">
				<a href="javascript:;">
					查看全部目的地
					<i></i>
				</a>
			</div>
		</div>
    </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
    name:"destination",
}
</script>

<style>
.u-hot{
    overflow: hidden;
    width: 100%;
    padding: .4rem 0 0 .2rem;
    box-sizing: border-box;
}
.u-hot .u-hot-title{
    color: #333;
    font-size: .32rem;
    border-left: 7px solid #ffd800;
    padding-left: .2rem;
    height: .35rem;
    line-height: .35rem;
    font-weight: 700;
}
.u-hot .u-hot-warp{
    margin: .3rem auto;
    position: relative;
    height: .42rem;
}
.u-hot-month{
    overflow: auto;
    position: absolute;
    height: .42rem;
    text-align: center;
    white-space: nowrap;
    font-size: 0;
    display: inline-block;
    width: 100%;
}
.u-hot-month li{
    overflow: auto;
    display: inline-block;
    width: 1.12rem;
    height: .42rem;
    line-height: .42rem;
    text-align: center;
    background: #f4f4f4;
    color: #999;
    font-size: .3rem;
    margin: 0 .15rem 0 0;
}
.u-hot-month li:hover{
    background: #f5b902;
    color: #000;
}
.u-mScoller,.u-mcoller{
    width: 100%;
    margin: .4rem auto 0;
    position: relative;
    height: 1.85rem;
}
.u-mScoller ul{
    position: absolute;
    height: 1.85rem;
    display: inline-block;
    overflow: auto;
    width: 100%;
    text-align: center;
    white-space: nowrap;
}
.u-mScoller ul li{
    font-size: .3rem;
    display: inline-block;
    width: 3.28rem;
    margin-right: .15rem;
}
.u-pic{
    height: 1.85rem;
    position: relative;
}
.u-tag{
    min-width: 1.16rem;
    max-width: 3rem;
    height: .38rem;
    padding: 0 .15rem;
    background: rgba(0,0,0,.8);
    border-radius: .2rem;
    line-height: .38rem;
    text-align: center;
    color: #fff;
    font-size: .28rem;
    position: absolute;
    left: .08rem;
    bottom: .08rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.u-more{
    background: url(../../assets/u-bj.png) no-repeat;
    height: 1rem;
    width: 6.6rem;
    background-size: 100% auto;
    margin: .38rem 0;
    font-size: .28rem;
    color: #fff;
    line-height: 1rem;
    padding-left: .55rem;
    position: relative;
}
.u-more a{
    display: block;
    color: #fff;
}
.u-more a i{
    background: url(../../assets/u-jiantou.png) no-repeat;
    height: .44rem;
    width: .44rem;
    background-size: 100% auto;
    display: block;
    position: absolute;
    right: .26rem;
    top: .28rem;
}
</style>
