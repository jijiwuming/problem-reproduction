<template>
  <div class="wrapper">
    <div :key="item.id" v-for="item in msgList" class="list-item">
      <div class="text">
        {{ item.text }}
      </div>
      <i class="el-icon-question" @click="dialogVisible=true"></i>
    </div>
    <!-- NOTE： 注意这边append-to-body在visible之后才产生效果，会导致bug -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :append-to-body="true">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
let uuid = 1;
export default {
  name: 'HelloWorld',
  props: {
  },
  data() {
    return {
      dialogVisible: false,
      msgList: []
    }
  },
  mounted() {
    setInterval(() => {
      this.msgList.push({
        id: uuid++,
        text: `当前值${uuid}`
      })
    }, 1000)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapper {
  .list-item {
    display: flex;
    align-items: flex-end;
    font-size: 14px;
    .text {
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  }
}
</style>
