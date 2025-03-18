<i18n>
  {
    "eng": {
      "tabTittle1": "Title 1",
      "tabTittle2": "Title 2",
      "tabTittle3": "Title 3",
      "tabTittle4": "Title 4",
      "text1": "Ut maximus, fermentum, orci purus tempus justo  fermentum, orci purus tempus justo  fermentum, orci purus tempus justo  fermentum, orci orci purus tempus justo  fermentum, justo",
      "text2": "Ut maximus, fermentum, orci purus tempus justo  fermentum, orci purus tempus justo  fermentum, orci purus tempus justo  fermentum, orci orci purus tempus justo  fermentum, justo", 
      "text3": "Ut maximus, fermentum, orci purus tempus justo  fermentum, orci purus tempus justo  fermentum, orci purus tempus justo  fermentum, orci orci purus tempus justo  fermentum, justo",
      "text4": "Ut maximus, fermentum, orci purus tempus justo  fermentum, orci purus tempus justo  fermentum, orci purus tempus justo  fermentum, orci orci purus tempus justo  fermentum, orci purus tempus justo"
    }
  }
</i18n>

<template>
  <wiz-block class="bg-lp-block-c14" :style="{ fontFamily: $theme.fontFamily }">
    <wiz-site-tabs
      :tabs="[
        {
          title: $t('tabTittle1'),
          text: $t('text1'),
          textStyle: { font: $theme.tabContent, color: $theme.tabTextColor1 },
          titleStyle: { font: $theme.tabTitle, color: $theme.tabTextColor2 },
          textBgColor: $theme.tabContentBackground1,
          titleBgColor: $theme.tabBackground1,
        },
        {
          title: $t('tabTittle2'),
          text: $t('text2'),
          textStyle: { font: $theme.tabContent, color: $theme.tabTextColor1 },
          titleStyle: { font: $theme.tabTitle, color: $theme.tabTextColor2},
          textBgColor: $theme.tabContentBackground1,
          titleBgColor: $theme.tabBackground2,
        },
        {
          title: $t('tabTittle3'),
          text: $t('text3'),
          textStyle: { font: $theme.tabContent, color: $theme.tabTextColor1 },
          titleStyle: { font: $theme.tabTitle, color: $theme.tabTextColor2},
          textBgColor: $theme.tabContentBackground1,
          titleBgColor: $theme.tabBackground3,
        },
        {
          title: $t('tabTittle4'),
          text: $t('text4'),
          textStyle: { font: $theme.tabContent, color: $theme.tabTextColor1 },
          titleStyle: { font: $theme.tabTitle, color: $theme.tabTextColor2},
          textBgColor: $theme.tabContentBackground1,
          titleBgColor: $theme.tabBackground1,
        },
      ]"
    ></wiz-site-tabs>
  </wiz-block>
</template>

<script>
export default {
  name: "bg-lp-block-c14",
};
</script>

<style lang="scss">
.bg-lp-block-c14 {
  max-width: 1024px;
  width: 100%;
  padding: 10px 60px;
  margin-bottom: 20px;
}
</style>
