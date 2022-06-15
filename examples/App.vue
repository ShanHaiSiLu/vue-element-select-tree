<template>
  <div id="app">
    <el-select v-model="type" placeholder="请选择">
      <el-option label="选中节点的id数组" value="checkedKeys"> </el-option>
      <el-option label="选中节点的数组" value="checkedNodes"> </el-option>
      <el-option label="半选中节点的id数组" value="halfCheckedKeys"> </el-option>
      <el-option label="半选中节点的数组" value="halfCheckedNodes"> </el-option>
      <el-option label="全部选中节点的id数组" value="allCheckKeys"> </el-option>
      <el-option label="全部选中节点数组" value="allCheckNodes"> </el-option>
    </el-select>
    <v-tree-select
      v-model="treeInnerArr"
      :data="data"
      style="width: 200px; margin-right: 35px"
      default-expand-all
      placement="right"
      showSheck
      :checkValueType="type"
    >
    </v-tree-select>
    <br />
    当前复选树选中的内容包括：

    {{ treeInnerArr }}
    <br />
    <!-- <v-tree-select
      v-model="treeInner"
      :data="data"
      style="width: 200px; margin-right: 35px"
      size="medium"
      selectLeaf
    >
    </v-tree-select>
    <v-tree-select
      v-model="treeInner"
      :data="data"
      style="width: 200px; margin-right: 35px"
      size="small"
      selectLeaf
    >
    </v-tree-select>
    <v-tree-select
      v-model="treeInner"
      :data="data"
      style="width: 200px; margin-right: 35px"
      size="mini"
      selectLeaf
      placeholder="asdasdasdaswerf"
      :maxHeight="150"
      :minWidth="50"
      unitW="vw"
      :clearableInner="3"
    >
    </v-tree-select> -->
    <br />
    <i>{{ treeInner }}</i>
  </div>
</template>

<script>
import data from "./assets/addrPoint.js";

export default {
  name: "App",
  data() {
    return {
      type: "checkedKeys",
      treeInner: null,
      treeInnerArr: null,
      data,
    };
  },
  created() {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
