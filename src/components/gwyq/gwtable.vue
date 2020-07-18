<template>
  <div>
    <el-table :data="otherlist" style="width: 100%;margin-bottom: 20px;margin-top:40px" row-key="name">
      <el-table-column prop="name" label="地区" header-align='center' width="180">
      </el-table-column>
      <el-table-column prop="conNum" align='center' label="确诊" width="180">
      </el-table-column>
      <el-table-column prop="cureNum" align='center' label="治愈">
      </el-table-column>
      <el-table-column prop="deathNum" align='center' label="死亡">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // tableData: [
      //   {
      //     id: 1,
      //     date: "2016-05-02",
      //     name: "王小虎",
      //     address: "上海市普陀区金沙江路 1518 弄"
      //   },
      //   {
      //     id: 2,
      //     date: "2016-05-04",
      //     name: "王小虎",
      //     address: "上海市普陀区金沙江路 1517 弄"
      //   },
      //   {
      //     id: 3,
      //     date: "2016-05-01",
      //     name: "王小虎",
      //     address: "上海市普陀区金沙江路 1519 弄",
      //     children: [
      //       {
      //         id: 31,
      //         date: "2016-05-01",
      //         name: "王小虎",
      //         address: "上海市普陀区金沙江路 1519 弄"
      //       },
      //       {
      //         id: 32,
      //         date: "2016-05-01",
      //         name: "王小虎",
      //         address: "上海市普陀区金沙江路 1519 弄"
      //       }
      //     ]
      //   },
      //   {
      //     id: 4,
      //     date: "2016-05-03",
      //     name: "王小虎",
      //     address: "上海市普陀区金沙江路 1516 弄"
      //   }
      // ]
    };
  },
  computed: {
    otherlist(){
      let otherlist = this.$store.state.all_data.otherlist || [];
      otherlist = JSON.parse(JSON.stringify(otherlist));
      return otherlist.map((item)=>{
        item.conNum = item.value;
        return item
      })
    }
  },
  methods: {
    /*load(tree, treeNode, resolve) {
      setTimeout(() => {
        // resolve([
        //   {
        //     id: 31,
        //     date: "2016-05-01",
        //     name: "王小虎",
        //     address: "上海市普陀区金沙江路 1519 弄"
        //   },
        //   {
        //     id: 32,
        //     date: "2016-05-01",
        //     name: "王小虎",
        //     address: "上海市普陀区金沙江路 1519 弄"
        //   }
        // ]);
      }, 1000);
    }*/
  }
};
</script>