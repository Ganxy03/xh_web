<template>
    <el-container>
        <!-- <el-header style="height: 120px;background-image: url(../img/top_bg.png);background-color: #f1f1f1;">
            <common-head />
        </el-header> -->
        <div class="body-container">
            <el-main class="main">
                <!-- 弹示窗 show-icon -->
                <el-alert title="非官方正式的公告" type="info" center>
                    <!-- <el-collapse v-model="activeNames" @change="handleChange">
                        <el-collapse-item title="声明 Declaration" name="1">
                            <div>本站是未授权的非正式官方网站 本站发布内容一切解释权归站长所有</div>
                            <div>所用的Cookies技术 以及收集的个人信息 本站承诺保护用户隐私 坚决抵制一切非法不道德行为</div>
                        </el-collapse-item>
                        <el-collapse-item title="群聊 Group-chat" name="2">
                            <div>QQ群:</div>
                            <div>公众号：</div>
                            <div>论坛：</div>
                            <div>微博：</div>
                        </el-collapse-item>
                    </el-collapse> -->
                    <div style="font-size: 5px;color: #eee;">(右上角可关闭)</div>
                    <el-collapse v-model="activeName" accordion>
                        <el-collapse-item title="声明 Declaration" name="1">
                            <div>本站是未正式授权的协会门户 本站发布内容一切解释权归站长所有</div>
                            <div>所用的Cookies技术 以及收集的个人信息 本站以及下设子站承诺保护用户隐私 坚决抵制一切非法不道德行为</div>
                        </el-collapse-item>
                        <el-collapse-item title="群聊 Group-chat" name="2">
                            <div>QQ群:</div>
                            <div>公众号：</div>
                            <div>论坛：</div>
                            <div>微博：</div>
                        </el-collapse-item>
                    </el-collapse>
                </el-alert>

                <!-- //轮播图 -->
                <el-carousel indicator-position="outside" style="margin: 25px 0;">
                    <el-carousel-item v-for="item in 4" :key="item" style="width: 100%;">
                        <!-- <h3>{{ item }}</h3> -->
                        <img :src="require('@/img/pic' + item + '.jpg')" alt="Image">
                    </el-carousel-item>
                </el-carousel>
                <!-- 卡片标题 -->
                <div class="card-title">
                    <el-col style="width: 1200px;">
                        <el-card shadow="always">
                            <b style="float: left;">互联网信息协会</b>
                            <div style="padding-left: 2em;text-align: left;">
                                <br>互联网信息协会网站是我校互联网信息协会的门户网站。协会将在校团委、互联网办公室的指导下，有序开展辅助教学的任务。目前暂未获得校有关部门批准，一切以站长本人的名义运营。一切解释权归站长所有
                            </div>
                            <el-button style="float: right;margin-top: 90px;" type="text">了解更多</el-button>
                        </el-card>
                    </el-col>
                </div>
                <!-- 最新动态 -->
                <div style="width: 1200px;margin: 0 auto;padding: 10px;">
                    <el-col :span="16" style="padding: 10px;">
                        <el-card shadow="never" style="height: 312px;">
                            <el-page-header @back="goBack" content="最新动态" title="更多">
                            </el-page-header>
                        </el-card>
                    </el-col>
                    <!-- 登陆面板 -->
                    <!-- <el-col :span="8" style="padding: 10px;">
                        <el-card shadow="never"
                            style="height: 360px;width: 420px;background-image: url('../img/login_bg.png');display: flex;flex-direction: column;">
                            <b style="float: left;">登陆</b>
                            <span>邮箱：</span><el-input placeholder="请输入邮箱" v-model="input_name" clearable
                                style="width: 300px;">
                            </el-input>
                            密码：<el-input placeholder="请输入密码" v-model="input_pwd" show-password></el-input>
                            验证码：<el-input placeholder="请输入验证码" v-model="input_yanzheng" clearable>
                            </el-input>
                        </el-card>
                    </el-col> -->
                    <el-col :span="8" style="padding: 10px;">
                        <el-card shadow="never" class="login-card">
                            <!-- <h2 class="login-title">登录</h2> -->
                            <div class="demo-input-suffix">
                                <el-input placeholder="请输入邮箱" prefix-icon="el-icon-message" v-model="input_name"
                                    clearable></el-input>
                                <el-input placeholder="请输入密码" prefix-icon="el-icon-postcard" v-model="input_pwd"
                                    show-passwords clearable>
                                </el-input>
                                <el-input placeholder="请输入验证码" prefix-icon="el-icon-message" v-model="input_yanzheng"
                                    clearable style="width: 150px;"></el-input>
                                <div>
                                    <a href="" class="forgetpwd">忘记密码</a>
                                </div><br>
                                <el-button type="info" plain disabled>登 陆</el-button>
                                <el-link href="http://localhost:8889" target="_blank">
                                    <el-button type="info" plain>跳 转</el-button>
                                </el-link>
                            </div>
                        </el-card>
                    </el-col>
                </div>
                <!-- 下载中心 -->
                <div style="width: 1200px;margin: 0 auto;">
                    <el-col :span="16" style="padding: 10px;">
                        <el-card shadow="never" style="height: 282px;">
                            <el-page-header @back="goBack" content="下载中心" title="更多"></el-page-header>
                        </el-card>
                    </el-col>
                    <!-- 问答面板 -->
                    <el-col :span="8" style="padding: 10px;">
                        <el-card shadow="never" class="ques-card">
                            <ul class="noxu-ul">
                                <li>如何下载本站的资源</li>
                                <li>我们的工作是做什么</li>
                                <li>如何加入我们协会</li>
                                <li>我们协会的优势</li>
                                <li>如何加入协会交流小组</li>
                            </ul>
                        </el-card>
                    </el-col>
                </div>
                <!-- 协会社团一览 -->
                <div class="yilanbox">
                    <img src="../img/mid_bg.png" alt="" class="background-image">
                    <div class="yilan">
                        <div class="yilan-title">社团一览</div>
                        <ul class="lianjie">
                            <li><a href="#">E-HOME语言爱好者协会</a></li>
                            <li><a href="#">舞蹈艺术团</a></li>
                            <li><a href="#">心理协会</a></li>
                            <li><a href="#">乒博社</a></li>
                            <li><a href="#">书画社</a></li>
                            <li><a href="#">悦动羽协</a></li>
                            <li><a href="#">台球协会</a></li>
                            <li><a href="#">读书协会</a></li>
                            <li><a href="#">篮球社</a></li>
                            <li><a href="#">爱乐团</a></li>

                            <li><a href="#">爱心社</a></li>
                            <li><a href="#">青橄榄文学社</a></li>
                            <li><a href="#">弈趣棋社</a></li>
                            <li><a href="#">青年创业者协会</a></li>
                            <li><a href="#">春温汉服社</a></li>
                            <li><a href="#">新梦想电子商务协会</a></li>
                            <li><a href="#">演讲与口才协会</a></li>
                            <li><a href="#">街舞协会</a></li>
                            <li><a href="#">习茶社</a></li>
                            <li><a href="#">体育舞蹈协会</a></li>
                            <li><a href="#">瑜伽生活社</a></li>
                            <li><a href="#">武术协会</a></li>
                            <li><a href="#">摄影协会</a></li>
                            <li><a href="#">缘物语动漫社</a></li>
                            <li><a href="#">街舞社</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <!-- <h1>{{ message }}</h1> -->
                </div>
            </el-main>
        </div>
        <!-- <el-footer>
            &copy;2023 互联网信息协会
        </el-footer> -->
    </el-container>
