<template>
  <div>
    <bms-input title="验证为姓名" isType="china-name"></bms-input>
    <bms-input title="验证为电话号码" isType="china-mobile"></bms-input>
    <bms-input title="验证为不能为空" isType="required"></bms-input>
    <bms-input title="验证为1-3位" :min="1" :max="3"></bms-input>
  </div>
</template>