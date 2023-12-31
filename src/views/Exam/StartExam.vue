<template>
    <div>
        <el-card class="start-exam">
            <div class="card-top">
                <h4 style="text-align: left;font-weight: 400;color: #a1a1a1;font-size: 13px;">祝各位考的都会 蒙的都对</h4>
            </div>
            <div class="left-setqus">
                {{ this.tihao+1 }}
                {{ this.currentQues.name }}<br>
                {{ this.currentQues.a }}<br>
                {{ this.currentQues.b }}<br>
                {{ this.currentQues.c }}<br>
                {{ this.currentQues.d }}<br>
                <div style="margin-bottom: 10px;"></div>
                <!-- Answer:{{ this.currentQues.answer }}<br> -->
                <el-radio @change="save_radio" v-model="radio" label="A">A</el-radio>
                <el-radio @change="save_radio" v-model="radio" label="B">B</el-radio>
                <el-radio @change="save_radio" v-model="radio" label="C">C</el-radio>
                <el-radio @change="save_radio" v-model="radio" label="D">D</el-radio>
                <div style="margin-bottom: 10px;"></div>
                <el-button v-if="this.previous === true" @click="previousone">上一题</el-button>
                <el-button v-if="this.over === false" @click="nextone" type="primary">下一题</el-button>
                <el-button v-if="this.over === true" @click="submit" type="primary">提交</el-button>
                <el-link @click="judge" class="ensure">确定</el-link>
                <el-link @click="showAnswer" class="ensure">答案</el-link>
                <p v-if="this.showAn === true">答案是：{{ this.qusAnswer }}</p>
                <!-- <div v-for="(item, index) in quesList" :key="index">
                    {{ item }}
                </div> -->
                 <!--v-if="screenWidth < 1000"-->
                <div class="history-box">
                    <h3 class="history-tt">历史记录</h3>
                    <div class="key-box">
                        <span @click="view_key" class="show-key key-left"><i class="el-icon-link">查看Qus Key</i></span>
                        <!--&nbsp;&nbsp;&nbsp;&nbsp;<span @click="search_key" class="show-key key-right"><i class="el-icon-search"></i>查询Qus key</span>-->
                    </div>
                    <span style="color: #9a9a9a;font-size: 13px;cursor: pointer;" @click="reload">刷新</span>
                    <p style="border: 1px solid #a1a1a1;color: #9a9a9a;width: 100%;text-align: center;" v-if="history_err === true">暂无历史记录 快去做题吧&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span @click="loadPageData()" style="cursor: pointer;"><br>(有记录没显示手动刷新一下 待改)</span></p>
                    <ul  class="list-box">
                        <template v-for="item in this.historyList">
                            <li v-if="history_err === false" :key="item.id" @click="openHistory(item.qus_list,item.user_result,item.time,item.correct_num)" class="list-item">
                                {{ item.time }}
                            </li>
                        </template>
                    </ul>
                    <el-pagination
                        small
                        layout="prev, pager, next"
                        :total="this.page_total"
                        :page-size="this.pageSize"
                        @current-change="handleCurrentChange">
                    </el-pagination>
                    <!-- <span>{{ this.history_total }}</span> -->
                </div>
                <!-- <div v-if="screenWidth > 1000" class="img-group">
                    <img src="../../assets/img/二维码.png" alt="">
                    <p style="color: #a1a1a1;">欢迎加群交流</p>
                    <p style="color: #a1a1a1;" class="dont-show">262937049</p>
                </div> -->
            </div>
            <ul class="qus-list">
                <!-- <li v-if="!this.userResult[item.id]" v-for="item in item_no" :key="item.id" @click="showData(item.id)" :class="{'item-selected': currentIndex === item.id}" class="item-no">{{ item.id }}</li> -->
                <template v-for="item in item_no">
                    <li v-if="!userResult[item.id]" :key="item.id" @click="showData(item.id)" :class="{'item-selected': currentIndex === item.id}" class="item-no">{{ item.id+1 }}</li>
                    <li v-if="userResult[item.id]" :key="item.id" @click="showData(item.id)" class="item-no item-no-active">{{ item.id+1 }}</li>
                </template>
                <!-- <li v-if="!this.userResult[0]" @click="showData(0)" class="item-no">1</li>
                <li v-if="this.userResult[0]" @click="showData(0)" class="item-no item-no-active">1</li>
                <li v-if="!this.userResult[1]" @click="showData(1)" class="item-no">2</li>
                <li v-if="this.userResult[1]" @click="showData(1)" class="item-no item-no-active">2</li>
                <li v-if="!this.userResult[2]" @click="showData(2)" class="item-no">3</li>
                <li v-if="this.userResult[2]" @click="showData(2)" class="item-no item-no-active">3</li>
                <li v-if="!this.userResult[3]" @click="showData(3)" class="item-no">4</li>
                <li v-if="this.userResult[3]" @click="showData(3)" class="item-no item-no-active">4</li>
                <li v-if="!this.userResult[4]" @click="showData(4)" class="item-no">5</li>
                <li v-if="this.userResult[4]" @click="showData(4)" class="item-no item-no-active">5</li>
                <li v-if="!this.userResult[5]" @click="showData(5)" class="item-no">6</li>
                <li v-if="this.userResult[5]" @click="showData(5)" class="item-no item-no-active">6</li>
                <li v-if="!this.userResult[6]" @click="showData(6)" class="item-no">7</li>
                <li v-if="this.userResult[6]" @click="showData(6)" class="item-no item-no-active">7</li>
                <li v-if="!this.userResult[7]" @click="showData(7)" class="item-no">8</li>
                <li v-if="this.userResult[7]" @click="showData(7)" class="item-no item-no-active">8</li>
                <li v-if="!this.userResult[8]" @click="showData(8)" class="item-no">9</li>
                <li v-if="this.userResult[8]" @click="showData(8)" class="item-no item-no-active">9</li>
                <li v-if="!this.userResult[9]" @click="showData(9)" class="item-no">10</li>
                <li v-if="this.userResult[9]" @click="showData(9)" class="item-no item-no-active">10</li>
                <li v-if="!this.userResult[10]" @click="showData(10)" class="item-no">11</li>
                <li v-if="this.userResult[10]" @click="showData(10)" class="item-no item-no-active">11</li>
                <li v-if="!this.userResult[11]" @click="showData(11)" class="item-no">12</li>
                <li v-if="this.userResult[11]" @click="showData(11)" class="item-no item-no-active">12</li>
                <li v-if="!this.userResult[12]" @click="showData(12)" class="item-no">13</li>
                <li v-if="this.userResult[12]" @click="showData(12)" class="item-no item-no-active">13</li>
                <li v-if="!this.userResult[13]" @click="showData(13)" class="item-no">14</li>
                <li v-if="this.userResult[13]" @click="showData(13)" class="item-no item-no-active">14</li>
                <li v-if="!this.userResult[14]" @click="showData(14)" class="item-no">15</li>
                <li v-if="this.userResult[14]" @click="showData(14)" class="item-no item-no-active">15</li>
                <li v-if="!this.userResult[15]" @click="showData(15)" class="item-no">16</li>
                <li v-if="this.userResult[15]" @click="showData(15)" class="item-no item-no-active">16</li>
                <li v-if="!this.userResult[16]" @click="showData(16)" class="item-no">17</li>
                <li v-if="this.userResult[16]" @click="showData(16)" class="item-no item-no-active">17</li>
                <li v-if="!this.userResult[17]" @click="showData(17)" class="item-no">18</li>
                <li v-if="this.userResult[17]" @click="showData(17)" class="item-no item-no-active">18</li>
                <li v-if="!this.userResult[18]" @click="showData(18)" class="item-no">19</li>
                <li v-if="this.userResult[18]" @click="showData(18)" class="item-no item-no-active">19</li>
                <li v-if="!this.userResult[19]" @click="showData(19)" class="item-no">20</li>
                <li v-if="this.userResult[19]" @click="showData(19)" class="item-no item-no-active">20</li>
                <li v-if="!this.userResult[20]" @click="showData(20)" class="item-no">21</li>
                <li v-if="this.userResult[20]" @click="showData(20)" class="item-no item-no-active">21</li>
                <li v-if="!this.userResult[21]" @click="showData(21)" class="item-no">22</li>
                <li v-if="this.userResult[21]" @click="showData(21)" class="item-no item-no-active">22</li>
                <li v-if="!this.userResult[22]" @click="showData(22)" class="item-no">23</li>
                <li v-if="this.userResult[22]" @click="showData(22)" class="item-no item-no-active">23</li>
                <li v-if="!this.userResult[23]" @click="showData(23)" class="item-no">24</li>
                <li v-if="this.userResult[23]" @click="showData(23)" class="item-no item-no-active">24</li>
                <li v-if="!this.userResult[24]" @click="showData(24)" class="item-no">25</li>
                <li v-if="this.userResult[24]" @click="showData(24)" class="item-no item-no-active">25</li>
                <li v-if="!this.userResult[25]" @click="showData(25)" class="item-no">26</li>
                <li v-if="this.userResult[25]" @click="showData(25)" class="item-no item-no-active">26</li>
                <li v-if="!this.userResult[26]" @click="showData(26)" class="item-no">27</li>
                <li v-if="this.userResult[26]" @click="showData(26)" class="item-no item-no-active">27</li>
                <li v-if="!this.userResult[27]" @click="showData(27)" class="item-no">28</li>
                <li v-if="this.userResult[27]" @click="showData(27)" class="item-no item-no-active">28</li>
                <li v-if="!this.userResult[28]" @click="showData(28)" class="item-no">29</li>
                <li v-if="this.userResult[28]" @click="showData(28)" class="item-no item-no-active">29</li>
                <li v-if="!this.userResult[29]" @click="showData(29)" class="item-no">30</li>
                <li v-if="this.userResult[29]" @click="showData(29)" class="item-no item-no-active">30</li> -->
                <p style="font-size: 13px;color: #a1a1a1;margin-top: 15px;">至今已经有{{ this.history_total }}次提交</p>
                <div v-if="screenWidth > 1000" class="img-group">
                    <img src="../../assets/img/二维码.png" alt="">
                    <p style="color: #a1a1a1;">欢迎加群交流</p>
                    <p style="color: #a1a1a1;" class="dont-show">262937049</p>
                </div>
            </ul>
        </el-card>
        <el-dialog
        title="结果"
        margin-top= "30vh"
        :visible.sync="dialogVisible"
        :before-close="handleClose">
            <span>恭喜你答对 {{ this.rightNums }}题 继续加油吧！</span>
            <span slot="footer" class="dialog-footer">
                <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
                <el-button type="primary" @click="again">再 来</el-button>
            </span>
        </el-dialog>
        <!-- <el-dialog :title="`历史记录:` + this.history_item_time" :visible.sync="dialogTableHistory">
            <el-table :data="history_item">
                <el-table-column property="0.name" label="题目"></el-table-column>
                <el-table-column property="0.a" label="a"></el-table-column>
                <el-table-column property="0.b" label="b"></el-table-column>
                <el-table-column property="0.c" label="c"></el-table-column>
                <el-table-column property="0.d" label="d"></el-table-column>
                <el-table-column property="userAnswer" label="你的答案"></el-table-column>
                <el-table-column property="0.answer" label="正确答案"></el-table-column>
            </el-table>
        </el-dialog> -->
        <el-dialog :title="`历史记录:` + this.history_item_time" :visible.sync="dialogTableHistory">
            <ul class="histor-qus">
                <!-- <span @click="test">test</span> -->
                <span><el-tag type="success">答对：{{ this.correct_num }}</el-tag></span> <span><el-tag type="danger">答错：{{ 30-this.correct_num }}</el-tag></span> <el-button @click="exportQuestions" size="mini" style="float: right;">导出题目</el-button><br>
                <span style="color: #9a9a9a;font-size: 13px;text-align: center;">电脑键盘上下键可实现切换<br>没有显示等一会再点（加载有点慢）</span>
                <li style="text-align: left;padding-bottom: 15px" v-for="(item, index) in history_item" :key="item.id" v-show="current_HistoryIndex === index">
                    <!-- {{ item[0].id }} -->
                    {{ index+1 }}、
                    {{ item[0].name }}<br>
                    {{ item[0].a }}<br>
                    {{ item[0].b }}<br>
                    {{ item[0].c }}<br>
                    {{ item[0].d }}<br>
                    正确答案：{{ item[0].answer }}<br>
                    你的答案：{{ item.userAnswer }}<br>
                    <div style="position: relative;">
                        <div style="position: absolute;right: 0;bottom: 15px;cursor: pointer;">
                            <span @click="goToPreviousQuestion">上一题</span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span @click="goToNextQuestion">下一题</span>
                        </div>
                    </div>

                </li>
            </ul>
        </el-dialog>
    </div>
