<template>
    <div>
        <h2 style="text-align: left">管理员登陆</h2>
        <div style="margin-top: 10px;width: 400px;">
            <el-input v-model="login_form.username" placeholder="请输入管理员账号"></el-input>
            <el-input v-model="login_form.password" placeholder="请输入管理员密码" style="margin-top: 10px"></el-input>
            <el-button type="primary" style="margin-top: 10px;width: 100%" @click="login">登陆</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            login_form: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
            // // console.log(this.login_form)
            // fetch("http://xh-api.ganxy03.cn/login/admin", {
            //     method: 'post',
            //     headers: {
            //         'Content-Type': 'application/json;charset=utf-8'
            //     },
            //     body: JSON.stringify(this.login_form)
            // })
            // .then(response => response.json())
            // .then(res => {
            //     console.log(res)
            // })
            window.location.href = '/admin/manage';
            // history.push('/manager');
        }
    }
}
</script>