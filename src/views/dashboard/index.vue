<template>
  <div class="index-container">
    <el-date-picker
      v-model="chooseData"
      size="small"
      format="YYYY-MM-DD"
      value-format="YYYY-MM-DD"
      type="date"
      @change="chooseDataPick"
      placeholder="Pick a day"
    />
    <!--    <div class="mb-3">日期:{{ chooseData }}</div>-->
    <!--    <el-input v-model="beforeData" class="wi-100" />-->

    <!--    <div>集合竞价</div>-->
    <div class="mt-5 mb-2">
      <div class="mb-2">
        <el-button type="warning" :disabled="firstOpenId !== null" @click="jhjjAnalaysFisrstOpen">开启定时</el-button>
        <el-button type="warning" @click="jhjjAnalaysFisrstStop">停止定时</el-button>
      </div>
      <div>
        定时时长：
        <el-input v-model="firstOpenTime" style="width: 50px" />
      </div>
    </div>
    <div class="mb-1 rowSS">
      <el-button type="success" @click="jhjjAnalaysFisrst">执行</el-button>
    </div>

    <div class="mt-4">首版一字(机会)</div>
    <div>
      <div v-for="(item, index) in gpArrFirst" :key="index" class="mt-1">
        <div style="color: red; font-weight: bold" v-if="item[8] < item[7] * 0.7 && item[8] > item[7] * 0.2">
          {{ `${item[0]}(${item[1]})：${item[8]}---${item[9]}` }}
        </div>
        <div style="color: #b88230; font-weight: bold" v-else-if="item[8] < item[7] * 0.7">
          {{ `${item[0]}(${item[1]})：${item[8]}---${item[9]}` }}
        </div>
        <div v-else>{{ `${item[0]}(${item[1]})：${item[8]}---${item[9]}` }}</div>
      </div>
    </div>
    <div class="mt-4">二版一字(机会)</div>
    <div>
      <div v-for="(item, index) in gpArrSecond" :key="index" class="mt-1">
        <div style="color: red; font-weight: bold" v-if="item[8] < item[7] * 0.7 && item[8] > item[7] * 0.2">
          {{ `${item[0]}(${item[1]})：${item[8]}---${item[9]}` }}
        </div>
        <div style="color: #b88230; font-weight: bold" v-else-if="item[8] < item[7] * 0.7">
          {{ `${item[0]}(${item[1]})：${item[8]}---${item[9]}` }}
        </div>
        <div v-else>{{ `${item[0]}(${item[1]})：${item[8]}---${item[9]}` }}</div>
      </div>
    </div>

    <div class="mt-8" style="font-weight：bold; font-size: 16px">---可以考虑上车---</div>
    <div class="mt-5 mb-2">
      <div class="mb-2">
        <el-button type="warning" :disabled="firstOpenIdS !== null" @click="jhjjAnalaysFisrstOpenS">开启定时</el-button>
        <el-button type="warning" @click="jhjjAnalaysFisrstStopS">停止定时</el-button>
      </div>
      <div>
        定时时长：
        <el-input v-model="firstOpenTimeS" style="width: 50px" />
      </div>
    </div>
    <div class="mb-1 rowSS">
      <el-button type="success" @click="collectData">执行</el-button>
      <el-button type="success" @click="resultKeys = []">清空</el-button>
    </div>

    <div class="mt-4 mb-2">特别关注(很有机会的票)</div>
    <div class="mt-1">
      <div v-for="(item, index) in resultKeys" :key="index" class="mb-1 rowSS">
        <div class="ml-2" v-if="item.includes('-1')" style="color: red">{{ item }}</div>
        <div class="ml-2" v-else>{{ item }}</div>
      </div>
    </div>
    <!--    <div class="mt-4">二版一字(上车)</div>-->
    <!--    <div class="mt-1">-->
    <!--      <div v-for="(item, index) in gpArrS" :key="index" class="mb-1">-->
    <!--        &lt;!&ndash;        <div v-if="${item[8] > 0 && item[8] < item[7] * 0.7 && item[8] > item[7] * 0.2}"></div>&ndash;&gt;-->
    <!--        &lt;!&ndash;        <div v-if="${item[8] > 0 && item[8] < item[7] * 0.7 && item[8] > item[7] * 0.2}"></div>&ndash;&gt;-->
    <!--        {{ `${item[0]}(${item[1]})：${item[8]}-&#45;&#45;${item[9]}` }}-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>
