<template>
  <el-row :gutter="24">
    <el-col :md="7" class="hidden-xs-only">
      <profile-card></profile-card>
    </el-col>
    <el-col :sm="24" :md="17" id="step-2">
        <div class="timeline is-centered">
          <header class="timeline-header">
            <span class="tag is-medium is-primary">{{ today }}</span>
          </header>
          <div class="timeline-item is-primary">
            <div class="timeline-marker is-icon is-primary">
              <i class="fal fa-paw"></i>
            </div>
            <div class="timeline-marker is-primary"></div>
            <div class="timeline-content is-primary">
              <p class="heading">January 2016</p>
              <p>Timeline content - Can include any HTML element</p>
            </div>
          </div>
          <div class="timeline-item is-primary">
            <div class="timeline-marker is-icon is-primary">
              <i class="fal fa-paw"></i>
            </div>
            <div class="timeline-content is-primary">
              <p class="heading">February 2016</p>
              <p>Timeline content - Can include any HTML element</p>
            </div>
          </div>
          <header class="timeline-header">
            <span class="tag is-medium is-default">Registered on {{ userRegistrationDate }}</span>
          </header>
        </div>
      <v-tour name="pawsTour" :steps="steps" :callbacks="myCallbacks"></v-tour>
    </el-col>
  </el-row>
</template>

<script>

  import ProfileCard from '../../../components/Cards/ProfileCard'

  export default {
    created() {

    },
    components: {
      ProfileCard
    },
    computed: {
      user() {
        return this.$store.state.user
      },
      userRegistrationDate() {
        if(this.user)
          return this.$moment(this.user.created_at).format('M/D/YYYY')

        return null
      },
      hasViewedDashboardTutorial() {
        if(this.user) {
          return this.user.has_viewed_joyride
        } else {
          return true
        }
      },
      today() {
        return this.$moment().format('M/D/YYYY')
      }
    },
    data() {
      return {
        steps: [
          {
            target: '#step-1',
            content: `A test tour object.`,
          },
          {
            target: '#step-2',
            content: 'Another test tour object with longer text for the DOM.',
          },
          {
            target: '#step-3',
            content: 'An even longer test tour object to prepare the vue tour for the longest text lorem ipsum see if it wraps around the eniter page DOM and see what the formatting is like on a super long string inside of a tour object.',
            params: {
              placement: 'bottom'
            }
          }
        ],
        myCallbacks: {
          onStop: this.completeTour
        }
      }
    },
    methods: {
      startTour() {
        this.$tours['pawsTour'].start()
      },

      completeTour() {
        this.$http.put('users/'+this.user.uid, {
          has_viewed_joyride: 1
        })
          .then(response => {
            console.log(response)
          })
      }
    },
    mounted() {

    },
    props: [],
    watch: {
      hasViewedDashboardTutorial(val) {
        if(val == 0)
          this.startTour()
      }
    },
  }


</script>

<style>

</style>
