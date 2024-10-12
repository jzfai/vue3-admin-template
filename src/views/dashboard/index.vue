<template>
  <div class="scroll-y">
    <div>集合竞价</div>
    <div>首版机会票</div>
    <el-button @click="judgeFisrt">judgeFisrt</el-button>
  </div>
</template>
<script setup lang="ts">
import axiosReq from "@/utils/axios-req";

//页面挂载后触发
onMounted(()=>{
  //judgeFisrt()
})

//竞价一字板
function getlimitBoard(){
  const reqConfig = {
    url: 'https://eq.10jqka.com.cn/call_auction_v2/stock_chance/v1/history_list/limit_board',
    baseURL:"",
    method: 'post',
    bfLoading: true,
    data: {"date":"2024-10-11","page_num":1,"page_size":20,"sort":0,"sort_field":"imbalance"}
  }
  axiosReq(reqConfig).then(({ data }) => {

  })
}

//个股机会
function  getCallWarn(){
  const reqConfig = {
    url: 'https://eq.10jqka.com.cn/call_auction_v2/stock_chance/v1/history_list/call_warn',
    baseURL:"",
    method: 'post',
    bfLoading: true,
    data: {"date":"2024-10-11","page_num":1,"page_size":20,"sort":0,"sort_field":"warnTimestamp","filter":{"market":"1","warn_types":"","st":null,"optionals":null}}
  }
  axiosReq(reqConfig).then(({ data }) => {

  })
}

//买卖五档盘口
function  getMmwp(){
  const reqConfig = {
    url: `http://api1.mairui.club/hsrl/mmwp/000001/b997d4403688d5e66a`,
    baseURL:"",
    method: 'get'
  }
  axiosReq(reqConfig).then(({ data }) => {

  })
}

//实时交易数据接口
function  getSsjy(){
  const reqConfig = {
    url: `http://api.mairui.club/hsrl/ssjy/000001/b997d4403688d5e66a`,
    baseURL:"",
    method: 'get'
  }
  axiosReq(reqConfig).then(({ data }) => {

  })
}

//最新交易数据
function  getHszbFsjy(){
  const reqConfig = {
    url: `http://api.mairui.club/hszb/fsjy/601211/wh/b997d4403688d5e66a`,
    baseURL:"",
    method: 'get'
  }
  return axiosReq(reqConfig)
}


//历史交易数据
function  getFsjy(){
  const reqConfig = {
    url: `http://api.mairui.club/hszbl/fsjy/601211/dh/b997d4403688d5e66a`,
    baseURL:"",
    method: 'get'
  }
  return axiosReq(reqConfig)
}

//冲刺涨停
function  getlimitUp(){
  const reqConfig = {
    url: `https://data.10jqka.com.cn/dataapi/limit_up/limit_up?page=1&limit=15&field=199112%2C10%2C48%2C1968584%2C19%2C3475914%2C9003%2C9004&filter=HS%2CGEM2STAR&order_field=199112&order_type=0&date=20241011`,
    baseURL:"",
    method: 'post'
  }
  axiosReq(reqConfig).then(({ data }) => {

  })
}

//涨停池
function  getLimitUpPool(){
  const reqConfig = {
    url: `https://data.10jqka.com.cn/dataapi/limit_up/limit_up_pool?page=1&limit=15&field=601211%2C330329%2C9001%2C330324%2C10%2C199112%2C330325%2C9002%2C133971%2C133970%2C1968584%2C3475914%2C9003%2C9004&filter=HS%2CGEM2STAR&order_field=330324&order_type=0&date=20241011`,
    baseURL:"",
    method: 'post'
  }
  axiosReq(reqConfig).then(({ data }) => {

  })
}


//判断该票是否是首版
const judgeFisrt=async ()=>{
  const data:any=  await  getHszbFsjy()
  let code="601211"

  const hasGreaterThanOne = data.slice(-3).some(value => {
    const zd=value.zd
    if(code.startsWith("30")){
      return  zd>19.5&&zd<20.5
    }else if(code.startsWith("60")||code.startsWith("00")){
      return  zd>9.5&&zd<10.5
    }else{
      return false
    }
  });

  console.log(hasGreaterThanOne); // 输出: true

  console.log("data",data);
}


//分析集合竞价
const jhjjAnalays=()=>{

}

//分析首版
const jhjjFirst=()=>{

}

</script>
