<template>
  <div id="DemoTest">
    <el-button>DemoTest</el-button>
  </div>
</template>

<script>
// import { mapState, mapMutations, mapActions } from 'vuex'
// import validMixins from '@/mixins/validMixins.js'
export default {
  name: 'DemoTest',
  components: {
    // TablesGZCJ,
  },
  // mixins: [validMixins],
  props: {
    // treeData: Array,
  },
  // mixins: [validMixins],
  data() {
    return {
      levelList: null
    }
  },
  computed: {
    // ...mapState('user', ['token', 'userInfo'])
  },
  watch: {
    // 'cmAddForm.enginePlatform': function(val) {
    //   console.log('enginePlatformval', val)
    //   if (val) {
    //     this.emissionOptionReq()
    //   }
    // }
  },
  created() {

  },
  mounted() {
     console.log("页面加载了")
  },
  beforeDestroy(){
    console.log("页面卸载了")
  },
  methods: {
    // ...mapActions('user', ['closeSideBar']),
    // ...mapMutations('user', ['CHAGE_TOKEN']),
    functionTest() {}
  }
}
</script>

<style lang="scss">
  #DemoTest {

  }
</style>

