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
						<span><a href="javascript:;">明细</a></span>
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
						"style":"新增应用",
						"loginfo":"新增应用信息，应用编号为85647，应用名称为GDCA测试应用"
					},
					{
						"time":"2016-11-25 17:53:43",
						"username":"aa",
						"style":"新增应用",
						"loginfo":"新增应用信息，应用编号为544526，应用名称为省国税"
					},
					{
						"time":"2016-11-03 11:00:46",
						"username":"aa",
						"style":"密码机设置",
						"loginfo":"密码机设置，'设置密码机地址为192.168.20.12"
					},
					{
						"time":"2016-10-25 09:50:07",
						"username":"aa",
						"style":"密码机设置",
						"loginfo":"密码机设置，设置密码机密钥号为1"
					},
					{
						"time":"2016-10-25 09:47:33",
						"username":"aa",
						"style":"CA机构设置",
						"loginfo":"CA机构设置，设置GDCA TrustAUTH R2 CA"
					},
					{
						"time":"2016-10-25 09:46:49",
						"username":"aa",
						"style":"CA机构设置",
						"loginfo":"CA机构设置，设置GDCA TrustAUTH R2 CA"
					},
					{
						"time":"2016-07-22 11:37:08",
						"username":"aa",
						"style":"修改应用",
						"loginfo":"修改应用，修改应用编号为85647的应用名称，修改为GDCA"
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
  computed:{
	title(){
		return this.$store.state.title;
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
	document.title=this.title;
	console.log("state:"+this.$store.state.title)
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/base.scss';
@import '../assets/css/index.scss';
</style>