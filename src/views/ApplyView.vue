<template>
    <div>
        <div style="text-align: left;">
            <!-- <h3><a href="/join">返回</a></h3> -->
            <el-card style="width: 850px;">
                <h2 style="text-align: center;">{{ join_for }}</h2>
                <el-image :src="src" style=""></el-image>
            </el-card>
            <h2>介绍:</h2>
            <p>意思一下，占个位 待补充....</p>
            <el-button style="float: left;"><a href="/join" style="text-decoration: none;color: rgb(0, 153, 255);">返回</a></el-button>
            <el-button type="primary" style="float: right;"><a href="/appl">申请</a></el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            join_for: '',
            src: 'http://ganxy03.cn/img/bj.jpeg'
        }
    },
    created() {
        this.join_for = localStorage.getItem("join_for")
    },
    methods: {
        
    }
}
</script>