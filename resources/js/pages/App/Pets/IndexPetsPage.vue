<template>
  <el-row :gutter="24" v-loading="!pets" class="content-container">
    <el-col :sm="24" id="step-2">
      <el-card type="box">
        <el-row style="margin-bottom:10px;">
          <el-col :span="24">
            <div class="clearfix">
              <div class="is-pulled-left">
                <h1 class="title">My Pets</h1>
              </div>
              <div class="is-pulled-right" v-show="pets.length > 0">
                <router-link :to="{name: 'pets.create'}">
                  <el-button type="default">
                    <i class="fal fa-plus-circle"></i> Add A Pet
                  </el-button>
                </router-link>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="14" v-show="pets.length > 0">
          <data-cards
            :data="pets"
            :type="cardOptions"
            baseUrl="pets"
          ></data-cards>
        </el-row>
        <el-row :gutter="14" v-show="pets.length < 1">
          <el-col :sm="24" class="has-text-centered">
            <h5 class="subtitle is-5">You do not have any pets...</h5>
            <router-link :to="{name: 'pets.create'}">
              <el-button type="default">
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
    import DataCards from '../../../components/Cards/Datacards'

    export default {
        created() {

        },
        components: {
          DataCards
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
              vm.getPets()
            })
        },
        computed: {

        },
        data() {
            return {
              pets: false,
              cardOptions: {name: 'pets', sm: 24,  md: 6, chunk: 4}
            }
        },
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
