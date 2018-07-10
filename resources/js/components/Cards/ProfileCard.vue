<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>
        <span class="icon">
           <i class="fal fa-user-circle"></i>
        </span>
        <span>
          Profile
        </span>
      </span>
      <el-button type="text"
                 id="step-1"
                 style="float: right; padding: 3px 0"
                 icon="el-icon-edit"
                 @click="goToProfile">
        Update
      </el-button>
    </div>
    <el-row :gutter="14">
      <el-col :sm="24" :md="8">
        <img class="rounded" :src="$store.state.profilePhoto" id="step-3" />
      </el-col>
      <el-col :sm="24" :md="16">
        {{ userName }}
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
  export default {
    name: 'ProfileCard',
    created() {

    },
    components: {},
    computed: {
      user() {
        return this.$store.state.user
      },
      userName() {
        if(this.user)
          return this.user.username

        return null
      }
    },
    data() {
      return {
        form: {
          appointment_type: null,
          appointment_datetime: new Date,
        }
      }
    },
    methods: {
      goToProfile() {
        this.$router.push({name: 'profiles.edit'})
      }
    },
    mounted() {

    },
    props: [],
    watch: {

    },
  }
</script>

<style scoped>

</style>
