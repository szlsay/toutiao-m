<template>
  <div id="app">
    <h1>app</h1>
    <i class="toutiao toutiao-dianzan"></i>
    <hr />
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述内容" />
    </van-cell-group>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="less" scoped>
</style>