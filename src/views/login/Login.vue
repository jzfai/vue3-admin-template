<!--suppress ALL -->
<template>
  <div id="Login">
    <div @click="loginTest">登录</div>
    <div>{{otherQuery}}</div>
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
  import { reactive, getCurrentInstance, watch,toRefs,proxyRefs} from "vue";
  let { proxy } = getCurrentInstance();
  const state=reactive({
    otherQuery:{},
    redirect:undefined
  })
  console.log("state",state);
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
      const query = route.query.value;
      if (query) {
        proxy.redirect = query.redirect;
        proxy.otherQuery = getOtherQuery(query);
      }
    },
    { immediate: true }
  );
  /*登录相关*/
  let loginTest = () => {
    localStorage.setItem("jwtToken", "11111111");
    proxy.$router.push({ path: proxy.redirect || "/", query: proxy.otherQuery });
  };
  //导出属性到页面中使用
  let {otherQuery,redirect}=toRefs(state);
</script>

<style lang="scss">
  #Login {
    color:red;



  }
</style>
