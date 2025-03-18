<i18n>
{
  "eng": {
    "pageTitle": "Page Title c11",
    "blockSubtitle": "Block subtitle",
    "blockText": "Block text",
    "blockFirstButtonText": "<p style='text-align:center;'>First button</p>",
    "blockSecondButtonText": "<p style='text-align:center;'>Second button</p>"
  }
}
</i18n>
<template>
	<wiz-block class="bg-lp-block-c11">
		<wiz-placeholder class="text-wrapper">
			<wiz-column :width="100">
				<wiz-text
					class="title"
					:text="$t('pageTitle')"
					:style="{
						font: $theme.sectionTitle,
						color: $theme.sectionTitleColor1
					}"
				></wiz-text>
			</wiz-column>
		</wiz-placeholder>
		<wiz-placeholder class="content-wrapper">
			<wiz-column :width="50">
				<wiz-image
					align="left"
					:width="442"
					:height="300"
					src="./media/images/placeholder-image.jpg"
					alt="Placeholder"
				></wiz-image>
				<wiz-text
					class="subtitle"
					:text="$t('blockSubtitle')"
					:style="{
						font: $theme.sectionSubtitle,
						color: $theme.sectionSubtitleColor1
					}"
				></wiz-text>
				<wiz-text
					class="text"
					:text="$t('blockText')"
					:style="{
						font: $theme.mainFont1,
						color: $theme.blockDescription1
					}"
				></wiz-text>
				<wiz-placeholder class="buttons-wrapper">
					<wiz-button
						class="button"
						:text="$t('blockFirstButtonText')"
						:width="140"
						:height="40"
						:style="{
							font: $theme.mainFont1,
							color: $theme.buttonText1,
							backgroundColor: $theme.buttonBackground3,
							borderColor: $theme.borderColor
						}"
					></wiz-button>
					<wiz-button
						class="button"
						:text="$t('blockSecondButtonText')"
						:width="170"
						:height="40"
						:style="{
							font: $theme.mainFont1,
							color: $theme.buttonText3,
							backgroundColor: $theme.buttonBackground1,
							borderColor: $theme.borderColor
						}"
					></wiz-button>
				</wiz-placeholder>
			</wiz-column>
			<wiz-column :width="50"></wiz-column>
		</wiz-placeholder>
	</wiz-block>
</template>

<script>
export default {
	name: 'bg-lp-block-c11'
}
</script>

<style lang="scss">
.bg-lp-block-c11 {
	.text-wrapper,
	.content-wrapper {
		padding: 10px 50px;
	}

	.wiz-layout.wiz-column.wiz-column-wrapper {
		padding: 0 10px;
	}

	.wiz-layout.wiz-column {
		.wiz-column__fallback-content {
			display: none !important;
		}
	}

	.buttons-wrapper {
		padding: 0;
		margin-top: 24px;
	}

	.button {
		position: relative;
		border-radius: 3px;
		border: 2px solid;
		margin-right: 16px;

		display: flex;
		align-items: center;
		justify-content: center;

		.wiz-text {
			text-align: center;
		}
	}
}
</style>
