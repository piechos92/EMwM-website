<i18n>
{
  "eng": {
		"footerLinkText1": "Terms and Conditions",
		"footerLinkUrl1": "https://www.biogen.com/en_us/terms-conditions-international.html",
		"footerLinkText2": "Privacy Policy",
		"footerLinkUrl2": "https://www.biogen.com/en_us/privacy-international.html",
		"footerLinkText3": "Cookies",
		"footerLinkUrl3": "https://www.mybiogen.link/en/home/cookies.html",
		"footerLinkText4": "Contact Us",
		"footerLinkUrl4": "https://www.biogen.com/en_us/contact.html",
		"footnote1": "This site is exclusivety intendent for healthccare<br> professionals residing in the EU.",
		"footnote2": "Biogen international GmbH<br> Neuhofstrasse 30, 6340 Baar - Switzerland.",
		"footnote3": "Biogen-122164 - June 2021<br> © 2021 Biogen. All rights reserved."
	}
}
</i18n>

<template>
  <wiz-block
    class="bg-lp-block-f4"
    :style="{
      color: $theme.footerDescription1,
      borderTopColor: $theme.footerTopLine,
    }"
  >
    <wiz-placeholder class="wrapper">
      <wiz-column>
        <wiz-placeholder>
          <wiz-column :width="72">
            <wiz-placeholder class="links">
              <wiz-column :width="29">
                <wiz-button
                  :text="$t('footerLinkText1')"
                  :link="$t('footerLinkUrl1')"
                  :width="168"
                  :height="20"
                  :style="{
                    font: $theme.footerFont2,
                    color: $theme.linkText3,
                  }"
                ></wiz-button>
              </wiz-column>
              <wiz-column :width="17">
                <wiz-button
                  :text="$t('footerLinkText2')"
                  :link="$t('footerLinkUrl2')"
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
                  :link="$t('footerLinkUrl3')"
                  :width="140"
                  :height="20"
                  :style="{
                    font: $theme.footerFont2,
                    color: $theme.linkText3,
                  }"
                ></wiz-button>
              </wiz-column>
              <wiz-column :width="20">
                <wiz-button
                  :text="$t('footerLinkText4')"
                  :link="$t('footerLinkUrl4')"
                  :width="140"
                  :height="20"
                  :style="{
                    font: $theme.footerFont2,
                    color: $theme.linkText3,
                  }"
                ></wiz-button>
              </wiz-column>
            </wiz-placeholder>
          </wiz-column>

          <wiz-column :width="28">
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
            <wiz-text
              class="footnote"
              :text="$t('footnote2')"
              :style="{
                font: $theme.footerFont3,
              }"
            ></wiz-text>
            <wiz-text
              class="footnote"
              :text="$t('footnote3')"
              :style="{
                font: $theme.footerFont3,
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
  name: "bg-lp-block-f4",
};
</script>

<style lang="scss">
.bg-lp-block-f4 {
  border-top: 2px solid;
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

  .wrapper .links {
    padding-bottom: 50px;

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
    padding: 5px 0 0 30px;
  }
}
</style>
