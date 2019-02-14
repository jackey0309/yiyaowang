<template>
	<div>
		<!-- 路由的过渡动画 -->
		<transition name="router-fade" mode="out-in">     
			<!--过渡模式mode：in-out:新元素先进入过渡，完成之后当前元素过渡离开。
out-in:当前元素先进行过渡离开，离开完成后新元素过渡进入。 -->
			<keep-alive>
				<!-- <keep-alive>是Vue的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染DOM。 -->
			    <router-view v-if="$route.meta.keepAlive"></router-view>  <!--缓存部分页面或者组件，使用route.meta属性 -->
			</keep-alive>
    	</transition>
    	<transition name="router-fade" mode="out-in">
			<router-view v-if="!$route.meta.keepAlive"></router-view>
		</transition>
    </div>
</template>

<script>
export default {
	
}
</script>


<style lang="scss">
  	@import './style/common';
	.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .3s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
</style>
