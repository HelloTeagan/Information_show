<template>
    <div class='foreign_show_box'>
        <div class="title">
            <h1>国外疫情</h1>
            <p>数据更新至 {{all_data.cachetime}}</p>
        </div>
       <div class="summery_box">
            <div class="sure">
                <div class="num">{{all_data.othertotal.certain}}</div>
                <div class="type">确诊病例</div>
                <div class="add">昨日
                    <span>{{all_data.othertotal&&all_data.othertotal.certain_inc}}</span>
                </div>
            </div>
            <div class="doubt">
                <div class="num">{{all_data.othertotal.uncertain}}</div>
                <div class="type">疑似病例</div>
                <div class="add">昨日
                    <span>{{all_data.othertotal&&all_data.othertotal.uncertain_inc}}</span>
                </div>
            </div>
            <div class="healthy">
                <div class="num">{{all_data.othertotal.recure}}</div>
                <div class="type">治愈病例</div>
                <div class="add">昨日
                    <span>{{all_data.othertotal&&all_data.othertotal.recure_inc}}</span>
                </div>
            </div>
            <div class="dead">
                <div class="num">{{all_data.othertotal.die}}</div>
                <div class="type">死亡病例</div>
                <div class="add">昨日
                    <span>{{all_data.othertotal&&all_data.othertotal.die_inc}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
// mapState 的作用就是帮我们把一个对象或数组里的值转化成计算属性的写法。
// 将传入的数组或对象转成 computed 计算属性能够识别的代码。
import {mapState} from 'vuex'
export default {
  name: "XXX",
  data() {
    return {};
  },
  computed: {
    ...mapState(['all_data'])
  },
  components: {}
};
</script>
<style lang="less">
.foreign_show_box{
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
    }
}
</style>