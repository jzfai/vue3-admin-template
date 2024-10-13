<template>
  <div class="scroll-y">
    <el-date-picker
      v-model="chooseData"
      format="YYYY-MM-DD"
      value-format="YYYY-MM-DD"
      type="date"
      placeholder="Pick a day"
    />
    <!--    <div class="mb-3">日期:{{ chooseData }}</div>-->
    <!--    <el-input v-model="beforeData" class="wi-100" />-->

    <!--    <div>集合竞价</div>-->
    <div class="rowSS mt-5 mb-2">
      <div>定时时长：</div>
      <el-input style="width: 100px" v-model="firstOpenTime"></el-input>
    </div>
    <div class="mb-1 rowSS">
      <el-button @click="jhjjAnalaysFisrst">jhjjAnalaysFisrst</el-button>

      <el-button type="success" @click="jhjjAnalaysFisrstOpen" :disabled="firstOpenId !== null">开启定时</el-button>
      <el-button type="success" @click="jhjjAnalaysFisrstStop">停止定时</el-button>
    </div>

    <div class="mb-3">首版一字(机会)</div>
    <div>
      <div class="mb-1" v-for="(item, index) in gpArrFirst" :key="index">
        {{ `${item[0]}(${item[1]})-未匹配值：${item[8]}(${item[8] < item[7] * 0.8})}-----${item[9]}` }}
      </div>
    </div>
    <div class="mt-10">二版一字(机会)</div>
    <div>
      <div class="mb-1" v-for="(item, index) in gpArrSecond" :key="index">
        {{ `${item[0]}(${item[1]})-未匹配值：${item[8]}(${item[8] < item[7] * 0.8})}-----${item[9]}` }}
      </div>
    </div>

    <div class="rowSS mt-5 mb-2">
      <div>定时时长：</div>
      <el-input style="width: 100px" v-model="firstOpenTimeS"></el-input>
    </div>
    <div class="mb-1 rowSS">
      <el-button @click="jhjjAnalays">jhjjAnalays</el-button>

      <el-button type="success" @click="jhjjAnalaysFisrstOpenS" :disabled="firstOpenIdS !== null">开启定时</el-button>
      <el-button type="success" @click="jhjjAnalaysFisrstStopS">停止定时</el-button>
    </div>

    <div>首版一字(上车)</div>
    <div class="mt-1">
      <div class="mb-1" v-for="(item, index) in gpArr" :key="index">
        {{
          `${item[0]}(${item[1]})-未匹配值：${item[8]}(${
            item[8] > 0 && item[8] < item[7] * 0.8 && item[8] > item[7] * 0.2
          })}-----${item[9]}`
        }}
      </div>
    </div>
    <div>二版一字(上车)</div>
    <div class="mt-1">
      <div class="mb-1" v-for="(item, index) in gpArrS" :key="index">
        {{
          `${item[0]}(${item[1]})-未匹配值：${item[8]}(${
            item[8] > 0 && item[8] < item[7] * 0.8 && item[8] > item[7] * 0.2
          })}-----${item[9]}`
        }}
      </div>
    </div>
  </div>
</template>
<script setup>
import axiosReq from '@/utils/axios-req'
import momentMini from 'moment-mini'

const chooseData = ref(momentMini().format('YYYY-MM-DD'))
//页面挂载后触发
onMounted(() => {
  //judgeFisrt()
})
//
let firstOpenTime = ref(10)
let firstOpenId = ref(null)
function jhjjAnalaysFisrstOpen() {
  jhjjAnalaysFisrst()
  firstOpenId.value = setInterval(() => {
    jhjjAnalaysFisrst()
  }, firstOpenTime.value * 1000)

  console.log('firstOpenId', firstOpenId)
}
//停止定时
function jhjjAnalaysFisrstStop() {
  clearInterval(firstOpenId.value)
  firstOpenId.value = null
}

onUnmounted(() => {
  clearInterval(firstOpenId.value)
  clearInterval(firstOpenIdS.value)
})

let firstOpenTimeS = ref(10)
let firstOpenIdS = ref(null)
function jhjjAnalaysFisrstOpenS() {
  jhjjAnalays()
  firstOpenIdS.value = setInterval(() => {
    jhjjAnalays()
  }, firstOpenTimeS.value * 1000)

  console.log('firstOpenIdS', firstOpenIdS.value)
}
//停止定时
function jhjjAnalaysFisrstStopS() {
  clearInterval(firstOpenIdS.value)
  firstOpenIdS.value = null
}

