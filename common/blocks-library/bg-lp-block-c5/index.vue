<i18n>
{
  "eng": {
    "title": "Page title c5",
    "subtitle": "Page subtitle",
    "images-subtitle": "Text under images on the right side",
    "buttonText": "<p style='text-align:center;'>Button text</p>"
  }
}
</i18n>

<template>
  <wiz-block class="bg-lp-block-c5">
    <wiz-placeholder class="text-wrapper">
      <wiz-column :width="100">
        <wiz-text
          class="title"
          :text="$t('title')"
          :style="{
            font: $theme.sectionTitle,
            color: $theme.sectionTitleColor1,
          }"
        ></wiz-text>
        <wiz-text
          class="subtitle"
          :text="$t('subtitle')"
          :style="{
            font: $theme.sectionSubtitle,
            color: $theme.sectionSubtitleColor1,
            borderBottomColor: $theme.color1,
          }"
        ></wiz-text>
      </wiz-column>
    </wiz-placeholder>
    <wiz-placeholder class="images-wrapper">
      <wiz-column :width="49">
        <wiz-image
          :width="442"
          :height="300"
          align="left"
          src="./media/images/placeholder-image.jpg"
          alt="Placeholder"
        ></wiz-image>
      </wiz-column>
      <wiz-column :width="49">
        <wiz-image
          :width="442"
          :height="300"
          align="right"
          src="./media/images/placeholder-image.jpg"
          alt="Placeholder"
        ></wiz-image>
      </wiz-column>
    </wiz-placeholder>
    <wiz-placeholder>
      <wiz-column>
        <wiz-text
          class="images-subtitle"
          :text="$t('images-subtitle')"
          align="right"
          :style="{
            font: $theme.mainFont1,
            color: $theme.mainText1,
          }"
        ></wiz-text>
      </wiz-column>
    </wiz-placeholder>
    <wiz-placeholder class="button-wrapper">
      <wiz-column>
        <wiz-button
          :text="$t('buttonText')"
          :width="140"
          :height="30"
          class="button"
          :style="{
            font: $theme.mainFont2,
            backgroundColor: $theme.buttonBackground1,
            color: $theme.buttonText3,
          }"
        ></wiz-button>
      </wiz-column>
    </wiz-placeholder>
  </wiz-block>
</template>

<script>
export default {
  name: "bg-lp-block-c5",
};
</script>

<style lang="scss">
.bg-lp-block-c5 {
  .text-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px 60px;
  }

  .images-wrapper {
    padding: 10px 60px;
  }

  .images-subtitle {
    padding: 0 50px;
  }

  .button {
    margin: 6px auto;
    text-align: center;
    border-radius: 3px;
  }
}
</style>
