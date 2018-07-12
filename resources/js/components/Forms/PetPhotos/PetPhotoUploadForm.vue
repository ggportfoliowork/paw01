<template>
  <el-upload
    style="width:100%;"
    class="upload-demo"
    drag
    :disabled="fileList.length > 0"
    action=""
    :auto-upload="false"
    :limit="1"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :file-list="fileList"
    list-type="picture"
    :multiple="false">
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">Drop file here or <em>click to upload</em></div>
    <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
  </el-upload>
</template>

<script>
  export default {
    name: "photo-upload-form",
    computed: {

    },
    methods: {
      handlePreview(file) {
        this.bus.$emit('handle-preview', file)
      },
      handleRemove(file) {
        this.bus.$emit('handle-remove', file)
      }
    }
  }
</script>

<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
