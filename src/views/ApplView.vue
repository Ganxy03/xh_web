<template>
    <div>
        <div style="text-align: left;">
            <h2>【测试】2023年社团申请入组表</h2>
            <p style="color: hsl(0, 0%, 60%);font-size: 14px;">入口将在<span style="color: rgb(3, 194, 131);">2023年12月31日</span>关闭，请及时申请！</p>
            <div style="color: #9a9a9a;">
                <h5 style="border-left: 2px solid #10cf59;padding-left: 5px;margin: 10px 0;">当前状态</h5>
                <p style="border: 1px solid #e3e3e3;padding: 10px;">申请状态：<span v-if="posted === false">未申请</span><span v-if="posted === true">已申请</span></p>
            </div>
        </div>
        <div>
            <h5 style="border-left: 2px solid #10cf59;padding-left: 5px;margin: 10px 0;text-align: left;color: #9a9a9a;">申请信息</h5>
            <el-descriptions style="width: 750px;" class="margin-top" title="个人信息" :column="3" border>
                <template slot="extra">
                    <el-button @click="editForm" type="primary" size="small">编辑/修改</el-button>
                </template>
                <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-user"></i>
                        姓名
                    </template>
                    {{ user.name }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-mobile-phone"></i>
                        学号
                    </template>
                    {{ user.sno }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-location-outline"></i>
                        班级
                    </template>
                    {{ user.class }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-mobile-phone"></i>
                        手机号
                    </template>
                    {{ user.phone }}
                </el-descriptions-item><el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-location-outline"></i>
                        邮箱
                    </template>
                    {{ user.mail }}
                </el-descriptions-item>
                <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-tickets"></i>
                        备注
                    </template>
                    <el-tag size="small">无</el-tag>
                </el-descriptions-item>
                <!-- <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-office-building"></i>
                        联系地址
                    </template>
                    江苏省苏州市吴中区吴中大道 1188 号
                </el-descriptions-item> -->
            </el-descriptions>
        </div>
        <div>
            <!-- <h5 style="text-align: left;">其他信息</h5> -->
            <el-descriptions style="width: 750px;margin: 10px 0;">
                <el-descriptions-item>
                    <template slot="label">
                        <i class="el-icon-location-outline"></i>
                        个人简介
                    </template>
                    <!-- <el-input
                        type="textarea"
                        v-model="inputText"
                        @input="updateRemainingChars"
                    >
                        
                    </el-input>
                    <template>
                        <span>{{ remainingChars }}/{{ maxChars }}</span>
                    </template> -->
                    <!-- <textarea placeholder="请输入您要填写的个性签名" maxlength="30" autofocus="true" v-model="val"></textarea>
                    <span class="tips">
                        可输入
                        <b :class="{'remnant':remnant.length!=0,'zero':remnant.length==0}">{{remnant}}</b>个字。
                    </span> -->
                    <div class="wrapper">
                        <div class="parents">
                            <textarea placeholder="请输入你的个人介绍（不少于30字）" maxlength="300" autofocus="true" v-model="val"></textarea>
                            <span class="tips">
                                可输入
                                <b :class="{'remnant':remnant.length!=0,'zero':remnant.length==0}">{{remnant}}</b>个字
                            </span>
                        </div>
                    </div>
                </el-descriptions-item>
            </el-descriptions>
        </div>
        <div>
            <h5 style="border-left: 2px solid #10cf59;padding-left: 5px;margin: 10px 0;text-align: left;color: #9a9a9a;">其他信息</h5>
            <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList">
                <el-button size="small" type="primary">上传附件</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </div>
        <el-button style="float: right;" type="primary" size="small" @click="submit">提交</el-button>
        <a href="/apply"><el-button style="float: left;" size="small">返回</el-button></a>

        <el-dialog title="信息修改" :visible.sync="dialogFormVisible">
            <el-form :model="user">
                <el-form-item label="名字">
                    <el-input v-model="user.name" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="学号">
                    <el-input v-model="user.sno" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="班级">
                    <el-input v-model="user.class" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="手机号">
                    <el-input v-model="user.phone" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="user.mail" autocomplete="off"></el-input>
                </el-form-item>
                <!-- <el-form-item label="备注">
                    <el-input v-model="user.name" autocomplete="off"></el-input>
                </el-form-item> -->
                <!-- <el-form-item label="活动区域">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item> -->
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>

    
</template>
<script>
// import marked from 'marked';
export default {
    data() {
        return {
            val: "",
            maxLength: 300,
            user: {
                name: '',
                sno: '',
                sex: '',
                class: '',
                phone: '',
                mail: ''
            },
            fileList: [],
            dialogFormVisible: false,
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            },
            posted: false
        }
    },
    created() {
        this.get_user_info()
        const posted = localStorage.get("post_info")
        if(!posted) {
            this.posted = true
        }
    },
    methods: {
        editForm() {
            this.dialogFormVisible = true
        },
        get_user_info() {
            this.user.name = localStorage.getItem("name")
            this.user.sno = localStorage.getItem("sno")
            this.user.class = localStorage.getItem("belong")
            this.user.phone = localStorage.getItem("phone")
            this.user.mail = localStorage.getItem("mail")
        },
        //暂定
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        submit() {
            // console.log(this.user)
            // const html = marked(this.val);
            // console.log(this.val);
            const value = {
                name: this.user.name,
                info: this.val,
                sno: this.user.sno,
                belong: this.user.class,
                phone: this.user.phone,
                mail: this.user.mail
            }
            // console.log(value)
            if(value.info) {
                fetch("http://124.221.138.245:31014/post-info", {
                    method: 'POST',
                    headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(value)
                })
                .then(response => response.json())
                .then(res => {
                    console.log(res)
                    localStorage.setItem('post_info',this.val,)
                    this.$message({
                        type: 'success',
                        message: '提交成功!'
                    });
                    this.val = ''
                })
            } else {
                this.$message({
                    message: '不能为空噢',
                    type: 'warning'
                });
                return
            }
        },
        // eslint-disable-next-line
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
        },
    },
    computed: {
        remnant() {
            return this.maxLength - this.val.length;
        }
    }
}
</script>

<style>

.wrapper {
  border-top: 1px solid #999;
  padding: 30px;
  width: 550px;
}
.parents {
  width: 100%;
  height: 80px;
  position: relative;
}
textarea {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.tips {
  position: absolute;
  bottom: 0;
  right: 0;

}
.remnant {
    color: #9a9a9a;
}
.zero{
    color: #9a9a9a;
}
</style>