<template>
  <div class="qus-table">
      <el-collapse v-model="activeName" accordion>
          <el-collapse-item title="我们协会是干什么的？" name="1">
              <div>
                  学习编程，运营维护现有网站门户，为社团及学生组织推出我们力所能及的技术服务；
              </div>
              <div>
                  发现神奇好玩的，琢磨有意思的技术和项目效果，热爱代码，写到世界充满爱。
              </div>
          </el-collapse-item>
          <el-collapse-item title="我们的部门" name="2">
              <div>协会计划下设技术部、组织部和宣传部；</div>
              <div>技术部负责技术方面的问题，开发以及维护；组织部负责协会以及下设人员管理；宣传部负责网站内容审核以及活动宣传；</div>
              <div>职位设置五个，两社长加三部长。</div>
          </el-collapse-item>
          <el-collapse-item title="关于好处" name="3">
              <div>社团都有的学时少不了；</div>
              <div>大家共同协助的话，或许我们可以做的很棒，我想这是一件相当有成就的事；</div>
              <div>可以美化你的经历呀，让你的简历添朵花~</div>
          </el-collapse-item>
          <el-collapse-item title="加入我们？" name="4">
              <div>我们不要求你的专业，不要求你的年级；</div>
              <div>哪怕你是其他专业，希望学点计算机技术傍身，我们都欢迎你。</div>
              <div>联系方式请见导航 >> 联系我们</div>
          </el-collapse-item>
      </el-collapse>
  </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
          activeName: '1'
        };
      }
    }
  </script>
  
  <style>
  .qus-table {
      width: 750px;
  }

  .el-collapse-item__header {
    font-size: 20px;
  }

  .el-collapse-item__content {
    font-size: 16px;
  }
  
  @media screen and (max-width: 938px)  {
    .qus-table {
      width: 550px;
    }
  }
  
  @media screen and (max-width: 600px)  {
    .qus-table {
      width: 350px;
    }
  }
  </style>