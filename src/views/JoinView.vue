<template>
    <div>
        <div style="border-bottom: 1px solid #9a9a9a;text-align: left;">
            <h2>社团列表</h2>
        </div>
        <el-card style="margin-top: 10px;">
            <!-- <ul class="shetuan_list" v-for="item in DataList" :key="item.name">
                <li class="shetuan-item"><span style="padding-left: 10px;">{{ item.name }}</span><span style="cursor: pointer;float: right;margin-right: 150px;" @click="lik(item.name)" >点击</span></li>
            </ul> -->
            <el-table
            :data="DataList"
            stripe
            style="
            width:800px">
                <el-table-column
                prop="name"
                label="社团">
                    
                </el-table-column>
                <el-table-column
                label="操作">
                    <template slot-scope="scope">
                        <i style="cursor: pointer;color: rgb(0, 136, 255);" class="el-icon-position" @click="lnk(scope.row.name)"></i>
                    </template>
                </el-table-column>
            </el-table>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[20]"
                :page-size="20"
                layout="total, sizes, prev, pager, next, jumper"
                :total="19">
            </el-pagination>
        </el-card>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        currentPage: 1,
        DataList:[
            {
                id: 1,
                name: "新梦想电子商务协会"
            },
            {
                id: 2,
                name: "书画社"
            },
            {
                id: 3,
                name: "心理协会"
            },
            {
                id: 4,
                name: "习茶社"
            },
            {
                id: 5,
                name: "武术社"
            },
            {
                id: 6,
                name: "爱乐社"
            },
            {
                id: 7,
                name: "E-HOME语言爱好社"
            },
            {
                id: 8,
                name: "春温汉服社"
            },
            {
                id: 9,
                name: "演讲与口才协会"
            },
            {
                id: 10,
                name: "弈趣棋社"
            },
            {
                id: 11,
                name: "摄影协会"
            },
            {
                id: 12,
                name: "读书协会"
            },
            {
                id: 13,
                name: "体育舞蹈协会"
            },
            {
                id: 14,
                name: "互联网信息协会"
            },
            {
                id: 15,
                name: "缘物语动漫社"
            },
            {
                id: 16,
                name: "悦动羽社"
            },
            {
                id: 17,
                name: "乒博社"
            },
            {
                id: 18,
                name: "青橄榄文学社"
            },
            {
                id: 19,
                name: "台球协会"
            },
        ]
      };
    },
    methods: {
      handleSizeChange(val) {
        this.currentPage = val;
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        console.log(`当前页: ${val}`);
      },
      getData() {
        // 根据currentPage和每页显示条数获取对应的数据
        // 这里可以根据实际情况发送请求获取数据，此处省略
      },
      lnk(name) {
        console.log(name)
        localStorage.setItem("join_for", name)
        window.location.href = "/apply";
      }
    },
  }
</script>

<style>
.shetuan_list {
    width: 800px;
}

.shetuan-item {
    width: 100%;
    margin: 0 auto;
    height: 30px;
    margin: 0;
    font-size: 18px;
    list-style: none;
    text-align: left;
}
</style>