</template>
<script>
import Fingerprint2 from 'fingerprintjs2';
export default {
    data() {
        return {
            quesList: [],
            currentQues: "",
            currentPage: 1,
            pageSize: 5,
            history_total: '',
            radio: '',
            currentIndex: 0,
            current_HistoryIndex: 0,
            over: false,
            previous: false,
            qusAnswer: '',
            userResult: [],
            showAn: false,
            dialogVisible: false,
            rightNums: 0,
            passNums: 0,
            tihao: 0,
            item_no: [
                {
                    id: 0
                },
                {
                    id: 1
                },
                {
                    id: 2
                },
                {
                    id: 3
                },
                {
                    id: 4
                },
                {
                    id: 5
                },
                {
                    id: 6
                },
                {
                    id: 7
                },
                {
                    id: 8
                },
                {
                    id: 9
                },
                {
                    id: 10
                },
                {
                    id: 11
                },
                {
                    id: 12
                },
                {
                    id: 13
                },
                {
                    id: 14
                },
                {
                    id: 15
                },
                {
                    id: 16
                },
                {
                    id: 17
                },
                {
                    id: 18
                },
                {
                    id: 19
                },
                {
                    id: 20
                },
                {
                    id: 21
                },
                {
                    id: 22
                },
                {
                    id: 23
                },
                {
                    id: 24
                },
                {
                    id: 25
                },
                {
                    id: 26
                },
                {
                    id: 27
                },
                {
                    id: 28
                },
                {
                    id: 29
                }
            ],
            history: [
                {
                    id: 1,
                    date: '2022/12/21 16:33:11'
                },
                {
                    id: 2,
                    date: '2022/12/21 16:45:32'
                },
                {
                    id: 3,
                    date: '2022/12/21 16:51:12'
                },
                {
                    id: 4,
                    date: '2022/12/21 16:52:24'
                },
                {
                    id: 5,
                    date: '2022/12/21 16:56:41'
                },
                {
                    id: 6,
                    date: '2022/12/21 16:56:41'
                }
            ],
            fingerprint: '',
            historyList: [],
            dialogTableHistory: false,
            history_item: [],
            history_item_time: '',
            page_total: 0,
            history_err: false,
            correct_num: 0,
            // props: {
            //     total: {
            //         type: String,
            //         default: ''
            //     }
            // }
        }
    },
    created() {
        this.getNums()
        // localStorage.setItem("userAnswer", JSON.stringify({}))
        this.getQues()
        // console.log("11:"+localStorage.getItem("userAnswer[0]"))
        // this.loadAnswer(this.currentIndex)
        this.getAllHistroy()
        this.loadPageData()
        // this.getHistory()
        window.addEventListener('resize', this.handleResize);
        const fingerprint2Options = {}; // Fingerprint2的配置选项
        Fingerprint2.get(fingerprint2Options, (components) => {
            const fingerprint = Fingerprint2.x64hash128(components.map((pair) => pair.value).join(), 31);
            // console.log("设备指纹："+fingerprint);
            this.fingerprint = fingerprint
            // console.log(this.fingerprint)
            localStorage.setItem("fingerprint",fingerprint)
            // 将获取到的指纹值进行后续操作
        });
        // this.fingerprint = localStorage.getItem("fingerprint")
        // console.log(this.fingerprint)
        localStorage.setItem("userAnswer","null")
    },
    computed: {
        screenWidth() {
            return window.innerWidth;
        }
    },
    mounted() {
        window.addEventListener('keydown', this.handleKeyDown);
    },
    beforeUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    },
    // mounted() {
    //     // if (window.requestIdleCallback) {
    //     //     requestIdleCallback(this.getFingerprint);
    //     // } else {
    //     //     setTimeout(this.getFingerprint, 500);
    //     // }
    //     const fingerprint2Options = {}; // Fingerprint2的配置选项
    //     Fingerprint2.get(fingerprint2Options, (components) => {
    //         const fingerprint = Fingerprint2.x64hash128(components.map((pair) => pair.value).join(), 31);
    //         // console.log("设备指纹："+fingerprint);
    //         this.fingerprint = fingerprint
    //         localStorage.setItem("fingerprint",fingerprint)
    //         // 将获取到的指纹值进行后续操作
    //     });
    // },
    methods: {
        save_radio() {
            // console.log(value)
            // console.log(this.currentIndex)
            this.userResult[this.currentIndex] = this.radio
            localStorage.setItem("userAnswer",this.userResult)
        },
        exportQuestions() {

            this.$confirm('是否导出本记录题目？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'info'
                }).then(() => {
                    let content = '';
                    this.history_item.forEach((item, index) => {
                        const question = `${index + 1}、${item[0].name}\n${item[0].a}\n${item[0].b}\n${item[0].c}\n${item[0].d}\n正确答案：${item[0].answer}\n你的答案：${item.userAnswer}\n\n`;
                        content += question;
                    });
                    const blob = new Blob([content], { type: 'text/plain' });
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(blob);
                    link.download = 'questions.txt';
                    document.body.appendChild(link);
                    link.click();
                    URL.revokeObjectURL(link.href);
                    document.body.removeChild(link);
                    this.$message({
                        type: 'success',
                        message: '下载成功!'
                    });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消下载'
                    });          
            });
        },
        goToPreviousQuestion() {
            if (this.current_HistoryIndex > 0) {
            this.current_HistoryIndex--; // 减小当前题目索引
            }
        },
        goToNextQuestion() {
            if (this.current_HistoryIndex < this.history_item.length - 1) {
            this.current_HistoryIndex++; // 增加当前题目索引
            }
        },
        handleKeyDown(event) {
            if (event.key === 'ArrowDown') {
                this.current_HistoryIndex = Math.min(this.current_HistoryIndex + 1, this.history_item.length - 1);
            } else if (event.key === 'ArrowUp') {
                this.current_HistoryIndex = Math.max(this.current_HistoryIndex - 1, 0);
            }
        },
        reload() {

            // console.log(this.historyList)
            // this.loadPageData()
            location.reload()






            // console.log(this.history_item[0])
            // const plainObject = JSON.parse(JSON.stringify(this.history_item[0]));
            // this.history_item = plainObject
            // console.log(plainObject)

            // const plainObject = {};
            //     for (let i = 0; i < 30; i++) {
            //     plainObject[i] = JSON.parse(JSON.stringify(this.history_item[i]));
            // }
            // this.history_item = plainObject
            // console.log(plainObject)

            // const history_item = {
            // "0": {
            //     "id": 104,
            //     "name": "14体现我国政府对计算机软件知识产权进行保护的第一部政策法规是____。",
            //     "type": "1",
            //     "a": "A、《计算机软件保护条例》　　 ",
            //     "b": "B、《中华人民共和国技术合同法》",
            //     "c": "C、《计算机软件著作权登记》 ",
            //     "d": "D、《中华人民共和国著作权法》",
            //     "answer": "A",
            //     "detail": null,
            //     "time": null
            // },
            // "userAnswer": "A"
            // };
            // const updated_history_item = {
            //     ...Object.values(history_item)[0],
            //     userAnswer: history_item.userAnswer
            // };
            // console.log(updated_history_item);
        },
        getQues() {
            // http://124.221.138.245:31014/question/random
            fetch("http://124.221.138.245:31014/question/random")
            .then(response => response.json())
            .then(res => {
                this.quesList = res
                // console.log(this.quesList)
                this.currentQues = this.quesList[0]
            })
        },
        showData(index) {
            this.tihao = index
            this.showAn = false
            // this.radio=''
            // console.log(index)
            // console.log(this.quesList[index])

            const temp = localStorage.getItem("userAnswer")
            if(temp !== ''||temp !== null) {
                if(temp!='') {
                    const values = temp.split(',');
                    this.radio = values[index]
                }
            }
            // console.log(values[this.currentIndex-1])
            

            this.over = false
            this.currentIndex = index;
            this.currentQues = this.quesList[index]
            if (index == 29) {
                this.over = true
                this.previous = true
            } else if(index != 0) {
                this.previous = true
            } else if(index == 0) {
                this.previous = false
            }
            // if (index < 0) {
            //     this.currentIndex = this.questions.length - 1;
            // } else if (index >= 5) {
            //     this.currentIndex = 0;
            // } else if (index == 4) {
            //     this.over = true
            // } else {
            //     this.currentIndex = index;
            // }
        },
        judge() {

            this.userResult[this.currentIndex] = this.radio
            localStorage.setItem("userAnswer",this.userResult)

            // if(this.userResult === '') {
            //     localStorage.setItem("userAnswer","null")
            // } else {
            //     localStorage.setItem("userAnswer",this.userResult)
            // }


            this.qusAnswer = this.currentQues.answer
            // console.log("标准答案："+this.qusAnswer)

            const temp = localStorage.getItem("userAnswer")
            const values = temp.split(',');
            // console.log(values[this.currentIndex-1])
            this.radio = values[this.currentIndex]
            if(this.radio == this.qusAnswer) {
                // console.log("right")
                this.$message({
                  message: 'Binggo!答对了',
                  type: 'success'
                });
            } else {
                // console.log("wrong")
                this.$message({
                  message: '啊哦~不对哦',
                  type: 'warning'
                });
                console.log("标准答案："+this.qusAnswer)
            }
        },
        previousone() {
            
            this.showAn = false
            this.tihao = this.tihao-1

            // this.userResult[this.currentIndex] = this.radio
            // localStorage.setItem("userAnswer",this.userResult)
            // localStorage.setItem("userAnswer", JSON.stringify({}))
            // this.loadAnswer()
            // const currentIndex = this.currentIndex-1
            // console.log("第："+ currentIndex)

            const temp = localStorage.getItem("userAnswer")
            const values = temp.split(',');
            // console.log(values[this.currentIndex-1])
            this.radio = values[this.currentIndex-1]
            // this.userResult[this.currentIndex] = this.radio
            // console.log(this.userResult[this.currentIndex])
            // this.radio = this.userResult[this.currentIndex]

            // this.userResult[this.currentIndex] = this.radio
            // // console.log(this.userResult[this.currentIndex])
            // // this.radio = this.userResult[this.currentIndex]
            // localStorage.setItem("userAnswer",this.userResult)
            // let userAnswer = localStorage.getItem('userAnswer');
            // // let value = userAnswer[this.currentIndex];
            // let array = userAnswer.split(",");
            // let result = array.join("");
            // console.log(result[this.currentIndex]);



            // console.log(this.currentIndex)
            // if(this.currentIndex === 0) {
            //     this.previous = false
            // } else {
            //     this.previous = true
            // }
            this.over = false
            this.currentIndex = this.currentIndex - 1;
            this.currentQues = this.quesList[this.currentIndex]
            if(this.currentIndex == 0) {
                this.previous = false
            } else if(this.currentIndex == 29) {
                this.over = true
            } else if (this.currentIndex != 0) {
                this.previous = true
            } else if (this.currentIndex != 29) {
                this.over = false
            }
        },
        nextone() {
            // if(this.radio == '') {
            //     this.$message({
            //       message: '这题没选哦！',
            //       type: 'warning'
            //     });
            // }
            
            
            this.tihao = this.tihao+1



            this.showAn = false

            // console.log("上一题："+this.radio)
            // console.log(this.currentIndex)

            // this.userResult[this.currentIndex] = this.radio

            // console.log(this.userResult[this.currentIndex])

            // this.radio = this.userResult[this.currentIndex]
            // localStorage.setItem("userAnswer",this.userResult)

            this.radio =  ''

            const temp = localStorage.getItem("userAnswer")
            const values = temp.split(',');
            // console.log(values[this.currentIndex-1])
            this.radio = values[this.currentIndex + 1]


            // console.log("用户答案："+this.userResult)
            // const local_userA = localStorage.getItem("userAnswer")
            // console.log(local_userA)
            this.currentIndex = this.currentIndex + 1;
            this.currentQues = this.quesList[this.currentIndex]
            if(this.currentIndex == 0) {
                this.previous = false
            } else if(this.currentIndex == 29) {
                this.over = true
            } else if (this.currentIndex != 0) {
                this.previous = true
            }
        },
        saveAnswer() {
            // const answer = this.userAnswer;
            // answer[this.currentIndex] = this.radio;
            // localStorage.setItem('userAnswer', JSON.stringify(answer));
            // answer
            console.log("Hello")
            // localStorage.setItem("userAnswer",this.userResult)
        },
        submit() {
            
            const temp = localStorage.getItem("userAnswer")
            const values = temp.split(',');
            // console.log("用户的答案：" + values)

            // if(values.length < 5) {
                
            //     this.$message({
            //       message: '不能提交哦~有题目没做',
            //       type: 'warning'
            //     });
            // }
        



            // this.userResult[this.currentIndex] = this.radio
            // localStorage.setItem("userAnswer",this.userResult)

            // this.userResult[this.currentIndex] = this.radio
            // console.log(this.userResult)


            // this.quesList.answer
            const newAnswers = this.quesList.map(item => item.answer);
            // console.log("标准答案："+newAnswers)



            const count = values.reduce((acc, cur, index) => {
                if (cur === newAnswers[index]) {
                    return acc + 1;
                }
                return acc;
            }, 0);

            this.rightNums = count
        
            
            // const idArray = this.quesList.map(item => item.id);
            const idString_qus = this.quesList.map(item => item.id).join(',');
            // const idArray_qus = idString_qus.split(',').map(Number);
            // console.log("拆分前"+idString_qus)
            // console.log("拆分"+idArray_qus)
            const idString_res = this.userResult.join(',');
            // console.log(this.quesList)
            // console.log(this.userResult)
            const value = {
                correct_num: this.rightNums,
                finger_print: this.fingerprint,
                qus_list: idString_qus,
                user_result: idString_res
            }
            // console.log(JSON.stringify(value))
            // console.log(this.userResult)
            this.userResult[this.currentIndex] = this.radio
            localStorage.setItem("userAnswer",this.userResult)

            this.$confirm('确认提交？提交后只能看到分数了哦')
            .then(_ => {
                fetch("http://124.221.138.245:31014/history", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(value)
                })
                .then(response => response.json())
                .then(res => {
                    // console.log(res)
                })
                .catch(error => {
                    // 处理错误
                    console.log(error)
                  });



                fetch('http://124.221.138.245:31014/statistics/add', {
                    method: 'POST',
                })
                .then((response) => response.text())
                // .then((data) => console.log(data))
                // .catch((error) => console.error(error));
                // console.log("yes")
                // const temp = localStorage.getItem("userAnswer")
                // const values = temp.split(',');
                // // console.log("用户的答案：" + values)

                // // if(values.length < 5) {
                    
                // //     this.$message({
                // //       message: '不能提交哦~有题目没做',
                // //       type: 'warning'
                // //     });
                // // }
            



                // // this.userResult[this.currentIndex] = this.radio
                // // localStorage.setItem("userAnswer",this.userResult)

                // // this.userResult[this.currentIndex] = this.radio
                // // console.log(this.userResult)


                // // this.quesList.answer
                // const newAnswers = this.quesList.map(item => item.answer);
                // // console.log("标准答案："+newAnswers)



                // const count = values.reduce((acc, cur, index) => {
                //     if (cur === newAnswers[index]) {
                //         return acc + 1;
                //     }
                //     return acc;
                // }, 0);

                // this.rightNums = count
                // console.log("恭喜你答对了" + count + "个");
                this.$message({
                  message: '恭喜你答对了' + count + '个',
                  type: 'success'
                });
                this.dialogVisible = true
                


            })
            .catch(_ => {
                console.log("no")
            });


            
        },
        loadAnswer(index) {
            // console.log("11:" + localStorage.getItem("userAnswer[" + this.currentIndex + "]"));
            // let userAnswer = JSON.parse(localStorage.getItem('userAnswer'));


            let userAnswer = JSON.parse(localStorage.getItem('userAnswer'));
            // localStorage.getItem('userAnswer')
            // let userAnswer = localStorage.getItem('userAnswer')
            let value = userAnswer[this.currentIndex];
            console.log(value)

            const answer = JSON.parse(localStorage.getItem('userAnswer')) || [];
            console.log(answer[index])
        },
        showAnswer() {
            this.qusAnswer = this.currentQues.answer
            if(this.showAn === false) {
                this.showAn = true
            } else {
                this.showAn = false
            }
        },
        handleClose() {
            this.$confirm('确认关闭？')
            .then(_ => {
                localStorage.clear();
                location.reload()
                this.getQues()
            })
            .catch(_ => {});
        },
        again() {
            // this.getQues()
            location.reload()
            localStorage.clear();
            // loadPageData()
            // this.loadPageData()


            // const fingerprint = localStorage.getItem("fingerprint")
            // const start = (this.currentPage - 1) * this.pageSize;
            // const end = start + this.pageSize;
            // fetch("http://124.221.138.245:31014/history/" + encodeURIComponent(fingerprint), {
            //     method: "GET"
            // })
            // .then((response) => {
            //     if (response.status === 404) {

            //     } else {
            //         return response.json();
            //     }
            // })
            // .then((data) => {
                
            //     if (Array.isArray(data) && data.slice) {
            //         this.historyList = data.slice(start, end);
            //         this.page_total = data.length;
            //     } else {
            //         this.history_err = true
            //     }

            // });


            // console.log(this.history_item)
            // console.log(this.historyList)
            this.dialogVisible =false
        },
        getNums() {
            fetch('http://124.221.138.245:31014/statistics/getnums')
            .then((response) => response.text())
            .then((data) => {
                this.passNums = data
            })
            .catch((error) => console.error(error));

        },
        change_color() {
            console.log(this.userResult)
        },


        handleResize() {
            // 重新计算窗口宽度
            this.$nextTick(() => {
                this.screenWidth;
            });
        },
        handleCurrentChange(val) {
            // console.log(`当前页: ${val}`);
            // console.log(val);
            this.currentPage = val;
            this.loadPageData();
        },
        loadPageData() {
            
            const fingerprint = localStorage.getItem("fingerprint")
            const start = (this.currentPage - 1) * this.pageSize;
            const end = start + this.pageSize;


            // fetch('http://124.221.138.245:31014/histories')
            // .then((response) => response.json())
            // .then((data) => {
            //     // console.log(data)
            //     this.historyList = data.slice(start, end); // 截取当前页码对应的数据
            //     this.history_total = data.length; // 更新总条数
            // });


            // .then((response) => response.json())
            // .then((data) => {
            //     console.log(data)
            //     this.historyList = data
            //     const length = this.historyList.length;
            //     this.history_total = length
            // })
            // console.log(fingerprint)






            fetch("http://124.221.138.245:31014/history/" + encodeURIComponent(fingerprint), {
                method: "GET"
            })
            .then((response) => {
                if (response.status === 404) {
                    // console.log("404:无历史记录");
                    // this.history_err = true
                } else {
                    return response.json();
                }
            })
            .then((data) => {
                // console.log(data);
                // this.historyList = data;



                // this.historyList = data.slice(start, end);
                // this.page_total = data.length; 


                if (Array.isArray(data) && data.slice) {
                    this.historyList = data.slice(start, end);
                    this.page_total = data.length;
                    // console.log(this.historyList)
                } else {
                    // console.log("Invalid data format");
                    this.history_err = true
                }

            });


            // fetch("http://124.221.138.245:31014/history/" + encodeURIComponent(fingerprint), {
            //     method: "GET"
            // })
            // .then(async (response) => {
            //     if (response.status === 404) {
            //         // console.log("404: 无历史记录");
            //     } else {
            //     const data = await response.json();
            //         // 处理返回的数据
            //         if (Array.isArray(data) && data.slice) {
            //             this.historyList = data.slice(start, end);
            //             this.page_total = data.length;
            //         } else {
            //             console.log("404")
            //             this.history_err = true
            //         }
            //     }
            // })
            // .catch((error) => {
            //     // 错误处理
            //     // 在这里可以选择不显示错误信息或显示自定义的错误提示
            //     // const err = error
            //     // err = ''
            //     // console.log("404")
            //     // this.history_err = true
            // });


        },

        view_key() {
            // this.$alert('这是一段内容', '查看Key', {
            // confirmButtonText: '确定',
            // callback: action => {
            //     this.$message({
            //     type: 'info',
            //     message: `action: ${ action }`
            //     });
            // }
            // });

            // <div style="border: 2px solid #0c13d7;width: 300px;height: 120px;"><p>this.fingerprint</p><p><span>有效</span><span>记录</span></p></div>
            // this.$alert('<span style="text-align: center;font-size:20px;">' + this.fingerprint + '</span>', '查看key', {
            this.$alert('<div style="border: 2px solid #0c13d7;width: 100%;height: 80px;text-align:center;font-size: 18px"><p><li style="list-style-color: green;">有效</li>' + this.fingerprint + '</p><p style="text-align: center;font-size: 13px;color: #9a9a9a;">此字符串为设备标识（作搜索记录用,待完善...）</p></div>', '查看key', {
                dangerouslyUseHTMLString: true
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '关闭'
                });       
            });
        },

        search_key() {
            this.$prompt('请输入Qus Key', '查询key', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
            // inputErrorMessage: '邮箱格式不正确'
            }).then(({ value }) => {
            this.$message({
                type: 'success',
                message: '你的key是: ' + value
            });
            }).catch(() => {
            this.$message({
                type: 'info',
                message: '取消查询'
            });       
            });
        },
        getAllHistroy() {
            fetch('http://124.221.138.245:31014/histories')
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                // this.historyList = data
                const length = data.length;
                this.history_total = length
            })
        },
        getHistory() {
            fetch('http://124.221.138.245:31014/history'+this.fingerprint)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                this.historyList = data
                const length = this.historyList.length;
                this.history_total = length
            })
        },
        
        openHistory(qus,use,tm,num) {
            this.dialogTableHistory = true
            this.history_item_time = tm
            this.correct_num = num
            // if (qus && use) {
            //     const qusArray = qus.split(",");
            //     const useArray = use.split(",");
            //     console.log(qusArray);
            //     console.log(useArray);
            //     const id = qusArray[0]
            //     fetch('http://124.221.138.245:31014/question/'+id)
            //     .then((response) => response.json())
            //     .then((data) => {
            //         console.log(data)
            //     })
            // }

            // if (qus && use) {
            // const qusArray = qus.split(",");
            // const useArray = use.split(",");
            // console.log(qusArray);
            // console.log(useArray);
            // const fetchQuestion = async (id) => {
            //     const response = await fetch(`http://124.221.138.245:31014/question/${id}`);
            //     const data = await response.json();
            //     return data;
            // };
            // Promise.all(qusArray.map(id => fetchQuestion(id)))
            //     .then(dataArray => {
            //     const history_item = dataArray.map(data => {
            //         // 根据需要进行数据重组
            //         // 例如：return { id: data.id, title: data.title, ... }
            //         return data;
            //     });
            //     console.log(history_item);
            //     this.history_item = history_item
            //     })
            //     .catch(error => {
            //     console.error(error);
            //     });
            // }
            console.log()
            if (qus && use) {
            const qusArray = qus.split(",");
            const useArray = use.split(",");
            
            const fetchQuestion = async (id) => {
                const response = await fetch(`http://124.221.138.245:31014/question/${id}`);
                const data = await response.json();
                return data;
            };
            
            Promise.all(qusArray.map(id => fetchQuestion(id)))
                .then(dataArray => {
                const history_item = dataArray.map((data, index) => {
                    const userAnswer = useArray[index] || ""; // 获取对应索引的use值，如果不存在则使用空字符串
                    return {
                    ...data,
                    userAnswer // 添加userAnswer属性
                    };
                });
                    // console.log(history_item);
                    this.history_item = history_item;
                })
                .catch(error => {
                    console.error(error);
                });
            }
            



        }





        // getFingerprint() {
        //     new Fingerprint2().get((result) => {
        //     // 在这里可以使用 result，它就是设备的指纹
        //         console.log(result);
        //     });
        // }

    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    }
}
</script>

