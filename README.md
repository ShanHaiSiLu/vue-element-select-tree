# v-tree-select

自定义树形下拉框组件，通过对`element-ui`中的`el-popover`、`el-tree`两个组件进行二次封装而成。

## 支持的参数包括：
> 因为复选情况下出现了一下复杂判断，出了一些问题，暂时移除复选相关参数的支持


| 参数 | 描述 | 备注 | 
| -- | -- | -- |
| v-model | 双向绑定关联的数据 | |
| data | 树形控件展示的数据 | 树形的！|
| size | 可视文本框的尺寸，具体配置及显示效果同 element-ui |  |
| clearable | 是否展示清空按钮 |  |
| clearableInner | 点击清空按钮之后组件所绑定变量的值是多少，默认是 null |  |
| placeholder | 输入框占位文本 | 默认为 null |
| select-leaf | 是否仅可选择叶节点 | 默认情况下任意节点都可被选择 |
| title | 弹层的标题 |  |
| default-expanded-keys | 默认展开的节点 | 值为 node-key 的值 |
| default-expand-all | 是否默认展开全部节点 |  |
| node-key | 树节点的唯一标识 | 默认用“id” |
| props | 节点配置选项 | 默认：```{children: "children",label: "name",}``` |
| max-height | 树形下拉框的最大高度 | 默认一直到浏览器底部 |
| unit-h | 设定下拉框的最大高度时，使用什么单位 | 默认是 px，仅在设定了【max-height 】后起效 |
| min-width | 弹层的最小宽度 | 默认是树组件刚好撑开的宽度 |
| unit-w | 设定弹层的最小宽度时，使用什么单位 | 默认是 px，仅在设定了【min-width】后起效 |
| placement | 弹层出现位置，和法值包括：top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | 默认是```bottom``` |
| show-sheck | 是否复选 | **复选树相关，暂不可用** |
| check-strictly | 复选模式下是否关闭严格父子关系 | 默认不关闭，**复选树相关，暂不可用** |
| default-checked-keys | 默认选中的节点 | 复选树的情况下有效，值为 node-key 的值，**复选树相关，暂不可用** |
| checkValueType | 复选状态时，所绑定变量的值，合法值和其含义有：```checkedKeys（被选中的节点的id组成的数组）, checkedNodes（被选中的节点组成的数组）, halfCheckedKeys（被半选中的节点的id组成的数组）, halfCheckedNodes（被半选中的节点组成的数组）,allCheckKeys（全部选中和半选中的节点的id组成的数组）,allCheckNodes（全部选中和半选中的节点组成的数组）``` | 默认值是```checkedKeys```，**复选树相关，暂不可用** |




## 自定义节点内容：```v-slot:tree```

默认情况下，弹层中节点展示的文字是`props`配置中的`label`项的内容，可以通过插槽`v-slot:tree`自定义，示例：

```
<select-tree
    v-model="form.deptId"
    :data="deptOptions"
>
    <template v-slot:tree="{ data }">
        <span>{{ data.id }} # {{ data.label }} </span>
    </template>
</select-tree>
```

要查看源代码或者有什么建议请访问：[https://github.com/xjy-1999/vue-element-select-tree](https://github.com/xjy-1999/vue-element-select-tree)

npm地址请访问：[https://www.npmjs.com/package/v-tree-select-eui](https://www.npmjs.com/package/v-tree-select-eui)