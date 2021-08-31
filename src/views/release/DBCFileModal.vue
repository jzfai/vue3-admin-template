<template>
  <el-dialog
    v-if="detailDialogMixin"
    :title="dialogTitleMixin"
    v-model="detailDialogMixin"
    width="50vw"
    :close-on-click-modal="false"
    :before-close="beforeCloseDetailModal"
  >
    <div class="detail-container">
      <el-form
        ref="refForm"
        :inline="true"
        :model="subFormMixin"
        :rules="formRulesMixin"
        label-width="180px"
        class="pr-5"
      >
        <el-form-item label-position="left" prop="fileName" label="DBC文件:" :rules="formRulesMixin.isNotNull">
          <div class="rowSS" style="min-width: 150px">
            <div class="mr-1">{{ subFormMixin.fileName }}</div>
            <el-button type="primary" @click="goUploadFileMixin">
              <i class="el-icon-upload2" />
              上传
              <input id="file" ref="refSettingFile" type="file" style="display: none" @change="tableImportReq" />
            </el-button>
          </div>
        </el-form-item>
        <el-form-item label="说明" :rules="formRulesMixin.isNotNull">
          <el-input
            v-model="subFormMixin.remark"
            class="widthPx-250"
            type="textarea"
            rows="3"
            maxlength="255"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="beforeCloseDetailModal">取 消</el-button>
        <el-button type="primary" @click="confirmBtnClick">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { onMounted, getCurrentInstance, watch, ref, toRefs, reactive, computed } from 'vue'
//获取store和router
// import {useRouter} from 'vue-router'
// import {useStore} from 'vuex'
let { proxy } = getCurrentInstance()
/*新增*/
let detailDialogMixin = ref(null)
let subFormMixin = reactive({
  id: '',
  status: 0,
  fileName: '',
  remark: '',
  sysFileName: ''
})
const resetData = () => {
  Object.keys(subFormMixin).forEach((sItem) => {
    subFormMixin[sItem] = ''
  })
  console.log('清空过后的subFormMixin', subFormMixin)
}
const saveReq = () => {
  proxy
    .$axiosReq({
      url: '/scala-ms/dbcFileController/save',
      data: subFormMixin,
      method: 'post',
      isParams: true,
      bfLoading: true
    })
    .then((res) => {
      proxy.elMessageMixin('保存成功')
      resetData()
      proxy.$emit('selectPageReq')
      proxy.detailDialogMixin = false
    })
}
/*修改*/
const reshowData = (row) => {
  Object.keys(row).forEach((fItem) => {
    Object.keys(subFormMixin).forEach((sItem) => {
      if (fItem === sItem) {
        subFormMixin[sItem] = row[sItem]
      }
    })
  })
}
let updateReq = () => {
  return proxy
    .$axiosReq({
      url: '/scala-ms/dbcFileController/update',
      data: subFormMixin,
      isParams: true,
      method: 'post',
      bfLoading: true
    })
    .then(() => {
      proxy.elMessageMixin('更新成功')
      resetData()
      proxy.$emit('selectPageReq')
      proxy.detailDialogMixin = false
    })
}
let getDetailByIdReq = (id) => {
  return proxy.$axiosReq({
    url: '/scala-ms/dbcFileController/getDetailById',
    data: { id: id },
    isParams: true,
    method: 'get',
    bfLoading: true
  })
}

let confirmBtnClick = () => {
  proxy.$refs['refForm'].validate((valid) => {
    if (valid) {
      if (subFormMixin.id) {
        updateReq()
      } else {
        saveReq()
      }
    } else {
      return false
    }
  })
}
/*上传DBC文件*/
const tableImportReq = () => {
  const formData = new FormData()
  formData.append('file', proxy.$refs.refSettingFile.files[0])
  proxy
    .$axiosReq({
      url: '/scala-ms/uploadController/uploadFile',
      data: formData,
      method: 'post',
      bfLoading: true,
      isUploadFile: true
    })
    .then((resData) => {
      let { ori, relativePath, name } = resData.data
      subFormMixin.fileName = ori
      subFormMixin.sysFileName = relativePath + name
      proxy.$refs.refSettingFile.value = ''
    })
    .catch((err) => {
      proxy.$refs.refSettingFile.value = ''
    })
}
/*关闭弹框*/
let beforeCloseDetailModal = () => {
  resetData()
  proxy.dialogTitleMixin = '添加【DBC文件】'
  proxy.detailDialogMixin = false
}
let showModal = (isEdit, row) => {
  console.log('我进来了')
  if (isEdit) {
    getDetailByIdReq(row.id).then((resData) => {
      proxy.dialogTitleMixin = `编辑【${row.fileName}】`
      proxy.detailDialogMixin = true
      reshowData(resData.data)
    })
  } else {
    proxy.detailDialogMixin = true
  }
}
//导出给refs使用
defineExpose({
  getDetailByIdReq,
  showModal
})
//导出属性到页面中使用
// let {levelList} = toRefs(state);
</script>

<style scoped lang="scss"></style>
