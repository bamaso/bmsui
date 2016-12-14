import showButton from './components/button'
import showSwitch from './components/switch'
import showToast from './components/toast'
import showRater from './components/rater'
import showTab from './components/tab'
import showInput from './components/input'
import showTextarea from './components/textarea'
import showSelector from './components/selector'
import showAlert from './components/alert'
import showScroller from './components/scroller'
import showPopup from './components/popup'
import showSpinner from './components/spinner'
import showNumber from './components/number'
import showLoading from './components/loading'
import showRadio from './components/radio'
import showAddress from './components/address'
import showMessage from './components/message'
import showConfirm from './components/confirm'
import showEmoji from './components/emoji'
import home from './components/home'
import start from './components/start'
let routes = [
  { path: '/button', name: 'button', component: showButton },
  { path: '/switch', name: 'switch', component: showSwitch },
  { path: '/toast', name: 'toast', component: showToast },
  { path: '/rater', name: 'rater', component: showRater },
  { path: '/tab', name: 'tab', component: showTab },
  { path: '/input', name: 'input', component: showInput },
  { path: '/textarea', name: 'textarea', component: showTextarea },
  { path: '/selector', name: 'selector', component: showSelector },
  { path: '/alert', name: 'alert', component: showAlert },
  { path: '/scroller', name: 'scroller', component: showScroller },
  { path: '/popup', name: 'popup', component: showPopup },
  { path: '/spinner', name: 'spinner', component: showSpinner },
  { path: '/number', name: 'number', component: showNumber },
  { path: '/loading', name: 'loading', component: showLoading },
  { path: '/radio', name: 'radio', component: showRadio },
  { path: '/address', name: 'address', component: showAddress },
  { path: '/message', name: 'message', component: showMessage },
  { path: '/confirm', name: 'confirm', component: showConfirm },
  { path: '/emoji', name: 'emoji', component: showEmoji },
  { path: '/', name: 'Home', component: home },
  { path: '/start', name: 'start', component: start }
]
export default routes
