<template>	
	<div class="right_col">
		<div class="application">
			<div class="searchLog clf">
				<div class="search-box clf">
					<div class="row clf">
						<div class="clf">
							<label for="" class="col-lg-1 col-md-1 col-sm-1">时间：</label>
							<div class="col-lg-3 col-md-3 col-sm-3">
								<calendar @changeDate="changeStartDate" :val="'1'"></calendar>
							</div>
							<div class="col-lg-1 col-md-1 col-sm-1 textCenter">至</div>
							<div class="col-lg-3 col-md-3 col-sm-3">
								<calendar @changeDate="changeStartDate" ></calendar>
							</div>
						</div>
						<div class="clf mt10"> 
							<label for="" class="col-lg-1 col-md-1 col-sm-1">用户名：</label>
							<div class="col-lg-3 col-md-3 col-sm-3">
								<input type="text" />
							</div>
							<label for="" class="col-lg-1 col-md-1 col-sm-1 textCenter">业务类型：</label>
							<div class="col-lg-3 col-md-3 col-sm-3">
								<input type="text" />
							</div>
							<div class="btn-box">
								<a href="javascript:;" class="search-btn">查询</a>
								<a href="javascript:;">重置</a>
							</div>
						</div>
						
					</div>
				</div>
			</div>
			<div class="panel-box">
				<ul class="table table-six IrregularLog"> 
					<li> 
						<span>&nbsp;</span>
						<span>时间</span>
						<span>用户名</span>
						<span>业务类型</span>
						<span>日志信息</span>
						<span>操作</span>
					</li>
					<li> 
						<span>1</span>
						<span>2017-02-20 11:31:11</span>
						<span>aa</span>
						<span>密钥信息</span>
						<span>新增密钥信息，ID为'4028bea75a41406a015a5992b3880000'</span>
						<span><a href="#">明细</a></span>
					</li>	
					<li> 
						<span>2</span>
						<span>2017-02-20 11:31:11</span>
						<span>aa</span>
						<span>密钥信息</span>
						<span>新增密钥信息，ID为'4028bea75a41406a015a5992b3880000'</span>
						<span><a href="#">明细</a></span>
					</li>
					<li> 
						<span>3</span>
						<span>2017-02-20 11:31:11</span>
						<span>aa</span>
						<span>密钥信息</span>
						<span>新增密钥信息，ID为'4028bea75a41406a015a5992b3880000'</span>
						<span><a href="#">明细</a></span>
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