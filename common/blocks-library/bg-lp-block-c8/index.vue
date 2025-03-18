<i18n>
{
  "eng": {
    "videoTitle1": "First video Title c8",
    "videoDescription1": "First video Description",
    "videoTitle2": "Second video Title c8",
    "videoDescription2": "Second video Description"
  }
}
</i18n>

<template>
	<wiz-block class="bg-lp-block-c8">
		<wiz-placeholder>
			<wiz-column :width="49">
				<wiz-placeholder
					class="video-wrapper"
					:style="{
						backgroundColor: $theme.videoBlockBackground1
					}"
				>
					<wiz-text
						class="title"
						:text="$t('videoTitle1')"
						:style="{
							font: $theme.mainFont1,
							color: $theme.videoBlockTitle1
						}"
					></wiz-text>
					<wiz-video :show-poster="false" :src="'./media/images/placeholder-video.png'"></wiz-video>
					<wiz-text
						class="description"
						:text="$t('videoDescription1')"
						:style="{
							font: $theme.mainFont1,
							color: $theme.videoBlockDescription1
						}"
					></wiz-text>
				</wiz-placeholder>
			</wiz-column>
			<wiz-column :width="2"></wiz-column>
			<wiz-column :width="49">
				<wiz-placeholder
					class="video-wrapper"
					:style="{
						backgroundColor: $theme.videoBlockBackground2
					}"
				>
					<wiz-text
						class="title"
						:text="$t('videoTitle2')"
						:style="{
							font: $theme.mainFont1,
							color: $theme.videoBlockTitle1
						}"
					></wiz-text>
					<wiz-video :show-poster="false" :src="'./media/images/placeholder-video.png'"></wiz-video>
					<wiz-text
						class="description"
						:text="$t('videoDescription2')"
						:style="{
							font: $theme.mainFont1,
							color: $theme.videoBlockDescription1
						}"
					></wiz-text>
				</wiz-placeholder>
			</wiz-column>
		</wiz-placeholder>
	</wiz-block>
</template>

<script>
export default {
	name: 'bg-lp-block-c8'
}
</script>

<style lang="scss">
.bg-lp-block-c8 {
	.wiz-video {
		width: 100% !important;
	}

	.wiz-layout.wiz-column {
		.wiz-column__fallback-content {
			display: none !important;
		}
	}

	.wiz-layout.video-wrapper.horizontal {
		flex-direction: column !important;
	}

	& > .wiz-layout.wiz-placeholder.horizontal {
		padding: 10px 60px;
	}

	.video-wrapper {
		padding: 20px;
		border-radius: 16px;
	}

	.description {
		margin-top: 25px;
	}
}
</style>
