<i18n>
{
  "eng": {}
}
</i18n>

<template>
  <wiz-block class="bg-lp-block-c7">
    <wiz-placeholder class="video-wrapper">
      <wiz-column :width="100">
        <wiz-video
          :show-poster="false"
          :src="'./media/images/placeholder-video.png'"
        ></wiz-video>
      </wiz-column>
    </wiz-placeholder>
  </wiz-block>
</template>

<script>
export default {
  name: "bg-lp-block-c7",
};
</script>

<style lang="scss">
.bg-lp-block-c7 {
  .wiz-video {
    width: 100% !important;
  }

  .video-wrapper {
    padding: 10px 60px;
  }
}
</style>
