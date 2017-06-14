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
					<li class="title"> 
						<span>&nbsp;</span>
						<span>时间</span>
						<span>用户名</span>
						<span>业务类型</span>
						<span>日志信息</span>
						<span>操作</span>
					</li>
					<li v-for="(item,index) in list"> 
						<span>{{index+1}}</span>
						<span>{{item.time}}</span>
						<span>{{item.username}}</span>
						<span>{{item.style}}</span>
						<span>{{item.loginfo}}</span>
						<span><a href="#">明细</a></span>
					</li>	
				</ul>
				<div class="page-box"> 
					<pagination  :total="totalPage" :currentpage="currentPage" :display="10"  @pagechange="pageChangeHandel"></pagination>
				</div>
			</div>
		</div>	
	</div>
</template>
<script>
var log = {
			"meta":{
				"success":true
			},
			"data":{
				"lists":[
					{
						"time":"2017-02-20 11:31:11",
						"username":"aa",
						"style":"密钥信息",
						"loginfo":"新增密钥信息，ID为'4028bea75a41406a015a5992b3880000'"
					},
					{
						"time":"2016-11-25 17:53:43",
						"username":"aa",
						"style":"密钥授权",
						"loginfo":"新增密钥授权，ID为'4028bea75895b42e01589ae7a8a90000'"
					},
					{
						"time":"2016-11-03 11:00:46",
						"username":"aa",
						"style":"密钥授权",
						"loginfo":"新增密钥授权，ID为'4028bea757a1f2ad01582821b0d00006'"
					},
					{
						"time":"2016-10-25 09:50:07",
						"username":"aa",
						"style":"密钥授权",
						"loginfo":"新增密钥授权，ID为'4028bea757a1f2ad0157f987c5c60004'"
					},
					{
						"time":"2016-10-25 09:47:33",
						"username":"aa",
						"style":"密钥授权",
						"loginfo":"新增密钥授权，ID为'4028bea757a1f2ad0157f9856dab0002'"
					},
					{
						"time":"2016-10-25 09:46:49",
						"username":"aa",
						"style":"密钥授权",
						"loginfo":"新增密钥授权，ID为'4028bea757a1f2ad0157f984c0560000'"
					},
					{
						"time":"2016-07-22 11:37:08",
						"username":"aa",
						"style":"密钥授权",
						"loginfo":"新增密钥授权，ID为'4028bea757a1f2ad0157f984c0560000'"
					}
				],
				"totalPage":7,
				"currentPage":1
			}
		}
export default {
  name: 'hello',
  data () {
    return {
      list:[],
	  totalPage:null,
	  currentPage:null
    }
  },
  methods:{
	getData(){
		/*
		this.httpGet(this.$Url.default.log,{
			"id":10
		},function(res){
			var result = res.data;
			if(result.meta.success){
				this.list = result.data.lists;
				this.totalPage = result.data.totalPage;
				this.currentPage = result.data.currentPage;
			}
		}.bind(this))
		*/
		
		var result = log;
		if(result.meta.success){
			this.list = result.data.lists;
			this.totalPage = result.data.totalPage;
			this.currentPage = result.data.currentPage;
		}
	},
	pageChangeHandel(currentPage){
		console.log(currentPage)
	},
	changeStartDate(value){
		console.log(value)
	}
  },
  mounted(){
	this.getData();
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/base.scss';
@import '../assets/css/index.scss';
</style>