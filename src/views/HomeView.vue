<template>
  <div class="block">
    <el-carousel class="custom-carousel" arrow="never">
      <el-carousel-item v-for="item in 2" :key="item"> 
        <div class="carousel-item-wrapper">
          <!-- <a href="/join">
            <img :src="require('@/assets/img/' + item + '.png')" alt="Image" style="width: 100%;object-fit: contain;">
          </a> -->
          <a v-if="item === 1" href="/join">
            <img :src="require('@/assets/img/' + item + '.png')" :alt="Image" style="width: 100%;object-fit: contain;">
          </a>
          <a v-if="item === 2" href="/examwelcome">
            <img class="top-margin" :src="require('@/assets/img/' + item + '.png')" :alt="Image" style="width: 100%;object-fit: contain;">
          </a>
        </div>
      </el-carousel-item>
    </el-carousel>
    <el-card shadow="always" style="margin-top: 10px;">
      <div style="text-align: left;color: #9a9a9a;font-size: 14px;height: 25px;border-bottom: 1px solid #bbb9b9;">
        <span>更多</span>
        <el-divider direction="vertical"></el-divider>
        最新动态
      </div>
    </el-card>
    <el-card shadow="always" style="margin-top: 10px;">
      <div style="text-align: left;color: #9a9a9a;font-size: 14px;">
        <span>更多</span>
        <el-divider direction="vertical"></el-divider>
        下载中心
        <ul v-for="item in list_down" :key="item.id" style="list-style: none;font-size: 20px;">
          <div style="border-bottom: 1px solid #9a9a9a;">
            <li style="line-height: 43px;">
              <a href="/zxzx">
                <p>{{ item.name }}</p>
              </a>
            </li>
            <span style="text-align: right;">{{ item.time }}</span>
          </div>
          <!-- <a href="/zxzx" style="color: rgb(7, 156, 236);">
            
          </a> -->
        </ul>
        <!-- <el-table
          :data="tableData_down"
          stripe
          class="down-table">
          <el-table-column
            prop="name"
            label="文件">
          </el-table-column>
          <el-table-column
            prop="time"
            label="时间">
          </el-table-column>
        </el-table> -->
      </div>
    </el-card>
    <div style="color: #9d9d9d;">
      <!-- &copy;2023|Ganxy -->
      <div>本站已安全运行{{ siteDays }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowWidth: window.innerWidth,
      siteDays: '',
      tableData_down: [],
      list_down: []
    }
  },
  mounted() {
    this.calculateSiteDays();
    setInterval(() => {
      this.calculateSiteDays();
    }, 1000);
  },
  created() {
    window.addEventListener('resize', this.handleResize);
    this.getAllData()
  },
  methods: {
    getAllData() {
        fetch("http://124.221.138.245:31014/downloads")
        .then(response => response.json())
        .then(data => {
            this.tableData_down = data
            this.list_down = data
        })
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    calculateSiteDays() {
      const startDate = new Date('2023/10/09 12:05:00');
      const currentDate = new Date();
      const diff = currentDate.getTime() - startDate.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      this.siteDays = `${days}天${hours}时${minutes}分${seconds}秒`;
    }
  },
  computed: {
    shouldShowAside() {
      return this.windowWidth > 938;
    }
  },
}
</script>

<style>
.custom-carousel {
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  overflow-y: hidden;
}

.carousel-item-wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.el-main {
  width: 60%;
  overflow-y: hidden;
}

.home-title {
  line-height: 30px;
  font-size: 17px;
  color: #222;
  text-align: left;
  margin-top: 20px;
  border-bottom: 2px solid #02A682;
}

.font-weight-bold {
  font-weight: 700 !important;
}

.float-right {
  float: right !important;
}

.more a {
  text-decoration: none;
  color: #02A682;
}

.more :hover {
  color: #fff;
  background-color: #02A682;
}

.album-list {
  height: 100px;
  background: #F5F7F8;
  padding: 20px 20px;
}

.card-deck {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.card {
  flex: 1 0 0%;
  margin-right: 15px;
  margin-bottom: 0;
  margin-left: 15px;
}

.card-img,
.card-img-bottom,
.card-img-top {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  width: 100%;
}

img {
  vertical-align: middle;
  border-style: none;
}

.p-3 {
  padding: 1rem !important;
}

.mb-5,
.my-5 {
  margin-bottom: 3rem !important;
}

.shadow-sm {
  box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .075) !important;
}

.rounded {
  border-radius: 0.25rem !important;
}

.bg-white {
  background-color: #fff !important;
}

.row {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

ul li a {
  text-decoration: none;
  color: #42b983;
}

.align-ul {
  text-align: center;
}

.align-ul li :hover {
  color: #fff;
  background-color: #02A682;
}

span a {
  text-decoration: none;
  color: #9d9d9d;
  padding: 5px;
}

span a:hover {
  color: #f48c0c;
}

.top-margin {
  margin-top: 50px;
}

@media screen and (max-width: 938px) {
  .el-main {
    width: 100%;
  }

  .align-ul {
    text-align: left;
  }
  .top-margin {
    margin-top: 20px;
  }
}

.down-table {
  width: 750px;
}

@media screen and (max-width: 938px)  {
.down-table {
  width: 550px;
}
}

@media screen and (max-width: 600px)  {
.down-table {
  width: 350px;
}
}
</style>
