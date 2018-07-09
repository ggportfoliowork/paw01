<template>
  <el-form v-model="form" label-position="top">
    <el-row>
      <el-col :sm="24" :md="8">
        <h1>TEXT AND PHOTO UPLOAD</h1>
      </el-col>
      <el-col :sm="24" :md="16">
        <el-row>
          <el-col :span="24">
            <h3 class="title">General Details</h3>
          </el-col>
        </el-row>
        <el-row :gutter="14">
            <el-col :sm="24" :md="8">
              <el-form-item label="First Name">
                <el-input v-model="form.name_first" />
              </el-form-item>
            </el-col>
          <el-col :sm="24" :md="8">
            <el-form-item label="Last Name">
              <el-input v-model="form.name_last" />
            </el-form-item>
          </el-col>
          <el-col :sm="24" :md="8">
            <el-form-item label="Birthday">
              <el-date-picker v-model="form.date_of_birth"
                             type="date"
                             placeholder="Pick a date"
                             format="M/d/yyyy"
                             value-format="yyyy-M-d"
              />
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="14">
          <el-col :sm="24">
            <h3 class="title">Contact Details</h3>
            <el-row :gutter="14">
              <el-col :sm="24" :md="16">
                <el-row>
                  <el-col :sm="24">
                    <el-form-item label="Street Address">
                      <el-input v-model="form.address_street_1"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row :gutter="14">
                  <el-col :sm="24" :md="8">
                    <el-form-item label="City">
                      <el-input v-model="form.address_city"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :sm="24" :md="6">
                    <el-form-item label="State">
                      <el-select v-model="form.address_state" placeholder="Select state">
                        <el-option v-for="(value, key) in availableStates"
                                    :key="key"
                                    :value="value.key"
                                    :label="value.value"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :sm="24" :md="10">
                    <el-form-item label="Postal Code">
                      <el-input v-model="form.address_postal_code"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-row :gutter="14">
              <el-col :sm="24" :md="8">
                <el-form-item label="Phone">
                  <el-input placeholder="Please input" v-model="form.contact_phone_value" class="input-with-select">
                    <el-select style="width:95px;" v-model="form.contact_phone_type" slot="prepend" placeholder="Select phone type">
                      <el-option label="Mobile" value="1"></el-option>
                      <el-option label="Home" value="2"></el-option>
                      <el-option label="Work" value="3"></el-option>
                    </el-select>
                  </el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-col>

        </el-row>
        <el-row>
          <el-col :sm="24">
            <el-form-item>
              <el-button type="primary" @click="submitProfileForm">Save</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
  export default {
    name: 'CreateOrEditProfileForm',
    created() {

    },
    mounted() {

    },
    computed: {
      availableStates: {
        get() {
          return this.$store.state.available_states
        }
      }
    },
    data() {
      return {

      }
    },
    methods: {
      submitProfileForm() {
        this.$bus.$emit('submit-profile')
      },
    },
    watch: {
      form(val) {
        if(val.date_of_birth && val.date_of_birth !== null) {
          val.date_of_birth = this.$moment(val.date_of_birth).format('YYYY-MM-DD')
          console.log(val.date_of_birth)
        }
      }
    },
    props: ['form']
  }
</script>
