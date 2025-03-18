<i18n>
{
  "eng": {
    "Title": "Si vous souhaltez recevolr une pochette contenant des fotmulalres d'inscription<br> vous pouvez nous les demander en cliquant sur le llen sulvant :",
    "Button": "<p style='text-align:center;'>Recevoir une pochette</p>"
  }
}
</i18n>

<template>
  <wiz-block
    :style="{
      background: $theme.sectionBackground2,
    }"
    class="bg-lp-block-c4"
  >
    <wiz-column :width="100">
      <wiz-text
        :style="{
          font: $theme.mainFont2,
          color: $theme.mainText4,
        }"
        :text="$t('Title')"
      ></wiz-text>
      <wiz-button
        :style="{
          background: $theme.buttonBackground3,
          font: $theme.mainFont2,
          color: $theme.buttonText2,
        }"
        :width="300"
        :height="40"
        :text="$t('Button')"
      ></wiz-button>
    </wiz-column>
  </wiz-block>
</template>

<script>
export default {
  name: "bg-lp-block-c4",
};
</script>

<style lang="scss">
.bg-lp-block-c4 {
  max-width: 1024px;
  text-align: center;
  padding: 30px;

  .wiz-button {
    margin: 23px auto 0;
  }
}
</style>
