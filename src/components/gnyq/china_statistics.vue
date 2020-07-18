<template>
    <div class='domestic_show_box'>
        <div class="title">
            <h1>国内疫情</h1>
            <p>数据更新至 {{all_data.cachetime}}</p>
        </div>
        <div class="summery_box">
            <div class="sure">
                <div class="num">{{all_data.gntotal}}</div>
                <div class="type">确诊病例</div>
                <div class="add">昨日
                    <span>+{{all_data.add_daily&&all_data.add_daily.addcon}}</span>
                </div>
            </div>
            <div class="doubt">
                <div class="num">{{all_data.sustotal}}</div>
                <div class="type">疑似病例</div>
                <div class="add">昨日
                    <span>+{{all_data.add_daily&&all_data.add_daily.wjw_addsus}}</span>
                </div>
            </div>
            <div class="healthy">
                <div class="num">{{all_data.curetotal}}</div>
                <div class="type">治愈病例</div>
                <div class="add">昨日
                    <span>+{{all_data.add_daily&&all_data.add_daily.addcure}}</span>
                </div>
            </div>
            <div class="dead">
                <div class="num">{{all_data.deathtotal}}</div>
                <div class="type">死亡病例</div>
                <div class="add">昨日
                    <span>+{{all_data.add_daily&&all_data.add_daily.adddeath}}</span>
                </div>
            </div>
            <div class="jwsr">
                <div class="num">{{all_data.jwsrNum}}</div>
                <div class="type">境外输入</div>
                <div class="add">昨日
                    <span>{{all_data.add_daily&&all_data.add_daily.addjwsr}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
//mapState 的作用就是帮我们把一个对象或数组里的值转化成计算属性的写法。
//将传入的数组或对象转成 computed 计算属性能够识别的代码。
import {mapState} from 'vuex'
export default {
  name: "XXX",
  data() {
    return {};
  },
  computed: {
    ...mapState(['all_data'])
  },
  //components: {}
};
</script>
<style lang="less">
.domestic_show_box{
    padding:0 20px;
    .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        p{
            color: #ddd;
        }
    }
    .summery_box{
        display: flex;
        align-items: center;
        background:#eee;
        border-radius: 5px;
        padding: 20px 0;
        >div{
            flex:1;
            text-align: center;
        }
        .sure{
            .num{
                color:tomato;
            }
            .add{
                color:#ccc;
                span{
                    color:tomato;
                }
            }
        }
        .doubt{
            .add{
                color:#ccc;
                span{ color:orange; }
            }
        }
        .healthy{
            .add{
                color:#ccc;
                span{ color:green; }
            }
        }
        .dead{
            .add{
                color:#ccc;
                span{ color:red; }
            }
        }
        .jwsr{
            .add{
                color:#ccc;
                span{ color:red; }
            }
        }
    }
}
</style>