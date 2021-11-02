<template>
  <div class="meta-lucha">
    <ajax-loader/>
    <maintenance v-if="maintenanceMode === 'true'"/>
    <nuxt v-else/>
  </div>
</template>

<script>
import AjaxLoader from '../components/utils/AjaxLoader'
import Maintenance from '../components/utils/Maintenance'

export default {
  components: { Maintenance, AjaxLoader },
  data() {
    return {
      maintenanceMode: process.env['APP_MAINTENANCE']
    }
  }
}
</script>

<style>
  html {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }
</style>
