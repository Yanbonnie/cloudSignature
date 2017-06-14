<template>
  <div id="app">
	<menubar v-show="menuLeftState"></menubar>
    <router-view></router-view>
  </div>
</template>

<script>
import menuBar from './components/menu_left';
export default {
	name: 'app',
	computed:{
		menuLeftState:function(){
			return this.$store.state.menuLeftState
		}
	},
	components:{
		menubar:menuBar
	}
}
</script>
