/** 这个页面为所有安装组件对象的管理主页 所有组件的包含install方法的对象将会被这个js对象做管理
 * *例：写好的拥有install方法的button组件引入 通过map（）方法进行安装
 * @param component
*/

import myButton from './button/index'

//创建一个数组存储导入的组件
const components = [
  myButton
]

//定义install 方法
const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}


//对外暴露
export default {
  myButton,
  install
}
