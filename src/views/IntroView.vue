<template>
<div>
    协会概况

    <el-link @click="this.get_info">测试</el-link>
</div>
</template>

<script>
import { marked } from 'marked'
export default {
    data() {
        return {
            //
        }
    },
    created() {
        
    },
    methods: {
        get_info() {
            const val = "helo 123456"
            const html = marked(val)
            console.log(html)
        }
    }
}
</script>