<style>




.start-exam {
    width: 720px;
}

.card-top {
    width: 100%;
}

.left-setqus {
    width: 65%;
    height: 500px;
    /* background-color: red; */
    float: left;
    text-align: left;
}

.qus-list {
    width: 33%;
    height: 480px;
    /* background-color: blueviolet; */
    float: left;
    margin: 0;
    padding: 0;
    padding-top: 20px;
    border-left: 1px solid #e3e3e3;
}

.item-no {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 28px;
    height: 28px;
    background-color: #e6e6e6;
    display: inline-block;
    margin: 5px 2px;
    line-height: 28px;
    cursor: pointer;
    border: 1.5px solid #ccc;
}

.item-selected {
    background-color: brown;
}

.item-no-active {
    background-color: rgb(118, 118, 227);
}
.el-radio {
    margin-right: 20px
}

.el-radio__label {
    padding-left: 6px;
}

.ensure {
    float: right;
    margin-right: 15px;
    margin-top: 10px;
}

.el-dialog {
    margin-top: 120px;
}

.img-group img {
    width: 80%;
    margin-top: 30px;
    /* background-image: url("../../assets/img/二维码.png") */
}

.dont-show {
    display: none;
}

.history-box {
    margin-top: 10px;
    width: 100%;
    /* background-color: aquamarine; */
}

.history-tt {
    font-weight: 400;
    /* border-bottom: 1px solid #6a6a6a; */
}

.list-box {
    padding-left: 10%;
    width: 90%;
    /* background-color: burlywood; */
}

.list-item {
    width: 100%;
    background-color: cadetblue;
    cursor: pointer;
}

.key-box {
    height: 25px;
    width: 100%;
    /* background-color: blueviolet; */
}

.show-key {
    font-size: 13px;
    color: #9a9a9a;
    cursor: pointer;
}

.key-left {
    text-align: left;
}

.key-left {
    text-align: right;
}

.el-dialog__body {
    padding: 0 20px;
}

@media screen and (max-width: 768px) {
    .start-exam {
        width: 365px;
    }
    .img-group img {
        width: 80%;
        margin-top: 30px;
        /* background-image: url("../../assets/img/二维码.png") */
    }
    .dont-show {
        display: block;
    }

    .el-message-box {
        width: 100%;
        margin-top: 220px;
    }
    .el-dialog {
        width: 98%;
    }
}
</style>