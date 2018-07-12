<template>
  <el-card
    :style="{backgroundImage: 'http://placehold.it/300x300', backgroundSize: 'cover', backgroundPosition: 'center'}"
  >
      <div class="clearfix is-center is-centered" style="text-align:center;">
          <img :src="'http://placehold.it/300x300'" class="thumb">
          <h2 class="subtitle is-2-desktop">{{ pet.name }}</h2>
          <el-tooltip class="item"
                      effect="dark"
                      :content="gender" placement="top">
            <i :class="genderIcon" aria-hidden="true"></i>
          </el-tooltip>
          <el-tooltip class="item"
                      effect="dark"
                      :content="species" placement="top">
            <i :class="speciesIcon"></i>
          </el-tooltip>
          <el-tooltip class="item"
                      effect="dark"
                      :content="dateOfBirth" placement="top">
            <i class="fal fa-birthday-cake"></i>
          </el-tooltip>
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
      gender() {
          if(this.pet.gender == 'f')
            return 'Female'
          else if(this.pet.gender == 'm')
            return 'Male'
          else
            return null
      },
      dateOfBirth() {
        if(this.pet.date_of_birth !== null) {
          return this.$moment(this.pet.date_of_birth).format('MM/DD/YYYY')
        }
        return 'N/A'
      },
      species() {
        if(this.pet.species_id == 1)
          return 'Dog'
        else if(this.pet.species_id == 2)
          return 'Cat'
        else
          return null
      },
      speciesIcon() {
        if(this.pet.species_id == 1)
          return 'ss-dogface'
        else if(this.pet.species_id == 2)
          return 'ss-catface'
        else
          return null
      },
      genderIcon() {
          if(this.pet.gender == 'f')
            return 'fal fa-venus'
          else if(this.pet.gender == 'm')
            return 'fal fa-mars'
        else
          return null
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
