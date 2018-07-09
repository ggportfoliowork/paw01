<template>
  <el-dialog
    :visible.sync="dialogVisible"
    width="30"
    :close-on-click-modal="false"
    :title="title"
    top="4%">
    <span>

    </span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">Cancel</el-button>
      <el-button type="primary" @click="performUpload">Save</el-button>
    </span>
  </el-dialog>
</template>

<script type="text/babel">
  export default {
    created() {
      let vm = this;
      let dialog = 'show-dialog-photo-upload';
      this.$bus.$on(dialog, function(args) {
        vm.dialogVisible = true
      });
    },
    beforeDestroy() {
      this.$bus.$off('show-dialog-photo-upload')
    },
    data() {
      return {
        participant: false,
        title: 'Upload Photo',
        dialogVisible: false,
      }
    },
    methods: {
      performUpload() {

      }
    },
    watch: {},
    props: [],
    components: {},

  }
</script>

<style lang="sass">

</style>
