<template>
  <div>
    <el-row v-for="(chunk, key) in dataChunks" :key="key" :gutter="12" style="margin-bottom:15px;">
      <el-col :sm="type.sm" :md="type.md" v-for="(o, value) in chunk" :key="value" style="margin-bottom:15px;">
        <component :is="cardTypeComponent" :pet="o" :value="value" :chunk="chunk"></component>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/babel">
  import PetCard from './DataCardViews/PetCard.vue'

  export default {
    mounted() {

    },
    data() {
      return {

      }
    },
    computed: {
      cardTypeComponent() {
        if(this.type) {
          if(this.type.name == 'pets') {
            return PetCard
          }
        }

        return null
      },
      dataChunks(){
        return _.chunk(this.data, this.type.chunk);
      }
    },
    methods: {

    },
    watch: {

    },
    props: ['data', 'baseUrl', 'type'],
    components: {
      PetCard
    },

  }
</script>

<style lang="scss" scoped>
  .el-card:hover {
    box-shadow: 4px 4px rgba(123,40,125,0.40);
    -webkit-transition: all 0.5s linear;
    -o-transition: all 0.5s linear;
    transition: all 0.5s linear;
  }
</style>
