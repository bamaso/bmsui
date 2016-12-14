<template>
  <div class="bms-confirm" :class="type">
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
        <bms-button class="confirm-btn" :title="buttonText1" :type="type+'_block'" size="large" @click="confirm_click"></bms-button>
        <bms-button class="confirm-btn" :title="buttonText2" :type="type+'_block'" size="large" @click="cancel_click"></bms-button>
      </div>
    </bms-dialog>
  </div>
</template>

<script>
import BmsDialog from '../Dialog'
import BmsButton from '../Button'
module.exports = {
  name: 'BmsConfirm',
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
    buttonText1: {
      type: String,
      default: '确认'
    },
    buttonText2: {
      type: String,
      default: '取消'
    },
    type: {
      type: String,
      default: 'success'
    }
  },
  methods: {
    confirm_click () {
      this.$emit('on-confirm')
      this.$emit('on-hide')
    },
    cancel_click () {
      this.$emit('on-hide')
      this.$emit('on-cancel')
    }
  }
}
</script>
