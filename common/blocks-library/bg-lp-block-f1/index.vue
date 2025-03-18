<i18n>
{
  "eng": {
		"footerLinkText1": "Terms and Conditions",
		"footerLinkText2": "Privacy Policy",
		"footerLinkText3": "Cookies",
		"footerLinkText4": "Contact Us",
		"footnote1": "This site is exclusivety intendent for healthcare professionals residing in the EU.This site is exclusivety intendent for healthccare professionals resibibg in the EU.",
		"footnote2": "Biogen international GmbH Neuhofstrasse 30, 6340 Baar - Switzerland.",
		"footnote3": "Biogen-122164 - June 2021 © 2021 Biogen. All rights reserved."
	}
}
</i18n>

<template>
  <wiz-block
    class="bg-lp-block-f1"
    :style="{ color: $theme.footerDescription1 }"
  >
    <wiz-placeholder class="wrapper">
      <wiz-column :width="50">
        <wiz-image
          class="logo"
          :align="'left'"
          :width="256"
          :height="76"
          :link="'https://www.biogen.com/en_us/home.html'"
          :src="$theme.primaryLogo"
          alt="Biogen Logo"
        ></wiz-image>
      </wiz-column>

      <wiz-column :width="50">
        <wiz-image
          class="logo"
          :align="'right'"
          :width="100"
          :height="50"
          :link="'https://www.biogen.com/en_us/home.html'"
          src="./media/images/logo.png"
          alt="Biogen Logo"
        ></wiz-image>
        <wiz-text
          class="footnote"
          :text="$t('footnote1')"
          :style="{
            font: $theme.footerFont3,
          }"
        ></wiz-text>
      </wiz-column>
    </wiz-placeholder>

    <wiz-placeholder class="wrapper">
      <wiz-column :width="100">
        <wiz-placeholder class="links">
          <wiz-column :width="19">
            <wiz-button
              :text="$t('footerLinkText1')"
              :width="140"
              :height="20"
              :style="{
                font: $theme.footerFont1,
                color: $theme.linkText3,
              }"
            ></wiz-button>
          </wiz-column>
          <wiz-column :width="11">
            <wiz-button
              :text="$t('footerLinkText2')"
              :width="140"
              :height="20"
              :style="{
                font: $theme.footerFont1,
                color: $theme.linkText3,
              }"
            ></wiz-button>
          </wiz-column>
          <wiz-column :width="9">
            <wiz-button
              :text="$t('footerLinkText3')"
              :width="140"
              :height="20"
              :style="{
                font: $theme.footerFont1,
                color: $theme.linkText3,
              }"
            ></wiz-button>
          </wiz-column>
          <wiz-column :width="4">
            <wiz-button
              :text="$t('footerLinkText4')"
              :width="140"
              :height="20"
              :style="{
                font: $theme.footerFont1,
                color: $theme.linkText3,
              }"
            ></wiz-button>
          </wiz-column>
        </wiz-placeholder>
      </wiz-column>
    </wiz-placeholder>
  </wiz-block>
</template>

<script>
export default {
  name: "bg-lp-block-f1",
};
</script>

<style lang="scss">
.bg-lp-block-f1 {
  padding: 0 40px;

  .wiz-layout {
    &.wrapper {
      margin: 0 auto;
      padding: 0;
      width: 100%;
      max-width: 1024px;
      min-width: 550px;
    }
    .wiz-placeholder {
      padding-left: 0;
      padding-right: 0;
    }
  }

  .wrapper .wiz-column:last-child {
    align-items: flex-end;
  }

  .wrapper .links {
    max-width: 800px;
    margin: 0 auto;

    .wiz-button {
      padding-right: 40px;
      text-align: left;
      text-decoration: underline;
      background: none;
      border: none;
      padding: 0;

      &:hover {
        text-decoration: none;
      }
    }
  }
  .footnote {
    padding: 5px 0;
    text-align: right;
    margin: 0 0 0 auto;
    max-width: 100%;
  }
  .logo {
    max-width: 200px;
    width: 100%;
    padding: 5px 0 0 30px;
  }
}
</style>
