<template>
  <el-table ref="refSearchTable" :data="searchTableData" border @selection-change="handleSearchSelection">
    <el-table-column prop="TABLE_SCHEMA" label="表名" align="center" width="100" />
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
import commonUtil from '@/utils/commonUtil'
const setSearchTableData = (checkColumnArr) => {
  checkColumnArr.forEach((fItem) => {
    const hasKey =
      commonUtil.findArrObjByKey(searchTableData, fItem, 'originField') &&
      commonUtil.findArrObjByKey(searchTableData, fItem, 'TABLE_SCHEMA')
    if (!hasKey) {
      fItem.field = changeDashToCase(fItem.COLUMN_NAME) //_转驼峰
      fItem.fieldCase = changeTheFirstWordToCase(changeDashToCase(fItem.COLUMN_NAME)) //_转驼峰
      fItem.originField = fItem.COLUMN_NAME
      fItem.tbName = fItem.COLUMN_NAME
      fItem.desc = fItem.COLUMN_COMMENT
      fItem.type = tbTypeMapping(fItem.DATA_TYPE) //数据库和java中的类型做映射
      fItem.componentType = componentTypeMapping(fItem.DATA_TYPE, fItem.COLUMN_NAME) //数据库和前端控件中的类型做映射
      fItem.rule = 'isNotNull' //数据库和java中的类型做映射
      fItem.value = 'value'
      fItem.label = 'label'
      fItem.children = 'children'
      fItem.width = 100
      searchTableData.push(fItem)
    }
  })
}
/*查询配置*/
let currentChooseRow = $ref({})
const chooseRowHandle = (row) => {
  currentChooseRow = row
}
let searchTableData = $ref([])
let searchSelection = $ref([])
const handleSearchSelection = (val) => {
  searchSelection = val
}
//删除和新增
const deleteSearchItem = (row, index) => {
  searchTableData.splice(index, 1)
}

defineExpose({ setSearchTableData })
</script>

<style scoped lang="scss"></style>
