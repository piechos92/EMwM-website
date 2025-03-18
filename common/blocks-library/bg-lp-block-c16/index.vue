<i18n>
{
  "eng": {
    "pageTitle": "Page Title c16",
    "pageSubtitle": "Page Subtitle c16 ",
    "podcastLink": "Podcast",
    "podcastAuthor": "Podcast Prof. Peter Kaiser. Macula Society 2021 Congress highlights"
  }
}


</i18n>
<template>
	<wiz-block
		class="bg-lp-block-c16"
		:style="{
			borderColor: $theme.borderColor
		}"
	>
		<wiz-placeholder class="title-wrapper">
			<wiz-column :width="100">
				<wiz-text
					class="title"
					:text="$t('pageTitle')"
					:style="{
						font: $theme.sectionTitle,
						color: $theme.sectionTitleColor1
					}"
				></wiz-text>
				<wiz-text
					class="subtitle"
					:text="$t('pageSubtitle')"
					:style="{
						font: $theme.sectionSubtitle,
						color: $theme.sectionSubtitleColor1
					}"
				></wiz-text>
			</wiz-column>
		</wiz-placeholder>
		<wiz-placeholder class="player-wrapper">
			<wiz-column :width="15">
				<wiz-image
					align="center"
					:width="120"
					:height="120"
					class="speaker-avatar"
					src="./media/images/avatar-placeholder.png"
					alt="Placeholder"
				></wiz-image>
			</wiz-column>
			<wiz-column :width="85">
				<wiz-block
					class="soundcloud-wrapper"
					:width="786"
					:height="150"
					:style="{ backgroundColor: $theme.podcastBackgroundColor1 }"
				>
					<wiz-placeholder class="podcast-info-wrapper">
						<wiz-column :width="75">
							<wiz-placeholder class="wrapper">
								<wiz-column :width="9">
									<wiz-image align="left" :width="42" :height="42" src="./media/images/icon.png" alt="Icon"></wiz-image>
								</wiz-column>
								<wiz-column :width="91" class="podcast-info">
									<wiz-button
										class="podcast-link"
										:text="$t('podcastLink')"
										:width="140"
										:height="20"
										:style="{
											font: $theme.podcastLink1,
											color: $theme.podcastLinkColor1
										}"
									></wiz-button>

									<wiz-text
										class="podcast-author"
										:text="$t('podcastAuthor')"
										:style="{
											font: $theme.podcastText1,
											color: $theme.podcastTextColor1
										}"
									></wiz-text>
								</wiz-column>
							</wiz-placeholder>
						</wiz-column>

						<wiz-column :width="25">
							<wiz-image
								class="soundcloud-logo"
								align="right"
								:width="100"
								:height="16"
								src="./media/images/icon-cloud.png"
								alt="Soundcloud logo"
							></wiz-image>
						</wiz-column>
					</wiz-placeholder>

					<wiz-placeholder class="sound-placeholder-wrapper">
						<wiz-column :width="100">
							<wiz-image
								align="center"
								:width="786"
								:height="88"
								src="./media/images/sound-placeholder.png"
								alt="Placeholder"
							></wiz-image>
						</wiz-column>
					</wiz-placeholder>
				</wiz-block>
			</wiz-column>
		</wiz-placeholder>
	</wiz-block>
</template>

<script>
export default {
	name: 'bg-lp-block-c16'
}
</script>

<style lang="scss">
.bg-lp-block-c16 {
	.title-wrapper,
	.player-wrapper {
		padding: 10px 40px;

		.soundcloud-wrapper {
			.podcast-info-wrapper,
			.sound-placeholder-wrapper {
				padding: 0;
			}

			.podcast-info-wrapper {
				.soundcloud-logo {
					padding: 10px;
				}
			}

			.wiz-column.podcast-info {
				justify-content: center;

				.wiz-button.podcast-link {
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
		}
	}

	border-left: 20px solid;

	.speaker-avatar {
		width: 120px;
		height: 120px;
	}
}
</style>
