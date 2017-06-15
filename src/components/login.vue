<template>
	<div class="login">
		<h3 class="title">云签后台管理系统&nbsp;V1.0</h3>
		<div class="login_box">
			<h3>UKEY登录</h3>
			<input type="password" v-model="pasword" @keydown.enter="submitHandle"/>
			<!--<input type="password" v-model="pasword" placeholder="请输入密码"/>-->
			<input type="button" value="确认登录" @click="submitHandle"/>
			<span></span>
		</div>
		<span class="vision">版权所有 © 2015：广东信鉴信息科技有限公司 | 技术支持：广东信鉴信息科技有限公司</span>
	</div>
</template>
<script>
export default {
	name: 'hello',
	data () {
		return {
		ukey:"",
		pasword:""
		}
	},
	computed:{
		title(){
			return this.$store.state.title;
		}
	  },
	methods:{
		submitHandle(){
			if($.trim(this.pasword) == "aa"){
				this.$router.replace({ path: 'application'})
			}
		}
	},
	mounted(){
		document.title=this.title;
	}
}
</script>
<style lang="scss" scoped>
	
	.login{
		width:100%;
		height:100%;
		background:url('../assets/images/login_bg.jpg') no-repeat center bottom #6999c9;
		background-size:100% auto;
		.title{
			position:absolute;
			top:50%;
			margin-top:-280px;
			width:100%;
			text-align:center;
			color:#fff;
			font-size:30px;
			font-weight:normal;
		}
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
			h3{
				text-align:center;
				font-weight:normal;
				padding-bottom:20px;
			}
			input{
				width:100%;
				height:40px;
				line-height:40px;
				text-indent:15px;
				border:1px #dfdfdf solid;
				margin:10px 0 25px;
				border-radius:4px;
			}
			input[type="button"]{
				text-indent:0;
				border:none;
				background:#6999c9;
				color:#fff;
			}
			
		}
		.vision{
			background:rgba(0,0,0,0.6);
			color:#fff;
			position:absolute;
			top:50%;
			margin-top:150px;
			display:block;
			width:500px;
			text-align:center;
			font-size:12px;
			border-radius:50px;
			left:50%;
			margin-left:-250px;
			height:35px;
			line-height:35px;
			
		}
	}
</style>