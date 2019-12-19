import Vue from 'vue'
const componentsContext = require.context('./components', true, /index.(vue)$/)
componentsContext.keys().forEach(component => {
  const componentConfig = componentsContext(component).default
  if (/.vue$/.test(component)) {
    Vue.component(componentConfig.name, componentConfig)
  } else {
    Vue.prototype[`$${componentConfig.name}`] = componentConfig
  }
})

export default componentsContext
