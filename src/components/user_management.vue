<template>	
	<div class="right_col">
		<div class="application">
			<div class="search clf">
				<div class="search-box clf">
					<div class="row clf">
						<div class="col-lg-3 col-md-3 col-sm-6 com-ms-6">
							<label for="">应用编号</label>
							<input type="text" placeholder="请输入应用编号" />
						</div>
						<div class="col-lg-3 col-md-3 col-sm-6 com-ms-6">
							<label for="">应用名称</label>
							<input type="text" placeholder="请输入应用名称" />
						</div>
						<div class="col-lg-3 col-md-3 col-sm-6 com-ms-6">
							<label for="">创建人</label>
							<input type="text" placeholder="请输入创建人名称" />
						</div>
						<div class="col-lg-3 col-md-3 col-sm-6 com-ms-6 btn-box">
							<a href="javascript:;" class="search-btn">查询</a>
							 <a href="javascript:;">重置</a>
						</div>
					</div>
				</div>
			</div>
			<div class="panel-box">
				<ul class="table table-six"> 
					<li> 
						<span>用户名</span>
						<span>应用标识Appid</span>
						<span>设备标识MobileID</span>
						<span>联系方式</span>
						<span>证书序列号</span>
						<span>合同日期</span>
					</li>
					<li> 
						<span>1</span>
						<span>GDCATest</span>
						<span>GDCA测试应用</span>
						<span>2011-11-10 15:27:46</span>
						<span>aa</span>
						<span><a href="#">修改</a></span>
					</li>
					<li> 
						<span>2</span>
						<span>GDCATest</span>
						<span>GDCA测试应用</span>
						<span>2011-11-10 15:27:46</span>
						<span>aa</span>
						<span><a href="#">修改</a></span>
					</li>
				</ul>
				<div class="page-box"> 
					<pagination  :total="10" :currentpage="1" :display="5"  @pagechange="pageChangeHandel"></pagination>
				</div>
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
	}
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/base.scss';
@import '../assets/css/font2/font.css';
@import '../assets/css/index.scss';
</style>