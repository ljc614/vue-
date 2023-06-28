<template>
  <div class="header">

    <el-page-header>

      <template #breadcrumb>
        <div class="bread-header">
          <div>XXXXXX系统</div>
          <div>
            <el-breadcrumb separator="/" class="bread">
              <el-breadcrumb-item :to="{ path: '#' }">
                homepage
              </el-breadcrumb-item>
              <el-breadcrumb-item><a href="#">route 1</a></el-breadcrumb-item>
              <el-breadcrumb-item>route 2</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </div>
      </template>

      <template #content>
        <span class="text-large font-600 mr-3"> Title </span>
      </template>
    </el-page-header>
  </div>
</template>

<style lang="less">
.bread-header {
  display: flex;

  .bread {
    line-height: 21px;
  }
}
</style>