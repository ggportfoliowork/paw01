<template>
  <el-row :gutter="24" v-loading="!pets">
    <el-col :sm="24" id="step-2">
      <el-card type="box">
        <el-row style="margin-bottom:10px;">
          <el-col :span="24">
            <h1 class="title">My Pets</h1>
          </el-col>
        </el-row>
        <el-row :gutter="14" v-show="pets.length > 0">
          <el-card v-for="(value, key) in userPets" :key="key">
            {{ value.name }}
          </el-card>
        </el-row>
        <el-row :gutter="14" v-show="pets.length < 1">
          <el-col :sm="24">
            <router-link :to="{name: 'pets.create'}">
              <el-button type="primary" size="large">
                <i class="fal fa-plus-circle"></i> Add A Pet
              </el-button>
            </router-link>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>

    export default {
        created() {

        },
        components: {},
        beforeRouteEnter(to, from, next) {
            next(vm => {
              vm.getPets()
            })
        },
        computed: {

        },
        data() {
            return {
              pets: false
            }
        },
        directives: {},
        methods: {
          getPets() {
            this.$http.get('pets')
              .then(response => {
                this.pets = response.data.data
              })
          }
        },
        mounted() {

        },
        props: [],
        watch: {},
    }


</script>

<style>

</style>
