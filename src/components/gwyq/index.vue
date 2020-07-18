<template>
    <div>
        <world_statistics></world_statistics>
        <div>
            <gwtable></gwtable>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
import world_statistics from './world_statistics.vue'
import {getAllData} from '@/api'
import gwtable from './gwtable.vue'
export default {
    name: 'gwyq',
    // data() {
    //     return {
    //         // dataList:[{til:"新增确认",list:[1,2,3,4]},{til:"新增疑似",list:[4,5,6,4,6]}]
    //     }
    // },
    created() {
        // 把后台给的数据存储到 vuex中
        getAllData().then((data)=>{
            this.$store.dispatch('getAllData',data)
        })
    },
    computed: {
        
    },
    components: {
        world_statistics,gwtable
    }
}
</script>
<style lang="less">
.pad20{
    padding: 20px;
}
</style>