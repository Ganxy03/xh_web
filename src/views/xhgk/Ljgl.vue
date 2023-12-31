<template>
    <div>
        <!-- 地址导航 -->
        <div class="mbx">
            <span><i class="el-icon-location"></i></span>
            <span>
                <router-link to="/home" style="text-decoration: none;">首页</router-link>
            </span>
            <span> > </span>
            <span>历届管理</span>
        </div>
        <!-- 内容 -->
        <div class="unit_con">
            <div class="unit-underline"></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // 这里返回你的数据对象
        }
    },
}
</script>

<style>
.unit-underline {
    width: 1200px;
    height: 5px;
    /* margin: 3px 0 0; */
    border-bottom: 5px solid #3368B6;
}

.unit_con {
    width: 1200px;
    height: 660px;
    margin: 0 auto;
    /* background-color: aquamarine; */
}
</style>
  