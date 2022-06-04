<template>
  <el-table ref="reftable" :data="tableData" border @selection-change="handleSearchSelection">
    <el-table-column prop="originField" label="字段名" align="center" width="100" />
    <el-table-column prop="desc" label="字段描述" width="140" />
    <el-table-column prop="componentType" align="center" label="组件类型" min-width="400">
      <template #default="{ row }">
        <el-radio-group v-model="row.componentType">
          <el-radio
            v-for="(item, index) in componentTypeArr"
            :key="index"
            :label="item.label"
            @click="chooseRowHandle(row)"
          >
            {{ item.title }}
          </el-radio>
        </el-radio-group>
      </template>
    </el-table-column>
    <el-table-column
      v-if="['selectApi', 'cascaderApi'].includes(currentChooseRow.componentType)"
      prop="selectKey"
      align="center"
      label="v-for的value"
      width="100"
    >
      <template #default="{ row }">
        <el-input v-model="row.selectKey" placeholder="v-for的value" />
      </template>
    </el-table-column>
    <el-table-column
      v-if="['selectApi', 'cascaderApi'].includes(currentChooseRow.componentType)"
      align="center"
      prop="selectLabel"
      label="v-for的lable"
      width="100"
    >
      <template #default="{ row }">
        <el-input v-model="row.selectLabel" placeholder="v-for的lable" />
      </template>
    </el-table-column>
    <el-table-column
      v-if="['selectApi', 'cascaderApi'].includes(currentChooseRow.componentType)"
      align="center"
      prop="queryApi"
      label="请求地址"
      width="120"
    >
      <template #default="{ row }">
        <el-input v-model="row.queryApi" placeholder="请求地址" />
      </template>
    </el-table-column>
    <el-table-column
      v-if="['selectApi', 'cascaderApi'].includes(currentChooseRow.componentType)"
      prop="queryApiType"
      label="请求方法"
      width="120"
    >
      <template #default="{ row }">
        <el-input v-model="row.queryApiType" placeholder="请求方法" />
      </template>
    </el-table-column>
    <el-table-column
      v-if="['cascaderApi'].includes(currentChooseRow.componentType)"
      prop="children"
      label="children映射key"
      width="150"
    >
      <template #default="{ row }">
        <el-input v-model="row.children" placeholder="children映射key" />
      </template>
    </el-table-column>

    <el-table-column prop="width" align="center" label="控件的宽度" min-width="100">
      <template #default="{ row }">
        <el-input v-model="row.width" placeholder="控件的宽度" />
      </template>
    </el-table-column>
    <el-table-column prop="width" align="center" label="操作" width="50">
      <template #default="{ row, $index }">
        <el-button type="text" @click="deleteSearchItem(row, $index)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import {
  changeDashToCase,
  changeTheFirstWordToCase,
  componentTypeArr,
  componentTypeMapping,
  tbTypeMapping
} from './generatorUtis'

const setTableData = (checkColumnArr) => {
  //对字段进行处理和映射
  tableData = checkColumnArr.map((mItem) => {
    mItem.field = changeDashToCase(mItem.COLUMN_NAME) //_转驼峰
    mItem.fieldCase = changeTheFirstWordToCase(changeDashToCase(mItem.COLUMN_NAME)) //_转驼峰
    mItem.originField = mItem.COLUMN_NAME
    mItem.desc = mItem.COLUMN_COMMENT
    mItem.type = tbTypeMapping(mItem.DATA_TYPE) //数据库和java中的类型做映射
    mItem.componentType = componentTypeMapping(mItem.DATA_TYPE, mItem.COLUMN_NAME) //数据库和前端控件中的类型做映射
    mItem.rule = 'isNotNull' //数据库和java中的类型做映射
    mItem.value = 'value'
    mItem.label = 'label'
    mItem.children = 'children'
    mItem.width = 100
    return mItem
  })
}
/*查询配置*/
let currentChooseRow = $ref({})
const chooseRowHandle = (row) => {
  currentChooseRow = row
}
let tableData = $ref([])
let searchSelection = $ref([])
const handleSearchSelection = (val) => {
  searchSelection = val
}
//删除和新增
const deleteSearchItem = (row, index) => {
  tableData.splice(index, 1)
}

defineExpose({ setTableData })
</script>

<style scoped lang="scss"></style>