function countDateCurrentNum() {
  const today = momentMini().format('YYYY-MM-DD')
  return -momentMini(today).diff(momentMini(chooseData.value), 'days')
}
//竞价一字板
function getlimitBoard() {
  const reqConfig = {
    url: 'https://eq.10jqka.com.cn/call_auction_v2/stock_chance/v1/history_list/limit_board',
    baseURL: '',
    method: 'post',
    bfLoading: true,
    data: { date: chooseData.value, page_num: 1, page_size: 300, sort: 0, sort_field: 'imbalance' }
  }
  return axiosReq(reqConfig)
}

//个股机会
function getCallWarn() {
  const reqConfig = {
    url: 'https://eq.10jqka.com.cn/call_auction_v2/stock_chance/v1/history_list/call_warn',
    baseURL: '',
    method: 'post',
    bfLoading: true,
    data: {
      date: '2024-10-11',
      page_num: 1,
      page_size: 20,
      sort: 0,
      sort_field: 'warnTimestamp',
      filter: { market: '1', warn_types: '', st: null, optionals: null }
    }
  }
  axiosReq(reqConfig).then(({ data }) => {})
}

//冲刺涨停
function getlimitUp() {
  const reqConfig = {
    url: `https://data.10jqka.com.cn/dataapi/limit_up/limit_up?page=1&limit=15&field=199112%2C10%2C48%2C1968584%2C19%2C3475914%2C9003%2C9004&filter=HS%2CGEM2STAR&order_field=199112&order_type=0&date=20241011`,
    baseURL: '',
    method: 'post'
  }
  axiosReq(reqConfig).then(({ data }) => {})
}

//涨停池
function getLimitUpPool() {
  const reqConfig = {
    url: `https://data.10jqka.com.cn/dataapi/limit_up/limit_up_pool?page=1&limit=15&field=601211%2C330329%2C9001%2C330324%2C10%2C199112%2C330325%2C9002%2C133971%2C133970%2C1968584%2C3475914%2C9003%2C9004&filter=HS%2CGEM2STAR&order_field=330324&order_type=0&date=20241011`,
    baseURL: '',
    method: 'post'
  }
  axiosReq(reqConfig).then(({ data }) => {})
}

// //买卖五档盘口
// function getMmwp() {
//   const reqConfig = {
//     url: `http://api1.mairui.club/hsrl/mmwp/000001/b997d4403688d5e66a`,
//     baseURL: '',
//     method: 'get'
//   }
//   axiosReq(reqConfig).then(({ data }) => {})
// }
//
// //实时交易数据接口
// function getSsjy() {
//   const reqConfig = {
//     url: `http://api.mairui.club/hsrl/ssjy/000001/b997d4403688d5e66a`,
//     baseURL: '',
//     method: 'get'
//   }
//   axiosReq(reqConfig).then(({ data }) => {})
// }

//获取分时交易数据
function getHszbFsjy() {
  const reqConfig = {
    url: `https://finance.pae.baidu.com/vapi/v1/getquotation`,
    baseURL: '',
    params: {
      //srcid:5353
      market_type: 'ab',
      newFormat: 1,
      finClientType: 'pc',
      pointType: 'json',
      group: 'quotation_kline_ab',
      code: 601211,
      ktype: 'day'
    },
    reqLoading: false,
    method: 'get'
  }
  return axiosReq(reqConfig)
}

