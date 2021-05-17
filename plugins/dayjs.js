import Vue from 'vue'
import dayjs from 'dayjs'
//{表达式|过滤器}  设置format 默认值
Vue.filter('date',(value,format='YYYY-MM-DD')=>{
    return dayjs(value).format(format)
})