<template>
  <div class="bms-alert" :class="type">
    <bms-dialog
    :show="show"
    :mask-transition="maskTransition"
    :dialog-transition="dialogTransition"
    :hide-onBlur="hideOnBlur"
    :scroll="scroll"
    @on-hide="$emit('on-hide')"
    @on-show="$emit('on-show')">
      <div class="bms_dialog_hd">
        <div class="icon">
          <i class="ui-font" v-if="type==='success'">
            &#xe600;
          </i>
          <i class="ui-font" v-if="type==='danger'">
            &#xe603;
          </i>
        </div>
        <div class="bms_dialog_title">{{title}}</div>
      </div>
      <div class="bms_dialog_bd"><slot></slot></div>
      <div class="bms_dialog_ft">
        <bms-button class="alert-btn" :title="buttonText" :type="type+'_block'" size="large" @click="$emit('on-hide')"></bms-button>
      </div>
    </bms-dialog>
  </div>
</template>

<script>
import BmsDialog from '../Dialog'
import BmsButton from '../Button'
module.exports = {
  name: 'BmsAlert',
  components: {
    BmsDialog,
    BmsButton
  },
  props: {
    show: Boolean,
    maskTransition: {
      type: String,
      default: 'bms-fade'
    },
    dialogTransition: {
      type: String,
      default: 'bms-dialog'
    },
    hideOnBlur: Boolean,
    scroll: {
      type: Boolean,
      default: true
    },
    title: String,
    buttonText: {
      type: String,
      default: 'OK'
    },
    type: {
      type: String,
      default: 'success'
    }
  },
  watch: {
  }
}
</script>
