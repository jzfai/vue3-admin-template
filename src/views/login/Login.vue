<!--suppress ALL -->
<template>
  <div class="login-container columnCC">
    <!--注意此处ref中的refloginForm 必须加上单引号，不然会报错
    应该是转换为h函数时有问题 -->
    <el-form  ref="'refloginForm'"  class="login-form" :model="formInline" :rules="formRulesMixin" >
      <div class="title-container">
        <h3 class="title text-center">{{settings.title}}</h3>
      </div>
      <el-form-item prop="username" :rules="formRulesMixin.isNotNull">
        <el-input
          v-model="formInline.username"
          placeholder="用户名(admin)"/>
      </el-form-item>
      <!--<el-form-item prop="password" :rules="formRulesMixin.passwordValid">-->
      <el-form-item prop="password" :rules="formRulesMixin.isNotNull">
        <span class="svg-container">
          <!--<svg-icon icon-class="password"/>-->
        </span>
        <el-input v-model="formInline.password" placeholder="密码(123456)" />
      </el-form-item>
      <div style="color: #e4393c;height: 30px; margin-top: -12px;font-size: 12px">{{ tipMessage }}</div>
      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登 录</el-button>
    </el-form>
  </div>
</template>

<script>
  /*可以设置默认的名字*/
  export default {
    name: 'Login'
  }
</script>

<script setup>
  /*初始化参数比如引入组件，proxy,state等*/
  import { reactive, getCurrentInstance, watch,toRefs,ref } from "vue";
  import { getToken, setToken, removeToken } from '@/utils/auth'
  import settings from '@/settings'
  let { proxy } = getCurrentInstance();

  //form表单
  let  formInline=reactive({
    username: 'admin',
    password: '123456'
  })
  let onSubmit=()=> {
    console.log('submit!');
  }

  let state=reactive({
    otherQuery:{},
    redirect:undefined
  })
  //监听路由变化处理相应的
  import { useRoute } from "vue-router";
  // state.otherQuery={}
  // state.redirect=undefined
  const route = useRoute();
  let getOtherQuery = (query) => {
    return Object.keys(query).reduce((acc, cur) => {
      if (cur !== "redirect") {
        acc[cur] = query[cur];
      }
      return acc;
    }, {});
  };
  watch(route, (route) => {
      console.log("监听到路由的变化", route);
      const query = route.query;

      if (query) {
        state.redirect = query.redirect;
        state.otherQuery = getOtherQuery(query);
      }
    },
    { immediate: true }
  );
  /*登录相关*/
  let resetData=()=>{
    tipMessage.value = ''
    proxy.sleepMixin(20).then(()=>{
      loading.value = false
    })
  }
  let loading=ref(false)
  let tipMessage=ref("")
  let loginReq=()=>{
    loading.value = true
    proxy.$axiosReq({
      url: '/ty-user/user/loginValid', data: formInline,
      method: 'post',isParams:true,isAlertErrorMsg:false
    }).then(resData => {
      //需要将用户信息存储到本地
      if(resData.code===20000){
        setToken(resData.jwtToken)
        console.log("state", state);
        proxy.$router.push({ path: state.redirect || "/", query: state.otherQuery });
      }else{
        tipMessage.value = resData.msg
        proxy.sleepMixin(20).then(()=>{
          loading.value = false
        })
      }
    })
  }

  let handleLogin = () => {
    resetData();
    let refloginForm =""
    if (proxy.isBuildEnvMixin()) {
      refloginForm=proxy.$refs["refloginForm"];
    }else{
      refloginForm=proxy.$refs["'refloginForm'"];
    }
    refloginForm.validate(valid => {
      if (valid) {
        loginReq();
      } else {
        return false
      }
    })
    // localStorage.setItem("jwtToken", "11111111");
  };
  //导出属性到页面中使用
  let {otherQuery,redirect}=toRefs(state);
</script>

<style lang="scss" scoped>
  .login-container{
    height: 100vh;
    width: 100%;
    background-color: #2d3a4b;
    .login-form{
      margin-bottom: 20vh;
      width: 320px;
    }
    .title-container{
      .title{
        font-size: 22px;
        color: #eee;
        margin: 0px auto 25px auto;
        text-align: center;
        font-weight: bold
      }
    }
  }
</style>
