<i18n>
{
  "eng": {
    "title": "Page title C2",
    "firstColumnText": "First Column text",
    "secondColumnText": "Second Column text",
    "thirdColumnText": "Third Column text",
    "firstButtonText": "<p style='text-align:center;'>First button text</p>",
    "secondButtonText": "<p style='text-align:center;'>Second button text</p>"
  }
}
</i18n>

<template>
  <wiz-block
    class="bg-lp-block-c2"
    :style="{
      backgroundColor: $theme.sectionBackground1,
    }"
  >
    <wiz-placeholder class="title-wrapper">
      <wiz-column :width="100">
        <wiz-text
          align="center"
          class="title"
          :text="$t('title')"
          :style="{
            font: $theme.sectionTitle,
            color: $theme.sectionTitleColor3,
          }"
        ></wiz-text>
      </wiz-column>
    </wiz-placeholder>
    <wiz-placeholder class="images-wrapper">
      <wiz-column class="item" :width="33">
        <wiz-image
          :width="32"
          :height="32"
          src="./media/images/icon.png"
          alt="Placeholder"
        ></wiz-image>
        <wiz-text
          class="block-subtext"
          :text="$t('firstColumnText')"
          :style="{
            font: $theme.mainFont2,
            color: $theme.mainText4,
          }"
        ></wiz-text>
      </wiz-column>
      <wiz-column class="item" :width="33">
        <wiz-image
          :width="32"
          :height="32"
          src="./media/images/icon.png"
          alt="Placeholder"
        ></wiz-image>
        <wiz-text
          class="block-subtext"
          :text="$t('secondColumnText')"
          :style="{
            font: $theme.mainFont2,
            color: $theme.mainText4,
          }"
        ></wiz-text>
      </wiz-column>
      <wiz-column class="item" :width="33">
        <wiz-image
          :width="32"
          :height="32"
          src="./media/images/icon.png"
          alt="Placeholder"
        ></wiz-image>
        <wiz-text
          class="block-subtext"
          :text="$t('thirdColumnText')"
          :style="{
            font: $theme.mainFont2,
            color: $theme.mainText4,
          }"
        ></wiz-text>
      </wiz-column>
    </wiz-placeholder>
    <wiz-placeholder class="button-wrapper">
      <wiz-column>
        <wiz-button
          :text="$t('firstButtonText')"
          :width="300"
          :height="40"
          class="button"
          :style="{
            font: $theme.mainFont2,
            background: $theme.buttonBackground3,
            color: $theme.buttonText2,
          }"
        ></wiz-button>
        <wiz-button
          :text="$t('secondButtonText')"
          :width="300"
          :height="40"
          class="button"
          :style="{
            font: $theme.mainFont2,
            background: $theme.buttonBackground3,
            color: $theme.buttonText2,
          }"
        ></wiz-button>
      </wiz-column>
    </wiz-placeholder>
  </wiz-block>
</template>

<script>
export default {
  name: "bg-lp-block-c2",
};
</script>

<style lang="scss">
.bg-lp-block-c2 {
  .title-wrapper {
    padding: 10px 60px;
  }

  .images-wrapper {
    margin-bottom: 40px;
  }

  .item {
    padding: 0 10px;
    text-align: center;
    position: relative;

    .wiz-image {
      margin-bottom: 24px;
    }

    &:after {
      content: "";
      display: block;
      width: 200px;
      height: 4px;
      background-color: $color7;
      border-radius: 2px;
      position: absolute;
      top: 18px;
      right: -106px;
    }

    &:last-of-type {
      &:after {
        display: none;
      }
    }
  }

  .button {
    margin: 6px auto;
    text-align: center;
    border-radius: 3px;
    padding: 12px 20px;
  }
}
</style>
