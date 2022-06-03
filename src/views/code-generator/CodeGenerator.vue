<template>
  <div class="CodeGenerator">
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
      <el-button @click="searchDataBase">查询库</el-button>
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
      <el-button @click="searchDbTable">查询表</el-button>
    </div>
    <!--  显示表字段信息（可多选） -->
    <div class="mb-1 mt-1">示表字段信息（可多选）</div>
    <div class="mt-1">
      <el-checkbox-group v-model="checkColumnArr">
        <el-checkbox v-for="(item, index) in tbData" :key="index" :label="item.COLUMN_NAME">
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
    <div class="mb-1 mt-1">查询配置</div>
    <el-button>新增</el-button>
    <el-button>删除</el-button>
    <el-table ref="refSearchTable" :data="searchTableData" border @selection-change="handleSelectionChange">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
    <!--  表格配置  -->

    <!--  提交from表单配置  -->
  </div>
</template>

<script setup>
const { formRules, elMessage, currentTime } = useElement()

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
let dataBaseUrl = ref('/dataBase/getAllTableFromDb')
let dbRadio = ref(null)
let dbName = ref('micro-service-plus')
let chooseDbArr = ref([])
let chooseDbRadio = ref(null)
let dbData = ref([])
const dbRadioClick = (item) => {
  if (chooseDbArr.value.length >= 3) {
    elMessage('最多支持3个选择')
    return
  }
  chooseDbArr.value.push(item)
}
const dbChooseRadioClick = (tableName) => {
  tbName.value = tableName
  tbData.value = []
}
const deleteChooseRadio = (index) => {
  chooseDbArr.value.splice(index, 1)
  tbData.value = []
}
const searchDataBase = () => {
  let reqConfig = {
    baseURL: 'http://localhost:10106',
    url: dataBaseUrl.value,
    method: 'get',
    data: { dbName: dbName.value },
    isParams: true
  }
  console.log('reqConfig', reqConfig)
  axiosReq(reqConfig).then(({ data }) => {
    dbData.value = data
  })
}
//表
let dbTableUrl = ref('/dataBase/getAllColumnFromTb')
let tbName = ref('')
let tbData = ref([])
const searchDbTable = () => {
  let reqConfig = {
    baseURL: 'http://localhost:10106',
    url: dbTableUrl.value,
    method: 'get',
    data: { dbName: dbName.value, tbName: tbName.value },
    isParams: true
  }
  axiosReq(reqConfig).then(({ data }) => {
    tbData.value = data
  })
}
let checkColumnArr = ref([])
/*显示表字段信息（可多选）*/
const generatorToSearch = () => {}
const generatorToTable = () => {}
const generatorToFrom = () => {}

/*查询配置*/
let searchTableData = ref([])
let searchSelection = ref([])
const handleSelectionChange = (val) => {
  searchSelection.value = val
}

// import { onMounted, getCurrentInstance, watch, ref, toRefs, reactive, computed } from 'vue'
//获取store和router
// import {useRouter} from 'vue-router'
// import {useStore} from 'vuex'
// let { proxy } = getCurrentInstance()
// const props = defineProps({
//   name: {
//     require: true,
//     default: "fai",
//     type:String,
//   },
// });
// const state = reactive({
//   levelList: null
// });

//const routes = computed(() => {
//    return proxy.$store.state.permission.routes;
//  });
// watch(() => props.name, (oldValue,newValue) => {
//
//   },
//   { immediate: true }
// );

// const store = useStore()
// const router = useRouter()
// onMounted(()=>{
//   console.log("页面挂载了")
// })
// let helloFunc = () => {
//   console.log("helloFunc");
// };
//导出给refs使用
// defineExpose({ helloFunc });
//导出属性到页面中使用
// let {levelList} = toRefs(state);
</script>

<style scoped lang="scss"></style>
