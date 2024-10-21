<template>
  <div class="index-container">
    <div class="mb-10px">竞价一字板</div>
    <el-date-picker
      v-model="chooseData"
      size="small"
      format="YYYY-MM-DD"
      value-format="YYYY-MM-DD"
      type="date"
      placeholder="Pick a day"
      @change="chooseDataPick"
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
      <el-button type="success" @click="clearDataFirst">清空</el-button>
    </div>

    <div class="mt-4">首版一字(机会)</div>
    <div>
      <div v-for="(item, index) in gpArrFirst" :key="index" class="mt-1">
        <div v-if="item[8] < item[7] * 0.7 && item[8] > item[7] * 0.2" style="color: red; font-weight: bold">
          {{ `${item[0]}(${item[1]})：${item[8]}---${item[9]}` }}
        </div>
      </div>
      <div v-for="(item, index) in gpArrFirst" :key="index" class="mt-1">
        <div v-if="item[8] < item[7] * 0.7 && item[8] < item[7] * 0.2" style="color: #b88230; font-weight: bold">
          {{ `${item[0]}(${item[1]})：${item[8]}---${item[9]}` }}
        </div>
        <div v-if="item[8] > item[7] * 0.7">{{ `${item[0]}(${item[1]})：${item[8]}---${item[9]}` }}</div>
      </div>
    </div>
    <div class="mt-4">二版一字(机会)</div>
    <div>
      <div v-for="(item, index) in gpArrSecond" :key="index" class="mt-1">
        <div v-if="item[8] < item[7] * 0.7 && item[8] > item[7] * 0.2" style="color: red; font-weight: bold">
          {{ `${item[0]}(${item[1]})：${item[8]}---${item[9]}` }}
        </div>
      </div>
      <div v-for="(item, index) in gpArrSecond" :key="index" class="mt-1">
        <div v-if="item[8] < item[7] * 0.7 && item[8] < item[7] * 0.2" style="color: #b88230; font-weight: bold">
          {{ `${item[0]}(${item[1]})：${item[8]}---${item[9]}` }}
        </div>
        <div v-if="item[8] > item[7] * 0.7">{{ `${item[0]}(${item[1]})：${item[8]}---${item[9]}` }}</div>
      </div>
    </div>

    <div class="mt-8 font-bold">---可以考虑上车---</div>
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
      <el-button type="success" @click="clearBtnData">清空</el-button>
    </div>

    <div class="mt-4 mb-2">特别关注(很有机会的票)</div>
    <div class="mt-1">
      <div v-for="(item, index) in resultKeys" :key="index" class="mb-1 rowSS">
        <div v-if="item.includes('-1')" class="ml-2" style="color: red">{{ item }}</div>
      </div>
      <div v-for="(item, index) in resultKeys" :key="index" class="mb-1 rowSS">
        <div v-if="item.includes('-2')" class="ml-2" style="color: #b88230">{{ item }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import momentMini from 'moment-mini'
import { ElMessage } from 'element-plus'
import { getFsjy, getlimitBoard, sendString } from './reqApi.ts'
import analyData from './analyData.js'

const chooseData = ref(momentMini().format('YYYY-MM-DD'))
//页面挂载后触发
onMounted(() => {
  //judgeFisrt()
})
function chooseDataPick() {
  resetData()
}
function clearDataFirst() {
  gpArrFirst.value = []
  gpArrSecond.value = []
}
function resetData() {
  // gpArr.value = []
  // gpArrS.value = []
  gpArrSecond.value = []
  gpArrFirst.value = []
  clearInterval(firstOpenId.value)
  clearInterval(firstOpenIdS.value)
  clearBtnData()
}
//
const firstOpenTime = ref(10)
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

const codeData = {}
let analyisData = {}
//首版涨停票
const jhjjAnalaysFisrst = async () => {
  // gpArrFirst.value = []
  // gpArrSecond.value = []
  //调用集合竞价接口
  const { data } = await getlimitBoard(chooseData.value)

  if (!data) {
    ElMessage.warning('集合数据为空')
    return
  }
  const dataInfo = data.data_list.map((m) => m[1])

  //1.过滤st票
  data.data_list.forEach(async (f) => {
    //1.过滤st票
    const code = f[1]
    if (!f[0].includes('ST')) {
      let Result = {}
      if (codeData[code]) {
        Result = codeData[code]
      } else {
        // if(f[8] > f[7] * 0.7||f[8] < f[7] * 0.2){
        //   return
        // }
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
  //判断不存在则移除
  gpArrFirst.value = gpArrFirst.value.filter((f) => dataInfo.includes(f[1]))
  gpArrSecond.value = gpArrSecond.value.filter((f) => dataInfo.includes(f[1]))
}

//分析集合竞价(找出满足竞价要求的票)
// const gpArr = ref([])
// const gpArrS = ref([])
const gpArrSecond = ref([])
const gpArrFirst = ref([])
const firstOpenTimeS = ref(5)
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
  const { data } = await getlimitBoard(chooseData.value)
  const dataInfo = data.data_list.map((m) => m[1])
  data.data_list.forEach(async (f) => {
    const code = f[1]
    if (!f[0].includes('ST')) {
      let Result = {}
      if (codeData[code]) {
        Result = codeData[code]
      } else {
        // if(f[8] > f[7] * 0.7||f[8] < f[7] * 0.2){
        //   return
        // }
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
        if (f[8] < f[7] * 0.7 && f[8] > f[7] * 0.2) {
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
        if (f[8] < f[7] * 0.7 && f[8] > f[7] * 0.2) {
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

  //判断不存在则移除
  resultKeys.value = resultKeys.value.filter((f) => {
    return dataInfo.some((s) => f.includes(f))
  })

  //收集数据
  //测试数据analyData
  console.log('analyisData', analyisData)
  countIncreat(analyisData)

  // //如果有值则发送短信通知
  // if(resultKeys.value.length>0){
  //   sendString(JSON.stringify(sendString.value))
  // }
}
function clearBtnData() {
  analyisData = {}
  resultKeys.value = []
}

function isArrayIncreasing(arr) {
  for (let i = 1; i < arr.length; i++) {
    //此处可以相等
    if (arr[i] < arr[i - 1]) {
      return false
    }
  }
  return true
}
const resultKeys = ref([])
function countIncreat(data) {
  for (const key in data) {
    if (isArrayIncreasing(data[key])) {
      if (!resultKeys.value.includes(key)) {
        resultKeys.value.push(key)
      }
    } else {
      const keyIndex = resultKeys.value.indexOf(key)
      if (keyIndex !== -1) {
        resultKeys.value.splice(keyIndex, 1)
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
