export default {
  getWeek() {
    return `星期${  '日一二三四五六'.charAt(new Date().getDay())}`
    // this.showDate=this.$momentMini(new Date()).format('YYYY年MM月DD日，')+str
  },
  /* 表单验证*/
  // 匹配手机
  mobilePhone(str) {
    const reg = /^0?1[0-9]{10}$/
    return reg.test(str)
  },
  /*
   * 传入一串num四个 一个空格
   * */
  toSplitNumFor(num, numToSpace) {
    return num.replace(/(.{4})/g, '$1 ')
  },
  // 匹配银行卡号
  bankCardNo(str) {
    const reg = /^\d{15,20}$/
    return reg.test(str)
  },
  // 邮箱
  regEmail(str) {
    const reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/
    return reg.test(str)
  },
  // 省份证
  idCardNumber(str) {
    const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
    return reg.test(str)
  },
  /* 价格精度转换*/
  // 乘法
  mul(arg1, arg2) {
    const r1 = arg1.toString()
    const r2 = arg2.toString()
    let m
    let resultVal
    const d = arguments[2]
    m = (r1.split('.')[1] ? r1.split('.')[1].length : 0) + (r2.split('.')[1] ? r2.split('.')[1].length : 0)
    resultVal = (Number(r1.replace('.', '')) * Number(r2.replace('.', ''))) / 10**m
    return typeof d !== 'number' ? Number(resultVal) : Number(resultVal.toFixed(Number.parseInt(d)))
  },
  div (arg1, arg2) {
    const r1 = arg1.toString()
    const r2 = arg2.toString()
    let m
    let resultVal
    const d = arguments[2] || 2
    m = (r2.split('.')[1] ? r2.split('.')[1].length : 0) - (r1.split('.')[1] ? r1.split('.')[1].length : 0)
    resultVal = (Number(r1.replace('.', '')) / Number(r2.replace('.', ''))) * 10**m
    return typeof d !== 'number' ? Number(resultVal) : Number(resultVal.toFixed(Number.parseInt(d)))
  },
  add (arg1, arg2) {
    arg1 = arg1.toString()
    arg2 = arg2.toString()
    const arg1Arr = arg1.split('.')
    const arg2Arr = arg2.split('.')
    const d1 = arg1Arr.length === 2 ? arg1Arr[1] : ''
    const d2 = arg2Arr.length === 2 ? arg2Arr[1] : ''
    const maxLen = Math.max(d1.length, d2.length)
    const m = 10**maxLen
    const result = Number(((arg1 * m + arg2 * m) / m).toFixed(maxLen))
    const d = arguments[2]
    return typeof d === 'number' ? Number(result.toFixed(d)) : result
  },
  sub (arg1, arg2) {
    return this.add(arg1, -Number(arg2), arguments[2])
  },
  /* 常用数组操作*/
  /*
   * 删除数组中的指定元素
   * arrItem 数组的index下标
   * return 删除后的数组
   * */
  deleteArrItem(arr, arrItem) {
    arr.splice(
      arr.indexOf(arrItem),
      1
    )
  },
  /*
   *  数组去重
   *  arr：要去重的数组
   *  return 去重后的数组
   * */
  arrToRepeat(arr) {
    return arr.filter((ele, index, thisArr) => {
      // 因为indexOf返回元素出现的第一个index位置,如果有重复的话那么他的位置永远是第一次出现的index,这就与他本身的index不相符,则删掉.
      return thisArr.indexOf(ele) === index
    })
  },
  /*
   * 数组去重
   * seriesArr: 数组
   * return 去重后的数组
   * */
  deRepeatArr(seriesArr) {
    return [...new Set(seriesArr)]
  },
  /*
   * 根据arrObj 删除arrObj2   根据arrObj objKey查找删除
   * arrObj: 数组对象
   * arrObj2: 要被删除的对象
   * objKey： arrObj中对象的某一个key名称
   * return: arrObj2删除过后的数组
   * */
  byArrObjDeleteArrObj2(arrObj, arrObj2, objKey) {
    arrObj
      .map((value) => {
        return value[objKey]
      })
      .forEach((value2) => {
        arrObj2.splice(
          arrObj2.findIndex((item) => item[objKey] === value2),
          1
        )
      })
    return arrObj2
  },
  /*
   * 删除arrObj某一项 根据objKey中的key的值等于value的值
   * arrObj: 数组对象
   * objKey：arrObj中对象的某一个key名称
   * return: arrObj删除过后的数组
   * */
  deleteArrObjByKey(arrObj, objKey, value) {
    //foreach splice
    //for substring  slice 不改变原数组
    arrObj.splice(
      arrObj.findIndex((item) => item[objKey] === value),
      1
    )
    return arrObj
  },
  /*
   * 查找arrObj某一项 根据objKey中的值
   * arrObj: 数组对象
   * objKey：arrObj中对象的某一个key名称
   * return: arrObj查找 过后的数组
   * */
  findArrObjByKey(arrObj, objKey, value) {
    return arrObj[arrObj.findIndex((item) => item[objKey] == value)]
  },
  /*
   * 根据arrObj 筛选arrObj2   根据arrObj objKey值查找
   * arrObj: 数组对象
   * arrObj2: 要被删除的对象
   * objKey： arrObj中对象的某一个key名称
   * return: arrObj2删除过后的数组
   * */
  byArrObjFindArrObj2(arrObj, arrObj2, objKey, value) {
    const arrObj3 = []
    arrObj
      .map((value) => {
        return value[objKey]
      })
      .forEach((value2) => {
        const arrIndex = arrObj2.findIndex((item) => item[objKey] === value2)
        if (arrIndex !== -1) {
          arrObj3.push(arrObj2[arrIndex])
        }
      })
    return arrObj3
  }
}
