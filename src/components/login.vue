<template>
	<div class="login">
		<div class="login_box">
			<input type="text" placeholder="ukey密码"/>
			<input type="password" placeholder="请输入密码"/>
			<input type="button" value="确认登录" />
		</div>
	</div>
</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style lang="scss" scoped>
	.login{
		width:100%;
		height:100%;
		background:url('../assets/images/login_bg.jpg') no-repeat center bottom #6999c9;
		background-size:100% auto;
		.login_box{
			width:300px;
			height:180px;
			padding:50px;
			background:#fff;
			border-radius:4px;
			box-shadow:0 5px 5px #5787b8;
			position:absolute;
			left:50%;
			top:50%;
			margin-left:-200px;
			margin-top:-200px;
			input{
				width:100%;
				height:40px;
				line-height:40px;
				text-indent:15px;
				border:1px #dfdfdf solid;
				margin:10px 0;
				border-radius:4px;
			}
			input[type="button"]{
				text-indent:0;
				border:none;
				background:#6999c9;
				color:#fff;
			}
			
		}
	}
</style>