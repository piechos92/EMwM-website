<i18n>
{
  "eng": {
    "pageTextOne": "Lorem, ipsum dolor sit amet consectetur",
    "pageTextTwo": "Lorem, ipsum dolor sit amet consectetur"
  }
}
</i18n>
<template>
	<wiz-block class="bg-lp-block-c15">
		<wiz-placeholder class="content-wrapper">
			<wiz-column :width="70">
				<wiz-image align="left" :width="632" :height="410" src="./media/images/placeholder-image.jpg" alt="Placeholder"></wiz-image>
			</wiz-column>
			<wiz-column class="text-wrapper" :width="30">
				<wiz-text
					class="active"
					:text="$t('pageTextOne')"
					:style="{
						font: $theme.mainFont1,
						color: $theme.buttonText1
					}"
				></wiz-text>
				<wiz-text
					class=""
					:text="$t('pageTextTwo')"
					:style="{
						font: $theme.mainFont1,
						color: $theme.buttonText4
					}"
				></wiz-text>
			</wiz-column>
		</wiz-placeholder>
	</wiz-block>
</template>

<script>
export default {
	name: 'bg-lp-block-c15'
}
</script>

<style lang="scss">
.bg-lp-block-c15 {
	.content-wrapper {
		padding: 10px 60px;
	}

	.wiz-text.active {
		color: #00a4e0 !important;
	}
	.text-wrapper {
		padding-left: 24px;
		text-align: center;
	}
}
</style>
