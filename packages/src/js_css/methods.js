export default {
  methods: {
    // 弹层展示
    showTree() {
      this.isPopover = true;
      this.$nextTick(() => {
        let posi = this.$refs["drawing-pin"].getBoundingClientRect();
        this.treeMaxHeight = this.maxHeight || window.innerHeight - (posi.top + posi.height + 30);
        this.$refs["popover-tree"].setCurrentKey(this.value);
      });
    },
    // 弹层隐藏
    hideTree() {
      this.isPopover = false;
    },
    //   文本框获得焦点
    fouseInput() {
      //   this.visible = true;
    },
    // 文本框失焦
    blurInput() {
      //   this.visible = false;
    },
    //   文本框内容发生变化，则通知父组件
    inputChange(val) {
      this.$emit("input", val);
    },

    // 树节点点击事件
    nodeClick(node) {
      // 惰性判断，如果是复选树则此事件不会触发
      //   if (this.showSheck) return (this.nodeClick = () => {});

      // 如果可选择任意节点，则任意节点被点击都会触发值的改变，关闭弹层；
      // 否则仅有点击叶节点时又效果

      // 点击非叶节点直接返回
      if (this.selectLeaf && node[this.props.children])
        return this.$refs["popover-tree"].setCurrentKey(this.value);
      this.visible = false;
      this.inputChange(node[this.nodeKey]);
    },

    // 清空按钮
    clearNodeInner() {
      //   this.value = this.clearableInner;
      this.inputChange(this.clearableInner);
      this.visible = false;
    },
    /**
     * 复选框被点击事件
     * @param {Node} node 被点击的节点
     * @param {Array} checkedKeys 被选中的节点的id组成的数组
     * @param {NodeArray} checkedNodes 被选中的节点组成的数组
     * @param {Array} halfCheckedKeys 被半选中的节点的id组成的数组
     * @param {NodeArray} halfCheckedNodes 被半选中的节点组成的数组
     */
    checkFun(node, info) {
      let { checkedKeys, checkedNodes, halfCheckedKeys, halfCheckedNodes } = info;
      let allCheckKeys = [...checkedKeys, ...halfCheckedKeys],
        allCheckNodes = [checkedNodes, halfCheckedNodes];
      this.inputChange(info[this.checkValueType] || checkedKeys);
    },
  },
};
