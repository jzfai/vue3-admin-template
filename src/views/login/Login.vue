<!--suppress ALL -->
<template>
  <div class="login-container columnCC">
    <!--注意此处ref中的refloginForm 必须加上单引号，不然会报错
    应该是转换为h函数时有问题,已经提了个问题到官方 -->
    <el-form ref="'refloginForm'" size="medium" class="login-form" :model="formInline" :rules="formRulesMixin">
      <div class="title-container">
        <h3 class="title text-center">{{settings.title}}</h3>
      </div>
      <el-form-item prop="username" :rules="formRulesMixin.isNotNull">
        <div class="rowSC">
            <span class="svg-container">
            <svg-icon icon-class="user"/>
          </span>
          <el-input
            v-model="formInline.username"
            placeholder="用户名(admin)"/>
          <!--占位-->
          <div class="show-pwd"/>
        </div>

      </el-form-item>
      <!--<el-form-item prop="password" :rules="formRulesMixin.passwordValid">-->
      <el-form-item prop="password" :rules="formRulesMixin.isNotNull">
        <div class="rowSC">
          <span class="svg-container">
            <svg-icon icon-class="password"/>
          </span>
          <el-input
            :key="passwordType"
            ref="'password'"
            v-model="formInline.password"
            :type="passwordType"
            name="password"
            @keyup.enter.native="handleLogin"
            placeholder="密码(123456)"/>
          <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"/>
        </span>
        </div>
      </el-form-item>
      <div class="tip-message">{{ tipMessage }}</div>
      <el-button :loading="loading" type="primary" class="login-btn" size="medium"
                 @click.native.prevent="handleLogin">登 录
      </el-button>
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
  /*
  * 初始化参数比如引入组件，proxy,state等
  * */
  import {reactive, getCurrentInstance, watch, toRefs, ref} from "vue";
  import {getToken, setToken, removeToken} from '@/utils/auth'
  import settings from '@/settings'

  let {proxy} = getCurrentInstance();
  //form表单
  let formInline = reactive({
    username: 'admin',
    password: '123456'
  })
  let onSubmit = () => {
    console.log('submit!');
  }

  /*
  * 监听路由变化处理
  * */
  let state = reactive({
    otherQuery: {},
    redirect: undefined
  })
  import {useRoute} from "vue-router";
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
    {immediate: true}
  );
  //导出属性到页面中使用
  let {otherQuery, redirect} = toRefs(state);

  /*
  * 登录相关
  * */
  let resetData = () => {
    tipMessage.value = ''
    proxy.sleepMixin(20).then(() => {
      loading.value = false
    })
  }
  let loading = ref(false)
  let tipMessage = ref("")
  let loginReq = () => {
    loading.value = true
    proxy.$axiosReq({
      url: '/ty-user/user/loginValid', data: formInline,
      method: 'post', isParams: true, isAlertErrorMsg: false
    }).then(resData => {
      //需要将用户信息存储到本地
      if (resData.code === 20000) {
        setToken(resData.data?.jwtToken)
        proxy.$router.push({path: state.redirect || "/", query: state.otherQuery});
        resetData();
      } else {
        tipMessage.value = resData.msg
        proxy.sleepMixin(30).then(() => {
          loading.value = false
        })
      }
    })
  }
  let handleLogin = () => {
    let refloginForm = ""
    //此处build的时候，template官方转vnode发生错误,先这样写
    if (proxy.isBuildEnvMixin()) {
      refloginForm = proxy.$refs["refloginForm"];
    } else {
      refloginForm = proxy.$refs["'refloginForm'"];
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

  /*
  * 密码的显示和隐藏
  * */
  let passwordType = ref("password")
  let showPwd = () => {
    if (passwordType.value === 'password') {
      passwordType.value = ''
    } else {
      passwordType.value = 'password'
    }
    proxy.$nextTick(() => {
      console.log(proxy.$refs.password);
      let refPassword=null
      if (proxy.isBuildEnvMixin()) {
        refPassword = proxy.$refs["password"];
      } else {
        refPassword = proxy.$refs["'password'"];
      }
      refPassword.focus()
    })
  }

</script>

<style lang="scss" scoped>
  $bg: #2d3a4b;
  $dark_gray: #889aa4;
  $light_gray: #eee;
  .login-container {
    height: 100vh;
    width: 100%;
    background-color: #2d3a4b;
    .login-form {
      margin-bottom: 20vh;
      width: 360px;
    }
    .title-container {
      .title {
        font-size: 22px;
        color: #eee;
        margin: 0px auto 25px auto;
        text-align: center;
        font-weight: bold
      }
    }
  }

  .svg-container {
    padding-left: 6px;
    color: $dark_gray;
    text-align: center;
    width: 30px;
  }

  //错误提示信息
  .tip-message {
    color: #e4393c;
    height: 30px;
    margin-top: -12px;
    font-size: 12px
  }

  //登录按钮
  .login-btn {
    width: 100%;
    margin-bottom: 30px;
  }

  .show-pwd {
    width: 50px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    text-align: center;
  }
</style>

<style lang="scss">
  //css 样式重置
  .login-container .el-input input {
    background: transparent;
    border: 0px;
    -webkit-appearance: none;
    border-radius: 0px;
    padding: 10px 5px 10px 15px;
    color: #fff;
    height: 42px; //此处调整item的高度
    caret-color: #fff;
  }
  .login-container .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
</style>
