/*
 * generator 工具方法
 * @author: 熊猫哥
 * */

/*
 * ‘_’连接转为驼峰
 * //- hyphen
 * */
export const changeDashToCase = (str) => {
  let changeStr = ``
  let arr = str.split(`_`)
  let newArr = arr.map((ele, idx) => {
    return idx === 0 ? ele : ele[0].toUpperCase() + ele.slice(1)
  })
  changeStr = newArr.join(``)
  return changeStr
}

//首字母转大写
export const changeTheFirstWordToCase = (str) => {
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase()
}

/**
 * 类型映射
 * @param type 数据库类型
 * @return  java类型
 * @author 熊猫哥
 * @date 2022/6/4 9:54
 */
export const tbTypeMapping = (type) => {
  // varchar,char,text,longText -->String
  // decimal->Double
  // int,bit,tinyint->Integer
  // bigInt->Long
  //datetime,timestamp->Date
  //Date->Object
  if ('varchar,char,text,longText'.includes(type)) {
    return 'String'
  } else if ('decimal'.includes(type)) {
    return 'Double'
  } else if ('int,bit,tinyint'.includes(type)) {
    return 'Integer'
  } else if ('bigInt'.includes(type)) {
    return 'Long'
  } else if ('datetime,timestamp'.includes(type)) {
    return 'Long'
  } else if ('Date'.includes(type)) {
    return 'Object'
  } else {
    return '未知类型' + type
  }
}

/**
 * 前端组件类型
 * @return
 * @author 熊猫哥
 * @date 2022/6/4 10:44
 */
export const componentTypeArr = [
  { label: 'input', title: 'input' },
  { label: 'textarea', title: 'textarea' },
  { label: 'select', title: 'select' },
  { label: 'selectApi', title: 'selectApi' },
  { label: 'cascader', title: 'cascader' },
  { label: 'cascaderApi', title: 'cascaderApi' },
  { label: 'radio', title: 'radio' },
  { label: 'checkbox', title: 'checkbox' },
  { label: 'switch', title: 'switch' },
  { label: 'datetimerange', title: 'datetimerange' },
  { label: 'datetime', title: 'datetime' },
  { label: 'date', title: 'date' },
  { label: 'uploadImage', title: 'uploadImage' }
]

/**
 * 组件类型映射
 * @param null
 * @return
 * @author 熊猫哥
 * @date 2022/6/4 10:23
 */
export const componentTypeMapping = (type, commont) => {
  if ('varchar,char,text,longText'.includes(type)) {
    return 'input'
  } else if ('decimal'.includes(type)) {
    return 'input'
  } else if ('int,bit,tinyint'.includes(type)) {
    if (commont.includes(')')) {
      return 'select'
    }
    return 'input'
  } else if ('bigInt'.includes(type)) {
    return 'input'
  } else if ('datetime,timestamp'.includes(type)) {
    return 'datetime'
  } else if ('Date'.includes(type)) {
    return 'datetime'
  } else {
    return '未知类型' + type
  }
}
