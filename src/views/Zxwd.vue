<template>
    <div>
        <!-- 地址导航 -->
        <div class="mbx">
            <span><i class="el-icon-location"></i></span>
            <span>
                <router-link to="/home" style="text-decoration: none;">首页</router-link>
            </span>
            <span> > </span>
            <span>咨询问答</span>
        </div>
        <!-- 内容 -->
        <div class="unit_con">
            <div class="unit-underline"></div>
            <!-- 折叠面板 -->
            <el-collapse v-model="activeName" accordion>
                <el-collapse-item title="注册与登陆功能" name="1">
                    <div>首页的登陆注册功能仅对协会内部和各社团部门的管理员开放，不对外开放注册功能</div>
                    <!-- <div>2.</div> -->
                </el-collapse-item>
                <el-collapse-item title="协会招新" name="2">
                    <div>1.招新时间：协会每年三月、九月面向各级招新（临实习除外）</div>
                    <div>2.招新过程：向本站投发个人简历，初步筛选后进行协会内部面试，择优招新</div>
                    <!-- <div>3.</div> -->
                </el-collapse-item>
                <el-collapse-item title="关于下载" name="3">
                    <div>1.下载资源属学校官网以及站长本人网上寻找的资源，如有推荐可email站长</div>
                    <div>2.关于校园资源的内网限制，站长正在寻找解决方案....</div>
                    <div>3.网络班的同学不要尝试攻击本站的服务器哦，我会顺着网线半夜敲你脑瓜子的</div>
                </el-collapse-item>
                <el-collapse-item title="关于入驻本站" name="4">
                    <div>要求：只要你是经过学校的批准成立社团/部门，就可以email告诉我，你就可以在本站发布你社团/部门的动态</div>
                    <div> 我们会举协会上下全部干将，大力地支持为你开发属于独属你们部门的网站</div>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            // 这里返回你的数据对象
            activeName: '1'
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

el-collapse-item__header {
    font-size: 18px;
}

.el-collapse {
    width: 1200px;
    text-align: left;
}
</style>
  