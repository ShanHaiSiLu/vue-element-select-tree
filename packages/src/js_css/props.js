export default {
  /**
   * @以下为文本框相关数据
   * @value 组件的值
   * @size 展示区的大小，参数和具体数值同element-ui的el-input组件
   * @clearable 是否展示清空按钮
   * @clearableInner 点击清空按钮之后组件所绑定变量的值是多少，默认是null
   * @placeholder 输入框占位文本
   *
   * @以下为树形的相关数据
   * @selectLeaf 是否仅可选择叶节点，默认情况下任意节点都可被选择
   * @data 树形控件的数据
   * @title 弹层的标题
   * @showSheck FIXME: 复选树相关设置，是否复选
   * @defaultCheckedKeys FIXME: 复选树相关设置，默认选中的节点，复选树的情况下有效，值为node-key的值
   * @defaultExpandedKeys 默认展开的节点，值为node-key的值
   * @defaultExpandAll 是否默认展开全部节点
   * @nodeKey 树节点的唯一标识，默认用id
   * @props 节点配置选项
   * @checkStrictly FIXME:复选模式下是否关闭严格父子关系，默认不关闭
   * @maxHeight 树形下拉框的最大高度，默认一直到浏览器底部
   * @unitH 设定下拉框的最大高度时，使用的单位是什么。默认是px，仅在设定了【maxHeight】后起效
   * @minWidth 弹层的最小宽度，默认是树组件刚好撑开的宽度
   * @unitW 设定弹层的最小宽度时，使用的单位是什么。默认是px，仅在设定了【minWidth】后起效
   * @placement 弹层出现位置
   * @checkValueType 复选状态时，所绑定变量的值
   */
  props: {
    // 以下为文本框相关配置
    value: [String, Number, Array],
    size: {
      type: String,
    },
    clearable: {
      type: Boolean,
      default: () => true,
    },
    clearableInner: {
      default: () => null,
    },
    placeholder: {
      type: String,
      default: () => "暂未选择",
    },

    selectLeaf: {
      type: Boolean,
      default: () => false,
    },

    // 以下为树形性相关配置
    data: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: () => ``,
    },
    showSheck: {
      type: Boolean,
      default: () => false,
    },
    defaultCheckedKeys: {
      type: Array,
      default: () => [],
    },
    defaultExpandedKeys: {
      type: Array,
      default: () => [],
    },
    defaultExpandAll: {
      type: Boolean,
      default: () => false,
    },
    nodeKey: {
      type: String,
      default: () => `id`,
    },
    props: {
      type: Object,
      default: () => {
        return {
          children: "children",
          label: "name",
        };
      },
    },
    checkStrictly: {
      type: Boolean,
      default: () => false,
    },
    maxHeight: {
      type: Number,
    },
    unitH: {
      type: String,
      default: () => "px",
    },
    minWidth: {
      type: Number,
    },
    unitW: {
      type: String,
      default: () => "px",
    },
    placement: {
      type: String,
      default: () => "bottom",
    },
    checkValueType: {
      type: String,
      default: () => "checkedKeys",
    },
  },
};
