<template>
  <el-card
    :style="{backgroundImage: 'http://placehold.it/300x300', backgroundSize: 'cover', backgroundPosition: 'center'}"
  >
    <div class="clearfix text-center">
      <img :src="'http://placehold.it/300x300'" class="thumb">
      <div style="text-align:center;">
        <h3 style="color:#fff;">{{ pet.name }}</h3>
        <p>
          <el-tooltip class="item"
                      effect="dark"
                      :content="gender" placement="top">
            <i :class="genderIcon" aria-hidden="true" style="color:#fff;"></i>
          </el-tooltip>
          <el-tooltip class="item"
                      effect="dark"
                      content="Species" placement="top">
            {{ pet.species_id }}
          </el-tooltip>
          <el-tooltip class="item"
                      effect="dark"
                      :content="pet.date_of_birth" placement="top">
            <i class="fal fa-birthday-cake"></i>
          </el-tooltip>
        </p>
      </div>
    </div>
    <el-container>
      <el-main>
        <router-link
          :to="{name: 'pets.view', params: { petId: pet.id }}">
          <el-button type="primary" style="width:100%;">
            View Details
          </el-button>
        </router-link>
      </el-main>
    </el-container>
  </el-card>
</template>

<script type="text/babel">
  export default {
    mounted() {

    },
    data() {
      return {}
    },
    computed: {
      gender: {
        get() {
          if(this.pet.gender == 'f')
            return 'Female'
          else if(this.pet.gender == 'm')
            return 'Male'
        }
      },
      genderIcon: {
        get() {
          if(this.pet.gender == 'f')
            return 'fal fa-venus'
          else if(this.pet.gender == 'm')
            return 'fal fa-mars'
        },
      }
    },
    methods: {

    },
    watch: {

    },
    props: ['pet', 'value', 'chunk'],
    components: {},

  }
</script>

<style lang="scss" scoped>
  .thumb {
    border-radius: 50% !important;
    border-top: 1px solid #fff;
    padding: 5px;
    background: #f0f0f0;
    height: 90px;
    width: 90px;
  }
</style>
