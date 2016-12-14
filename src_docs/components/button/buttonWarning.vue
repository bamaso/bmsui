<template>
  <div>
    <br><bms-button title="默认按钮" type="warning"></bms-button>
    <br><bms-button title="块级按钮" type="warning_block"></bms-button>
    <br><bms-button title="小按钮" type="warning_block" size="small"></bms-button>
    <br><bms-button title="中按钮" type="warning_block" size="normal"></bms-button>
    <br><bms-button title="大按钮" type="warning_block" size="large"></bms-button>
    <br><bms-button title="禁用状态按钮" type="warning_block" disabled></bms-button>
    <br><bms-button title="无圆角按钮" type="warning_block" :radius="false"></bms-button>
    <br><bms-button title="无阴影按钮" type="warning_block" :shadow="false"></bms-button>
  </div>
</template>
