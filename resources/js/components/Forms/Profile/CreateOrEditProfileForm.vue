<template>
  <el-form v-model="form" label-position="top">
    <el-row>
      <el-col :sm="24" :md="8">
        <h1>TEXT AND PHOTO UPLOAD</h1>
      </el-col>
      <el-col :sm="24" :md="16">
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
        <el-row :gutter="14">
          <el-col :sm="24">
            <el-form-item label="Phone">
              <el-input type="text" id="phoneMask" placeholder="Please input" v-model="form.contact_phone_value" class="input-with-select">
                <el-select style="width:200px;" v-model="form.contact_phone_type" slot="prepend" placeholder="Select phone type">
                  <el-option label="Mobile" value="1"></el-option>
                  <el-option label="Home" value="2"></el-option>
                  <el-option label="Work" value="3"></el-option>
                </el-select>
              </el-input>
            </el-form-item>
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
    data() {
      return {

      }
    },
    methods: {
      submitProfileForm() {
        this.$bus.$emit('submit-profile')
      },
      formatToPhone(event) {
        if(this.isModifierKey(event)) {return;}
        const target = event.target;
        const input = event.target.value.replace(/\D/g,'').substring(0,10);
        const zip = input.substring(0,3);
        const middle = input.substring(3,6);
        const last = input.substring(6,10);

        if(input.length > 6){target.value = `(${zip}) ${middle} - ${last}`;}
        else if(input.length > 3){target.value = `(${zip}) ${middle}`;}
        else if(input.length > 0){target.value = `(${zip}`;}
      },
      enforceFormat(event) {
        if(!this.isNumericInput(event) && !this.isModifierKey(event)){
          event.preventDefault();
        }
      },
      isNumericInput(event) {
        const key = event.keyCode;
        return ((key >= 48 && key <= 57) ||
          (key >= 96 && key <= 105)
        )
      },
      isModifierKey(event) {
        const key = event.keyCode;
        return (event.shiftKey === true || key === 35 || key === 36) ||
          (key === 8 || key === 9 || key === 13 || key === 46) ||
          (key > 36 && key < 41) ||
          (
            (event.ctrlKey === true || event.metaKey === true) &&
            (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
          )
      }
    },
    props: ['form']
  }
</script>
