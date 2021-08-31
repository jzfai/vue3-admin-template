<template>
  <div class="rowSS widthPC-100">
    <!--操作-->
    <div style="margin-bottom: 18px" class="mr-3">
      <el-button type="primary" icon="el-icon-plus" @click.stop.prevent="addBtnClick">新增</el-button>
      <el-button type="primary" icon="el-icon-delete" @click.stop.prevent="multiDelBtnClick()">删除</el-button>
    </div>
    <!--条件搜索-->
    <el-form ref="refsearchFormMixin" :inline="true" class="demo-searchFormMixin">
      <el-form-item label="" prop="name" label-position="left">
        <el-input v-model="searchFormMixin.fileName" class="widthPx-100" placeholder="任务名称" />
      </el-form-item>
      <el-form-item label="" prop="startEndArr" label-position="left">
        <el-date-picker
          v-model="startEndArrMixin"
          type="datetimerange"
          format="YYYY-MM-DD"
          value-format="YYYY-MM-DD HH:mm:ss"
          class="widthPx-250"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          @change="timePacking"
        />
      </el-form-item>
      <el-button @click="searchBtnClick">查询</el-button>
    </el-form>
  </div>
  <el-table ref="refElTable" highlight-current-row size="mini" border :data="tableMixinData">
    <el-table-column type="selection" align="center" width="50" />
    <el-table-column align="center" prop="fileName" label="DBC文件名称" />
    <el-table-column align="center" prop="ctime" label="上传时间" />
    <!--点击操作-->
    <el-table-column align="center" label="操作" width="180px">
      <template #default="{ row }">
        <el-button type="text" size="small" @click="tableEditClick(row)">修改</el-button>
        <el-button type="text" size="small" @click="tableDetailClick(row)">详情</el-button>
        <el-button type="text" size="small" @click="tableDownloadClick(row)">下载</el-button>
        <el-button type="text" size="small" @click="tableDelClick(row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="block columnCC mt-2 mb-5">
    <el-pagination
      :current-page="pageNumMixin"
      :page-sizes="[10, 20, 50, 100]"
      :page-size="pageSizeMixin"
      :pager-count="5"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageTotalMixin"
      @size-change="handleSizeChangeMixin"
      @current-change="handleCurrentChangeMixin"
    />
  </div>
  <DBCFileModal ref="refDBCFileModal" />
  <!--添加和修改-->
  <el-dialog
    v-if="detailDialogMixin"
    :title="dialogTitleMixin"
    v-model="detailDialogMixin"
    width="40vw"
    :close-on-click-modal="false"
  >
    <div class="detail-container rowBC elODialogModalBodyH60vh">
      <div class="detail-container-item">DBC文件名：{{ detailData.fileName }}</div>
    </div>
    <div class="detail-container rowBC elODialogModalBodyH60vh">
      <div class="detail-container-item" style="color: green" v-if="detailData.status === 1">状态： 启用</div>
      <div class="detail-container-item" v-else>状态： 停用</div>
    </div>
    <div class="detail-container rowBC elODialogModalBodyH60vh">
      <div class="detail-container-item">说明：{{ detailData.remark }}</div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="detailDialogMixin = false">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { onMounted, getCurrentInstance, watch, ref, reactive, computed, toRefs } from 'vue'
let { proxy } = getCurrentInstance()
/*获取子组件实例*/
import DBCFileModal from './DBCFileModal'
const refDBCFileModal = ref(null)
/*
 * 一般根据页面层次来排序 如此页面 表格查询和筛选->table的操作
 * 每个模块按：响应数据定义->公用方法->请求方法->页面按钮操作方法 进行排序
 * */
/*表格查询和筛选*/
let searchFormMixin = reactive({
  fileName: '',
  fromDate: '',
  toDate: '',
  pageNumber: 0,
  pageSize: 10
})
let selectPageReq = () => {
  const data = Object.assign(searchFormMixin, {
    pageNum: proxy.pageNumMixin,
    pageSize: proxy.pageSizeMixin
  })
  Object.keys(data).forEach((fItem) => {
    if (data[fItem] === '' || data[fItem] === null || data[fItem] === undefined) delete data[fItem]
  })
  let reqConfig = {
    url: '/scala-ms/dbcFileController/getPage',
    method: 'get',
    data,
    isParams: true,
    isAlertErrorMsg: false
  }
  proxy.$axiosReq(reqConfig).then((resData) => {
    proxy.tableMixinData = resData.data?.content
    proxy.pageTotalMixin = resData.data?.totalElements
    console.log('table的数据', proxy.tableMixinData)
  })
}
const timePacking = (timeArr) => {
  if (timeArr && timeArr.length === 2) {
    searchFormMixin.fromDate = timeArr[0]
    searchFormMixin.toDate = timeArr[1]
  } else {
    searchFormMixin.fromDate = ''
    searchFormMixin.toDate = ''
  }
}
onMounted(() => {
  selectPageReq()
})
const searchBtnClick = () => {
  selectPageReq()
}

/*添加和修改*/
let addBtnClick = () => {
  refDBCFileModal.value.showModal()
}
let tableEditClick = (row) => {
  refDBCFileModal.value.showModal(true, row)
}
/*详情*/
let detailData = ref({})
let tableDetailClick = (row) => {
  proxy.dialogTitleMixin = `详情【${row.fileName}】`
  refDBCFileModal.value.getDetailByIdReq(row.id).then((resData) => {
    detailData.value = resData.data
    proxy.detailDialogMixin = true
  })
}
/*删除*/
let deleteByIdReq = (id) => {
  return proxy.$axiosReq({
    url: '/scala-ms/dbcFileController/delete',
    data: { id: id },
    isParams: true,
    method: 'post',
    bfLoading: true
  })
}
let tableDelClick = async (row) => {
  await proxy.elConfirmMixin('确定', `您确定要删除【${row.fileName}】吗？`)
  deleteByIdReq(row.id).then(() => {
    selectPageReq()
    proxy.elMessageMixin(`【${row.fileName}】删除成功`)
  })
}
/*批量删除*/
const multiDelBtnClick = () => {
  console.log('multiDelBtnClick')
}
/*下载*/
let downloadReq = (row) => {
  let reqConfig = {
    url: 'scala-ms/dbcFileController/download',
    method: 'get',
    data: {
      id: row.id
    },
    isDownLoadFile: true,
    isParams: true,
    isAlertErrorMsg: false
  }
  proxy.$axiosReq(reqConfig).then((resData) => {
    const url = window.URL.createObjectURL(new Blob([resData]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', `${row.fileName}.xls`)
    document.body.appendChild(link)
    link.click()
  })
}
let tableDownloadClick = (row) => {
  downloadReq(row)
}
</script>

<style scoped lang="scss">
/*详情*/
.detail-container {
  flex-wrap: wrap;
  .detail-container-item {
    min-width: 40%;
    margin-bottom: 20px;
  }
}

.detailDialog-title {
  margin-bottom: 14px;
  font-weight: bold;
  font-size: 16px;
}
</style>
