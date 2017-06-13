<template>	
	<div class="right_col">
		<div class="organization">
			<div class="search clf">
				<div class="search-box clf">
					<div class="row clf">
						<label for="" class="col-lg-1">CA机构：</label>
						<div class="select-box col-lg-6">
							<!--<input type="text" class="selected-span" value="请选择"/>
							<ul class="select-li"> 
								<li>LNCA</li>
								<li>GDCA_WT_R4_Generic</li>
								<li>GDCA_ECC</li>
								<li>GDCA</li>
								<li>NetCA</li>
								<li>测试CA</li>
							</ul>-->
							<select name="" id="">
								<option value="0">请选择</option>
								<option value="1">LNCA</option>
								<option value="2">GDCA_WT_R4_Generic</option>
								<option value="3">GDCA_ECC</option>
								<option value="4">GDCA</option>
								<option value="5">NetCA</option>
								<option value="6">测试CA</option>
							</select>
						</div>
					</div>
				</div>
			</div>
			<div class="panel-box">
				<!--<ul class="table table-organization"> 
					<li>证书信息项</li>
					<li>
						<span>证书密钥标识符</span>
						<span><input type="text" /><label for="">必填</label></span>
					</li>
					<li> 
						<span>导入证书</span>
					</li>
				</ul>-->
				<table class="table-box"> 
					<tr><th colspan="2">证书信息项</th></tr>
					<tr> 
						<td width="150px;">证书密钥标识符：</td>
						<td><input type="text" /><label for="">必填</label></td>
					</tr>
					<tr> 
						<td>导入证书</td>
						<td class="more-td"> 
							<p class="clf"> 
								<label for="">导入证书：</label>
								<select name="" id="">
									<option value="0">一级</option>
									<option value="1">二级</option>
									<option value="2">三级</option>
								</select>
							</p>
							<p class="clf"><label for="">根证书：</label><input type="text" /><label for="">必填</label></p>
						</td>
					</tr>
				</table>
				<table class="table-box mt25"> 
					<tr><th colspan="2">CA接口项</th></tr>
					<tr> 
						<td width="150px;">数据同步接口地址：</td>
						<td><input type="text" /><label for="">必填</label></td>
					</tr>
					<tr> 
						<td width="150px;">应用开通接口地址：</td>
						<td><input type="text" /><label for="">必填</label></td>
					</tr>
					<tr> 
						<td width="150px;">接口通信证书：</td>
						<td><input type="text" /><label for="">必填</label></td>
					</tr>
					<tr> 
						<td width="150px;">数据导入验证证书：</td>
						<td><input type="text" /><label for="">必填</label></td>
					</tr>
					<tr> 
						<td width="150px;">CRL地址：</td>
						<td><input type="text" /></td>
					</tr>
				</table>
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
  methods:{
	pageChangeHandel(currentPage){
		console.log(currentPage)
	},
	changeStartDate(value){
		console.log(value)
	}
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/base.scss';
@import '../assets/css/font2/font.css';
@import '../assets/css/index.scss';
</style>