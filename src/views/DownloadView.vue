<template>
  <div>
    <div style="border-bottom: 1px solid #9a9a9a;text-align: left;">
      <h2>下载中心</h2>
    </div>
    <el-card class="down-table">
      <el-table
        :data="tableData"
        stripe>
        <el-table-column
          prop="time"
          label="日期">
        </el-table-column>
        <el-table-column
          prop="name"
          label="文件">
        </el-table-column>
        <el-table-column
          prop="remark"
          label="备注">
        </el-table-column>
        <el-table-column
        prop="frequency"
        width="80px">
          
        </el-table-column>
        <el-table-column
        label="操作">
        <template slot-scope="scope">
          <a :href="scope.row.address">
              <i class="el-icon-download" style="font-size: 26px;color: rgb(0, 179, 255);"></i>
          </a>
        </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
  </template>
  
  <script>
  export default {
      data() {
          return {
              tableData: [],
  
          }
      },
      created() {
          this.getAllData()
      },
      methods: {
          getAllData() {
              fetch("http://124.221.138.245:31014/downloads")
              .then(response => response.json())
              .then(data => {
                  this.tableData = data
              })
          }
      }
  }
  </script>

<style>
.down-table {
  width: 750px;
}

@media screen and (max-width: 938px)  {
  .down-table {
    width: 550px;
  }
}

@media screen and (max-width: 600px)  {
  .down-table {
    width: 350px;
  }
}

</style>