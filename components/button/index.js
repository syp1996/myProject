import myButton from './src/button.vue'

myButton.install = function (Vue) {
  Vue.component(myButton.name,myButton)
}

console.log('tag',myButton )
export default myButton
