import {Settings} from 'ewizardjs/settings';
import {ThemePlugin, DynamicThemePlugin} from 'ewizardjs';
import wizPlaceholder from 'wiz-placeholder';
import settingsFile from '../settings.json';

export default Vue => {
	const settings = new Settings(settingsFile);
	Vue.use(ThemePlugin);
	Vue.use(DynamicThemePlugin, {settings});
	Vue.use(wizPlaceholder);
};
