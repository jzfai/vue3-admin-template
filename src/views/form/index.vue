<template>
  <div class="scroll-y">
    <div class="app-container">
      <el-form ref="form" :model="subform" label-width="120px">
        <el-form-item label="Activity name">
          <el-input v-model="subform.name" />
        </el-form-item>
        <el-form-item label="Activity zone">
          <el-select v-model="subform.region" placeholder="please select your zone">
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="Activity time">
          <el-col :span="11">
            <el-date-picker v-model="subform.date1" type="date" placeholder="Pick a date" style="width: 100%" />
          </el-col>
          <el-col :span="2" class="line">-</el-col>
          <el-col :span="11">
            <el-time-picker v-model="subform.date2" type="fixed-time" placeholder="Pick a time" style="width: 100%" />
          </el-col>
        </el-form-item>
        <el-form-item label="Instant delivery">
          <el-switch v-model="subform.delivery" />
        </el-form-item>
        <el-form-item label="Activity type">
          <el-checkbox-group v-model="subform.type">
            <el-checkbox label="Online activities" name="type" />
            <el-checkbox label="Promotion activities" name="type" />
            <el-checkbox label="Offline activities" name="type" />
            <el-checkbox label="Simple brand exposure" name="type" />
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="Resources">
          <el-radio-group v-model="subform.resource">
            <el-radio label="Sponsor" />
            <el-radio label="Venue" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Activity form">
          <el-input v-model="subform.desc" type="textarea" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button @click="onCancel">Cancel</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
let subform = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: ''
})
let { elMessage } = useElement()
const onSubmit = () => {
  elMessage('submit!')
}
const onCancel = () => {
  elMessage('cancel!')
}
</script>
