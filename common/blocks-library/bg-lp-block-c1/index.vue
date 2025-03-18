<i18n>
{
  "eng": {
    "Title": "Lorem ipsum dolor :",
    "Text1": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    "Text2": "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    "Text3": "Lorem ipsum dolor sit amet, consectetur."
  }
}
</i18n>

<template>
  <wiz-block
    :style="{
      background: $theme.buttonBackground2,
    }"
    class="bg-lp-block-c1"
  >
    <wiz-column :width="90" class="container">
      <wiz-text
        class="title"
        :style="{
          font: $theme.sectionSubtitle,
          color: $theme.sectionSubtitleColor2,
        }"
        :text="$t('Title')"
      ></wiz-text>
      <wiz-column class="wrapper">
        <wiz-column class="items">
          <wiz-image
            :width="32"
            :height="32"
            src="./media/images/icon.png"
          ></wiz-image>
          <wiz-text
            :style="{
              font: $theme.mainFont1,
              color: $theme.mainText4,
            }"
            :text="$t('Text1')"
          ></wiz-text>
        </wiz-column>
        <wiz-column class="items">
          <wiz-image
            :width="32"
            :height="32"
            src="./media/images/icon.png"
          ></wiz-image>
          <wiz-text
            :style="{
              font: $theme.mainFont1,
              color: $theme.mainText4,
            }"
            :text="$t('Text2')"
          ></wiz-text>
        </wiz-column>
        <wiz-column class="items">
          <wiz-image
            :width="32"
            :height="32"
            src="./media/images/icon.png"
          ></wiz-image>
          <wiz-text
            :style="{
              font: $theme.mainFont1,
              color: $theme.mainText4,
            }"
            :text="$t('Text3')"
          ></wiz-text>
        </wiz-column>
      </wiz-column>
    </wiz-column>
  </wiz-block>
</template>

<script>
export default {
  name: "bg-lp-block-c1",
};
</script>

<style lang="scss">
.bg-lp-block-c1 {
  .container {
    margin: 0 auto;
    text-align: center;
  }
  .title {
    margin: 30px 0;
  }
  .wrapper {
    display: flex;
    flex-direction: row !important;
    justify-content: space-between;
    padding: 0 !important;
  }

  .items {
    max-width: 285px;

    .wiz-image {
      position: relative;
      padding-bottom: 20px;
      min-height: 32px;

      &:before {
        position: absolute;
        content: "";
        display: block;
        width: 100%;
        height: 4px;
        top: 48px;
        background-color: #ffffff;
        border-radius: 2px;
      }
    }

    .wiz-text {
      margin: 15px auto 50px;
      width: 58%;
    }
  }
}
</style>
