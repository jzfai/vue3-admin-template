<template>
  <div class="navbar rowBC">
    <div class="rowSC">
      <hamburger v-if="settings.showHamburger" :is-active="opened" class="hamburger-container" @toggleClick="toggleSideBar"/>
      <breadcrumb class="breadcrumb-container"/>
    </div>
    <!--nav title-->
    <div class="heardCenterTitle" v-if="settings.showTitle">vue3.0 admin Template</div>
    <div class="right-menu" v-if="settings.ShowDropDown">
      <el-dropdown trigger="click" size="medium">
        <!--<span class="el-dropdown-link">-->
        <!--下拉菜单<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
        <!--</span>-->
        <div class="avatar-wrapper">
          <img src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
               class="user-avatar">
          <i class="el-icon-caret-bottom"/>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
  import Breadcrumb from './Breadcrumb'
  import Hamburger from './Hamburger'
  import {onMounted, getCurrentInstance, computed, watch, ref, toRefs, reactive} from "vue";
  import settings from '@/settings'
  import { getToken, setToken, removeToken } from '@/utils/auth'
  //获取store和router
  // import {useRouter} from 'vue-router'
  // import {useStore} from 'vuex'
  // const props = defineProps({
  //   name: {
  //     require: true,
  //     default: "fai",
  //     type:String,
  //   },
  // });
  // const state = reactive({
  //   levelList: null
  // });

  //const routes = computed(() => {
  //    return proxy.$store.state.permission.routes;
  //  });
  // watch(() => props.name, (oldValue,newValue) => {
  //
  //   },
  //   { immediate: true }
  // );
  let {proxy} = getCurrentInstance();

  const opened = computed(() => {
    return proxy.$store.state.app.sidebar.opened;
  });
  const toggleSideBar = () => {
    proxy.$store.commit('app/M_toggleSideBar')
  }
  const logout = async () => {
    removeToken();
    // localStorage.setItem("jwtToken", "");
    //await proxy.$store.commit('user/M_logout')
    proxy.$router.push(`/login?redirect=${proxy.$route.fullPath}`)
  }

  // const store = useStore()
  // const router = useRouter()
  // onMounted(()=>{
  //   console.log("页面挂载了")
  // })
  // let helloFunc = () => {
  //   console.log("helloFunc");
  // };
  //导出给refs使用
  // defineExpose({ helloFunc });
  //导出属性到页面中使用
  // let {levelList} = toRefs(state);
</script>


<style lang="scss" scoped>
  .navbar {
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
  }

  //logo
  .avatar-wrapper {
    margin-top: 5px;
    position: relative;
    cursor: pointer;

    .user-avatar {
      cursor: pointer;
      width: 40px;
      height: 40px;
      border-radius: 10px;
    }

    .el-icon-caret-bottom {
      cursor: pointer;
      position: absolute;
      right: -20px;
      top: 25px;
      font-size: 12px;
    }
  }

  //center-title
  .heardCenterTitle {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 46%;
    font-weight: 600;
    font-size: 20px;
    transform: translate(-50%, -50%);
  }

  //drop-down
  .right-menu {
    cursor: pointer;
    margin-right: 40px;
  }
</style>
