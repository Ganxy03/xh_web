<template>
    <el-header style="height: 120px;width: 100%;background-image: url(../img/top_bg.png);background-color: #f1f1f1;">
        <div style="width: 1200px;margin: 0 auto;">
            <el-input v-model="input" placeholder="请输入内容" style="width: 120px;display: flex;margin-left: auto;" id="search">
                <i slot="prefix" class="el-input__icon el-icon-search"></i>
            </el-input>
            <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#f1f1f1"
                text-color="#a3a3a3" active-text-color="#000">
                <el-menu-item><router-link to="/" style="text-decoration: none;">首页</router-link></el-menu-item>
                <!-- <el-menu-item>
                    <router-link to="/" custom v-slot="{ isActive }">
                        <NavLink :active="isActive" @click="clickMenu(item)">首页
                        </NavLink>
                    </router-link>
                </el-menu-item> -->
                <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">
                    <span slot="title">{{ item.label }}</span>
                    <el-menu-item v-for="subItem in item.children" :key="subItem.path" @click="clickMenu(subItem)"
                        :index="subItem.path">{{ subItem.label }}</el-menu-item>
                </el-submenu>
                <el-menu-item @click="clickMenu(item)" v-for="item in noChildren" :key="item.name" :index="item.name"><span
                        slot="title">{{ item.label }}</span></el-menu-item>
            </el-menu>
        </div>
    </el-header>
</template>

<script>
export default {
    data() {
        return {
            input: '',
            menuData: [
                // {
                //     path: '/',
                //     name: 'home',
                //     label: '首页',
                //     // icon: 's-home',
                //     url: 'Home/home'
                // },
                {
                    label: '协会概况',
                    // icon: 'location',
                    children: [
                        {
                            path: '/xhjj',
                            name: 'xhjj',
                            label: '协会简介',
                            // icon: 'setting',
                            url: 'Xhgk/Xhjj'
                        },
                        {
                            path: '/xhzc',
                            name: 'xhzc',
                            label: '协会章程',
                            // icon: 'setting',
                            url: 'Xhgk/Xhzc'
                        },
                        {
                            path: '/ljgl',
                            name: 'ljgl',
                            label: '历届管理',
                            // icon: 'setting',
                            url: 'Xhgk/Ljgl'
                        }
                    ]
                },
                {
                    path: '/zxdt',
                    name: 'zxdt',
                    label: '最新动态',
                    // icon: 'user',
                    url: 'Zxdt/Zxdt'
                },
                {
                    path: '/zxwd',
                    name: 'zxwd',
                    label: '咨询问答',
                    // icon: 'user',
                    url: 'Zxwd/Zxwd'
                },
                {
                    path: '/xzzx',
                    name: 'xzzx',
                    label: '下载中心',
                    // icon: 'user',
                    url: 'Xzzx/Xzzx'
                },
                {
                    path: '/lxwm',
                    name: 'lxwm',
                    label: '联系我们',
                    // icon: 'user',
                    url: 'Lxwm/Lxwm'
                }

            ]
        }
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        clickMenu(item) {
            // console.log(item.label)
            if (this.$route.path !== item.path && !(this.$route.path === '/home' && (item.path === '/'))) {
                this.$router.push(item.path)
            }
            // this.$store.commit('selectMenu', item)
        }
    },
    computed: {
        noChildren() {
            return this.menuData.filter(item => !item.children)
        },
        hasChildren() {
            return this.menuData.filter(item => item.children)
        }
    }
}   
</script>

<style>
* {
    padding: 0;
    margin: 0;
    user-select: none;
}

.el-header {
    width: 100%;
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
</style>