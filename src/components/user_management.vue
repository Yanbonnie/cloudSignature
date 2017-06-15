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
					<li class="title"> 
						<span>用户名</span>
						<span>应用标识Appid</span>
						<span>设备标识MobileID</span>
						<span>联系方式</span>
						<span>证书序列号</span>
						<span>创建时间</span>
					</li>
					<li v-for="(item,index) in list"> 
						<span>{{item.username}}</span>
						<span>{{item.appid}}</span>
						<span>{{item.mobileid}}</span>
						<span>{{item.phone}}</span>
						<span>{{item.serialnum}}</span>
						<span>{{item.time}}</span>
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
var usermanagement = {
			"meta":{
				"success":true
			},
			"data":{
				"lists":[
					{
						"username":"WANGSN",
						"appid":"85647",
						"mobileid":"256895674",
						"phone":"15825658795",
						"serialnum":"70 85 65 58 55 74",
						"time":"2017-03-10 10:01:12"
					},
					{
						"username":"GDCA",
						"appid":"544526",
						"mobileid":"265895234",
						"phone":"18825369856",
						"serialnum":"25 78 15 48 46 78",
						"time":"2017-05-10 15:08:18"
					},
					{
						"username":"YANBN",
						"appid":"85647",
						"mobileid":"256895674",
						"phone":"15825658795",
						"serialnum":"60 85 65 58 55 74",
						"time":"2017-03-10 10:01:12"
					},
					{
						"username":"TEST",
						"appid":"544526",
						"mobileid":"265895234",
						"phone":"18825369856",
						"serialnum":"28 78 15 48 46 78",
						"time":"2017-05-10 15:08:18"
					},
					{
						"username":"GDCA",
						"appid":"544526",
						"mobileid":"265895234",
						"phone":"18825369856",
						"serialnum":"89 78 15 48 46 78",
						"time":"2017-05-10 15:08:18"
					},
					{
						"username":"SASD",
						"appid":"85647",
						"mobileid":"256895674",
						"phone":"15825658795",
						"serialnum":"82 85 65 58 55 74",
						"time":"2017-03-10 10:01:12"
					},
					{
						"username":"TEST2",
						"appid":"544526",
						"mobileid":"265895234",
						"phone":"18825369856",
						"serialnum":"78 78 15 88 46 78",
						"time":"2017-05-10 15:08:18"
					},
					{
						"username":"SASD",
						"appid":"544526",
						"mobileid":"265895234",
						"phone":"18825369856",
						"serialnum":"25 78 19 48 46 77",
						"time":"2017-05-10 15:08:18"
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
		this.httpGet(this.$Url.default.usermanagement,{},function(res){
			var result = res.data;
			if(result.meta.success){
				this.list = result.data.lists;
				this.totalPage = result.data.totalPage;
				this.currentPage = result.data.currentPage;
			}
		}.bind(this))
		*/
		
		var result = usermanagement;
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