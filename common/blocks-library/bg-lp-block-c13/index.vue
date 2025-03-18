<i18n>
  {
    "eng": {
      "tittle1": "Title 1",
      "tittle2": "Title 2",
      "tittle3": "Title 3",
      "text1": "Ut maximus, fermentum, orci purus tempus justo  fermentum, orci purus tempus justo  fermentum, orci purus tempus justo  fermentum, orci orci purus tempus justo  fermentum, justo",
      "text2": "Ut maximus, fermentum, orci purus tempus justo  fermentum, orci purus tempus justo  fermentum, orci purus tempus justo  fermentum, orci orci purus tempus justo  fermentum, justo", 
      "text3": "Ut maximus, fermentum, orci purus tempus justo  fermentum, orci purus tempus justo  fermentum, orci purus tempus justo  fermentum, orci orci purus tempus justo  fermentum, justo"
    }
  }
</i18n>

<template>
	<wiz-block class="bg-lp-block-c13">
		<wiz-site-lp-acordion
			:title="$t('tittle1')"
			:bg-color="$theme.accordionBackground"
			:styles="{ color: $theme.accordionTitleColor, font: $theme.accordionTitle }"
			><wiz-text :text="$t('text1')" :style="{font: $theme.accordionContent}"></wiz-text
		></wiz-site-lp-acordion>
		<wiz-site-lp-acordion
			:title="$t('tittle2')"
			:bg-color="$theme.accordionBackground"
			:styles="{ color: $theme.accordionTitleColor, font: $theme.accordionTitle }"
		></wiz-site-lp-acordion>
		<wiz-site-lp-acordion
			:title="$t('tittle3')"
			:bg-color="$theme.accordionBackground"
			:styles="{ color: $theme.accordionTitleColor, font: $theme.accordionTitle }"
		></wiz-site-lp-acordion>
	</wiz-block>
</template>

<script>
export default {
	name: 'bg-lp-block-c13'
}
</script>

<style lang="scss">
.bg-lp-block-c13 {
	max-width: 1024px;
	width: 100%;
	padding: 10px 60px;
	margin-bottom: 20px;

	.wiz-site-lp-acordion {
		margin-bottom: 20px;
	}
}
</style>
