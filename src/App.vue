<template>
  <div id="app">
	<menubar></menubar>
    <router-view></router-view>
  </div>
</template>

<script>
import menuBar from './components/menu_left';
export default {
  name: 'app',
  components:{
	menubar:menuBar
  }
}
</script>
