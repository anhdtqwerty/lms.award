<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    min-width="290px"
  >
    <template v-slot:activator="{ on }">
      <v-text-field outlined :value="display" label="Chọn Ngày" readonly dense v-on="on" class="px-4" style="max-width:200px"></v-text-field>
    </template>
    <v-date-picker locale="vi" v-model="data" @input="updated"></v-date-picker>
  </v-menu>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    date: String
  },
  data: () => ({
    data: new Date().toISOString().substr(0, 10),

    menu: false
  }),
  methods: {
    updated () {
      this.$emit('update:date', moment(this.data).toISOString())
      this.menu = false
    },
    reset () {
      this.data = moment(this.date).format('YYYY-MM-DD')
    }
  },
  computed: {
    display () {
      if (this.date) {
        return moment(this.date).format('DD/MM/YYYY')
      }
      return ''
    }
  },
  created () {
    this.reset()
  },
  watch: {
    date () {
      this.reset()
    }
  }
}
</script>
