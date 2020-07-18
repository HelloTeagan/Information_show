<template>
<div>
  <div ref='mapBox' style='width:700px;height:500px'></div>
</div>   
</template>

<script>
// @ is an alias to /src
import echarts from 'echarts'
import 'echarts/map/js/china.js'

var data = [];
var option = {
    visualMap: {
      show: true,
      type: 'piecewise',
      min: 0,
      max: 2000,
      align: 'right',
      bottom: '0',
      left: '0',
      inRange: {
        color: [
          '#ffc0b1',
          '#ff8c71',
          '#ef1717',
          '#9c0505'
        ]
      },
      pieces: [
        { min: 10000 },
        { min: 1000, max: 9999 },
        { min: 100, max: 999 },
        { min: 10, max: 99 },
        { min: 1, max: 9 }
      ],
      orient:'vertical',
      showLabel: true,
      itemWidth: 20,
      itemHeight: 5,
      textStyle: {
        fontSize: 10
      }
    },
    tooltip: {
      trigger: 'item'
    },
    // tooltip: {
    //                     show: true,
    //                     trigger:'item',
    //                     formatter: function (all_data) {
    //                         if (!all_data) return;
    //                         return ` <p style="font-size:8px">总数：${all_data.list.value}</p>
    //                                  <p style="font-size:8px">现存：${all_data.list.econNum}</p>
    //                                  <p style="font-size:8px">死亡：${all_data.list.deathNum}</p>
    //                                  <p style="font-size:8px">治愈：${all_data.list.cureNum}</p>`}},

    series: [{
      left: 'center',
      type: 'map',
      name: '确诊人数',
      label: {
        show: true,
        position: 'inside',
        fontSize: 10,
        emphasis: {//对应的鼠标悬浮效果
            show: true,
            textStyle:{color:"#FFFFFF"}
        }
      },
      itemStyle:{emphasis: {areaColor:"#ccc"}},
      mapType: 'china',
      data: data,
      zoom: 1.2,//视角缩放比例
      roam: false,//不开启缩放和平移
      showLegendSymbol: false,
      emphasis: {},
      rippleEffect: {
        show: true,
        brushType: 'stroke',
        scale: 2.5,
        period: 4
      }
    }]
  };
export default {
    name: 'chinamap',
    data() {
        return {
        
        }
    },
    created() {
      
    },
    methods: {
     
    },
    mounted() {
      this.initMap()
    },
    // eslint-disable-next-line no-dupe-keys
    methods: {
      initMap(){
        let list = this.$store.state.all_data.list||[];
        if(!list.length){
          setTimeout(() => {
            this.initMap();
          }, 100);
          return;
        }
        let mydata = list.map(item=>({name:item.name,value:item.value/1}));
        option.series[0].data = mydata;
        this.echart = echarts.init(this.$refs.mapBox);
        this.echart.setOption(option);
        this.click();
      },
      click(){
        this.echart.on('click',function(){
console.log(arguments)
        })
        
      }
    },
    components: {
        
    }
}
</script>
<style lang="less">

</style>