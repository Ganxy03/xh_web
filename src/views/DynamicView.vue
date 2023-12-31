<template>
<div>
    <div class="dynamic-table">
        <h2>最新动态</h2>
        <el-link @click="get_title">测试</el-link>
        <ul style="margin-top: 10px;">
            <li v-for="item in list" :key="item.id" style="list-style: none;border-bottom: 1px solid #333;text-align: left;">
                <a href="#" style="text-decoration: none;color: rgb(9, 159, 235);font-size: 26px;">
                    {{ item.title }}
                </a>
                <span style="color: #333;font-size: 16px;float: right;line-height: 26px;">{{ item.time }}</span>
            </li>
        </ul>
    </div>
    <!-- <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage4"
    :page-sizes="[100, 200, 300, 400]"
    :page-size="100"
    layout="total, sizes, prev, pager, next"
    :total="100"
    style="text-align: left;font-size: 13px;">
    </el-pagination> -->
</div>
</template>

<script>
export default {
    data() {
        return {
            list: []
        }
    },
    created() {
        this.get_title()
    },
    methods: {
        get_title() {
            fetch("http://124.221.138.245:31014/dynamics")
            .then(response => response.json())
            .then(res => {
                this.list = res
                // console.log(res)
            })
        }
    }
}
</script>

<style>
.dynamic-table {
    width: 750px;
}

@media screen and (max-width: 938px)  {
  .dynamic-table {
    width: 550px;
  }
}

@media screen and (max-width: 600px)  {
  .dynamic-table {
    width: 350px;
  }
}

</style>