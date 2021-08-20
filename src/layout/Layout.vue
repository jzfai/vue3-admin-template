<template>
  <div :class="classObj"  class="layout-wrapper">
    <!--左侧-->
    <Sidebar class="sidebar-container"/>
    <!--右侧-->
    <div class="main-container">
      <Navbar/>
      <AppMain/>
      <!--<div @click="testOpen">testOpen</div>-->
    </div>
  </div>
</template>

<script setup>
  import {Sidebar,Navbar, AppMain} from './components'
  import {getCurrentInstance,computed} from 'vue'
  let {proxy} = getCurrentInstance();
  let opened = computed(() => {
    return proxy.$store.state.app.sidebar.opened;
  });
  let classObj = computed(() => {
    return {
      hideSidebar: !opened.value,
    };
  });
  let testOpen=()=>{
    proxy.$store.commit("app/M_sidebar_opened",!opened.value)
  }
</script>

<style lang="scss" scoped>
  @import "@/styles/variables.scss";
  .layout-wrapper {
    display: flex;
    align-content: start;
    justify-content: start;
  }
  .main-container{
    flex-grow: 1;
    min-height: 100%;
    transition: margin-left .28s;
    margin-left: $sideBarWidth;
    position: relative;
  }
  .sidebar-container {
    transition: width 0.28s;
    width: $sideBarWidth !important;
    background-color: $menuBg;
    height: 100%;
    position: fixed;
    font-size: 0px;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow: hidden;
  }
  .hideSidebar{
    .sidebar-container {
      width: 54px !important;
    }
    .main-container {
      margin-left: 54px;
    }
  }
</style>

