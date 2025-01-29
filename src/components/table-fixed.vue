<template>
    <div class="wrapper">
      <el-button @click="getList('right')">设置fixed参数</el-button>
      <p>
        请参考直接访问后点击❓的效果 与 刷新页面后先设置fixed参数再点击❓的效果
      </p>
      <el-table v-loading="loading" :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
            <el-popover
              :ref="genId('custom-popover', scope.row.uuid)"
              placement="top"
              @show="showChart(scope.row.uuid)"
            >
              <child-chart :ref="genId('childChart', scope.row.uuid)" />
              <i slot="reference" class="el-icon-question"></i>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
        <el-table-column :fixed="fixedProp" prop="address" label="地址">
        </el-table-column>
      </el-table>
    </div>
  </template>
  
  <script>
  import ChildChart from "./child-chart.vue";
  const data = [
    {
      uuid: 1,
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    },
    {
      uuid: 2,
      date: "2016-05-04",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1517 弄",
    },
    {
      uuid: 3,
      date: "2016-05-01",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1519 弄",
    },
    {
      uuid: 4,
      date: "2016-05-03",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1516 弄",
    },
  ];
  export default {
    props: {},
    components: {
      ChildChart,
    },
    data() {
      return {
          idMap:new Map(),
        fixedProp: undefined,
        loading: true,
        tableData: [],
      };
    },
    mounted() {
      this.getList();
    },
    methods: {
      getList(attr) {
        this.loading = true;
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(data);
          }, 1000);
        }).then((res) => {
          this.tableData = res;
          this.loading = false;
          this.fixedProp = attr;
        });
      },
      // showChart(id) {
      //   const attr = "childChart" + id;
      //   const popperAttr = "custom-popover" + id;
      //   if (this.$refs && this.$refs[attr]) {
      //     this.$refs[attr].showChart().then(() => {
      //       this.$refs[popperAttr] && this.$refs[popperAttr].updatePopper();
      //     });
      //   }
      // },
      genId(type, uuid) {
          const key = `${type}-${uuid}`;
          const val = this.idMap.get(key) || 1;
          this.idMap.set(key, val + 1);
          return `${key}-${val}`;
      },
      showChart(id) {
          // NOTE：
          // ElTable中设置了带fixed的column时，会导致table-body渲染多次（这个是UI库的实现逻辑导致的）
          // 重复渲染会导致表格body中的子组件被多次实例化
          // 前面genId做自增id，这边取id最小的有内容的ref就是为了解决这个问题
          // 需要注意的是如果要获取的子组件位于fixed的column中，那么需要取的实例的id会变化，需要按具体情况分析
          const attr = `childChart-${id}-`;
          const popperAttr = `custom-popover-${id}-`;
          for (let name in this.$refs) {
              if (name.startsWith(attr) && this.$refs[name]) {
                  const popperName = popperAttr + name.replace(attr, '');
                  const item = this.$refs[name];
                  item.showChart().then(() => {
                      this.$refs[popperName] && this.$refs[popperName].updatePopper();
                  });
              }
          }
      },
    },
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss"></style>