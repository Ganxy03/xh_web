<template>
    <el-container>
        <el-header>
            <common-head />
        </el-header>
        <el-main>
            <div>
                <!-- <h2>Main</h2> -->
                <router-view />
            </div>
        </el-main>
        <el-footer>
            <common-foot />
        </el-footer>
    </el-container>
</template>

<script>
import CommonHead from '../components/CommonHead.vue'
import CommonFoot from '../components/CommonFoot.vue'
export default {
    data() {
        return {
            //
        }
    },
    components: {
        CommonHead,
        CommonFoot
    }
}
</script>