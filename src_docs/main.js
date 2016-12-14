import Vue from 'vue'
import App from './App'
import routes from './routers'
import VueRouter from 'vue-router'
// demo公共组件
import markDown from './components/common/markDown'
import bmsCode from './components/common/bmsCode'
import bmsApi from './components/common/bmsApi'
import bmsEmit from './components/common/bmsEmit'
// 基本组件的引用
import BmsAddress from '../src/components/Address'
import BmsAlert from '../src/components/Alert'
import BmsButton from '../src/components/Button'
import BmsConfirm from '../src/components/Confirm'
import BmsEmoji from '../src/components/Emoji'
import BmsInput from '../src/components/Input'
import BmsLoading from '../src/components/Loading'
import BmsMessage from '../src/components/Message'
import BmsNumber from '../src/components/Number'
import BmsPopup from '../src/components/Popup'
import BmsRadio from '../src/components/Radio'
import BmsRater from '../src/components/Rater'
import BmsScroller from '../src/components/Scroller'
import BmsSelector from '../src/components/Selector'
import BmsSpinner from '../src/components/Spinner'
import BmsSwitch from '../src/components/Switch'
import Tab from '../src/components/Tab/Tab'
import TabItem from '../src/components/Tab/Tabitem'
import BmsTextarea from '../src/components/Textarea'
import BmsToast from '../src/components/Toast'

Vue.component('bms-address', BmsAddress)
Vue.component('bms-alert', BmsAlert)
Vue.component('bms-button', BmsButton)
Vue.component('bms-confirm', BmsConfirm)
Vue.component('bms-emoji', BmsEmoji)
Vue.component('bms-input', BmsInput)
Vue.component('bms-loading', BmsLoading)
Vue.component('bms-message', BmsMessage)
Vue.component('bms-number', BmsNumber)
Vue.component('bms-popup', BmsPopup)
Vue.component('bms-radio', BmsRadio)
Vue.component('bms-rater', BmsRater)
Vue.component('bms-scroller', BmsScroller)
Vue.component('bms-selector', BmsSelector)
Vue.component('bms-spinner', BmsSpinner)
Vue.component('bms-switch', BmsSwitch)
Vue.component('tab', Tab)
Vue.component('tab-item', TabItem)
Vue.component('bms-textarea', BmsTextarea)
Vue.component('bms-toast', BmsToast)

Vue.use(VueRouter)
// demo公共组件的引用
Vue.component('mark-down', markDown)
Vue.component('bms-code', bmsCode)
Vue.component('bms-api', bmsApi)
Vue.component('bms-emit', bmsEmit)
let router = new VueRouter({
  mode: 'history',
  routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
