<template>
    <div>
         <china_statistics></china_statistics>
         <div class='pad20'>
             <i class='el-icon-info'></i>
             疫情地图
         </div>
         
         <div class='btn_box'>
             <el-button onclick="window.location.href='https://news.youth.cn/jsxw/202001/t20200130_12180797.htm'">同乘查询</el-button>
             <el-button onclick="window.location.href='http://www.beijing.gov.cn/fuwu/bmfw/wsfw/ggts/t1614673.htm'">全国发热门诊</el-button>
             <el-button onclick="window.location.href='https://baike.so.com/doc/29084162-30563544.html'">肺炎百科</el-button>
             <el-button onclick="window.location.href='https://www.120ask.com/'">免费问医生</el-button>
         </div>
         <div>
           <chinamap></chinamap>
         </div>
         <div>
            <gntable></gntable> 
         </div>
         <div>
             <myline title="全国 新增确诊/疑似 趋势图" :data='dataList'></myline>
         </div>
         <div>
             <myline title="全国 累计确诊/疑似 趋势图" :data='dataList2'></myline>
         </div>
         <div>
             <myline title="全国 累计治愈/死亡 趋势图" :data='dataList3'></myline>
        </div>  
    </div>
</template>
<script>
// @ is an alias to /src
import china_statistics from './china_statistics.vue'
import {getAllData} from '@/api'
import chinamap from './map'
import gntable from './gntable.vue'
import myline from './line'
export default {
    name: 'gnyq',
    data() {
        return {
            // dataList:[{til:"新增确认",list:[1,2,3,4]},{til:"新增疑似",list:[4,5,6,4,6]}]
        }
    },
    created() {
        // 把后台给的数据存储到 vuex中
        getAllData().then((data)=>{
            this.$store.dispatch('getAllData',data)
        })
    },
    computed: {
        dataList(){
            let history = this.$store.state.all_data.historylist||[];
            let list = history.slice(0,10);
            let sureList = list.map((item, index) => item.cn_conNum - history[index + 1].cn_conNum);
            let notSureList = list.map(item => item.wjw_susNum);
            
            return [
                {til:"新增确认",list:sureList.reverse(),color: "#e83132"},{til:"新增疑似",list:notSureList.reverse(),color: "#ec9217"}
            ]
        },
        dataList2(){
            let history = this.$store.state.all_data.historylist||[];
            let list = history.slice(0,10).reverse();
            let sureList = list.map(item=>item.cn_conNum);
            let notSureList = list.map(item => item.cn_susNum);
            
            return [
                {til:"确诊",list:sureList,color: "#e83132"},{til:"疑似",list:notSureList,color: "#ec9217"}
            ]
        },
        dataList3(){
            let history = this.$store.state.all_data.historylist||[];
            let list = history.slice(0,10).reverse();
            let sureList = list.map(item=>item.cn_cureNum);
            let notSureList = list.map(item => item.cn_deathNum);
            return [
                {til:"治愈",list:sureList,color:'#10aeb5'},{til:"死亡",list:notSureList,color:"#444"}
            ]
        }
    },
    components: {
        china_statistics,chinamap,gntable,myline
    }
}
</script>
<style lang="less">
.pad20{
    padding: 20px;
}
    .btn_box{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        button{
            display: block;
            width: 300px;
            margin: 10px 20px;
            margin-left: 0;
            float: left;
        }
    }
</style>