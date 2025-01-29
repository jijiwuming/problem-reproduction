<template>
  <div class="wrapper">
    <el-button @click="getList('right')">设置fixed参数</el-button>
    <p>请参考直接访问后点击❓的效果 与 刷新页面后先设置fixed参数再点击❓的效果</p>
    <el-table v-loading="loading" :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
          <el-popover
            :ref="'custom-popover' + scope.row.uuid"
            placement="top"
            @show="showChart(scope.row.uuid)"
          >
            <child-chart :ref="'childChart' + scope.row.uuid" />
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
    showChart(id) {
      const attr = "childChart" + id;
      const popperAttr = "custom-popover" + id;
      if (this.$refs && this.$refs[attr]) {
        this.$refs[attr].showChart().then(() => {
          this.$refs[popperAttr] && this.$refs[popperAttr].updatePopper();
        });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>