<script setup>
import momentMini from 'moment-mini'
import { ElMessage } from 'element-plus'
import axiosReq from '@/utils/axios-req'

const chooseData = ref(momentMini().format('YYYY-MM-DD'))
//页面挂载后触发
onMounted(() => {
  //judgeFisrt()
})
function chooseDataPick() {
  resetData()
}

function resetData() {
  // gpArr.value = []
  // gpArrS.value = []
  gpArrSecond.value = []
  gpArrFirst.value = []
  codeData = {}
  clearInterval(firstOpenId.value)
  clearInterval(firstOpenIdS.value)
}
//
const firstOpenTime = ref(5)
const firstOpenId = ref(null)
function jhjjAnalaysFisrstOpen() {
  jhjjAnalaysFisrst()
  firstOpenId.value = setInterval(() => {
    jhjjAnalaysFisrst()
  }, firstOpenTime.value * 1000)
}
//停止定时
function jhjjAnalaysFisrstStop() {
  clearInterval(firstOpenId.value)
  firstOpenId.value = null
}

onUnmounted(() => {
  resetData()
})
//

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
    //reqLoading: false,
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
    reqLoading: false,
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

let codeData = {}

// function judgeFisrt(f) {
//   gpArrS.value = []
//   gpArr.value = []
//   sleepTimeout().then(() => {
//     getUpCart(f)
//   })
// }
//判断该票是否是首版
// const getUpCart = async (f) => {
//   const code = f[1]
//   let Result = {}
//   if (codeData[code]) {
//     Result = codeData[code]
//   } else {
//     const resData = await getFsjy(code)
//     codeData[code] = resData.Result
//     Result = resData.Result
//   }
//   const resultData = filterVolumn(Result)
//
//   //找到日期为chooseData的数据
//   const dataIndex = resultData.findIndex((f) => f.time === chooseData.value)
//   const data = resultData.slice(dataIndex - 2, dataIndex)
//   let bIndex = 0
//   data.forEach((value) => {
//     const zd = value.ratio
//     if (code.startsWith('30')) {
//       if (zd > 19.5 && zd < 20.5) {
//         bIndex++
//       }
//     } else if (code.startsWith('60') || code.startsWith('00')) {
//       if (zd > 9.5 && zd < 10.5) {
//         bIndex++
//       }
//     } else {
//       bIndex = 2
//     }
//   })
//
//   if (bIndex === 1) {
//     gpArrS.value.push(f)
//     console.log(gpArrS.value)
//   }
//   if (bIndex === 0) {
//     gpArr.value.push(f)
//     console.log(gpArr.value)
//   }
// }

