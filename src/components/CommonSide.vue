<template>
    <div style="text-align: left;">
        <el-card style="margin-top: 15px;color: #9a9a9a;font-size: 14px;text-indent: 1em;">
            <p>{{ motto }}</p>
            <p style="text-align: right;">《{{ from }}》</p>
        </el-card>
        <!-- <el-link @click="get_motto">get</el-link> -->
        <el-card style="margin-top: 20px;color: #CD5C5C;font-size: 13px;">
            <p><i class="el-icon-position"></i>省一交流群：262937049</p>
            <!-- <el-link @click="log">测试</el-link> -->
        </el-card>
        <el-card v-if="is_logined === false" shadow="always" style="margin-top: 15px;">
            <div style="text-align: center;">
                <el-link @click="form_register">注册</el-link>
                <el-link @click="form_login" style="margin-left: 10px;">登陆</el-link>
            </div>
            <div v-if="form_button === 1">
                <el-input v-model="register_nickname" placeholder="请输入用户名" style="margin-top: 10px;"></el-input>
                <el-input v-model="register_name" placeholder="请输入真实姓名" style="margin-top: 10px;"></el-input>
                <el-input v-model="register_belong" placeholder="请输入班级" style="margin-top: 10px;"></el-input>
                <el-input v-model="register_sno" placeholder="请输入学号" style="margin-top: 10px;"></el-input>
                <el-input v-model="register_pwd1" placeholder="请输入密码" style="margin-top: 10px;"></el-input>
                <el-input v-model="register_pwd2" placeholder="请确认密码" style="margin-top: 10px;"></el-input>
                <el-input v-model="register_mail" placeholder="请输入邮箱" style="margin-top: 10px;"></el-input>
                <el-input v-model="register_phone" placeholder="请输入手机号" style="margin-top: 10px;"></el-input>
                <el-input v-model="code" placeholder="请输入验证码" style="margin-top: 10px;width: 60%;"></el-input>
                <el-button id="send_message" @click="send_code" style="width: 30%;margin-left: 10%;" type="primary" plain>发送</el-button>
                <el-button style="float: right;margin-top: 5px;" @click="register">注册</el-button>
            </div>
            <div v-if="form_button === 0">
                <el-input v-model="login_sno" placeholder="请输入学号" style="margin-top: 10px;"></el-input>
                <el-input v-model="login_password" placeholder="请输入密码" style="margin-top: 10px;"></el-input>
                <el-button style="float: right;margin-top: 5px;" @click="login">登陆</el-button>
            </div>
        </el-card>
        <el-card v-if="is_logined === true" style="margin-top: 10px;">
            <div style="color: #9a9a9a;font-size: 14px;">
                名字：{{ name }}<br>
                学号：{{ sno }}<br>
                用户名：{{ nickname }}<br>
                班级：{{ belong }}<br>
                上次登陆IP：{{ last_ip }}
            </div>
        </el-card>
        <!-- <el-card shadow="always" style="margin-top: 15px;">
            <el-input placeholder="请输入学号"></el-input>
            <el-input placeholder="请输入密码" style="margin-top: 10px;"></el-input>
            <div style="margin-top: 5px;text-align: center;">
                <el-link>注册</el-link>
                <el-link style="margin-left: 10px;">登陆</el-link>
            </div>
        </el-card> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            motto: '',
            from: '',
            form_button: 0,
            register_nickname: '',
            register_name: '',
            register_belong: '',
            register_sno: '',
            register_pwd1: '',
            register_pwd2: '',
            login_sno: '',
            login_password: '',
            register_mail: '',
            register_phone: '',
            code: '',
            // is_logined: 0,
            name: '',
            nickname: '',
            sno: '',
            belong: '',
            last_ip: ''
            
        }
    },
    created() {
        this.get_motto()
        // localStorage.setItem('is_logined', false)
        this.is_logined = JSON.parse(localStorage.getItem('is_logined')) || false;
        // console.log(this.is_logined)
        if(this.is_logined === true) {
            // localStorage.setItem('name', account.name);
            this.name = localStorage.getItem("name")
            this.nickname = localStorage.getItem("nickname")
            this.sno = localStorage.getItem("sno")
            this.belong = localStorage.getItem("belong")
            this.last_ip = localStorage.getItem("last_ip")
        }
        // this.judge_isLogined()
        // this.verify()
        // this.is_logined = localStorage.getItem("is_logined")
    },
    methods: {
        // verify() {
        //     this.is_logined = localStorage.getItem("is_logined")
        // },
        startCountdown() {
            var button = document.getElementById("send_message");
            var timer;
            var seconds = 60;
            timer = setInterval(() => {
            seconds--;
            button.innerText = seconds + "s";
            
            if (seconds <= 0) {
                clearInterval(timer);
                button.disabled = false;
                button.innerText = "发送";
            }
            }, 1000);
            
            button.disabled = true;
        },  
        log() {
            console.log(this.is_logined)
            if(this.is_logined === 1){
                console.log("是1")
            }
            if(this.is_logined === '1'){
                console.log("是'1'")
            }
        },
        get_motto() {
            fetch("https://v1.hitokoto.cn/")
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                // console.log(data.hitokoto)
                this.motto = data.hitokoto
                this.from = data.from
            })
        },
        form_register() {
            this.form_button = 1
        },
        // judge_isLogined() {
        //     this.is_logined = localStorage.getItem("is_logined"),
        //     console.log(this.is_logined)
        // },
        form_login() {
            this.form_button = 0
        },
        // verify() {
        //     this.is_logined = localStorage.getItem('is_logined')
        //     console.log(this.is_logined)
        // },
        async login() {
            const url = 'http://124.221.138.245:31014/login';
            const data = {
                sno: this.login_sno,
                password: this.login_password
            };
            try {
                const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                    body: new URLSearchParams(data)
                });
                if (response.ok) {
                    // this.is_logined = 1
                    this.$message({
                        message: '登录成功',
                        type: 'success',
                        duration: 3000,
                    });
                    // console.log("登录成功！");
                    const account = await response.json();
                    console.log(account);
                    localStorage.setItem('name', account.name);
                    this.name = account.name;
                    console.log(this.name)
                    localStorage.setItem('nickname', account.nickname);
                    this.nickname = account.nickname;
                    localStorage.setItem('sno', account.sno);
                    this.sno = account.sno;
                    localStorage.setItem('belong', account.belong);
                    this.belong = account.belong
                    localStorage.setItem('phone', account.phone);
                    localStorage.setItem('mail', account.mail);
                    localStorage.setItem('last_ip', account.last_ip);
                    this.last_ip = account.last_ip
                    localStorage.setItem('is_logined', true)
                    // this.is_logined = 1
                    // localStorage.setItem('is_logined', '1')
                    // this.is_logined = localStorage.get("is_logined")
                    // 处理登录成功的逻辑
                } else {
                    throw new Error('登录失败');
                }
            } catch (error) {
                console.log(error); // 处理错误
            }
        },
        send_code() {
            // console.log("send_num:" + this.register_phone);
            // const phoneNumber = this.register_phone; // 使用register_phone定义的手机号变量
            // const url = `http://xh-api.ganxy03.cn/send/sms?phoneNumber=${phoneNumber}`;
            // fetch(url, {
            //     method: 'POST',
            //     headers: {
            //     // 'Content-Type': 'application/json;charset=utf-8'
            //         accept: "*/*"
            //     }
            // })
            //     .then(response => response.text())
            //     .then(data => {
            //     console.log("Response:", data);
            //     try {
            //         let res = JSON.parse(data);
            //         console.log("Parsed JSON:", res);
            //     } catch (error) {
            //         console.error(error);
            //     }
            //     })
            //     .catch(error => {
            //     console.error(error);
            //     });
            // this.startCountdown();
            // console.log("send_num:" + this.register_phone);
            // const phoneNumber = "13735820244"; // 使用register_phone定义的手机号变量
            // const url = `http://xh-api.ganxy03.cn/send/sms?phoneNumber=${phoneNumber}`;
            // fetch(url, {
            //     method: 'POST',
            //     headers: {
            //     'Content-Type': 'application/json;charset=utf-8'
            //     }
            // })
            // // console.log("send_num:"+this.register_phone)
            // // fetch("http://xh-api.ganxy03.cn/send/sms", {
            // //     method: 'POST',
            // //     headers: {
            // //     'Content-Type': 'application/json;charset=utf-8'
            // //   },
            // //   body: JSON.stringify("phoneNumber="+13735820244)
            // // })

            const phoneNumber = this.register_phone; // 使用register_phone定义的手机号变量
            console.log("send_num:"+phoneNumber)
            fetch(`http://124.221.138.245:31014/send/sms?phoneNumber=${phoneNumber}`, {
            method: "POST",
            headers: {
                accept: "*/*"
            }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('请求失败');
                }
                return response.text();
            })
            .then(res => {
                console.log(res);
                // console.log("success");
                alert("发送成功！"); 
            })
            .catch(error => {
                console.error(error);
            });
            this.startCountdown();
        },
        register() {
            const data = {
              nickname: this.register_nickname,
              name: this.register_name,
              belong: this.register_belong,
              sno: this.register_sno,
              password: this.register_pwd1,
              mail: this.register_mail,
              phone: this.register_phone,
            };

            const data2 = {
                code: this.code,
                phoneNumber: this.register_phone
            }


            fetch(`http://124.221.138.245:31014/send/verify?code=${data2.code}&phoneNumber=${data2.phoneNumber}`, {
                method: 'POST',
                headers: {
                'accept': '*/*',
                'Content-Type': 'application/json;charset=utf-8'
                }
            })
            .then(response => response.text())
            .then(res => {
                console.log(res);
                console.log(data2)
                if(res === "Yes") {
                    // console.log("验证码正确");
                        fetch("http://xh-api.ganxy03.cn/register", {
                        method: 'POST',
                        headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                        body: JSON.stringify(data)
                    })
                    .then(response => response.json())
                    .then(res => {
                        console.log(res)
                        // alert("注册成功！")
                        console.log("register success")
                        this.form_button === 0
                        this.register_sno = ''
                        this.register_pwd1 = ''
                        this.register_pwd2 = ''
                        this.register_phone = ''
                        this.code = ''
                        this.register_nickname = ''
                        this.register_name = ''
                        this.register_belong = ''
                        this.register_mail = ''
                    })
                } else {
                    console.log("验证码错误");
                }
            })
            .catch(error => {
                console.error(error);
            });
        }
    }
}

</script>

<style>
#send_message:disabled {
  background-color: rgb(181, 218, 235);
  cursor: not-allowed;
}
</style>