</template>

<script>
import axios from 'axios'
import CommonHead from '../components/CommonHead.vue'
export default {
    data() {
        return {
            message: 'Hello Vue!',
            error: null,
            activeIndex: '1',
            activeIndex2: '1',
            input: '',// 声明名为"input"的属性
            activeNames: ['1'],
            activeName: '1',
            input_name: '',
            input_pwd: '',
            input_yanzheng: ''
        };
    },
    created() {
        axios.get('http://124.221.138.245:3300/api/demo')
            // axios.get('http://localhost:3300/api/scores', { headers: { 'Access-Control-Allow-Origin': '*' } })
            .then(response => {
                this.responseData = response.data;
                console.log(this.responseData); // 打印获取到的数据
                this.loading = false;
            })
            .catch(error => {
                console.error(error);
                this.error = error;
                this.loading = false;
            });
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        handleChange(val) {
            console.log(val);
        },
        goBack() {
            console.log('更多最新动态');
        }
    },
    components: {
        CommonHead,
    }
}
</script>
  
<style>
* {
    padding: 0;
    margin: 0;
    user-select: none;
}

.outer-container {
    width: 100%;
    height: 100%;
    position: relative;
}

.border-container {
    width: 100%;
    height: 100%;
    /* border: 20px solid #000;  */
}

