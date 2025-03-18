<i18n>
{
  "eng": {
    "Title": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, animi d",
    "Button1": "<b>Lorem ipsum dolor</b><br>dolor sit amet dolor",
    "Button2": "<b>Lorem ipsum dolor</b><br>dolor sit amet dolor",
    "Button3": "<b>Lorem ipsum dolor</b><br>dolor sit amet dolor"
  }
}
</i18n>

<template>
  <wiz-block class="bg-lp-block-c9">
    <wiz-column :width="100" class="container">
      <wiz-text
        :style="{
          font: $theme.sectionSubtitle,
          color: $theme.sectionSubtitleColor3,
        }"
        :text="$t('Title')"
        class="title"
      ></wiz-text>
      <wiz-column class="wrapper">
        <wiz-block
          class="btn"
          :style="{
            font: $theme.mainFont2,
            color: $theme.mainText3,
            background: $theme.buttonBackground3,
            boxShadow: $theme.boxShadowColor1,
          }"
        >
          <wiz-image
            :width="64"
            :height="64"
            class="btnImg"
            src="./media/images/icon.png"
          ></wiz-image>
          <wiz-text :text="$t('Button1')"></wiz-text>
        </wiz-block>
        <wiz-block
          class="btn"
          :style="{
            font: $theme.mainFont2,
            color: $theme.mainText3,
            background: $theme.buttonBackground3,
            boxShadow: $theme.boxShadowColor1,
          }"
        >
          <wiz-image
            :width="64"
            :height="64"
            class="btnImg"
            src="./media/images/icon.png"
          ></wiz-image>
          <wiz-text :text="$t('Button2')"></wiz-text>
        </wiz-block>
        <wiz-block
          class="btn"
          :style="{
            font: $theme.mainFont2,
            color: $theme.mainText3,
            background: $theme.buttonBackground3,
            boxShadow: $theme.boxShadowColor1,
          }"
        >
          <wiz-image
            :width="64"
            :height="64"
            class="btnImg"
            src="./media/images/icon.png"
          ></wiz-image>
          <wiz-text :text="$t('Button3')"></wiz-text>
        </wiz-block>
      </wiz-column>
    </wiz-column>
  </wiz-block>
</template>

<script>
export default {
  name: "bg-lp-block-c9",
};
</script>

<style lang="scss">
.bg-lp-block-c9 {
  padding: 45px 0 5px;

  .container {
    text-align: center;
  }

  .title {
    margin: 0 auto 50px;
    width: 60%;
  }

  .wrapper {
    width: 710px;
    margin: 0 auto;
    display: flex;
    flex-direction: row !important;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 !important;

    .btn {
      min-width: 210px;
      max-width: 210px;
      height: 210px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 30px 0 45px;
      margin-bottom: 40px;
      cursor: pointer;
    }
  }
}
</style>
