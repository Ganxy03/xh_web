<template>
    <div>
        <!-- 地址导航 -->
        <div class="mbx">
            <span><i class="el-icon-location"></i></span>
            <span>
                <router-link to="/home" style="text-decoration: none;">首页</router-link>
            </span>
            <span> > </span>
            <span>协会简介</span>
        </div>
        <!-- 内容 -->
        
        <div class="unit_con">
            <div class="unit-underline"></div>
            <div class="company-ti">
                <h2>互联网信息协会</h2>
                <p>发布时间：2023-08-25</p>
            </div>
            <div style="margin: 45px 0;">
                <p>
                    <span>　　淮南联合大学互联网信息协会（简称“互联网信息协会”）是经校团委批准、依据《淮南联合大学管理条例》设立、由信息网络办公室管理的协会。经校团委批准，协会为信息网络小组的下属部门。协会成立于2011年11月，由信息网络小组技术部组长担任会长职责。</span>
                </p>
                <p>
                    <span>　　根据《淮南联合大学社团发展章程》的规定，协会设立技术部、宣传部和组织部三个部门，发挥团队优势，把方向、管大局、保落实，依照规定讨论和决定协会重大事项。</span>
                </p>
                <p>
                    <span>　　淮南联合大学互联网信息协会以校园网络服务为发展方向，实行多元化发展。接受信息网络办公室统一调度指挥，承担信息网络小组任务，为全校师生提供更好的网络服务。自觉接受社联监管和公众监督，保证信息公开透明，提升服务质量，增强服务能力。坚持稳步发展，推动协会做强。</span>
                </p>
            </div>
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
.mbx {
    width: 1200px;
    height: 21px;
    margin: 45px auto 0;
    text-align: left;
    font-size: 14px;
    /* background-color: antiquewhite; */
}

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

.company-ti {
    width: 1200px;
    height: 73px;
    margin: 20px 0px 0px;
}

.company-ti h2 {
    padding: 32px 0 17px;
}



.unit_con p {
    text-align: left;
    padding-left: 2em;
    width: 1140px;
    line-height: 33px;
    color: #666;
    font-size: 16px;
}

.company-ti p {
    text-align: center;
    color: #999;
    font-size: 16px;
}
</style>
  