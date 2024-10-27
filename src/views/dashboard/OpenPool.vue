<template>
  <div class="index-container" style="margin-top: 50px">
    <div class="rowSS mb-2">
      <div>涨停炸板</div>
    </div>
    <div class="mb-1 rowSS">
      <el-button type="success" @click="jhjjAnalaysFisrst">执行</el-button>
      <el-button type="success" @click="clearDataFirst">清空</el-button>
    </div>
    <div class="mt-4">首版</div>
    <div>
      <div v-for="(item, index) in gpArrFirst" :key="index" class="mt-1">
        <div style="font-weight: bold" :style="{ color: judgeRise(item) && 'red' }">
          {{
            `${item.name}(${item.code})--${item.change_rate.toFixed(2)}--${
              item.rise_rate
            }--${item.limit_up_suc_rate.toFixed(2)}`
          }}
        </div>
      </div>
    </div>
    <div class="mt-4">二版</div>
    <div>
      <div v-for="(item, index) in gpArrSecond" :key="index" class="mt-1">
        <div style="font-weight: bold" :style="{ color: judgeRise(item) && '#b88230' }">
          {{
            `${item.name}(${item.code})--${item.change_rate.toFixed(2)}--${
              item.rise_rate
            }--${item.limit_up_suc_rate.toFixed(2)}`
          }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import momentMini from 'moment-mini'
import { ElMessage } from 'element-plus'
import { getFsjy, openLimitPool } from './reqApi.ts'
import TimeClock from './TimeClock.vue'
const chooseData = ref(momentMini().format('YYYYMMDD'))
//页面挂载后触发
onMounted(() => {
  //judgeFisrt()
})

// function currentDate(data) {
//   if ('09:30:00' === data) {
//     // if("15:11:30"===data){
//     jhjjAnalaysFisrstOpen()
//   }
// }
//
// function chooseDataPick() {
//   resetData()
// }
function judgeRise(item) {
  if (item.code.startsWith('30')) {
    if (item.change_rate > 17.5) {
      return true
    }
  } else if (item.code.startsWith('60') || item.code.startsWith('00')) {
    if (item.change_rate > 7.5) {
      return true
    }
  }

  return false
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
  // clearInterval(firstOpenIdS.value)
  // clearBtnData()
}
//定时时长
const firstOpenTime = ref(5)
const firstOpenId = ref(null)
// function jhjjAnalaysFisrstOpen() {
//   jhjjAnalaysFisrst()
//   firstOpenId.value = setInterval(() => {
//     jhjjAnalaysFisrst()
//   }, firstOpenTime.value * 1000)
// }
//停止定时
// function jhjjAnalaysFisrstStop() {
//   clearInterval(firstOpenId.value)
//   firstOpenId.value = null
// }

onUnmounted(() => {
  resetData()
})

function setData(date) {
  chooseData.value = date
  jhjjAnalaysFisrst()
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

const codeData = {}
//首版涨停票
const jhjjAnalaysFisrst = async () => {
  // gpArrFirst.value = []
  // gpArrSecond.value = []
  //调用集合竞价接口
  const { data } = await openLimitPool(20241025)

  if (!data.info) {
    ElMessage.warning('集合数据为空')
    return
  }

  const dataInfo = data.info.map((m) => m.code)
  //1.过滤st票
  for (const f of data.info) {
    const { name, code } = f

    //封板率大于80 上涨大于6 或16
    if (code.startsWith('30')) {
      if (!(f.change_rate > 15 && f.change_rate < 20 && Number.parseFloat(f.limit_up_suc_rate) > 0.8)) {
        continue
      }
    } else if (code.startsWith('60') || code.startsWith('00')) {
      if (!(f.change_rate > 6 && f.change_rate < 10 && Number.parseFloat(f.limit_up_suc_rate) > 0.8)) {
        continue
      }
    } else {
      continue
    }

    //1.过滤st票
    if (!name.includes('ST')) {
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
        const fArr = gpArrFirst.value.map((m) => m.code)
        const index1 = fArr.indexOf(f.code)
        if (index1 === -1) {
          gpArrFirst.value.push(f)
        } else {
          gpArrFirst.value[index1] = f
        }
        // console.log(gpArrFirst.value)
      }
      if (bIndex === 1) {
        // const sArr = gpArrSecond.value.map((m) => m.code)
        // if (!sArr.includes(f.code)) {
        //   gpArrSecond.value.push(f)
        // }
        const sArr = gpArrSecond.value.map((m) => m.code)
        const indexs = sArr.indexOf(f.code)
        if (indexs === -1) {
          gpArrSecond.value.push(f)
        } else {
          gpArrSecond.value[indexs] = f
        }
      }
    }
  }
  //判断不存在则移除
  gpArrFirst.value = gpArrFirst.value.filter((f) => dataInfo.includes(f.code))
  gpArrSecond.value = gpArrSecond.value.filter((f) => dataInfo.includes(f.code))
}

//分析集合竞价(找出满足竞价要求的票)
// const gpArr = ref([])
// const gpArrS = ref([])
const gpArrSecond = ref([])
const gpArrFirst = ref([])
// const firstOpenTimeS = ref(5)
// let firstOpenIdS = ref(null)
// function jhjjAnalaysFisrstOpenS() {
//   firstOpenIdS.value = setInterval(() => {
//     collectData()
//
//   }, firstOpenTimeS.value * 1000)
// }
//停止定时
// function jhjjAnalaysFisrstStopS() {
//   clearInterval(firstOpenIdS.value)
//   firstOpenIdS.value = null
// }

// async function collectData() {
//   const { data } = await getlimitBoard(chooseData.value)
//   data.data_list.forEach(async (f) => {
//     const code = f.code
//     if (!f[0].includes('ST')) {
//       let Result = {}
//       if (codeData[code]) {
//         Result = codeData[code]
//       } else {
//         // if(f[8] > f[7] * 0.7||f[8] < f[7] * 0.2){
//         //   return
//         // }
//         const resData = await getFsjy(code)
//         codeData[code] = resData.Result
//         Result = resData.Result
//       }
//       const resultData = filterVolumn(Result)
//       const dataIndex = resultData.findIndex((f) => f.time === chooseData.value)
//       const data = resultData.slice(dataIndex - 2, dataIndex)
//       let bIndex = 0
//       data.forEach((value) => {
//         const zd = value.ratio
//         if (code.startsWith('30')) {
//           if (zd > 19.5 && zd < 20.5) {
//             bIndex++
//           }
//         } else if (code.startsWith('60') || code.startsWith('00')) {
//           if (zd > 9.5 && zd < 10.5) {
//             bIndex++
//           }
//         } else {
//           bIndex = 2
//         }
//       })
//       if (bIndex === 0) {
//         if (f[8] < f[7] * 0.7&& f[8] > f[7] * 0.2) {
//           const mapkey = `${f[0]}(${f.code})-1`
//           //判断是不是首版或者二板票
//           if (analyisData[mapkey]) {
//             if (analyisData[mapkey].length >= 3) {
//               analyisData[mapkey].splice(0, analyisData[mapkey].length - 3)
//             }
//             analyisData[mapkey].push(f[8])
//           } else {
//             analyisData[mapkey] = [f[8]]
//           }
//         }
//         // gpArrFirst.value.push(f)
//         // console.log(gpArrFirst.value)
//       }
//       if (bIndex === 1) {
//         if (f[8] < f[7] * 0.7&& f[8] > f[7] * 0.2) {
//           //判断是不是首版或者二板票
//           const mapkey = `${f[0]}(${f.code})-2`
//           if (analyisData[mapkey]) {
//             if (analyisData[mapkey].length >= 3) {
//               analyisData[mapkey].splice(0, analyisData[mapkey].length - 3)
//             }
//             analyisData[mapkey].push(f[8])
//           } else {
//             analyisData[mapkey] = [f[8]]
//           }
//         }
//       }
//     }
//   })
//   //收集数据
//   //测试数据analyData
//   console.log("analyisData", analyisData);
//   countIncreat(analyisData)
//
//
//   // //如果有值则发送短信通知
//   // if(resultKeys.value.length>0){
//   //   sendString(JSON.stringify(sendString.value))
//   // }
// }
// function clearBtnData(){
//   analyisData={}
//   resultKeys.value=[]
// }

// function isArrayIncreasing(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     //此处可以相等
//     if (arr[i] < arr[i - 1]) {
//       return false;
//     }
//   }
//   return true;
// }
// const resultKeys = ref([])
// function countIncreat(data) {
//   for (const key in data) {
//     if (isArrayIncreasing(data[key])) {
//       if (!resultKeys.value.includes(key)) {
//         resultKeys.value.push(key)
//       }
//     }else{
//       const keyIndex=resultKeys.value.indexOf(key)
//       if (keyIndex!==-1) {
//         resultKeys.value.splice(keyIndex,1)
//       }
//     }
//   }
// }

defineExpose({ setData })
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
