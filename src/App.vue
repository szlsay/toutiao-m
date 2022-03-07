<template>
  <div id="app">
    <keep-alive exclude="ArticleIndex">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="less" scoped>
.font1 {
  font-size: 37.5px;
}
</style>