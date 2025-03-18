<i18n>
{
  "eng": {
    "firstButtonDescription": "First button description c10",
    "secondButtonDescription": "Second button description c10",
    "firstFileDescription": "First File description c10",
    "secondFileDescription": "Second File description c10"
  }
}
</i18n>

<template>
  <wiz-block class="bg-lp-block-c10">
    <wiz-placeholder>
      <wiz-column :width="50">
        <wiz-text
          align="center"
          class="button-description"
          :text="$t('firstButtonDescription')"
          :style="{
            font: $theme.mainFont1,
            color: $theme.buttonDescription1,
          }"
        ></wiz-text>
        <wiz-image
          :width="200"
          :height="100"
          src="./media/images/200x100.png"
          alt="Placeholder"
        ></wiz-image>
        <wiz-text
          class="file-description"
          align="left"
          :text="$t('firstFileDescription')"
          :style="{
            font: $theme.mainFont2,
            color: $theme.buttonDescription1,
          }"
        ></wiz-text>
      </wiz-column>
      <wiz-column :width="50">
        <wiz-text
          class="button-description"
          align="center"
          :text="$t('secondButtonDescription')"
          :style="{
            font: $theme.mainFont1,
            color: $theme.buttonDescription1,
          }"
        ></wiz-text>
        <wiz-image
          :width="200"
          :height="100"
          src="./media/images/200x100.png"
          alt="Placeholder"
        ></wiz-image>
        <wiz-text
          class="file-description"
          align="left"
          :text="$t('secondFileDescription')"
          :style="{
            font: $theme.mainFont2,
            color: $theme.buttonDescription1,
          }"
        ></wiz-text>
      </wiz-column>
    </wiz-placeholder>
  </wiz-block>
</template>

<script>
export default {
  name: "bg-lp-block-c10",
};
</script>

<style lang="scss">
.bg-lp-block-c10 {
  .wiz-layout.wiz-column.wiz-column-wrapper {
    padding: 0 10px;
  }

  .file-description {
    margin-top: 6px;
    margin-left: 142px;
  }
}
</style>
