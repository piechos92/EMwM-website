<i18n>
{
  "eng": {
		"footerLinkText1": "Terms of Use",
		"footerLinkText2": "Privacy Policy",
		"footerLinkText3": "Contact Us",
		"footnote1": "This site is exclusivety intendent for healthcare professionals residing in the EU.",
		"footnote2": "Biogen international GmbH Neuhofstrasse 30, 6340 Baar - Switzerland."
	}
}
</i18n>

<template>
  <wiz-block
    class="bg-lp-block-f2"
    :style="{ color: $theme.footerDescription1 }"
  >
    <wiz-placeholder class="wrapper">
      <wiz-column>
        <wiz-placeholder>
          <wiz-column :width="28">
            <wiz-image
              class="logo"
              :align="'left'"
              :width="140"
              :height="66"
              :link="'https://www.biogen.com/en_us/home.html'"
              src="./media/images/logo.png"
              alt="Biogen Logo"
            ></wiz-image>
          </wiz-column>

          <wiz-column :width="72" class="footer-right-column">
            <wiz-placeholder class="links">
              <wiz-column :width="11">
                <wiz-button
                  :text="$t('footerLinkText1')"
                  :width="140"
                  :height="20"
                  :style="{
                    font: $theme.footerFont2,
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
                    font: $theme.footerFont2,
                    color: $theme.linkText3,
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
                    color: $theme.linkText3,
                  }"
                ></wiz-button>
              </wiz-column>
            </wiz-placeholder>
            <wiz-text
              class="footnote footnote-info"
              :text="$t('footnote1')"
              :style="{
                font: $theme.footerFont1,
              }"
            ></wiz-text>
            <wiz-text
              class="footnote footnote-info"
              :text="$t('footnote2')"
              :style="{
                font: $theme.footerFont1,
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
  name: "bg-lp-block-f2",
};
</script>

<style lang="scss">
.bg-lp-block-f2 {
  padding: 0 40px;

  .wiz-layout {
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

  .footer-right-column {
    padding-left: 110px;
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
    text-align: right;
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
    padding: 5px 0 0 30px;
  }
}
</style>
