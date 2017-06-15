<template>	
	<div class="right_col">
		<div class="organization">
			<div class="panel-box">
				<form action="">
					<table class="table-box mt25"> 
						<tr><th colspan="2">密码机设置</th></tr>
						<tr> 
							<td width="150px;">加密机地址</td>
							<td><input type="text" /><label for="">必填</label></td>
						</tr>
						<tr> 
							<td width="150px;">加密机口令</td>
							<td><input type="text" /><label for="">必填</label></td>
						</tr>
						<tr> 
							<td width="150px;">密钥号：</td>
							<td><input type="text" /><label for="">必填</label></td>
						</tr>
						<tr> 
							<td>&nbsp;</td>
							<td>
								<input type="button" value="确定" />
								<input type="reset"  value="重置"/>
							</td>
						</tr>
					</table>
				</form>
			</div>
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
  },
  computed:{
	title(){
		return this.$store.state.title;
	}
  },
  methods:{
	pageChangeHandel(currentPage){
		console.log(currentPage)
	},
	changeStartDate(value){
		console.log(value)
	}
  },
  mounted(){
	document.title=this.title;
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/base.scss';
@import '../assets/css/index.scss';
</style>