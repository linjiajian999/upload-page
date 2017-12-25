<template>
  <div>
    <!-- <div class="center login-container md-elevation-12"> -->
      <!-- <span class="md-display-1">login</span> -->
    <md-card class="login-container center" :md-with-hover="true">
      <md-card-header>
        <div class="md-title">标题</div>
        <div class="md-subhead">子标题</div>
      </md-card-header>

      <md-card-actions>
        <md-button>确定</md-button>
      </md-card-actions>
    </md-card>
    <!-- </div> -->
  </div>
</template>
<script>
export default {
  name: 'login'
}
</script>
<style lang="scss">
.login-container {
  width: 300px;
  padding: 24px;
  border-radius: 2px;
}
</style>
