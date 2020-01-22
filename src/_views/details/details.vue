<template>
  <el-row v-if="person" class="main">
    <el-row class="main-row" :gutter="20">
      <el-col v-for="prop in props" :key="prop.name" :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
        <div class="group">
          <span class="title"> {{ prop.label }} </span>
          <span>{{ person[prop.name] || "No Data" }}</span>
        </div>
      </el-col>
      <el-button color="secondary" style="width:200px;" @click="$router.go(-1)">Go back</el-button>
    </el-row>
  </el-row>
</template>

<script lang="ts" src="./details.ts"></script>
<style lang="scss" scoped src="./details.scss"></style>