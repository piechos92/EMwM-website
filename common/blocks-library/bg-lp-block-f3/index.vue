<i18n>
{
  "eng": {
		"footerLinkText1": "Terms and Conditions",
		"footerLinkText2": "Privacy Policy",
		"footerLinkText3": "Cookies",
		"footerLinkText4": "Contact Us",
		"footnote1": "Biogen-122164",
		"footnote2": "May 2021",
		"footnote3": "This site is exclusivety intendent for healthcare proffesionals residing in the EU.",
		"footnote4": "Biogen international GmbH Neuhofstrasse 30, 6340 Baar - Switzerrland."
	}
}
</i18n>

<template>
  <wiz-block
    class="bg-lp-block-f3"
    :style="{ background: $theme.footerBackground1 }"
  >
    <wiz-placeholder class="wrapper">
      <wiz-column>
        <wiz-placeholder>
          <wiz-column :width="72">
            <wiz-placeholder class="links">
              <wiz-column :width="29">
                <wiz-button
                  :text="$t('footerLinkText1')"
                  :width="168"
                  :height="20"
                  :style="{
                    font: $theme.footerFont2,
                    color: $theme.linkText2,
                  }"
                ></wiz-button>
              </wiz-column>
              <wiz-column :width="17">
                <wiz-button
                  :text="$t('footerLinkText2')"
                  :width="140"
                  :height="20"
                  :style="{
                    font: $theme.footerFont2,
                    color: $theme.linkText2,
                  }"
                ></wiz-button>
              </wiz-column>
              <wiz-column :width="11">
                <wiz-button
                  :text="$t('footerLinkText3')"
                  :width="140"
                  :height="20"
                  :style="{
                    font: $theme.footerFont2,
                    color: $theme.linkText2,
                  }"
                ></wiz-button>
              </wiz-column>
              <wiz-column :width="20">
                <wiz-button
                  :text="$t('footerLinkText4')"
                  :width="140"
                  :height="20"
                  :style="{
                    font: $theme.footerFont2,
                    color: $theme.linkText2,
                  }"
                ></wiz-button>
              </wiz-column>
            </wiz-placeholder>
            <wiz-text
              class="footnote footnote-info"
              :text="$t('footnote3')"
              :style="{
                font: $theme.footerFont1,
                color: $theme.footerDescription2,
              }"
            ></wiz-text>
            <wiz-text
              class="footnote footnote-info"
              :text="$t('footnote4')"
              :style="{
                font: $theme.footerFont1,
                color: $theme.footerDescription2,
              }"
            ></wiz-text>
          </wiz-column>

          <wiz-column :width="28">
            <wiz-image
              class="logo"
              :align="'right'"
              :width="120"
              :height="40"
              :link="'https://www.biogen.com/en_us/home.html'"
              src="./media/images/logo.png"
              alt="Biogen Logo"
            ></wiz-image>

            <wiz-text
              class="footnote"
              :text="$t('footnote1')"
              :style="{
                font: $theme.footerFont1,
                color: $theme.footerDescription2,
              }"
            ></wiz-text>
            <wiz-text
              class="footnote"
              :text="$t('footnote2')"
              :style="{
                font: $theme.footerFont1,
                color: $theme.footerDescription2,
              }"
            ></wiz-text>
          </wiz-column>
        </wiz-placeholder>
      </wiz-column>
    </wiz-placeholder>
  </wiz-block>
</template>

<script>
export default {
  name: "bg-lp-block-f3",
};
</script>

<style lang="scss">
.bg-lp-block-f3 {
  padding: 0 40px;

  .wiz-layout {
    justify-content: space-evenly;

    &.wrapper {
      margin: 0 auto;
      padding: 0;
      width: 100%;
      max-width: 1140px;
      min-width: 550px;
    }
    .wiz-placeholder {
      padding-left: 0;
      padding-right: 0;
    }
  }

  .wrapper .links {
    padding-top: 20px;

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
    margin: 0 0 0 auto;
    max-width: 100%;
  }

  .footnote-info {
    text-align: left;
    margin: 0;

    &:last-child {
      padding-bottom: 20px;
    }
  }

  .logo {
    padding: 0 0 0 30px;
  }
}
</style>
