<i18n>
  {
    "eng": {
    }
  }
</i18n>

<template>
  <wiz-block
    class="bg-lp-block-h2"
    :style="{ borderTopColor: $theme.borderColor }"
  >
    <wiz-placeholder class="wrapper">
      <wiz-column :width="100">
        <wiz-image
          align="left"
          :width="192"
          :height="66"
          src="./media/images/logo.png"
          alt="Brand Logo"
          :link="'https://www.biogen.com/en_us/home.html'"
        ></wiz-image>
      </wiz-column>
    </wiz-placeholder>
  </wiz-block>
</template>

<script>
export default {
  name: "bg-lp-block-h2",
};
</script>

<style lang="scss">
.bg-lp-block-h2 {
  position: relative;
  border-top: 12px solid;

  &:after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    background-color: #edeeef;
  }

  .wiz-layout.wrapper {
    margin: 0 auto;
    padding: 20px 60px !important;
    width: 100%;
    max-width: 1024px;
    min-width: 550px;
  }

  .wiz-layout {
    justify-content: center;
  }
}
</style>
