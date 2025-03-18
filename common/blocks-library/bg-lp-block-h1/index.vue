<i18n>
  {
    "eng": {
      "caption": "<b>Ut maximus, fermentum, orci purus tempus justo  fermentum, orci purus tempus justo  fermentum, orci purus tempus justo  fermentum, orci orci purus tempus justo  fermentum, justo</b>"
    }
  }
</i18n>

<template>
	<wiz-block class="bg-lp-block-h1">
		<wiz-image
			class="backgroud-image"
			:width="1024"
			:height="400"
			:src="$theme.backgroundImage"
			alt="Background image"
		></wiz-image>

		<wiz-placeholder class="wrapper">
			<wiz-column :width="100">
				<wiz-image
					class="brand-logo"
					:align="'left'"
					:width="256"
					:height="96"
					:src="$theme.primaryLogo"
					alt="Brand Logo"
				></wiz-image>
				<wiz-text
					class="caption"
					:text="$t('caption')"
					:align="'center'"
					:style="{ font: $theme.mainFont1, color: $theme.mainText4 }"
				></wiz-text>
			</wiz-column>
		</wiz-placeholder>
	</wiz-block>
</template>

<script>
export default {
	name: 'bg-lp-block-h1'
}
</script>

<style lang="scss">
.bg-lp-block-h1 {
	position: relative;

	.backgroud-image {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;

		display: flex;
		align-items: center;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;

		max-height: 400px;
		max-width: 1024px;
		width: 100%;
	}

	.wiz-layout.wrapper {
		margin: 0 auto;
		padding: 20px 60px !important;
		width: 100%;
		max-width: 1024px;
		min-width: 550px;
		min-height: 400px;
		height: 100%;

		.caption {
			max-width: 750px;
			width: 100%;
			margin: 0 auto;
		}

		.caption,
		.brand-logo {
			z-index: 2;
		}
	}

	.wiz-layout {
		justify-content: space-between;
	}
}
</style>
