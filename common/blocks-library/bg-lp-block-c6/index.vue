<i18n>
  {
    "eng": {
    }
  }
</i18n>

<template>
  <wiz-block class="bg-lp-block-c6">
    <wiz-column :width="100">
      <wiz-image
        :width="1024"
        :height="300"
        src="./media/images/background_image.png"
      ></wiz-image>
    </wiz-column>
  </wiz-block>
</template>

<script>
export default {
  name: "bg-lp-block-c6",
};
</script>

<style lang="scss">
.bg-lp-block-c6 {
  max-width: 1024px;
}
</style>