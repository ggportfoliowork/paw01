<template>
  <el-upload
    class="avatar-uploader"
    action="/api/v1/photos"
    :headers="{'Authorization': 'Bearer ' + authToken}"
    :data="{'_csrf': csrfToken}"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload">
    <i class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
</template>

<script>
    export default {
        name: "photo-upload-form",
        computed: {
          authToken() {
            return window.User.token.token
          },
          csrfToken() {
            return document.querySelector("meta[name='csrf_token']").getAttribute("content")
          }
        },
        methods: {
          handleAvatarSuccess(res, file) {
            this.$bus.$emit('set-image', {imageUrl: res.data.fileName})
          },
          beforeAvatarUpload(file) {
            return
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
