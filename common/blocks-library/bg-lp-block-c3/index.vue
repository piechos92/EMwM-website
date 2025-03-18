<i18n>
{
  "eng": {
    "Title": "Lorem ipsum dolor sit amet, consectetur",
    "Text1": "🗸 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum harum.",
    "Text2": "🗸 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum harum.",
    "Text3": "🗸 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum harum ipsa iusto, mollitia nihil.",
    "Text4": "🗸 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum harum.",
    "Text5": "🗸 Lorem ipsum dolor sit amet, consectetur.",
    "Button": "<p style='text-align:center;'>Lorem ipsum dolor sit amet</p>"
  }
}
</i18n>

<template>
  <wiz-block
    :style="{
      background: $theme.sectionBackground3,
    }"
    class="bg-lp-block-c3"
  >
    <wiz-column :width="100">
      <wiz-text
        class="title"
        :style="{
          font: $theme.sectionSubtitle,
          color: $theme.sectionSubtitleColor2,
        }"
        :text="$t('Title')"
      ></wiz-text>
      <wiz-text
        :style="{
          font: $theme.mainFont2,
          color: $theme.mainText4,
        }"
        :text="$t('Text1')"
      ></wiz-text>
      <wiz-text
        :style="{
          font: $theme.mainFont2,
          color: $theme.mainText4,
        }"
        :text="$t('Text2')"
      ></wiz-text>
      <wiz-text
        :style="{
          font: $theme.mainFont2,
          color: $theme.mainText4,
        }"
        :text="$t('Text3')"
      ></wiz-text>
      <wiz-text
        :style="{
          font: $theme.mainFont2,
          color: $theme.mainText4,
        }"
        :text="$t('Text4')"
      ></wiz-text>
      <wiz-text
        :style="{
          font: $theme.mainFont2,
          color: $theme.mainText4,
        }"
        :text="$t('Text5')"
      ></wiz-text>
      <wiz-button
        :style="{
          background: $theme.buttonBackground2,
          font: $theme.mainFont2,
          color: $theme.mainText4,
        }"
        :text="$t('Button')"
        :width="300"
        :height="40"
        align="center"
      ></wiz-button>
    </wiz-column>
  </wiz-block>
</template>

<script>
export default {
  name: "bg-lp-block-c3",
};
</script>

<style lang="scss">
.bg-lp-block-c3 {
  max-width: 1024px;
  text-align: center;
  padding: 30px 20px 20px;

  .title {
    margin-bottom: 40px;
  }

  .wiz-button {
    margin: 30px auto 0;
  }
}
</style>