//获取日交易数据
function getFsjy(code) {
  const reqConfig = {
    url: `https://github.jzfai.top/micro-service-baidu/vapi/v1/getquotation`,
    //url: `http://localhost:12050/TestController`,
    baseURL: '',
    params: {
      //srcid:5353
      market_type: 'ab',
      newFormat: 1,
      finClientType: 'pc',
      pointType: 'json',
      group: 'quotation_kline_ab',
      code,
      ktype: 'day'
    },
    reqLoading: false,
    method: 'get'
  }
  return axiosReq(reqConfig)
}
function filterVolumn(data) {
  // 分割marketData字符串为多个记录
  const records = data.newMarketData.marketData.split(';')

  // 初始化结果数组
  const result = []

  // 遍历每个记录
  records.forEach((record) => {
    // 分割记录为字段
    const fields = record.split(',')

    // 根据keys数组获取需要的索引
    const timeIndex = data.newMarketData.keys.indexOf('time')
    const volumeIndex = data.newMarketData.keys.indexOf('volume')
    const amountIndex = data.newMarketData.keys.indexOf('amount')
    const ratioIndex = data.newMarketData.keys.indexOf('ratio')

    // 组装对象并添加到结果数组
    result.push({
      time: fields[timeIndex],
      volume: Number.parseInt(fields[volumeIndex], 10), // 转换为整数
      amount: Number.parseFloat(fields[amountIndex]), // 转换为浮点数
      ratio: Number.parseFloat(fields[ratioIndex]) // 转换为浮点数
    })
  })
  return result
}
//判断该票是否是首版
const judgeFisrt = async (f) => {
  gpArrS.value = []
  gpArr.value = []
  const code = f[1]
  const { Result } = await getFsjy(code)
  const resultData = filterVolumn(Result)

  //找到日期为chooseData的数据
  const dataIndex = resultData.findIndex((f) => f.time === chooseData.value)
  const data = resultData.slice(dataIndex - 2, dataIndex)
  let bIndex = 0
  data.forEach((value) => {
    const zd = value.ratio
    if (code.startsWith('30')) {
      if (zd > 19.5 && zd < 20.5) {
        bIndex++
      }
    } else if (code.startsWith('60') || code.startsWith('00')) {
      if (zd > 9.5 && zd < 10.5) {
        bIndex++
      }
    } else {
      bIndex = 2
    }
  })

  if (bIndex === 1) {
    gpArrS.value.push(f)
    console.log(gpArrS.value)
  }
  if (bIndex === 0) {
    gpArr.value.push(f)
    console.log(gpArr.value)
  }
}

//首版涨停票
const jhjjAnalaysFisrst = async () => {
  gpArrFirst.value = []
  gpArrSecond.value = []
  //调用集合竞价接口
  const { data } = await getlimitBoard()
  if (!data) {
    elMessage('集合数据为空')
    return
  }

  console.log('limitBoardData', data.data_list)
  //1.过滤st票
  data.data_list.forEach(async (f) => {
    //1.过滤st票
    if (!f[0].includes('ST')) {
      // //2.未匹配额
      // if (f[8] > 0 && f[8] < f[7] * 0.8 && f[8] > f[7] * 0.2) {
      //   //判断是不是首版或者二板票
      //   judgeFisrt(f)
      // }
      const code = f[1]
      const { Result } = await getFsjy(code)
      const resultData = filterVolumn(Result)
      const dataIndex = resultData.findIndex((f) => f.time === chooseData.value)
      const data = resultData.slice(dataIndex - 2, dataIndex)
      let bIndex = 0
      data.forEach((value) => {
        const zd = value.ratio
        if (code.startsWith('30')) {
          if (zd > 19.5 && zd < 20.5) {
            bIndex++
          }
        } else if (code.startsWith('60') || code.startsWith('00')) {
          if (zd > 9.5 && zd < 10.5) {
            bIndex++
          }
        } else {
          bIndex = 2
        }
      })
      if (bIndex === 0) {
        gpArrFirst.value.push(f)
        console.log(gpArrFirst.value)
      }
      if (bIndex === 1) {
        gpArrSecond.value.push(f)
        console.log(gpArrSecond.value)
      }
    }
  })

  //3.根据成交额筛选出有概率买进的票

  //4.计算出未匹配成交额上涨的票

  //2.只做首版或者2版本票
  // const { Result } = await getFsjy()
  // const volumnData=filterVolumn(Result).slice(-2)
  // console.log(data.slice(-2))
}

//分析集合竞价(找出满足竞价要求的票)
const gpArr = ref([])
const gpArrS = ref([])
const gpArrSecond = ref([])
const gpArrFirst = ref([])
const jhjjAnalays = async () => {
  //调用集合竞价接口
  const { data } = await getlimitBoard()
  if (!data) {
    elMessage('集合数据为空')
    return
  }
  console.log('limitBoardData', data.data_list)
  //1.过滤st票
  data.data_list.forEach((f) => {
    //1.过滤st票
    if (!f[0].includes('ST')) {
      //2.未匹配额
      if (f[8] > 0 && f[8] < f[7] * 0.8 && f[8] > f[7] * 0.2) {
        //判断是不是首版或者二板票
        judgeFisrt(f)
      }
    }
  })

  //3.根据成交额筛选出有概率买进的票

  //4.计算出未匹配成交额上涨的票

  //2.只做首版或者2版本票
  // const { Result } = await getFsjy()
  // const volumnData=filterVolumn(Result).slice(-2)
  // console.log(data.slice(-2))
}

//分析首版
const jhjjFirst = () => {}
</script>
