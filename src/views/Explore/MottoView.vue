<template>
    <div>
        <span @click="change_save" class="mov-link">
            save
        </span>
        <span @click="change_look" class="mov-link">
            look
        </span>
        <div v-if="nav_mode === 0">
            <!-- save的内容 -->
            <el-form :model="form" ref="form">
                <el-form-item label="motto" prop="save_m">
                    <el-input v-model="form.content" type="textarea" placeholder="输入motto"></el-input>
                </el-form-item>
                <el-form-item label="form" prop="save_f">
                    <el-input v-model="form.author" placeholder="输入出处" style="margin-top: 10px"></el-input>
                </el-form-item>
            </el-form>
            <el-button style="margin-top: 10px;float: right;" type="primary" @click="save_motto">保存</el-button>
        </div>
        <div v-if="nav_mode !== 0">
            <!-- look的内容 -->
            <!-- <div style="height: 30px;border-bottom: 1px solid #333;width: 100%;text-align: left;">
                <h3>Motto</h3>
            </div> -->
            <el-table
           :data="tableData"
            stripe>
                <el-table-column
                  prop="content"
                  label="motto"
                  width="340px">
                </el-table-column>
           </el-table>

        </div>
    </div>
</template>


<style scoped>
.mov-link {
    cursor: pointer;
    color: rgb(15, 147, 229);
}

.look-card {
    min-width: 500px;
}

@media screen and (max-width: 768px) {
    .look-card {
        min-width: 340px;
    }
}
</style>

<script>

export default {
    data() {
        return {
            nav_mode: 0,
            motto: '',
            from: '',
            form : {
                content: '',
                author: '',
            },
            resform: [],
            tableData: []
        }
    },
    created() {
        this.get_motto()
    },
    methods: {
        change_save() {
            this.nav_mode = 0
        },
        change_look() {
            this.nav_mode = 1
        },
        get_motto() {
            fetch("http://xh-api.ganxy03.cn/mottos")
            .then(response => response.json())
            .then(res => {
                this.tableData = res
                console.log(this.tableData)
            })
        },
        save_motto() {
            // console.log(this.form)
            if(this.form.content === '' || this.form.author ===''){
                this.$message("不能为空哦！要写完")
                return;
            }
            fetch("http://xh-api.ganxy03.cn/motto", {
                method: 'post',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(this.form)
            })
            .then(response => response.json())
            .then(res => {
                console.log(res)
                this.$message({
                  message: '保存成功！',
                  type: 'success'
                });
                this.form = {}
            })
        }
    }
}
</script>
