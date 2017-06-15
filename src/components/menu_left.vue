<template>
  <div id="divSidebarMenu" class="left_col" >
            <div class="scroll-view" >
                <div class="navbar nav_title">
                    <a href="/jsp/cus/account/accountIndex" class="site_title">
					<!--<i></i>-->
						云签管理后台
					</a>
                </div>
                <div class="clearfix"></div>
                <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
                    <div class="menu_section">
                        <ul class="side-menu">
                            <li class="userInfo">
                                <!--<img class="userPhoto" src="../assets/images/img.jpg">-->
                                
                                <h3 id="menuDisplayNameText " class="shengl">aa</h3>
								<h3 class="time"><i class="iconfont  icon-iconfontriyongbaihuo"></i>&nbsp;{{currentData}}</h3>
                                <a id="indLogoutIcon" @click="signoutHandle">
                                    <i class="iconfont icon-tuichu" title="退出" ></i>
									
                                </a>
                            </li>
                            <li class="list-li" :class="[curClassStatus == 1 ? 'active' : '']"><a class="title"><i class="iconfont  icon-set"></i>信息维护</a>
                                <ul class="child_menu">
                                    <li>
                                        <router-link to="/application">应用管理</router-link>
										<router-link to="/user_management">用户管理</router-link>
                                    </li>
                                     
                                </ul>
                            </li>
							<li class="list-li" :class="[curClassStatus == 2 ? 'active' : '']"><a class="title"><i class="iconfont icon-templatedefault"></i>证据日志</a>
                                <ul class="child_menu">
                                    <li>
                                        <router-link to="/log">操作日志</router-link>
                                        <router-link to="/logcredible">可信日志查询</router-link>
                                    </li>
                                     
                                </ul>
                            </li>	
							<li class="list-li" :class="[curClassStatus == 3 ? 'active' : '']"><a class="title"><i class="iconfont icon-assessedbadge"></i>系统管理</a>
                                <ul class="child_menu">
                                    <li>
                                        <router-link to="/ca_organization">CA机构设置</router-link>
										<router-link to="/password_setting">密码机设置</router-link>
                                    </li>
                                     
                                </ul>
                            </li>							
                        </ul>

                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
	name: 'menu_left',
	data () {
		return {
			currentData:null
		}
	},
	computed:{
		curClassStatus(){
			return this.$store.state.curClassState;
		}
	},
	methods:{
		getData(){
			this.$http.get(this.$Url.default.login).then(function (response) { 
				console.log(response); 
			}) 
			.catch(function (error) { 
				console.log(error); 
			});
		},
		signoutHandle(){
			this.$router.replace({ path: 'login'})
		},
		getTest(){
			
		}
	},
	mounted(){
		this.currentData = this.getDataFn().currentdate;
		//this.getData();
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/css/base.scss';
@import '../assets/css/font/iconfont.css';
.router-link-active{
  color: $pink !important;
}
#divSidebarMenu{
  height:100%;
  width:170px;
  background: #2A3137;
  left:0;
  position: fixed;
  z-index: 10;
  .nav_title{
    background: #2A3137;
    width: 170px;
    height: 49px;
    margin-bottom:0;
    min-height:49px;
    .site_title{
      text-overflow: ellipsis;
      overflow: hidden;
      font-weight: 400;
      font-size: 14px;
      width: 100%;
      color: #ECF0F1 !important;
      margin-left: 0 !important;
      display: block;
      margin: 0;
	  text-align:center;
	  line-height:45px;
    }
  }
  .side-menu{
  .userInfo{
	img{
		width:80px;
		height:80px;
		border-radius:100%;
		margin:10px auto;
		display:block;
	}
	h3{
		text-align:center;
		color:#fff;
		line-height:30px;
		&.time{
			color:#ccc;
			font-weight:normal; 
		}
	}
	a{
		text-align:center;
		margin:10px 0;
	}
  }
    li{
		&.list-li{
			background:#293846;
			
		}	
		.title{
			color:#fff;
		}
      a{
        @include pm-no;
        height:48px;
        line-height:48px;
        padding-left: 25px;
        color: $gray;
        cursor: pointer;
        display: block;
        font-size:14px;
        position:relative;
		i{
			margin-right:5px;
		}
        span{
          float: right;
          text-align: center;
          font-size: 10px;
          min-width: inherit;
          position: absolute;
          top: 0px;
          right: 25px;
        }
      }
      #indLogoutIcon{
        padding-left:0;
        i{
          font-size:20px;
          color:$pink;
        }
		img{
			width:18px;
			height:20px;
			display:block;
			margin:0 auto;
		}
      }
      .child_menu{	
        li{
          padding-left:25px;
		  background:#2A3137;
        }
        a:hover{
          background: none;
          color: $pink;
        }
        .current-page{
          a{color: $pink;}
        }
      }
      &.active{
        &>a{
          background: $pink;
          &:hover{
            background: $pink;
          }
        }
        .icon-left-open-big{
          //@include prefixer(transform,rotate(-90deg));
          transform:rotate(-90deg);
        }
      }
    }
    &>li{
      &>a:hover{
        background: none;
        //color: $white;
      }
      &.active>a:hover{
        background: $pink !important;
      }
    }
  }
}
@media (max-width:992px) {
  .main_container #divSidebarMenu{
    display: none !important;
  }
}
</style>
