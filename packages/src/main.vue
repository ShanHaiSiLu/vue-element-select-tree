<template>
  <div class="app-component" :size="size">
    <el-popover
      popper-class="select-tree-popover-wrapper"
      :placement="placement"
      :title="title"
      width="200"
      trigger="click"
      v-model="visible"
      @show="showTree"
      @hide="hideTree"
    >
      <div class="drawing-pin" ref="drawing-pin" />
      <!-- 
          min-width中，minWidth是传过来的最小宽度，10是margin-right，2是两个border的宽度，24是两个padding的宽度 
          其中padding和border是element-ui的保留样式；
          padding-right是自定样式，作用是保证不会有文字被遮盖
      -->
      <div
        :style="{
          'overflow-y': 'auto',
          'padding-right': '10px',
          'max-height': treeMaxHeight + (maxHeight ? unitH : 'px'),
          'min-width': `calc(${minWidth + (unitW || 'px')} - 10px - 2px - 24px)`,
        }"
      >
        <el-tree
          ref="popover-tree"
          class="popover-tree"
          highlight-current
          :class="{ 'dis-not-leaf': selectLeaf }"
          :data="data"
          :props="props"
          :node-key="nodeKey"
          :default-expanded-keys="defaultExpandedKeys"
          :default-expand-all="defaultExpandAll"
          :expand-on-click-node="false"
          @node-click="nodeClick"
          @check="checkFun"
          :style="{}"
        >
          <span class="custom-tree-node" slot-scope="{ data }">
            <!-- 自定义name=tree的插槽，插槽中的元素是当用户不进行自定义内容时展示的数据 -->
            <slot name="tree" :data="data">
              <span :class="{ active: data[nodeKey] == value }">
                {{ data[props.label] }}
              </span>
            </slot>
          </span>
        </el-tree>
      </div>
      <!-- :style="{ height: treeMaxHeight + 'px' }" -->
      <div slot="reference" class="content-inner" :class="{ show: isPopover }">
        <span v-text="getNodeInner" />
        <span class="content-wra empty" v-show="showPlaceholder" v-text="placeholder" />
        <i
          class="clear el-icon-circle-close"
          v-if="clearable"
          v-show="getNodeInner"
          @click.stop="clearNodeInner"
        />
      </div>
    </el-popover>
  </div>
</template>

<script>
import props from "./js_css/props.js";
import methods from "./js_css/methods.js";

export default {
  name: "v-tree-select",

  mixins: [props, methods],

  data() {
    return {
      // 组件是否渲染完成
      isMounted: false,
      // 标识弹层是否打开
      isPopover: false,
      // 设置为true，则弹层关闭
      visible: false,
      // 树的最大高度，超出部分使用滚动条展示，在弹层打开时动态判断
      treeMaxHeight: 0,
    };
  },
  computed: {
    // 逻辑判断：当前是否显示placeholder
    showPlaceholder() {
      // 单选模式
      return !this.getNodeInner;
    },
    // 获取节点内容（非复选时）
    getNodeInner() {
      let tmp = this.getLayerTree.find(i => i[this.nodeKey] == this.value);
      return tmp?.[this.props.label];
    },
    // 获取扁平的树
    getLayerTree() {
      let getLayerItem = tree => {
        let tmp = [];
        if (tree[this.props.children] && Array.isArray(tree[this.props.children])) {
          let _tmp = Object.assign({}, tree);
          delete _tmp[this.props.children];
          delete _tmp.parentId;
          tmp.push(_tmp);

          tree[this.props.children].forEach(item => {
            list.push(...getLayerItem(item));
          });
        } else {
          tmp.push(tree);
        }
        return tmp;
      };

      let list = [];
      this.data.forEach(item => {
        if (item[this.props.children] && Array.isArray(item[this.props.children])) {
          // 对于有子元素的项，将其复制项加入list
          let _tmp = Object.assign({}, item);
          delete _tmp[this.props.children];
          delete _tmp.parentId;
          list.push(_tmp);

          // 遍历子元素，加入list
          item[this.props.children].forEach(item => {
            list.push(...getLayerItem(item));
          });
        } else {
          list.push(item);
        }
      });
      return JSON.parse(JSON.stringify(list));
    },
  },
  created() {
    console.log("组件数据完成");
  },
  mounted() {
    this.isMounted = true;
    console.log("组件渲染完成");
  },
};
</script>

<style scoped src="./js_css/index.css"></style>
<style>
.select-tree-popover-wrapper {
  width: auto !important;
}
.select-tree-popover-wrapper .el-tree.popover-tree.dis-not-leaf span.custom-tree-node {
  color: #acacac;
}
.select-tree-popover-wrapper .el-tree.popover-tree.dis-not-leaf .is-leaf + span.custom-tree-node {
  color: #333;
}
</style>
