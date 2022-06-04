<template>
  <div class="CodeGenerator scroll-y pb-5">
    <!--项目和作者信息配置-->
    <div class="mb-1">项目和作者信息配置</div>
    <el-form ref="refForm" label-width="150px" :inline="true" :model="poaForm" :rules="formRules" class="pr-5">
      <el-form-item label="author" prop="author" :rules="formRules.isNotNull" label-position="left">
        <el-input v-model="poaForm.author" placeholder="author" />
      </el-form-item>
      <el-form-item label="packageName" prop="packageName" :rules="formRules.isNotNull" label-position="left">
        <el-input v-model="poaForm.packageName" placeholder="packageName" />
      </el-form-item>
      <el-form-item label="serviceName" prop="serviceName" :rules="formRules.isNotNull" label-position="left">
        <el-input v-model="poaForm.serviceName" placeholder="serviceName" />
      </el-form-item>
    </el-form>
    <!-- 前端页面参数配置-->
    <div class="mb-1">前端页面参数配置</div>
    <el-form ref="refCcForm" label-width="150px" :inline="true" :model="ccForm" :rules="formRules" class="pr-5">
      <el-form-item label="upFileApi" prop="upFileApi" :rules="formRules.isNotNull" label-position="left">
        <el-input v-model="ccForm.upFileApi" placeholder="upFileApi" />
      </el-form-item>
      <el-form-item label="isAdd" prop="isAdd" :rules="formRules.isNotNull" label-position="left">
        <el-switch
          v-model="ccForm.isAdd"
          inline-prompt
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-value="true"
          inactive-value="false"
        />
      </el-form-item>
      <el-form-item label="isDelete" prop="isDelete" :rules="formRules.isNotNull" label-position="left">
        <el-switch
          v-model="ccForm.isDelete"
          inline-prompt
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-value="true"
          inactive-value="false"
        />
      </el-form-item>
      <el-form-item label="isMulDelete" prop="isMulDelete" :rules="formRules.isNotNull" label-position="left">
        <el-switch
          v-model="ccForm.isMulDelete"
          inline-prompt
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-value="true"
          inactive-value="false"
        />
      </el-form-item>
      <el-form-item label="isEdit" prop="isEdit" :rules="formRules.isNotNull" label-position="left">
        <el-switch
          v-model="ccForm.isEdit"
          inline-prompt
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-value="true"
          inactive-value="false"
        />
      </el-form-item>
      <el-form-item label="isPagination" prop="isPagination" :rules="formRules.isNotNull" label-position="left">
        <el-switch
          v-model="ccForm.isPagination"
          inline-prompt
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-value="true"
          inactive-value="false"
        />
      </el-form-item>
      <el-form-item label="isDetail" prop="isDetail" :rules="formRules.isNotNull" label-position="left">
        <el-switch
          v-model="ccForm.isDetail"
          inline-prompt
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-value="true"
          inactive-value="false"
        />
      </el-form-item>
      <el-form-item label="isTableMulChoose" prop="isTableMulChoose" :rules="formRules.isNotNull" label-position="left">
        <el-switch
          v-model="ccForm.isTableMulChoose"
          inline-prompt
          active-color="#13ce66"
          inactive-color="#ff4949"
          active-value="true"
          inactive-value="false"
        />
      </el-form-item>
    </el-form>
    <!-- 获取库和表信息 -->
    <div class="mb-1 mt-1">获取库和表信息</div>
    <div class="rowSS">
      <el-input v-model="dataBaseUrl" class="widthPx-200" placeholder="dataBaseUrl" />
      <el-input v-model="dbName" class="widthPx-200" placeholder="dbName" />
      <el-button @click="searchDataBase">查询表</el-button>
    </div>
    <div class="mt-1">请选择表(最多支持三张表)</div>
    <el-radio-group v-model="dbRadio" class="mt-1" @click.stop>
      <el-radio v-for="(item, index) in dbData" :key="index" :label="item.tableName" @change="dbRadioClick(item)">
        {{ item.tableName }}({{ item.tableComment }})
      </el-radio>
    </el-radio-group>
    <div class="mt-1">选中的表</div>
    <el-radio-group v-model="chooseDbRadio" class="mt-1">
      <el-radio
        v-for="(item, index) in chooseDbArr"
        :key="index"
        :label="item.tableName"
        @change="dbChooseRadioClick(item.tableName)"
      >
        {{ item.tableName }}({{ item.tableComment }})
        <el-button type="text" @click="deleteChooseRadio(index)">删除</el-button>
      </el-radio>
    </el-radio-group>
    <!-- 表信息-->
    <div class="mb-1 mt-1">表信息</div>
    <div class="rowSS mt-2">
      <el-input v-model="dbTableUrl" class="widthPx-200" placeholder="dbTableUrl" />
      <el-input v-model="tbName" class="widthPx-200" placeholder="tbName" />
      <el-button @click="searchDbTable">查询表字段</el-button>
    </div>
    <!--  显示表字段信息（可多选） -->
    <div class="mb-1 mt-1">示表字段信息（可多选）</div>
    <div class="mt-1">
      <el-checkbox-group v-model="checkColumnArr">
        <el-checkbox v-for="(item, index) in tbData" :key="index" :label="item">
          {{ item.COLUMN_NAME }}({{ item.COLUMN_COMMENT }})
        </el-checkbox>
      </el-checkbox-group>
      <div class="mt-1">
        <el-button @click="generatorToSearch">生成到查询</el-button>
        <el-button @click="generatorToTable">生成到表格</el-button>
        <el-button @click="generatorToFrom">生成到表单</el-button>
      </div>
    </div>
    <!--  查询配置  -->
    <div class="mt-2 mb-1">查询配置</div>
    <SearchTableConfig ref="refSearchTableConfig" />
    <!--  表格配置  -->
    <div class="mt-1 mb-1">表格配置</div>
    <TableConfig ref="refTableConfig" />
    <!--  提交from表单配置  -->
    <div class="mt-1 mb-1">提交from表单配置</div>
    <FormTableConfig ref="refFormTableConfig" />
  </div>
