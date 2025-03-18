import wizText from 'wiz-text';
import wizImage from 'wiz-image';
import wizBlock from 'wiz-block';
import wizBlockV2 from 'wiz-block-v2';
import wizVideo from 'wiz-video';
import wizButton from 'wiz-button';
import wizSiteTabs from 'wiz-site-tabs';
import wizSiteLpAcordion from 'wiz-site-lp-acordion';

export default Vue => {
	Vue.component('wiz-text', wizText);
	Vue.component('wiz-image', wizImage);
	Vue.component('wiz-block', wizBlock);
	Vue.component('wiz-block-v2', wizBlockV2);
	Vue.component('wiz-video', wizVideo);
	Vue.component('wiz-button', wizButton);
	Vue.component('wiz-site-tabs', wizSiteTabs);
	Vue.component('wiz-site-lp-acordion', wizSiteLpAcordion)
};
