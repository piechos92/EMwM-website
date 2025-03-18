<i18n>
{
  "eng": {
    "pageTitle": "Page Title c12",
    "leftBlockSubtitle": "Left Block subtitle",
    "leftBlockText": "Left Block text",
    "leftBlockButtonText": "Text link >",
    "rightBlockSubtitle": "Right Block subtitle",
    "rightBlockText": "Right Block text",
    "rightBlockButtonText": "Text link >"
  }
}
</i18n>
<template>
  <wiz-block class="bg-lp-block-c12">
    <wiz-placeholder class="text-wrapper">
      <wiz-column :width="100">
        <wiz-text
          class="title"
          :text="$t('pageTitle')"
          :style="{
            font: $theme.sectionTitle,
            color: $theme.sectionTitleColor1,
          }"
        ></wiz-text>
      </wiz-column>
    </wiz-placeholder>
    <wiz-placeholder class="images-wrapper">
      <wiz-column :width="49">
        <wiz-image
          align="left"
          :width="442"
          :height="300"
          src="./media/images/placeholder-image.jpg"
          alt="Placeholder"
        ></wiz-image>
        <wiz-text
          class="subtitle"
          :text="$t('leftBlockSubtitle')"
          :style="{
            font: $theme.sectionSubtitle,
            color: $theme.sectionSubtitleColor1,
          }"
        ></wiz-text>
        <wiz-text
          class="text"
          :text="$t('leftBlockText')"
          :style="{
            font: $theme.mainFont1,
            color: $theme.blockDescription1,
          }"
        ></wiz-text>
        <wiz-button
          class="link"
          :text="$t('leftBlockButtonText')"
          :width="140"
          :height="20"
          :style="{
            font: $theme.mainFont1,
            backgroundColor: $theme.buttonBackground3,
            color: $theme.buttonText1,
          }"
        ></wiz-button>
      </wiz-column>
      <wiz-column :width="49">
        <wiz-image
          align="left"
          :width="442"
          :height="300"
          src="./media/images/placeholder-image.jpg"
          alt="Placeholder"
        ></wiz-image>
        <wiz-text
          class="subtitle"
          :text="$t('rightBlockSubtitle')"
          :style="{
            font: $theme.sectionSubtitle,
            color: $theme.sectionSubtitleColor1,
          }"
        ></wiz-text>
        <wiz-text
          class="text"
          :text="$t('rightBlockText')"
          :style="{
            font: $theme.mainFont1,
            color: $theme.blockDescription1,
          }"
        ></wiz-text>
        <wiz-button
          class="link"
          :text="$t('rightBlockButtonText')"
          :width="140"
          :height="20"
          :style="{
            font: $theme.mainFont1,
            backgroundColor: $theme.buttonBackground3,
            color: $theme.buttonText1,
          }"
        ></wiz-button>
      </wiz-column>
    </wiz-placeholder>
  </wiz-block>
</template>

<script>
export default {
  name: "bg-lp-block-c12",
};
</script>

<style lang="scss">
.bg-lp-block-c12 {
  .text-wrapper,
  .images-wrapper {
    padding: 10px 50px;
  }

  .wiz-layout.wiz-column.wiz-column-wrapper {
    padding: 0 10px;
  }

  .link {
    padding-left: 0;
    position: relative;
  }
}
</style>