.body-container {
    width: 96%;
    margin: 0 auto;
    /* background-color: burlywood; */
}

.el-menu-demo {
    /* float: right; */
    display: flex;
    justify-content: flex-end;
    margin-left: auto;
    width: 560px;
    /* margin-top: 59px; */

}

.el-input__inner {
    border: 1px solid #ccc;
    border-radius: 15px;
}

.el-input {
    margin-right: 135px;
    padding-top: 15px;
    padding-bottom: 5px;
}

#search {
    width: 120px;
    transition: width 0.3s ease;
}

#search:focus {
    width: 200px;
    /* margin-left: -100px; */
}

.el-input__icon {
    font-size: 18px;
    margin-top: 6px;
}

.card-title {
    display: flex;
    justify-content: center;
    margin: 8px 0;
}

.el-alert {
    width: 1200px;
    margin: 20px auto;
    margin-bottom: 15px;
    background-image: url(../img/pic4.jpg);
}

.el-alert__title {
    color: #eee;
}

.el-collapse {
    width: 800px;
    /* background-color: rgba(255, 255, 255, 0.6);
    color: rgba(0, 0, 0, 1); */
}

.el-collapse {
    opacity: 0.6;
    color: rgba(0, 0, 0, 1);
}

.el-card__body {
    height: 120px;
}

.login-card {
    height: 272px;
    width: 342px;
    background-image: url('../img/login_bg.png');
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    padding: 20px;
}

/* .login-title {
    text-align: left;
    font-size: 18px;
    margin-bottom: 20px;
    display: flex;
} */

.forgetpwd {
    font-size: 13px;
    color: #999;
    float: left;
    text-decoration: none;
    padding-bottom: 5px;
}

.ques-card {
    height: 262px;
    width: 362px;
    background-image: url('../img/que_bg.png');
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    padding: 10px;
}

.noxu-ul {
    width: 300px;
    height: 220px;
    list-style: none;
    /* background-color: aquamarine; */
}

.noxu-ul li {
    color: #666;
    font-size: 18px;
    padding: 10px;
    float: left;
}

.noxu-ul li:hover {
    color: #a3a3a3;
}

.yilanbox {
    float: left;
    position: relative;
    /* float: left; */
    width: 100%;
    /* background-color: aqua; */
    overflow: hidden;
}

.background-image {
    position: absolute;
    top: 0;
    left: 0;
    /* z-index: 0; */
}

.yilanbox img {
    width: 100%;
}

.yilan {
    width: 1000px;
    padding: 0 30px;
    height: 500px;
    /* background-color: aqua; */
    margin: 0 auto;
    /* position: absolute; */
    /* z-index: 1; */
}

.yilan-title {
    color: #333;
    font-size: 20px;
    font-weight: 700;
    width: 1000px;
    height: 50px;
    /* background-color: aquamarine; */
    background-image: url(../img/unit.png);
    background-repeat: no-repeat;
}

.lianjie {
    display: flex;
    /* justify-content: center; */
    flex-wrap: wrap;
}

.lianjie li {
    list-style: none;
    font-size: 20px;
    flex: 0 0 calc(100% / 3);
    padding: 10px 0;
}

.lianjie li a {
    text-decoration: none;
    color: #333;
}

.lianjie li a:hover {
    color: #e6e6;
}
</style>
  