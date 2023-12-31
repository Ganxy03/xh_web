<template>
    <div>
        <el-card class="welcome-exam">
            <h2>欢迎</h2>
            <p>谨以此程序 祝大家省一轻松过</p>
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="介绍 Info" name="1">
                    <div>21上下及 22下的选择题题库 数据库180*3道题随机出30道题帮助大家刷题</div>
                    <!--<div>旨在更方便的过选择题</div>-->
                </el-collapse-item>
                <el-collapse-item title="反馈 Feedback" name="2">
                    <div>如果有更好的建议 欢迎进群交流反馈</div>
                    <div>省一交流q群 262937049</div>
                    <p style="float: right;">--2023/12/14<br>Ganxy</p>
                </el-collapse-item>
            </el-collapse>
            <a href="/startexam">
                <el-button type="primary">开始练习</el-button>
            </a>
        </el-card>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        activeNames: ['']
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>
<style>
.welcome-exam {
    width: 500px;
}
@media screen and (max-width: 768px) {
    .welcome-exam {
        width: 380px;
    }
}
</style>