let analyisData = {}
//首版涨停票
const jhjjAnalaysFisrst = async () => {
  // gpArrFirst.value = []
  // gpArrSecond.value = []
  //调用集合竞价接口
  const { data } = await getlimitBoard()
  if (!data) {
    ElMessage.warning('集合数据为空')
    return
  }

  //1.过滤st票
  data.data_list.forEach(async (f) => {
    //1.过滤st票
    const code = f[1]
    if (!f[0].includes('ST')) {
      let Result = {}
      if (codeData[code]) {
        Result = codeData[code]
      } else {
        const resData = await getFsjy(code)
        codeData[code] = resData.Result
        Result = resData.Result
      }
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
        const fArr = gpArrFirst.value.map((m) => m[1])
        if (!fArr.includes(f[1])) {
          gpArrFirst.value.push(f)
        }
        // console.log(gpArrFirst.value)
      }
      if (bIndex === 1) {
        const sArr = gpArrSecond.value.map((m) => m[1])
        if (!sArr.includes(f[1])) {
          gpArrSecond.value.push(f)
        }
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
// const gpArr = ref([])
// const gpArrS = ref([])
const gpArrSecond = ref([])
const gpArrFirst = ref([])
// const jhjjAnalays = async () => {
//   //调用集合竞价接口
//   const { data } = await getlimitBoard()
//   if (!data) {
//     ElMessage.warning('集合数据为空')
//     return
//   }
//   //1.过滤st票
//   data.data_list.forEach((f) => {
//     //1.过滤st票
//     if (!f[0].includes('ST')) {
//       //2.未匹配额
//       if (f[8] > 0 && f[8] < f[7] * 0.7 && f[8] > f[7] * 0.2) {
//         //判断是不是首版或者二板票
//         judgeFisrt(f)
//       }
//     }
//   })
//
//   //3.根据成交额筛选出有概率买进的票
//
//   //4.计算出未匹配成交额上涨的票
//
//   //2.只做首版或者2版本票
//   // const { Result } = await getFsjy()
//   // const volumnData=filterVolumn(Result).slice(-2)
//   // console.log(data.slice(-2))
// }

const firstOpenTimeS = ref(2)
let firstOpenIdS = ref(null)
function jhjjAnalaysFisrstOpenS() {
  firstOpenIdS.value = setInterval(() => {
    collectData()
  }, firstOpenTimeS.value * 1000)
}
//停止定时
function jhjjAnalaysFisrstStopS() {
  clearInterval(firstOpenIdS.value)
  firstOpenIdS.value = null
}

async function collectData() {
  const { data } = await getlimitBoard()
  data.data_list.forEach(async (f) => {
    const code = f[1]
    if (!f[0].includes('ST')) {
      let Result = {}
      if (codeData[code]) {
        Result = codeData[code]
      } else {
        const resData = await getFsjy(code)
        codeData[code] = resData.Result
        Result = resData.Result
      }
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
        if (f[8] < f[7] * 0.7) {
          const mapkey = `${f[0]}(${f[1]})-1`
          //判断是不是首版或者二板票
          if (analyisData[mapkey]) {
            if (analyisData[mapkey].length >= 3) {
              analyisData[mapkey].splice(0, analyisData[mapkey].length - 3)
            }
            analyisData[mapkey].push(f[8])
          } else {
            analyisData[mapkey] = [f[8]]
          }
        }
        // gpArrFirst.value.push(f)
        // console.log(gpArrFirst.value)
      }
      if (bIndex === 1) {
        if (f[8] < f[7] * 0.7) {
          //判断是不是首版或者二板票
          const mapkey = `${f[0]}(${f[1]})-2`
          if (analyisData[mapkey]) {
            if (analyisData[mapkey].length >= 3) {
              analyisData[mapkey].splice(0, analyisData[mapkey].length - 3)
            }
            analyisData[mapkey].push(f[8])
          } else {
            analyisData[mapkey] = [f[8]]
          }
        }
      }
    }
  })
  console.log('analyisData', analyisData)
  countIncreat(analyisData)
}

function checkIncrement(arr) {
  for (let i = 1; i < arr.length; i++) {
    const previous = arr[i - 1]
    const current = arr[i]

    // 检查是否连续递增5%以上
    if (previous > 0 && current > 0 && current / previous - 1 > 0.05) {
      return true
    }

    // 检查是否一次递增10%以上
    if (previous !== 0 && current !== 0 && Math.abs(current - previous) / Math.abs(previous) > 0.1) {
      return true
    }
  }
  return false
}

const resultKeys = ref([])

function countIncreat(data) {
  for (const key in data) {
    // eslint-disable-next-line no-prototype-builtins
    if (data.hasOwnProperty(key)) {
      if (checkIncrement(data[key]) && !resultKeys.value.includes(key)) {
        resultKeys.value.push(key)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
//修改进度条样式
.index-container {
  font-size: 12px;
  overflow-y: hidden;
  width: 100%;
  min-height: 100%;
}
</style>