</template>

<script setup>
const { formRules, elMessage, currentTime } = useElement()
import commonUtil from '@/utils/commonUtil'
/*项目和作者信息配置*/
const poaForm = reactive({
  author: '熊猫哥',
  packageName: 'top.kuanghua.vg',
  serviceName: 'velocity-generator',
  dataTime: ''
})
poaForm.dataTime = currentTime
/*前端页面参数配置*/
const ccForm = reactive({
  upFileApi: '/ty-example/upload/file',
  isAdd: 'true',
  isDelete: 'true',
  isMulDelete: 'true',
  isEdit: 'true',
  isPagination: 'true',
  isDetail: 'true',
  isTableMulChoose: 'true'
})
/*获取库和表信息*/
//库
let dataBaseUrl = $ref('/dataBase/getAllTableFromDb')
let dbRadio = $ref(null)
let dbName = $ref('micro-service-plus')
let chooseDbArr = $ref([])
let chooseDbRadio = $ref(null)
let dbData = $ref([])
const dbRadioClick = (item) => {
  if (chooseDbArr.length >= 3) {
    elMessage('最多支持3个选择', 'warning')
    return
  }
  if (commonUtil.findArrObjByKey(chooseDbArr, 'tableName', item.tableName)) {
    elMessage(`${item.tableName}已存在`, 'warning')
    return
  }
  chooseDbArr.push(item)
}
const dbChooseRadioClick = (tableName) => {
  tbName = tableName
  tbData = []
}
const deleteChooseRadio = (index) => {
  chooseDbArr.splice(index, 1)
  tbData = []
}
const searchDataBase = () => {
  let reqConfig = {
    baseURL: 'http://localhost:10106',
    url: dataBaseUrl,
    method: 'get',
    data: { dbName: dbName },
    isParams: true
  }
  console.log('reqConfig', reqConfig)
  axiosReq(reqConfig).then(({ data }) => {
    dbData = data
  })
}
//表
let dbTableUrl = $ref('/dataBase/getAllColumnFromTb')
let tbName = $ref('tb_brand')
let tbData = $ref([])
const searchDbTable = () => {
  let reqConfig = {
    baseURL: 'http://localhost:10106',
    url: dbTableUrl,
    method: 'get',
    data: { dbName: dbName, tbName: tbName },
    isParams: true
  }
  axiosReq(reqConfig).then(({ data }) => {
    tbData = data
  })
}
let checkColumnArr = $ref([])
/*显示表字段信息（可多选）*/
//Search
import SearchTableConfig from './SearchTableConfig.vue'
const refSearchTableConfig = $ref(null)
const generatorToSearch = () => {
  refSearchTableConfig.setSearchTableData(checkColumnArr)
}
//table
import TableConfig from './tableConfig.vue'
const refTableConfig = $ref(null)
const generatorToTable = () => {
  refTableConfig.setTableData(checkColumnArr)
}
//Form
import FormTableConfig from './FormTableConfig.vue'
const refFormTableConfig = $ref(null)
const generatorToFrom = () => {
  refFormTableConfig.setFormTableData(checkColumnArr)
}
</script>

<style scoped lang="scss"></style>
