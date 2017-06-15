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
			<div class="clf"> 
				<a class="addBtn">新建应用</a>
			</div>
			<div class="panel-box">
				<ul class="table table-six Irregular"> 
					<li class="title"> 
						<span>&nbsp;</span>
						<span>应用编号</span>
						<span>应用名称</span>
						<span>创建时间</span>
						<span>创建人</span>
						<span>操作</span>
					</li>
					<li v-for="(item,index) in list"> 
						<span>{{index+1}}</span>
						<span>{{item.identifier}}</span>
						<span>{{item.name}}</span>
						<span>{{item.createTime}}</span>
						<span>{{item.createUser}}</span>
						<span><a href="javascript:;">修改</a></span>
					</li>
				</ul>
				<div class="page-box"> 
					<pagination  :total="totalPage" :currentpage="currentPage" :display="5"  @pagechange="pageChangeHandel"></pagination>
				</div>
			</div>
		</div>	
	</div>
</template>
<script>
var application = {
			"meta":{
				"success":true
			},
			"data":{
				"lists":[
					{
						"identifier":"85647",
						"name":"GDCA测试应用",
						"createTime":"2011-11-10 15:27:46",
						"createUser":"aa"
					},
					{
						"identifier":"544526",
						"name":"省国税",
						"createTime":"2011-11-10 10:01:12",
						"createUser":"aa"
					}
				],
				"totalPage":2,
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
		this.httpGet(this.$Url.default.application,{},function(res){
			var result = res.data;
			if(result.meta.success){
				this.list = result.data.lists;
				this.totalPage = result.data.totalPage;
				this.currentPage = result.data.currentPage;
			}
		}.bind(this))*/
		
		
		/*this.list = result.data.lists;
		this.totalPage = result.data.totalPage;
		this.currentPage = result.data.currentPage;
		
		*/
		
		var result = application;
		if(result.meta.success){
			this.list = result.data.lists;
			this.totalPage = result.data.totalPage;
			this.currentPage = result.data.currentPage;
		}
	},
	pageChangeHandel(currentPage){
		console.log(currentPage);
		this.currentPage = currentPage;
	}
  },
  mounted(){
	this.getData();
	document.title=this.title;
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/css/base.scss';
@import '../assets/css/index.scss';
</style>